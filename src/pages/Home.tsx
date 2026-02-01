import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaCrown,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';
import { SEO } from '../components/SEO';
import { FAQSchema, type FAQItem } from '../components/FAQSchema';
import { OrganizationSchema } from '../components/OrganizationSchema';

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const faqs: FAQItem[] = [
    {
      question: '강남 퍼펙트는 일반 노래방과 뭐가 다른가요?',
      answer:
        '일반 노래방은 단순히 노래를 부르는 공간이지만, 강남 퍼펙트는 하이퍼블릭 시스템을 갖춘 유흥업소입니다. 초이스 시스템을 통해 마음에 드는 파트너를 선택할 수 있고, 프리미엄 룸에서 술과 서비스를 함께 즐길 수 있습니다. 가격대는 높지만 그만큼 인테리어, 서비스 퀄리티, 시스템 모두 최상급입니다.',
    },
    {
      question: '처음 방문하는데 어떻게 이용하나요?',
      answer:
        '처음이라도 걱정 없습니다. 예약 후 방문하시면 담당 매니저가 전체 과정을 안내해 드립니다. 입장 → 테이블 배정 → 초이스 진행 → 룸 이동 → 서비스 시작 순서로 진행됩니다. 초이스는 직접 보고 선택하는 방식이며, 마음에 안 들면 재선택도 가능합니다. 시스템이 명확해서 초보자도 쉽게 이용할 수 있습니다.',
    },
    {
      question: '예약 없이 방문 가능한가요?',
      answer:
        '당일 방문도 가능하지만, 주말이나 성수기에는 자리가 없을 수 있습니다. 특히 금요일 저녁, 토요일은 예약이 필수입니다. 평일 오후나 저녁 초반에는 당일 방문도 비교적 여유롭습니다. 확실한 이용을 원하시면 최소 하루 전에 예약하시는 걸 추천합니다.',
    },
    {
      question: '최소 인원이 정해져 있나요?',
      answer:
        '2명부터 이용 가능합니다. 다만 2명이 가더라도 기본 차지는 테이블 단위로 책정되므로, 소형 테이블 기준 비용이 발생합니다. 인원이 많을수록 1인당 비용은 저렴해지는 구조입니다. 5-7명 정도가 가장 합리적인 인원 구성입니다.',
    },
    {
      question: '가격은 어떻게 되나요?',
      answer:
        '기본 차지 + 주류 + 서비스 비용으로 구성됩니다. 소형 테이블(2-4인) 기준 30만원대부터 시작하며, 중형 테이블(5-7인)은 60만원대, 대형 테이블(8인 이상)은 100만원대부터 시작합니다. 양주 종류, 인원 수, 시간에 따라 가격이 달라집니다. 정확한 견적은 문의 시 안내해 드립니다.',
    },
  ];

  return (
    <>
      <SEO
        title="강남 퍼펙트 | 강남 최고급 하이퍼블릭 프리미엄 서비스"
        description="강남 퍼펙트는 차별화된 초이스 시스템과 최상급 인테리어, 검증된 서비스 퀄리티를 자랑하는 강남 대표 하이퍼블릭입니다. 프리미엄 룸 시스템과 투명한 가격 구조로 처음 방문하시는 분들도 편안하게 이용하실 수 있습니다. 2명부터 대규모 모임까지 모든 인원 구성에 최적화된 테이블과 서비스를 제공합니다. 강남역 하이퍼블릭 추천 1위, 합리적 가격의 프리미엄 서비스."
        keywords="강남 퍼펙트, 강남 하이퍼블릭, 강남역 하이퍼블릭, 강남 유흥, 퍼펙트 가라오케, 초이스 시스템, 강남 룸싸롱, 강남 퍼블릭, 하이퍼블릭 가격, 강남 유흥 추천, 강남역 유흥, 강남 2차, 강남 접대, 강남 모임, 강남역 가라오케"
      />
      <FAQSchema faqs={faqs} />
      <OrganizationSchema />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/hero.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gradient-gold mb-6"
          >
            강남 퍼펙트
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            최상급 프리미엄 경험의 시작
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-12"
          >
            차별화된 시스템, 검증된 퀄리티, 완벽한 서비스
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/price"
              className="px-8 py-4 bg-secondary text-background rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 btn-glow flex items-center gap-2"
            >
              가격 확인하기
              <FaArrowRight />
            </Link>
            <Link
              to="/system"
              className="px-8 py-4 border-2 border-secondary text-secondary rounded-lg font-bold text-lg hover:bg-secondary hover:text-background transition-all duration-300 flex items-center gap-2"
            >
              시스템 알아보기
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* 강남 퍼펙트란? */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            강남 퍼펙트, 왜 특별한가
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCrown className="text-5xl text-secondary" />,
                title: '프리미엄 초이스 시스템',
                description:
                  '직접 보고 선택하는 투명한 초이스 시스템. 마음에 안 들면 재선택 가능하며, 로테이션 옵션도 제공됩니다. 일반 업소와 달리 선택의 자유가 보장됩니다.',
              },
              {
                icon: <FaUsers className="text-5xl text-secondary" />,
                title: '최상급 인테리어 & 룸 시스템',
                description:
                  '모든 룸은 프리미엄 인테리어로 구성되어 있으며, 완벽한 방음과 프라이버시가 보장됩니다. 인원에 맞는 다양한 크기의 룸을 선택할 수 있습니다.',
              },
              {
                icon: <FaShieldAlt className="text-5xl text-secondary" />,
                title: '검증된 서비스 퀄리티',
                description:
                  '체계적인 관리 시스템으로 서비스 퀄리티를 유지합니다. 담당 매니저가 전 과정을 케어하며, 문제 발생 시 즉시 대응합니다.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="glass-card p-8 hover:border-secondary transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 차별화된 시스템 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            차별화된 시스템
          </h2>

          <div className="space-y-20">
            {/* 초이스 시스템 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h3 className="text-3xl font-bold text-white mb-6">
                  초이스 시스템의 모든 것
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  강남 퍼펙트의 초이스 시스템은 완전히 투명합니다. 입장 후
                  테이블 배정을 받으면, 담당 매니저가 초이스 진행을 안내합니다.
                  직접 보고 마음에 드는 파트너를 선택하는 방식이며, 첫 선택이
                  마음에 안 들면 2차 초이스(재선택)도 가능합니다.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  일반 노래방이나 저가 업소와 달리, 강남 퍼펙트는 퀄리티 있는
                  파트너들로 구성되어 있습니다. 초이스 시간은 충분히 주어지며,
                  압박이나 강요는 일체 없습니다. 인원수만큼, 또는 그 이상
                  초이스도 가능하며, 추가 비용이 발생할 수 있습니다.
                </p>
                <ul className="space-y-3">
                  {[
                    '1차 초이스: 직접 보고 선택',
                    '2차 초이스: 재선택 가능',
                    '로테이션: 시간별 교체 옵션',
                    '추가 초이스: 인원 추가 가능',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-secondary flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-left">
                <div className="relative rounded-2xl overflow-hidden border-2 border-secondary shadow-2xl">
                  <img
                    src="/images/room-1.jpg"
                    alt="초이스 시스템"
                    className="w-full h-auto"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>
            </div>

            {/* 프리미엄 룸 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right" className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border-2 border-secondary shadow-2xl">
                  <img
                    src="/images/room-2.jpg"
                    alt="프리미엄 룸"
                    className="w-full h-auto"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>
              <div data-aos="fade-left" className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-white mb-6">
                  프리미엄 룸 & 인테리어
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  모든 룸은 고급 인테리어로 구성되어 있으며, 최신 음향 시스템과
                  조명이 갖춰져 있습니다. 소형부터 대형까지 다양한 크기의 룸을
                  보유하고 있어, 2명부터 10명 이상의 대규모 모임까지 모두
                  수용 가능합니다.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  각 룸은 완벽한 방음 처리로 프라이버시가 보장되며, 편안한
                  소파와 테이블 배치로 장시간 이용에도 불편함이 없습니다.
                  청결 상태는 매일 점검하며, 이용 후에는 즉시 소독과 정리가
                  진행됩니다.
                </p>
                <ul className="space-y-3">
                  {[
                    '최신 음향 시스템',
                    '프리미엄 조명 & 인테리어',
                    '완벽한 방음 & 프라이버시',
                    '다양한 룸 크기 선택 가능',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-secondary flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 완벽한 프라이버시 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h3 className="text-3xl font-bold text-white mb-6">
                  완벽한 프라이버시 보장
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  강남 퍼펙트는 고객의 프라이버시를 최우선으로 생각합니다.
                  입장부터 퇴실까지 외부 노출 없이 이용할 수 있으며, 모든
                  직원은 보안 교육을 이수했습니다. CCTV는 공용 공간에만
                  설치되어 있으며, 룸 내부에는 일체 설치되지 않습니다.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  주차 시설도 완비되어 있어 차량 이용 고객도 편리하게 방문할
                  수 있습니다. 발레파킹 서비스도 제공하며, 차량 정보는 철저히
                  보호됩니다. VIP 고객을 위한 별도 입구와 전용 엘리베이터도
                  운영 중입니다.
                </p>
                <ul className="space-y-3">
                  {[
                    '외부 노출 없는 입장 동선',
                    '룸 내부 CCTV 없음',
                    '발레파킹 서비스',
                    'VIP 전용 입구 운영',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-secondary flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-left">
                <div className="relative rounded-2xl overflow-hidden border-2 border-secondary shadow-2xl">
                  <img
                    src="/images/room-3.jpg"
                    alt="프라이버시"
                    className="w-full h-auto"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 이용 방법 */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            이용 방법 및 예약 가이드
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 타임라인 라인 */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-yellow-500 to-secondary hidden md:block" />

              {/* 단계 */}
              {[
                {
                  number: '01',
                  title: '예약 문의',
                  description:
                    '전화 또는 카카오톡으로 예약 문의를 합니다. 방문 인원, 원하는 날짜와 시간, 예산 등을 알려주시면 적합한 테이블을 안내해 드립니다. 주말과 성수기에는 미리 예약하시는 것을 추천합니다.',
                },
                {
                  number: '02',
                  title: '입장 & 웰컴',
                  description:
                    '예약 시간에 맞춰 방문하시면 담당 매니저가 안내합니다. 간단한 신원 확인 후 테이블로 이동하며, 웰컴 서비스가 제공됩니다. 주류와 안주를 선택하고, 초이스 전 분위기를 즐길 수 있습니다.',
                },
                {
                  number: '03',
                  title: '초이스 진행',
                  description:
                    '준비가 되면 초이스가 시작됩니다. 직접 보고 선택하는 방식이며, 충분한 시간이 주어집니다. 선택 후 룸으로 이동하며, 마음에 안 들면 2차 초이스를 요청할 수 있습니다.',
                },
                {
                  number: '04',
                  title: '서비스 시작',
                  description:
                    '룸에서 본격적인 서비스가 시작됩니다. 술, 노래, 대화를 즐기며 편안한 시간을 보낼 수 있습니다. 추가 주류나 안주가 필요하면 언제든 요청 가능하며, 로테이션이나 추가 초이스도 가능합니다. 이용 종료 시 정산 후 퇴실합니다.',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative pl-0 md:pl-20 mb-12 last:mb-0"
                >
                  {/* 숫자 배지 */}
                  <div className="absolute left-0 md:left-4 w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-yellow-500 flex items-center justify-center font-bold text-2xl text-background shadow-lg">
                    {step.number}
                  </div>

                  {/* 카드 */}
                  <div className="glass-card p-6 ml-20 md:ml-0 hover:border-secondary transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 비교 섹션 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            강남 퍼펙트 vs 일반 업소 차이점
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full" data-aos="fade-up">
                <thead>
                  <tr className="border-b-2 border-secondary">
                    <th className="py-4 px-6 text-left text-lg font-bold text-white">
                      비교 항목
                    </th>
                    <th className="py-4 px-6 text-center text-lg font-bold text-secondary">
                      강남 퍼펙트
                    </th>
                    <th className="py-4 px-6 text-center text-lg font-bold text-gray-400">
                      일반 업소
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: '초이스 시스템',
                      perfect: '직접 선택 + 재선택 가능',
                      normal: '지정 또는 제한적',
                    },
                    {
                      item: '룸 퀄리티',
                      perfect: '최상급 인테리어',
                      normal: '일반 수준',
                    },
                    {
                      item: '서비스 수준',
                      perfect: '매니저 전담 케어',
                      normal: '기본 서비스',
                    },
                    {
                      item: '가격 투명성',
                      perfect: '사전 고지 + 명확',
                      normal: '추가 비용 발생 多',
                    },
                    {
                      item: '프라이버시',
                      perfect: '완벽 보장',
                      normal: '보통',
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-6 text-gray-300 font-medium">
                        {row.item}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <FaCheckCircle className="text-secondary" />
                          <span className="text-white">{row.perfect}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-400">
                        {row.normal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary via-yellow-500 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-background mb-6"
          >
            지금 바로 강남 최고의 프리미엄 경험을 시작하세요
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl text-background/80 mb-8"
          >
            투명한 시스템과 최상의 서비스가 기다립니다
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/price"
              className="px-8 py-4 bg-background text-secondary rounded-lg font-bold text-lg hover:bg-primary transition-all duration-300 flex items-center gap-2"
            >
              가격 확인하기
              <FaArrowRight />
            </Link>
            <Link
              to="/system"
              className="px-8 py-4 border-2 border-background text-background rounded-lg font-bold text-lg hover:bg-background hover:text-secondary transition-all duration-300 flex items-center gap-2"
            >
              시스템 자세히 보기
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            자주 묻는 질문
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="glass-card group"
              >
                <summary className="py-6 px-8 cursor-pointer list-none flex items-center justify-between hover:text-secondary transition-colors">
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className="text-secondary text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
