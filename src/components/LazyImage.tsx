import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  srcSet?: string;
  sizes?: string;
  webpSrc?: string;
  loading?: 'lazy' | 'eager';
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  srcSet,
  sizes,
  webpSrc,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      
      {isInView && (
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          {srcSet && <source srcSet={srcSet} />}
          <img
            src={src}
            alt={alt}
            className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            width={width}
            height={height}
            sizes={sizes}
            loading={loading}
            onLoad={handleLoad}
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};

export default LazyImage;