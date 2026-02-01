import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { SEO } from '../components/SEO';
import { FAQSchema, type FAQItem } from '../components/FAQSchema';
import { OrganizationSchema } from '../components/OrganizationSchema';

export const System = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs: FAQItem[] = [
    {
      question: '초이스는 몇 번까지 가능한가요?',
      answer:
        '기본적으로 1차 초이스 후 마음에 안 들면 2차 초이스(재선택)가 가능합니다. 2차 초이스는 무료로 제공되며, 그 이후 추가 체인지를 원하시면 매니저와 상담 후 가능 여부를 확인할 수 있습니다. 다만 과도한 체인지는 제한될 수 있습니다.',
    },
    {
      question: '마음에 안 들면 바꿀 수 있나요?',
      answer:
        '네, 가능합니다. 1차 초이스 후 마음에 들지 않으면 2차 초이스를 요청할 수 있습니다. 담당 매니저에게 말씀하시면 다시 초이스 라인업을 준비해 드립니다. 초이스는 만족할 때까지 진행되는 것이 원칙이므로 부담 없이 말씀하시면 됩니다.',
    },
    {
      question: '인원수보다 많이 초이스 가능한가요?',
      answer:
        '가능합니다. 예를 들어 4명이 방문해도 5-6명을 초이스할 수 있습니다. 다만 인원이 늘어날수록 서비스 비용이 추가되므로, 예산을 고려해 결정하시는 것을 추천합니다. 인원 추가는 예약 시 또는 현장에서 매니저와 상담 후 가능합니다.',
    },
    {
      question: '로테이션은 어떻게 진행되나요?',
      answer:
        '로테이션은 일정 시간마다 파트너를 교체하는 시스템입니다. 올나잇 이용 시 선택 가능하며, 보통 1-2시간 간격으로 진행됩니다. 로테이션을 원하시면 예약 시 미리 말씀해 주시거나, 이용 중에 매니저에게 요청하시면 됩니다.',
    },
    {
      question: '처음 방문자도 쉽게 이용할 수 있나요?',
      answer:
        '물론입니다. 담당 매니저가 입장부터 퇴실까지 전 과정을 친절하게 안내해 드립니다. 시스템이 명확하고 절차가 단순해서 처음 방문하시는 분들도 어렵지 않게 이용하실 수 있습니다. 궁금한 점이 있으면 언제든 매니저에게 문의하시면 됩니다.',
    },
  ];

  return (
    <>
      <SEO
        title="강남 퍼펙트 시스템 | 초이스부터 서비스까지 완벽 가이드"
        description="강남 퍼펙트의 체계적인 이용 시스템을 안내합니다. 예약부터 입장, 초이스, 서비스, 퇴실까지 전 과정을 투명하게 공개합니다. 1차 초이스 후 재선택 가능하며, 인원수보다 많은 초이스도 가능합니다. 로테이션 옵션과 추가 초이스 시스템으로 최상의 만족도를 보장합니다. 처음 방문하시는 분들도 담당 매니저의 안내로 쉽게 이용할 수 있습니다. 강남 하이퍼블릭 이용 가이드 결정판."
        keywords="강남 퍼펙트 시스템, 초이스 시스템, 하이퍼블릭 이용방법, 퍼펙트 예약, 로테이션 시스템, 강남 하이퍼블릭 이용법, 초이스 방법, 재선택 가능, 강남역 하이퍼블릭 시스템, 가라오케 이용방법, 하이퍼블릭 예약방법"
      />
      <FAQSchema faqs={faqs} />
      <OrganizationSchema />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/room-4.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-gradient-gold mb-6"
          >
            강남 퍼펙트 시스템
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            처음이어도 걱정 없는 완벽 가이드
          </motion.p>
        </div>
      </section>

      {/* 전체 흐름 */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            입장부터 퇴실까지 한눈에
          </h2>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary hidden md:block" />

            {[
              {
                number: '1',
                title: '예약 및 입장',
                description:
                  '카카오톡 또는 전화로 예약합니다. 방문 날짜, 인원, 예산을 말씀해 주시면 최적의 테이블을 안내해 드립니다. 예약 시간에 맞춰 방문하시면 담당 매니저가 웰컴 인사 후 테이블로 안내합니다. 간단한 신원 확인 절차가 있으며, 주차는 발레파킹을 이용하실 수 있습니다.',
                image: '/images/room-1.jpg',
              },
              {
                number: '2',
                title: '초이스 진행',
                description:
                  '테이블에 착석 후 주류와 안주를 선택합니다. 준비가 되면 초이스가 시작됩니다. 직접 보고 마음에 드는 파트너를 선택하는 방식이며, 충분한 시간이 주어집니다. 1차 선택 후 만족스럽지 않으면 2차 초이스(재선택)를 요청할 수 있습니다. 인원수만큼, 또는 그 이상 선택 가능합니다.',
                image: '/images/room-2.jpg',
              },
              {
                number: '3',
                title: '서비스 이용',
                description:
                  '초이스 완료 후 룸으로 이동합니다. 룸은 프리미엄 인테리어로 구성되어 있으며, 완벽한 방음으로 프라이버시가 보장됩니다. 술, 노래, 대화를 즐기며 편안한 시간을 보낼 수 있습니다. 추가 주류나 안주가 필요하면 언제든 호출 가능하며, 로테이션이나 추가 초이스도 매니저와 상담 후 가능합니다.',
                image: '/images/room-3.jpg',
              },
              {
                number: '4',
                title: '정산 및 퇴실',
                description:
                  '이용 종료 시 담당 매니저가 정산 내역을 안내합니다. 카드 또는 현금 결제가 가능하며, 예약 시 안내받은 금액에서 추가 주문한 항목만 더해집니다. 정산 완료 후 발레파킹을 통해 차량을 인도받고 퇴실합니다. 다음 방문 시 재방문 혜택을 받으실 수 있습니다.',
                image: '/images/room-4.jpg',
              },
            ].map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative pl-0 md:pl-20 mb-16 last:mb-0"
              >
                <div className="absolute left-0 md:left-4 w-16 h-16 rounded-full bg-secondary flex items-center justify-center font-bold text-3xl text-background">
                  {step.number}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-20 md:ml-0">
                  <div className="glass-card p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden border-2 border-secondary">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 초이스 시스템 상세 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            초이스 시스템 완벽 가이드
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: '1차 초이스',
                description:
                  '직접 보고 선택하는 투명한 시스템. 라인업을 보고 마음에 드는 파트너를 선택합니다.',
                icon: '👀',
              },
              {
                title: '2차 초이스',
                description:
                  '1차 선택이 마음에 안 들면 재선택 가능. 추가 비용 없이 다시 선택할 수 있습니다.',
                icon: '🔄',
              },
              {
                title: '체인지 시스템',
                description:
                  '서비스 중 교체를 원하면 매니저와 상담 후 가능. 상황에 따라 비용 발생할 수 있습니다.',
                icon: '↔️',
              },
              {
                title: '로테이션',
                description:
                  '일정 시간마다 자동 교체. 올나잇 이용 시 선택 가능하며, 다양한 파트너를 만날 수 있습니다.',
                icon: '⏰',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="glass-card p-6 text-center hover:border-secondary transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="mt-16 max-w-4xl mx-auto glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              초이스 시스템 핵심 정리
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                강남 퍼펙트의 초이스 시스템은 <span className="text-secondary font-semibold">완전히 투명</span>합니다.
                다른 업소처럼 지정되거나 강요받는 일은 없으며, 고객이 직접 보고 선택하는 방식입니다.
                초이스 라인업은 매일 달라지며, 퀄리티 있는 파트너들로 구성되어 있습니다.
              </p>
              <p>
                1차 초이스 후 만족스럽지 않으면 <span className="text-secondary font-semibold">2차 초이스</span>를 요청할 수 있습니다.
                이는 추가 비용 없이 제공되며, 고객이 만족할 때까지 진행하는 것이 원칙입니다.
                다만 과도하게 체인지를 요구하는 경우 제한될 수 있으니, 신중하게 선택하시기 바랍니다.
              </p>
              <p>
                인원수보다 많은 초이스도 가능합니다. 예를 들어 4명이 방문해도 6명을 선택할 수 있으며,
                이 경우 추가 인원에 대한 서비스 비용이 발생합니다. 예산을 고려해 담당 매니저와 상담 후 결정하시면 됩니다.
              </p>
              <p>
                로테이션 시스템은 올나잇 이용 시 선택 가능하며, 일정 시간마다 파트너가 자동으로 교체됩니다.
                다양한 파트너를 경험하고 싶으신 분들에게 추천하며, 로테이션 주기는 협의 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 룸 배정 및 서비스 */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-center text-gradient-gold mb-16"
          >
            프리미엄 룸 & 서비스
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-16">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                data-aos="fade-up"
                data-aos-delay={num * 50}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden border-2 border-secondary cursor-pointer group"
              >
                <img
                  src={`/images/room-${num}.jpg`}
                  alt={`Room ${num}`}
                  className="w-full h-48 object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white font-bold">
                    Room {num}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div data-aos="fade-up" className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                룸 시스템 특징
              </h3>
              <ul className="space-y-3">
                {[
                  '최신 음향 시스템',
                  '프리미엄 조명 & 인테리어',
                  '완벽한 방음 처리',
                  '편안한 소파 & 테이블',
                  '청결 상태 철저 관리',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-secondary" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                추가 서비스 옵션
              </h3>
              <ul className="space-y-3">
                {[
                  '추가 초이스',
                  '로테이션 서비스',
                  'VIP 룸 업그레이드',
                  '특별 안주 제공',
                  '프리미엄 주류 선택',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-secondary" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            처음이어도 걱정 없습니다
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl text-background/80 mb-8"
          >
            담당 매니저가 전 과정을 친절하게 안내해 드립니다
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
              to="/premium"
              className="px-8 py-4 border-2 border-background text-background rounded-lg font-bold text-lg hover:bg-background hover:text-secondary transition-all duration-300 flex items-center gap-2"
            >
              프리미엄 서비스 보기
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
            시스템 관련 자주 묻는 질문
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
