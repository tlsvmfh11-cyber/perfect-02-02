import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { FaCrown, FaCheckCircle, FaStar, FaArrowRight } from 'react-icons/fa';
import { SEO } from '../components/SEO';
import { FAQSchema, type FAQItem } from '../components/FAQSchema';

export const Premium = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs: FAQItem[] = [
    {
      question: 'VIP 서비스와 일반 서비스의 차이는?',
      answer:
        'VIP 서비스는 초이스 우선권, VIP 전용 룸, 프리미엄 주류, 전담 매니저 배정 등 차별화된 혜택이 제공됩니다. 일반 서비스도 퀄리티는 동일하지만, VIP는 더욱 세심한 케어와 특별한 옵션을 이용할 수 있습니다. 가격은 높지만 그만큼 프리미엄한 경험을 원하시는 분들에게 추천합니다.',
    },
    {
      question: '프리미엄 패키지 예약은 어떻게 하나요?',
      answer:
        '전화 또는 카카오톡으로 예약 시 프리미엄 패키지를 이용하겠다고 말씀해 주시면 됩니다. 담당자가 패키지 종류(골드/플래티넘/다이아몬드)를 안내하고, 예산과 인원에 맞는 최적의 플랜을 추천해 드립니다. 프리미엄 패키지는 사전 예약이 필수입니다.',
    },
    {
      question: '단체 예약 시 추가 혜택이 있나요?',
      answer:
        '네, 10명 이상 단체 예약 시 할인 혜택이 제공됩니다. 인원이 많을수록 1인당 비용이 저렴해지며, 대형 VIP 룸 우선 배정, 추가 서비스 등의 특전이 있습니다. 회사 회식이나 대규모 모임 시 문의 주시면 맞춤 견적을 안내해 드립니다.',
    },
    {
      question: '처음 방문자도 프리미엄 이용 가능한가요?',
      answer:
        '물론입니다. 처음 방문하시는 분들도 프리미엄 서비스를 이용하실 수 있습니다. 오히려 처음 방문 시 최상의 경험을 원하신다면 프리미엄 패키지를 추천합니다. 전담 매니저가 모든 과정을 세심하게 안내하므로 부담 없이 이용하실 수 있습니다.',
    },
    {
      question: '재방문 고객 혜택은 어떤 게 있나요?',
      answer:
        '재방문 고객에게는 다양한 혜택이 제공됩니다. 할인 쿠폰, 무료 업그레이드, 우선 예약권 등이 있으며, 방문 횟수에 따라 VIP 등급이 상승합니다. 등급이 높을수록 더 많은 혜택을 받으실 수 있으며, 특별 이벤트 초대장도 발송됩니다.',
    },
  ];

  return (
    <>
      <SEO
        title="강남 퍼펙트 프리미엄"
        description="강남 퍼펙트의 VIP 프리미엄 서비스를 경험하세요. 초이스 우선권, VIP 전용 룸, 프리미엄 주류, 전담 매니저 배정 등 차별화된 서비스를 제공합니다. 골드, 플래티넘, 다이아몬드 패키지 중 선택 가능하며, 단체 예약 시 추가 할인 혜택이 있습니다. 투명한 가격, 검증된 퀄리티, 완벽한 프라이버시로 최상급 경험을 보장합니다."
        keywords="강남 퍼펙트 프리미엄, VIP 서비스, 프리미엄 패키지, 강남 하이퍼블릭 VIP, 단체 예약"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/room-5.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaCrown className="text-8xl text-secondary mx-auto mb-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gradient-gold mb-6"
          >
            강남 퍼펙트 프리미엄
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            최상급 VIP 경험
          </motion.p>
        </div>
      </section>

      {/* VIP 전용 서비스 */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            VIP만을 위한 특별한 경험
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <FaStar className="text-5xl" />,
                title: '프리미엄 초이스 우선권',
                description:
                  'VIP 고객에게는 초이스 우선권이 제공됩니다. 최상급 라인업을 먼저 만나보실 수 있습니다.',
              },
              {
                icon: <FaCrown className="text-5xl" />,
                title: 'VIP 전용 룸',
                description:
                  '일반 룸보다 넓고 고급스러운 VIP 전용 룸을 이용하실 수 있습니다. 최고급 인테리어와 시설을 자랑합니다.',
              },
              {
                icon: <FaCrown className="text-5xl" />,
                title: '프리미엄 주류 서비스',
                description:
                  '기본 양주 외에 프리미엄 양주, 고급 샴페인 등 다양한 주류를 선택할 수 있습니다.',
              },
              {
                icon: <FaCrown className="text-5xl" />,
                title: '전담 매니저 배정',
                description:
                  'VIP 전담 매니저가 입장부터 퇴실까지 모든 과정을 세심하게 케어합니다.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-card p-8 text-center hover:border-secondary transition-all duration-300"
              >
                <div className="text-secondary mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
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

      {/* 업종 비교 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            왜 강남 퍼펙트인가?
          </h2>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full" data-aos="fade-up">
              <thead>
                <tr className="border-b-2 border-secondary">
                  <th className="py-4 px-6 text-left text-lg font-bold text-white">
                    비교 항목
                  </th>
                  <th className="py-4 px-6 text-center text-lg font-bold text-secondary">
                    퍼펙트
                  </th>
                  <th className="py-4 px-6 text-center text-lg font-bold text-gray-400">
                    룸싸롱
                  </th>
                  <th className="py-4 px-6 text-center text-lg font-bold text-gray-400">
                    쩜오
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    item: '가격 합리성',
                    perfect: '⭐⭐⭐⭐⭐',
                    room: '⭐⭐⭐',
                    jjumoh: '⭐⭐',
                  },
                  {
                    item: '초이스 자유도',
                    perfect: '⭐⭐⭐⭐⭐',
                    room: '⭐⭐⭐⭐',
                    jjumoh: '⭐⭐⭐⭐⭐',
                  },
                  {
                    item: '서비스 퀄리티',
                    perfect: '⭐⭐⭐⭐⭐',
                    room: '⭐⭐⭐⭐',
                    jjumoh: '⭐⭐⭐⭐⭐',
                  },
                  {
                    item: '프라이버시',
                    perfect: '⭐⭐⭐⭐⭐',
                    room: '⭐⭐⭐⭐',
                    jjumoh: '⭐⭐⭐⭐',
                  },
                  {
                    item: '접근성',
                    perfect: '⭐⭐⭐⭐⭐',
                    room: '⭐⭐⭐',
                    jjumoh: '⭐⭐',
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6 text-gray-300 font-medium">
                      {row.item}
                    </td>
                    <td className="py-4 px-6 text-center text-secondary">
                      {row.perfect}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      {row.room}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      {row.jjumoh}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            data-aos="fade-up"
            className="mt-12 max-w-4xl mx-auto glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">업종별 특징 비교</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="text-secondary font-semibold">강남 퍼펙트 (하이퍼블릭)</span>는
                가격 대비 최상의 퀄리티를 자랑합니다. 룸싸롱보다 합리적인 가격에 쩜오에 준하는 서비스를 제공하며,
                초이스 자유도와 프라이버시 모두 뛰어납니다.
              </p>
              <p>
                <span className="text-gray-400 font-semibold">룸싸롱</span>은 중급 가격대에 안정적인 서비스를 제공하지만,
                퍼펙트에 비해 초이스 자유도가 낮고 가격 대비 효율이 떨어집니다.
              </p>
              <p>
                <span className="text-gray-400 font-semibold">쩜오</span>는 최고급 서비스를 제공하지만 가격이 매우 높고,
                접근성이 낮아 부담스러울 수 있습니다. 퍼펙트는 쩜오의 90% 퀄리티를 50-60% 가격에 이용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 프리미엄 패키지 */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            프리미엄 패키지 안내
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: '골드',
                price: '프리미엄 기본',
                features: [
                  '프리미엄 룸 배정',
                  '초이스 우선권',
                  '프리미엄 주류 1종',
                  '전담 매니저',
                  '특별 안주 제공',
                ],
                popular: false,
              },
              {
                name: '플래티넘',
                price: '프리미엄 +',
                features: [
                  'VIP 룸 배정',
                  '초이스 최우선권',
                  '프리미엄 주류 다수',
                  'VIP 전담 매니저',
                  '특별 안주 + 과일',
                  '로테이션 무료',
                ],
                popular: true,
              },
              {
                name: '다이아몬드',
                price: '최상급 프리미엄',
                features: [
                  'VIP 전용 룸',
                  '초이스 1순위 보장',
                  '최고급 주류 무제한',
                  '전담 팀 배정',
                  '풀 서비스',
                  '로테이션 무제한',
                  '전용 발레파킹',
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className={`relative glass-card p-8 ${
                  pkg.popular ? 'border-2 border-secondary scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-background px-6 py-2 rounded-full font-bold">
                    인기
                  </div>
                )}

                <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xl text-secondary mb-8">{pkg.price}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:01023033778"
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 block text-center ${
                    pkg.popular
                      ? 'bg-secondary text-background hover:bg-yellow-500'
                      : 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-background'
                  }`}
                >
                  전화 문의
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 특별 혜택 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            강남 퍼펙트만의 특별 혜택
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: '신규 방문 이벤트',
                description:
                  '처음 방문하시는 고객에게 특별 할인과 웰컴 서비스를 제공합니다.',
              },
              {
                title: '재방문 혜택',
                description:
                  '2회 이상 방문 시 재방문 할인 쿠폰과 우선 예약권을 드립니다.',
              },
              {
                title: '그룹 할인',
                description:
                  '10명 이상 단체 예약 시 최대 20% 할인 혜택이 제공됩니다.',
              },
              {
                title: '시즌 프로모션',
                description:
                  '비수기 시즌에는 특별 할인 이벤트가 진행됩니다.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 hover:border-secondary transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 선택 이유 */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            왜 강남 퍼펙트를 선택하는가
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: '01',
                title: '투명한 가격 시스템',
                description:
                  '숨겨진 비용 없이 사전에 모든 금액을 안내합니다. 추가 주문이 없다면 예상 금액에서 벗어나지 않습니다.',
              },
              {
                number: '02',
                title: '검증된 서비스 퀄리티',
                description:
                  '체계적인 관리 시스템으로 일정한 서비스 퀄리티를 유지합니다. 고객 만족도가 검증되었습니다.',
              },
              {
                number: '03',
                title: '최상급 인테리어',
                description:
                  '모든 룸은 프리미엄 인테리어로 구성되어 있으며, 정기적으로 리모델링을 진행합니다.',
              },
              {
                number: '04',
                title: '완벽한 프라이버시',
                description:
                  '입장부터 퇴실까지 외부 노출 없이 이용 가능하며, 고객 정보는 철저히 보호됩니다.',
              },
              {
                number: '05',
                title: '편리한 접근성',
                description:
                  '강남 중심가에 위치해 접근성이 뛰어나며, 주차 시설도 완비되어 있습니다.',
              },
              {
                number: '06',
                title: '체계적인 관리 시스템',
                description:
                  '담당 매니저가 전 과정을 케어하며, 문제 발생 시 즉시 대응합니다.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="glass-card p-6 hover:border-secondary transition-all duration-300"
              >
                <div className="text-4xl font-bold text-secondary mb-4">
                  {item.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary via-yellow-500 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-background mb-6"
          >
            최상급 VIP 경험을 시작하세요
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl text-background/80 mb-8"
          >
            프리미엄 패키지로 특별한 경험을 만나보세요
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:01023033778"
              className="px-8 py-4 bg-background text-secondary rounded-lg font-bold text-lg hover:bg-primary transition-all duration-300 flex items-center gap-2"
            >
              전화 문의
              <FaArrowRight />
            </a>
            <Link
              to="/price"
              className="px-8 py-4 border-2 border-background text-background rounded-lg font-bold text-lg hover:bg-background hover:text-secondary transition-all duration-300 flex items-center gap-2"
            >
              가격 확인하기
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            프리미엄 관련 자주 묻는 질문
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
