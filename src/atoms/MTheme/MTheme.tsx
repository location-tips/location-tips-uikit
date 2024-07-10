import { useEffect } from 'react';

type ThemeProps = {
  theme: string;
  brand: string;
  platform: string;
};

export const MTheme = ({ theme, brand, platform }: ThemeProps) => {
  useEffect(() => {
    document.getElementsByTagName('html')[0].dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.getElementsByTagName('html')[0].dataset.brand = brand;
  }, [brand]);

  useEffect(() => {
    document.getElementsByTagName('html')[0].dataset.platform = platform;
  }, [platform]);

  return null;
};

export default MTheme;
