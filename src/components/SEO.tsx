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
  const siteUrl = 'https://yourdomain.com'; // 실제 도메인으로 변경
  const fullTitle = `${title} | 강남 퍼펙트`;
  const fullCanonical = canonical || `${siteUrl}${window.location.pathname}`;

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="강남 퍼펙트" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* 추가 메타 태그 */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Korean" />
      <meta name="author" content="강남 퍼펙트" />

      {/* 모바일 최적화 */}
      <meta name="theme-color" content="#0f0f0f" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};
