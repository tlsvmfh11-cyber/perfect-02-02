import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import {
  FaCheckCircle,
  FaWineBottle,
  FaClock,
  FaUsers,
  FaMoneyBillWave,
  FaArrowRight,
} from 'react-icons/fa';
import { SEO } from '../components/SEO';
import { FAQSchema, type FAQItem } from '../components/FAQSchema';
import { OrganizationSchema } from '../components/OrganizationSchema';

export const Price = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs: FAQItem[] = [
    {
      question: '기본 차지에 포함되는 것은 무엇인가요?',
      answer:
        '기본 차지에는 룸 사용료, 기본 안주, 음향 시스템 이용이 포함됩니다. 다만 주류와 서비스 비용은 별도이며, 선택하신 주류 종류와 인원 수에 따라 추가 비용이 발생합니다. 기본 차지만으로는 초이스나 서비스를 이용할 수 없으니 참고하세요.',
    },
    {
      question: '2명이 가면 최소 비용이 얼마인가요?',
      answer:
        '2명 기준 소형 테이블을 이용하시면 최소 30만원대부터 시작합니다. 여기에는 기본 차지, 양주 1병(기본 등급), 서비스 비용이 포함됩니다. 양주 등급을 올리거나 추가 주문 시 비용이 더 발생할 수 있습니다. 정확한 견적은 방문 전 문의하시면 상세히 안내해 드립니다.',
    },
    {
      question: '카드 결제 가능한가요?',
      answer:
        '네, 카드 결제 가능합니다. 신용카드, 체크카드 모두 사용 가능하며, 대부분의 카드사를 지원합니다. 다만 일부 할인이나 이벤트는 현금 결제 시에만 적용될 수 있으니, 예약 시 확인하시는 것을 추천합니다.',
    },
    {
      question: '주중/주말 가격 차이가 있나요?',
      answer:
        '기본 가격은 동일하지만, 주말(금/토)에는 수요가 많아 예약이 어렵고 일부 프로모션이 적용되지 않을 수 있습니다. 주중(월~목)에는 상대적으로 여유롭고, 비수기에는 특별 할인이 제공되기도 합니다. 최적의 조건으로 이용하시려면 주중 방문을 추천합니다.',
    },
    {
      question: '예약금이 필요한가요?',
      answer:
        '대부분의 경우 예약금 없이 예약 가능합니다. 다만 대규모 인원(10명 이상)이나 특정 VIP 룸 예약 시에는 노쇼 방지를 위해 일부 예약금을 요청할 수 있습니다. 예약금은 당일 이용 금액에서 차감되며, 취소 시 환불 규정에 따라 처리됩니다.',
    },
  ];

  return (
    <>
      <SEO
        title="강남 퍼펙트 가격 | 투명한 요금제 완벽 공개"
        description="강남 퍼펙트의 투명한 가격 시스템을 확인하세요. 소형 테이블 30만원대부터 시작하며, 중형 테이블 60만원대, 대형 테이블 100만원대의 합리적인 가격으로 최상급 서비스를 제공합니다. 기본 차지, 주류, 서비스 비용을 명확히 안내하며, 숨겨진 추가 비용 없이 투명하게 운영됩니다. 시간제와 올나잇 옵션 중 선택 가능하고, 카드 결제를 지원합니다. 강남 하이퍼블릭 가격비교 1위."
        keywords="강남 퍼펙트 가격, 하이퍼블릭 가격, 강남 유흥 가격, 퍼펙트 요금, 테이블 가격, 시간제 가격, 강남 하이퍼블릭 비용, 강남역 하이퍼블릭 가격, 가라오케 가격, 강남 2차 가격, 올나잇 가격, 시간제 요금, 강남 유흥 비용"
      />
      <FAQSchema faqs={faqs} />
      <OrganizationSchema />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-background via-primary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative inline-block"
          >
            <FaMoneyBillWave className="text-6xl md:text-8xl text-secondary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
              강남 퍼펙트 프리미엄 가격 시스템
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-6">
              투명하고 합리적인 가격, 최상의 가치
            </p>
          </motion.div>
        </div>
      </section>

      {/* 가격 구조 한눈에 */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            가격 구조 한눈에 보기
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaClock className="text-5xl" />,
                title: '기본 차지',
                price: '10만원대~',
                description:
                  '룸 사용료와 기본 안주가 포함됩니다. 테이블 크기와 인원에 따라 차등 적용되며, 주류와 서비스는 별도입니다.',
              },
              {
                icon: <FaWineBottle className="text-5xl" />,
                title: '주류',
                price: '양주/샴페인 선택',
                description:
                  '기본 등급부터 프리미엄 등급까지 다양한 주류를 선택할 수 있습니다. 양주 1병 기준이며, 추가 주문 가능합니다.',
              },
              {
                icon: <FaUsers className="text-5xl" />,
                title: '서비스',
                price: '인원별 차등',
                description:
                  '초이스 및 서비스 비용입니다. 인원 수와 선택하신 옵션에 따라 비용이 달라지며, 사전에 명확히 안내됩니다.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 text-center hover:border-secondary transition-all duration-300"
              >
                <div className="text-secondary mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <div className="text-3xl font-bold text-secondary mb-4">
                  {item.price}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="mt-16 max-w-4xl mx-auto glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              가격 구성 설명
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              강남 퍼펙트의 가격은 <span className="text-secondary font-semibold">기본 차지 + 주류 + 서비스</span>로 구성됩니다.
              기본 차지는 테이블 크기(소형/중형/대형)에 따라 다르며, 주류는 선택하신 양주나 샴페인의 등급에 따라 결정됩니다.
              서비스 비용은 인원 수와 초이스 옵션(기본/프리미엄)에 따라 차등 적용됩니다.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              모든 가격은 예약 시 사전에 안내되며, 이용 중 추가 주문이 없다면 처음 안내받은 금액에서 크게 벗어나지 않습니다.
              숨겨진 비용이나 갑작스러운 추가 요금은 없으며, 투명한 정산을 원칙으로 합니다.
            </p>
            <p className="text-gray-300 leading-relaxed">
              정확한 견적은 인원, 방문 날짜, 원하시는 주류 등을 고려해 개별적으로 안내해 드립니다.
              예약 문의 시 상세한 내역을 받아보실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 테이블별 요금제 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            테이블별 요금제
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: '소형 테이블',
                subtitle: '2-4인',
                price: '₩300,000~',
                features: [
                  '기본 차지 포함',
                  '양주 1병 (기본 등급)',
                  '기본 안주 제공',
                  '2-4인 초이스',
                  '소형 룸 배정',
                ],
                popular: false,
              },
              {
                title: '중형 테이블',
                subtitle: '5-7인',
                price: '₩600,000~',
                features: [
                  '기본 차지 포함',
                  '양주 2병 (기본 등급)',
                  '프리미엄 안주 제공',
                  '5-7인 초이스',
                  '중형 룸 배정',
                ],
                popular: true,
              },
              {
                title: '대형 테이블',
                subtitle: '8인 이상',
                price: '₩1,000,000~',
                features: [
                  '기본 차지 포함',
                  '양주/샴페인 다수',
                  '특별 안주 제공',
                  '8인 이상 초이스',
                  '대형/VIP 룸 배정',
                ],
                popular: false,
              },
            ].map((table, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className={`relative glass-card p-8 ${
                  table.popular ? 'border-2 border-secondary' : ''
                }`}
              >
                {table.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-background px-4 py-1 rounded-full font-bold text-sm">
                    인기
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">
                  {table.title}
                </h3>
                <p className="text-gray-400 mb-4">{table.subtitle}</p>
                <div className="text-4xl font-bold text-secondary mb-6">
                  {table.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {table.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:01023033778"
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 block text-center ${
                    table.popular
                      ? 'bg-secondary text-background hover:bg-yellow-500'
                      : 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-background'
                  }`}
                >
                  전화 문의
                </a>
              </motion.div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="mt-16 max-w-4xl mx-auto glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              테이블 선택 가이드
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="text-secondary font-semibold">소형 테이블</span>은 2-4명의 소규모 모임에 적합합니다.
                연인이나 친구끼리 가볍게 방문할 때 추천하며, 비용 대비 합리적인 선택입니다.
              </p>
              <p>
                <span className="text-secondary font-semibold">중형 테이블</span>은 5-7명 규모로 가장 인기 있는 옵션입니다.
                회사 회식, 동호회 모임 등에 최적화되어 있으며, 1인당 비용이 가장 효율적입니다.
              </p>
              <p>
                <span className="text-secondary font-semibold">대형 테이블</span>은 8명 이상의 대규모 모임이나 특별한 행사에 적합합니다.
                VIP 룸 배정이 가능하며, 다양한 주류와 특별 서비스가 제공됩니다.
              </p>
              <p className="pt-4 border-t border-white/10">
                모든 테이블은 예약 시 정확한 인원과 예산을 말씀해 주시면, 최적의 옵션을 추천해 드립니다.
                인원 대비 테이블이 과하거나 부족하지 않도록 상담을 통해 결정하시는 것을 추천합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 시간제 vs 올나잇 */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            시간제 vs 올나잇 비교
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: '시간제',
                time: '2시간 / 3시간',
                accent: 'from-blue-500 to-blue-700',
                features: [
                  '짧은 시간 이용',
                  '비교적 저렴한 비용',
                  '빠른 회전',
                  '시간 연장 가능 (추가 비용)',
                ],
                recommend: '빠른 모임, 2차 이용',
              },
              {
                title: '올나잇',
                time: '무제한 이용',
                accent: 'from-secondary to-yellow-500',
                features: [
                  '시간 제한 없음',
                  '여유로운 분위기',
                  '로테이션 옵션 제공',
                  '추가 비용 없음',
                ],
                recommend: '메인 모임, 장시간 이용',
                popular: true,
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
                className={`relative glass-card p-8 ${
                  option.popular ? 'border-2 border-secondary' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-background px-4 py-1 rounded-full font-bold text-sm">
                    추천
                  </div>
                )}

                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${option.accent} flex items-center justify-center mb-6`}
                >
                  <FaClock className="text-3xl text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-xl text-gray-400 mb-6">{option.time}</p>

                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">추천 대상</p>
                  <p className="text-white font-semibold">{option.recommend}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="mt-12 max-w-4xl mx-auto glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              시간제와 올나잇, 어떤 걸 선택해야 할까요?
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="text-secondary font-semibold">시간제</span>는 짧은 시간 동안 가볍게 이용하고 싶을 때 적합합니다.
                2차로 방문하거나, 시간이 제한적인 경우 추천하며, 2시간 또는 3시간 중 선택할 수 있습니다.
                시간이 부족하면 연장 가능하지만, 추가 비용이 발생합니다.
              </p>
              <p>
                <span className="text-secondary font-semibold">올나잇</span>은 시간 제한 없이 여유롭게 즐기고 싶을 때 최적입니다.
                메인 모임으로 방문하거나, 장시간 이용을 원하시면 올나잇을 선택하시는 게 더 합리적입니다.
                로테이션 서비스도 제공되며, 시간 걱정 없이 편안하게 이용할 수 있습니다.
              </p>
              <p>
                대부분의 고객들은 올나잇을 선택하며, 시간당 비용을 계산하면 올나잇이 더 효율적인 경우가 많습니다.
                예산과 일정을 고려해 선택하시면 되며, 예약 시 상담을 통해 결정할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 추가 비용 및 팁 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            추가 비용 및 팁 정보
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: '추가 주류',
                description:
                  '기본 제공되는 주류 외에 추가로 주문할 수 있습니다. 양주, 샴페인, 맥주, 소주 등 다양한 주류가 준비되어 있으며, 가격은 종류에 따라 다릅니다. 프리미엄 등급 양주로 업그레이드도 가능합니다.',
              },
              {
                title: '안주 추가',
                description:
                  '기본 안주 외에 추가 안주를 주문할 수 있습니다. 과일, 치킨, 해산물 등 다양한 메뉴가 있으며, 대부분 합리적인 가격으로 제공됩니다. 안주는 선택 사항이므로, 필요하신 경우에만 주문하시면 됩니다.',
              },
              {
                title: '시간 연장',
                description:
                  '시간제로 이용 중 시간이 부족하면 연장할 수 있습니다. 30분 또는 1시간 단위로 연장 가능하며, 시간당 추가 비용이 발생합니다. 올나잇은 시간 제한이 없으므로 연장 비용이 없습니다.',
              },
              {
                title: '팁 문화',
                description:
                  '팁은 선택 사항입니다. 서비스가 만족스러웠다면 소액의 팁을 주실 수 있으나, 강요하지 않습니다. 일부 고객들은 서비스 비용에 팁이 포함되어 있다고 생각하여 별도로 주지 않기도 합니다.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="glass-card p-6 hover:border-secondary transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1 h-full bg-secondary rounded-full" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="mt-12 max-w-4xl mx-auto glass-card p-8 border-2 border-secondary"
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              가격 관련 중요 안내
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                <span>모든 가격은 VAT 포함 금액입니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                <span>
                  예약 시 안내받은 가격 외에 추가 주문이 없다면 추가 비용이 발생하지 않습니다.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                <span>
                  주류 및 서비스 비용은 시장 상황에 따라 변동될 수 있습니다.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                <span>
                  정확한 견적은 예약 문의 시 인원, 날짜, 예산을 고려해 개별 안내됩니다.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary via-yellow-500 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-background mb-6"
          >
            정확한 견적은 문의 주세요
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl text-background/80 mb-8"
          >
            인원, 예산, 날짜에 맞는 최적의 플랜을 제안해 드립니다
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            가격 관련 자주 묻는 질문
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
