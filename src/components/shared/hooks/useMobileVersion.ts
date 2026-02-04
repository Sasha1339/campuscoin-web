import {useEffect, useState} from 'react';

export function useMediaQuery(queryForMobile: string, queryForTablet?: string) {
  const [platform, setPlatform] = useState<'desktop' | 'tablet' | 'phone'>('desktop');

  useEffect(() => {
    const mediaQueryForPhone = window.matchMedia(queryForMobile);
    const isPhone = mediaQueryForPhone.matches;
    setPlatform(mediaQueryForPhone.matches ? 'phone' : 'desktop');
    // Установка начального значения

    const handleChangeForPhone = (event: any) => {
      setPlatform(event.matches ? 'phone' : 'desktop');
    };

    // Современный API
    mediaQueryForPhone.addEventListener('change', handleChangeForPhone);
    // Для совместимости: mediaQuery.addListener(handleChange);


    if (queryForTablet) {
      const mediaQueryForTablet = window.matchMedia(queryForTablet);
      if (!isPhone) {
        setPlatform(mediaQueryForTablet.matches ? 'tablet' : 'desktop');
      }
      // Установка начального значения

      const handleChangeForTablet = (event: any) => {
        if (platform === 'desktop') {
          setPlatform(event.matches ? 'tablet' : 'desktop');
        }
      };

      // Современный API
      mediaQueryForTablet.addEventListener('change', handleChangeForTablet);
      // Для совместимости: mediaQuery.addListener(handleChange);
    }


  }, [queryForMobile, queryForTablet]);

  return { platform };
}
