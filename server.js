import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';

// Import API routes
import loginHandler from './api/auth/login.js';
import verifyHandler from './api/auth/verify.js';
import logoutHandler from './api/auth/logout.js';
import saveHandler from './api/layout/save.js';
import publishHandler from './api/layout/publish.js';
import revertHandler from './api/layout/revert.js';
import draftHandler from './api/layout/draft.js';
import publishedHandler from './api/layout/published.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(compression({
  // Enable Brotli compression if available
  brotli: {
    enabled: true,
    zlib: {}
  }
}));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? false : 'http://localhost:5173',
  credentials: true
}));

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
});

// API Routes
app.post('/api/auth/login', loginHandler);
app.get('/api/auth/verify', verifyHandler);
app.post('/api/auth/logout', logoutHandler);
app.post('/api/layout/save', saveHandler);
app.post('/api/layout/publish', publishHandler);
app.post('/api/layout/revert', revertHandler);
app.get('/api/layout/draft', draftHandler);
app.get('/api/layout/published', publishedHandler);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist'), {
    // Set cache headers for static assets
    setHeaders: (res, path) => {
      if (path.endsWith('.html')) {
        // HTML files - short cache
        res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutes
      } else if (path.match(/\.(js|css|woff2|woff|ttf|eot)$/)) {
        // JS, CSS, and font files - long cache with hash
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year
      } else if (path.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/)) {
        // Image files - medium cache
        res.setHeader('Cache-Control', 'public, max-age=2592000'); // 30 days
      }
      
      // Enable compression for text-based files
      if (path.match(/\.(html|js|css|json|xml|txt)$/)) {
        res.setHeader('Content-Encoding', 'gzip');
      }
    }
  }));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'), {
      headers: {
        'Cache-Control': 'public, max-age=300' // 5 minutes for HTML
      }
    });
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});