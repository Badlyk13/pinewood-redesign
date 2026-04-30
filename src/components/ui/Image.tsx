import { ImgHTMLAttributes, useState } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string // Enforce alt attribute
}

export default function Image({ alt, className = '', ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden bg-pinewood-sand ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-pinewood-beige/20" />
      )}
      <img
        {...props}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  )
}
