import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tropical Landscaping',
    short_name: 'Tropical Landscaping',
    description: 'Tropical Landscaping - Serving the Bay Area, Santa Cruz, Salinas, Monterey, Santa Clara Counties',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}