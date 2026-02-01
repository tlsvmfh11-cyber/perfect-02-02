import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const SEO = ({
  title,
  description,
  keywords = '강남 퍼펙트, 강남 하이퍼블릭, 강남 유흥, 퍼펙트 가라오케, 강남 가라오케, 초이스 시스템',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical,
}: SEOProps) => {
  const siteUrl = 'https://perfectmingu.com';
  const fullTitle = `${title} | 강남 퍼펙트`;
  const fullCanonical = canonical || `${siteUrl}${window.location.pathname}`;

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* 검색엔진 검증 */}
      <meta name="naver-site-verification" content="a31878b654f000384c82801494e6c635484037af" />
      <meta name="google-site-verification" content="H_v21kaLDblO0nBozFR9N0rcqabiR0kQ5ZqVTE0-Rcc" />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="강남 퍼펙트" />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* 검색엔진 최적화 */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="navերbot" content="index, follow" />

      {/* 지역 & 언어 */}
      <meta name="geo.region" content="KR-11" />
      <meta name="geo.placename" content="Seoul, Gangnam" />
      <meta name="language" content="Korean" />
      <meta httpEquiv="content-language" content="ko-KR" />

      {/* 기본 설정 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content="강남 퍼펙트" />
      <meta name="publisher" content="강남 퍼펙트" />
      <meta name="copyright" content="강남 퍼펙트" />

      {/* 모바일 최적화 */}
      <meta name="theme-color" content="#D4AF37" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="강남 퍼펙트" />

      {/* 추가 SEO */}
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>
  );
};
