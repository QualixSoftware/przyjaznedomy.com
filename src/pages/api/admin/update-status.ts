import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // In production, check authentication via Cloudflare Access
    // const user = locals.runtime.env.CF_ACCESS_AUTHENTICATED_USER_EMAIL;
    // if (!user) {
    //   return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    //     status: 401,
    //     headers: { 'Content-Type': 'application/json' }
    //   });
    // }

    const data = await request.json();
    const { houseId, status } = data;

    // Validate input
    if (!houseId || !status) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!['available', 'reserved', 'sold'].includes(status)) {
      return new Response(JSON.stringify({ error: 'Invalid status' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // In production, update KV storage
    // await locals.runtime.env.RESERVATIONS.put(houseId, JSON.stringify({
    //   status,
    //   updatedAt: new Date().toISOString(),
    //   updatedBy: user
    // }));

    // For now, just return success
    return new Response(JSON.stringify({ 
      success: true, 
      houseId, 
      status,
      message: 'Status updated successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
