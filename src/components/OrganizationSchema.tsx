import { Helmet } from 'react-helmet-async';

export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '강남 퍼펙트',
    url: 'https://perfectmingu.com',
    logo: 'https://perfectmingu.com/og-image.jpg',
    description: '강남 최고급 하이퍼블릭 프리미엄 서비스',
    telephone: '+82-10-2303-3778',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Seoul',
      addressLocality: 'Gangnam',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '37.5172',
      longitude: '127.0473',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '37.5172',
        longitude: '127.0473',
      },
      geoRadius: '10000',
    },
    sameAs: [
      'https://perfectmingu.com',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-10-2303-3778',
      contactType: 'customer service',
      areaServed: 'KR',
      availableLanguage: ['Korean'],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
