import { Link } from 'react-router-dom';
import { FaInstagram, FaPhone, FaComment } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { to: '/', label: '메인' },
    { to: '/price', label: '가격' },
    { to: '/system', label: '시스템' },
    { to: '/premium', label: '프리미엄' },
  ];

  return (
    <footer className="bg-primary border-t-2 border-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 소개 */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-gold mb-4">
              강남 퍼펙트
            </h3>
            <p className="text-gray-300 leading-relaxed">
              강남 최고급 하이퍼블릭 시스템<br />
              프리미엄 서비스와 차별화된 퀄리티로<br />
              최상의 경험을 제공합니다.
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              페이지 링크
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 문의 정보 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              문의 정보
            </h4>
            <div className="space-y-3">
              <a
                href="tel:01023033778"
                className="flex items-center space-x-3 text-gray-300 hover:text-secondary transition-colors"
              >
                <FaPhone className="text-secondary" />
                <span>010-2303-3778</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaComment className="text-secondary text-xl" />
                <span>카카오톡 문의</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaInstagram className="text-secondary text-xl" />
                <span>@gangnam_perfect</span>
              </div>
            </div>

            {/* 소셜 미디어 (선택) */}
            {/* <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all duration-300"
                aria-label="KakaoTalk"
              >
                <FaKakao className="text-xl" />
              </a>
            </div> */}
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} 강남 퍼펙트. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right">
              본 사이트는 정보 제공 목적으로 제작되었습니다.<br className="md:hidden" />
              모든 정보는 실제와 다를 수 있으며, 이용 전 반드시 확인이 필요합니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
