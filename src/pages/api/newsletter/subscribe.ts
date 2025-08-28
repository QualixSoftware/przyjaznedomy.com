import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;

    if (!email) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Email is required' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Invalid email format' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Get KV namespace from runtime
    const NEWSLETTER = locals.runtime?.env?.NEWSLETTER;
    if (!NEWSLETTER) {
      console.error('NEWSLETTER KV namespace not available');
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Service temporarily unavailable' 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Check if email already exists
    const existingSubscription = await NEWSLETTER.get(email);
    if (existingSubscription) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Email already subscribed' 
      }), {
        status: 409,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Store subscription with timestamp
    const subscriptionData = {
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      source: 'website_footer'
    };

    await NEWSLETTER.put(email, JSON.stringify(subscriptionData));

    // Also store in a list for easy retrieval (optional)
    const currentList = await NEWSLETTER.get('subscribers_list');
    const subscribers = currentList ? JSON.parse(currentList) : [];
    subscribers.push(email);
    await NEWSLETTER.put('subscribers_list', JSON.stringify(subscribers));

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
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
