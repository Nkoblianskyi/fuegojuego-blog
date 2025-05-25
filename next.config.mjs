/** @type {import('next').NextConfig} */
const nextConfig = {
  // Включаем экспериментальные функции для лучшего SSR
  experimental: {
    // Оптимизация серверных компонентов
    serverComponentsExternalPackages: [],
  },
  
  // Оптимизация изображений
  images: {
    domains: ['placeholder.svg'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    unoptimized: true,
  },

  // Сжатие
  compress: true,

  // Оптимизация для продакшена
  swcMinify: true,

  // Настройки для лучшего SEO
  trailingSlash: false,
  
  // Заголовки безопасности
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Редиректы для SEO
  async redirects() {
    return [
      {
        source: '/ranking',
        destination: '/temas',
        permanent: true,
      },
    ]
  },

  // Игнорирование ошибок ESLint и TypeScript во время сборки
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
