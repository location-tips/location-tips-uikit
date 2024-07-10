import { useEffect } from 'react';

type ThemeProps = {
  theme: string;
  brand: string;
  platform: string;
};

export const MTheme = ({ theme, brand, platform }: ThemeProps) => {
  useEffect(() => {
    document.getElementsByTagName('html')[0].dataset.theme = theme;
  }, [brand, platform]);

  return null;
};

export default MTheme;
