import { useEffect } from 'react';

/**
 * 콘텐츠 보호 훅
 * - 우클릭 방지
 * - 개발자 도구 단축키 차단
 * - 복사 방지
 */
export const useContentProtection = () => {
  useEffect(() => {
    // 우클릭 방지
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 개발자 도구 단축키 차단
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I (개발자 도구)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C (요소 검사)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J (콘솔)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (소스 보기)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }

      // Cmd+Option+I (Mac 개발자 도구)
      if (e.metaKey && e.altKey && e.key === 'i') {
        e.preventDefault();
        return false;
      }

      // Cmd+Option+C (Mac 요소 검사)
      if (e.metaKey && e.altKey && e.key === 'c') {
        e.preventDefault();
        return false;
      }

      // Cmd+Option+J (Mac 콘솔)
      if (e.metaKey && e.altKey && e.key === 'j') {
        e.preventDefault();
        return false;
      }

      // Ctrl+C (복사) - 선택적 활성화
      // if (e.ctrlKey && e.key === 'c') {
      //   e.preventDefault();
      //   return false;
      // }
    };

    // 이벤트 리스너 등록
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // 개발자 도구 감지 (선택적)
    // const detectDevTools = () => {
    //   const threshold = 160;
    //   const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    //   const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    //
    //   if (widthThreshold || heightThreshold) {
    //     console.warn('개발자 도구 감지됨');
    //   }
    // };
    // const interval = setInterval(detectDevTools, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      // clearInterval(interval);
    };
  }, []);
};
