import bcrypt from 'bcryptjs';

// In-memory storage for rate limiting (use Redis in production)
const loginAttempts = new Map();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 10 * 60 * 1000; // 10 minutes

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Security headers
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Content-Security-Policy', "default-src 'self'");

  const { username, password } = req.body;
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Rate limiting check
  const attempts = loginAttempts.get(clientIP) || { count: 0, lastAttempt: 0 };
  const now = Date.now();

  if (attempts.count >= MAX_ATTEMPTS && (now - attempts.lastAttempt) < LOCKOUT_TIME) {
    return res.status(429).json({ error: 'Too many login attempts. Try again later.' });
  }

  // Reset attempts if lockout time has passed
  if ((now - attempts.lastAttempt) > LOCKOUT_TIME) {
    attempts.count = 0;
  }

  // Validate credentials
  const isValidUsername = username === ADMIN_USERNAME;
  const isValidPassword = password === ADMIN_PASSWORD;

  if (!isValidUsername || !isValidPassword) {
    // Increment failed attempts
    attempts.count += 1;
    attempts.lastAttempt = now;
    loginAttempts.set(clientIP, attempts);

    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Reset attempts on successful login
  loginAttempts.delete(clientIP);

  // Create session
  const sessionData = {
    username: ADMIN_USERNAME,
    isAdmin: true,
    expiresAt: Date.now() + (12 * 60 * 60 * 1000) // 12 hours
  };

  // Set secure HTTP-only cookie
  res.setHeader('Set-Cookie', [
    `admin_session=${Buffer.from(JSON.stringify(sessionData)).toString('base64')}; HttpOnly; Secure; SameSite=Strict; Max-Age=${12 * 60 * 60}; Path=/`
  ]);

  res.status(200).json({ 
    success: true, 
    username: ADMIN_USERNAME 
  });
}