import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request, locals }) => {
  try {
    // Basic auth check - in production you should use proper authentication
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new Response('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"'
        }
      });
    }

    const credentials = atob(authHeader.slice(6));
    const [username, password] = credentials.split(':');

    // Simple auth check - you should use proper credentials and hashing
    if (username !== 'admin' || password !== 'admin123') {
      return new Response('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"'
        }
      });
    }

    // Get KV namespace from runtime
    const NEWSLETTER = locals.runtime?.env?.NEWSLETTER;
    if (!NEWSLETTER) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'NEWSLETTER KV namespace not available' 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Get the list of all subscribers
    const subscribersList = await NEWSLETTER.get('subscribers_list');
    const subscribers = subscribersList ? JSON.parse(subscribersList) : [];

    // Get detailed info for each subscriber
    const subscribersDetails = [];
    for (const email of subscribers) {
      try {
        const detailsStr = await NEWSLETTER.get(email);
        if (detailsStr) {
          const details = JSON.parse(detailsStr);
          subscribersDetails.push(details);
        } else {
          // If individual record not found, create a basic one
          subscribersDetails.push({
            email,
            subscribedAt: 'Unknown',
            status: 'active',
            source: 'unknown'
          });
        }
      } catch (error) {
        console.error(`Error fetching details for ${email}:`, error);
        subscribersDetails.push({
          email,
          subscribedAt: 'Error loading',
          status: 'unknown',
          source: 'error'
        });
      }
    }

    return new Response(JSON.stringify({
      success: true,
      total: subscribers.length,
      subscribers: subscribersDetails.sort((a, b) => 
        new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
      )
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Newsletter list error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Internal server error' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
