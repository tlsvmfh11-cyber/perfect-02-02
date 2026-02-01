# 유흥업종 멀티 랜딩페이지 전문 제작 회사 규정

## 회사명
SEO 랜딩팩토리 (임시)

## 회사 업무
유흥업종 멀티 랜딩페이지 전문 제작

## 업종 포함 범위
- 노래방
- 가라오케
- 룸싸롱
- 하이퍼블릭
- 쩜오

## 페이지 성격
- 단일 페이지 ❌
- 멀티 랜딩페이지 ⭕
- 키워드/업종/지역별로 분리된 다중 페이지 구조

## 기본 원칙
- 과장/허위/애매한 표현 금지
- 실제 영업진 설명 기준
- 초보자도 이해 가능한 시스템 설명
- 업종별(쩜오/가라오케/룸싸롱 등) 시스템 차이 명확히 구분

## 페이지 분량 기준
- 모든 랜딩페이지는 페이지당 텍스트 3,000자 이상 필수
- 단순 반복/늘리기 금지
- 실제 정보, 시스템 설명, 이용 가이드 중심 구성

## SEO 적용 수준
- SEO 최고 수준으로 적용
- 키워드 밀도 자연스럽게 유지
- 메인 키워드: H1, 도입부, 결론부 반영
- 보조 키워드: H2/H3, 본문 자연 삽입
- 내부 링크 구조 고려한 문단 설계
- 중복 문구 최소화, 페이지별 고유 콘텐츠 유지

## 필수 SEO 요소 (페이지별)
- title 태그 최적화
- meta description 150자 이상
- H1 1개 / H2-H3 체계적 구조
- FAQ 섹션 최소 5문항 이상
- Schema.org FAQPage JSON-LD 포함
- 모바일 기준 가독성 최적화
- 체류시간을 늘리는 정보형 문단 구성

## 콘텐츠 방향
- 광고 문구 ❌
- 실제 이용 전 궁금증 해결 중심
- 가격 구조 / 시스템 / 초이스 방식 / 업종별 차이 명확히 설명
- 처음 방문자 기준으로 작성

## 제목 규칙
- 블로그형 제목 금지
- 랜딩페이지/홍보형 제목 사용

## 업종 정의
- 일반 노래방 ❌
- 유흥업소 형태의 노래방/가라오케 ⭕
- 초이스 시스템 설명 필수

## 기술 스택

### Core
- React 18+
- Vite
- TypeScript
- React Router DOM v6 (멀티 페이지 라우팅)

### 스타일링
- Tailwind CSS v3 (유틸리티 퍼스트)
- PostCSS
- Autoprefixer

### 애니메이션
- Framer Motion (페이지 전환, 요소 애니메이션)
- AOS (Animate On Scroll)
- GSAP (복잡한 타임라인 애니메이션)
- React Spring (물리 기반 애니메이션, 선택)

### UI 라이브러리
- Swiper (슬라이더/캐러셀)
- React Icons (아이콘)
- Headless UI (접근성 컴포넌트)

### SEO & 메타
- React Helmet Async (동적 메타태그)
- sitemap.xml 생성
- robots.txt

### 효과
- tsParticles (파티클 효과)
- React Intersection Observer (스크롤 감지)
- Lenis (스무스 스크롤)

### 폼 & 유효성 검사
- React Hook Form (문의 폼)
- Zod (스키마 검증)

### 유틸리티
- clsx / classnames (조건부 클래스)
- date-fns (날짜 처리, 필요 시)

### 개발 도구
- ESLint
- Prettier
- TypeScript strict mode

### 빌드 & 배포
- Vite build (최적화)
- 이미지 최적화 (WebP 변환)
- 코드 스플리팅
- Lazy loading

### 필수 요구사항
- 반응형 디자인 (모바일 우선)
- 모바일 가독성 최우선
- 빌드 오류 없는 코드만 생성
- 크로스 브라우저 호환성

## 보안 및 도용 방지 (필수)

### 콘텐츠 보호
- **우클릭 방지**: 사이트 전역 마우스 오른쪽 클릭 차단 (onContextMenu)
- **드래그/선택 방지**: CSS `user-select: none` 전역 적용, 텍스트 긁기 차단
- **개발자 도구 차단**: F12, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+C, Cmd+Option+I 등 차단
- **복사 방지**: Ctrl+C, Cmd+C 차단 (선택적)
- **이미지 드래그 방지**: `draggable={false}` 속성 적용

### 구현 위치
- 전역 보안 훅: `src/hooks/useContentProtection.tsx`
- App.tsx에서 전역 적용
- 모든 이미지 컴포넌트에 드래그 방지 적용

### 주의사항
- 사용자 경험을 해치지 않는 선에서 적용
- 콘솔 경고 메시지 포함 (선택)

## public 구조
/public
  /images
    - hero.jpg
    - room-1.jpg
    - room-2.jpg
    - room-3.jpg
    - room-4.jpg
    - room-5.jpg
    - room-6.jpg
    - room-7.jpg
    - og-image.jpg
  robots.txt
  sitemap.xml
  favicon.svg
  favicon.ico
  favicon.png
  apple-touch-icon.png

## AI 직원 구성

### PM (프로젝트 매니저)
- 전체 프로젝트 총괄

### SEO (SEO 전문가)
- 키워드 전략 수립
- 페이지 구조 설계

### COPY (카피라이터)
- 실제 영업진 말투 기반 카피 작성
- 오글거리는 표현 금지

### DEV (개발자)
- 폴더/파일/코드 생성

### QA (품질 관리)
- SEO 기준 검수
- 누락/중복 체크

## 작업 프로세스
모든 작업은 다음 순서로 진행:
PM → SEO → COPY → DEV → QA

## 적용 우선순위
이 규정은 기존의 모든 규칙보다 우선 적용됨
