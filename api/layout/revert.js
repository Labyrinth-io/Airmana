// In-memory storage (use Supabase or database in production)
let layoutDraft = {};
let layoutPublished = {};

function verifyAdminSession(req) {
  const sessionCookie = req.cookies.admin_session;
  
  if (!sessionCookie) {
    return null;
  }

  try {
    const sessionData = JSON.parse(Buffer.from(sessionCookie, 'base64').toString());
    
    if (Date.now() > sessionData.expiresAt || !sessionData.isAdmin) {
      return null;
    }

    return sessionData;
  } catch (error) {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify admin session
  const session = verifyAdminSession(req);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Security headers
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Content-Security-Policy', "default-src 'self'");

  // Revert draft to published version
  layoutDraft = { ...layoutPublished };

  res.status(200).json({ success: true });
}