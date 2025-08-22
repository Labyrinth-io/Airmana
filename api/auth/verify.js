export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sessionCookie = req.cookies.admin_session;
  
  if (!sessionCookie) {
    return res.status(401).json({ error: 'No session found' });
  }

  try {
    const sessionData = JSON.parse(Buffer.from(sessionCookie, 'base64').toString());
    
    // Check if session is expired
    if (Date.now() > sessionData.expiresAt) {
      res.setHeader('Set-Cookie', 'admin_session=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/');
      return res.status(401).json({ error: 'Session expired' });
    }

    // Extend session
    sessionData.expiresAt = Date.now() + (12 * 60 * 60 * 1000);
    res.setHeader('Set-Cookie', [
      `admin_session=${Buffer.from(JSON.stringify(sessionData)).toString('base64')}; HttpOnly; Secure; SameSite=Strict; Max-Age=${12 * 60 * 60}; Path=/`
    ]);

    res.status(200).json({ 
      username: sessionData.username,
      isAdmin: sessionData.isAdmin 
    });
  } catch (error) {
    return res.status(401).json({ error: 'Invalid session' });
  }
}