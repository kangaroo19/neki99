import { useEffect, useState } from 'react';

export const useCurrentTimeHook = () => {
  const [currentTime, setCurrentTime] = useState({
    time: '',
    date: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${ampm}`;
      const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
        now.getDate()
      ).padStart(2, '0')}`;
      setCurrentTime({
        time: formattedTime,
        date: formattedDate,
      });
    };

    updateTime(); // 초기 실행
    const interval = setInterval(updateTime, 60000); // 매 분마다 갱신

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return currentTime;
};
