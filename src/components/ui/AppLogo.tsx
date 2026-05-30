'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string; // Image source (optional)
  iconName?: string; // Icon name when no image
  size?: number; // Size for icon/image
  width?: number; // Image width when using a wordmark logo
  height?: number; // Image height when using a wordmark logo
  className?: string; // Additional classes
  imageClassName?: string; // Additional image classes
  alt?: string; // Image alt text
  onClick?: () => void; // Click handler
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/app_logo.png',
  iconName = 'SparklesIcon',
  size = 64,
  width,
  height,
  className = '',
  imageClassName = '',
  alt = 'UpLikeStar logo',
  onClick,
}: AppLogoProps) {
  // Memoize className calculation
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick}>
      {/* Show image if src provided, otherwise show icon */}
      {src ? (
        <AppImage
          src={src}
          alt={alt}
          width={width || size}
          height={height || size}
          className={`flex-shrink-0 ${imageClassName}`.trim()}
          priority={true}
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}
    </div>
  );
});

export default AppLogo;
