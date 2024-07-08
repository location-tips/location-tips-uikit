import whiteLabel from './brand/whitelabel.json';
import brand01 from './brand/brand01.json';
import brand02 from './brand/brand02.json';
import styles from './Palette.module.css';
import { useEffect } from 'react';

function parsePalette(source: any) {
  const dest: any = {};

  source.variables.forEach((variable: any) => {
    const path = variable.name.split('/');

    if (variable.resolvedType === 'COLOR') {
      if (!dest[path[0]]) {
        dest[path[0]] = {};
      }

      if (!dest[path[0]][path[1]]) {
        dest[path[0]][path[1]] = {};
      }

      dest[path[0]][path[1]][path[2]] = variable;
    }
  });

  return dest;
}

type Brands = 'whiteLabel' | 'brand01' | 'brand02';

type PaletteProps = {
  brand: Brands;
};

type Color = { r: number; g: number; b: number; a: number };

const getColor = (color: Color) =>
  `rgba(${Math.round(color.r * 255)}, ${Math.round(
    color.g * 255
  )}, ${Math.round(color.b * 255)}, ${Math.round(color.a)})`;

export const Palette = ({ brand }: PaletteProps) => {
  const palettes: Record<
    Brands,
    Record<string, Record<string, { value: Color }>[]>
  > = {
    whiteLabel: parsePalette(whiteLabel),
    brand01: parsePalette(brand01),
    brand02: parsePalette(brand02),
  };

  useEffect(() => {
    let brandDataName = 'white-label';

    switch (brand) {
      case 'whiteLabel':
        brandDataName = 'white-label';
        break;
      case 'brand01':
        brandDataName = 'brand-01';
        break;
      case 'brand02':
        brandDataName = 'brand-02';
        break;
      default:
        brandDataName = 'white-label';
    }

    document.getElementsByTagName('html')[0].dataset.brand = brandDataName;
  }, [brand]);

  return (
    <div>
      <div className={styles.colorPalette}>
        {Object.entries(palettes[brand].palette).map((token, i) => {
          return (
            <div className={styles.colorPaletteItem} key={i}>
              {Object.entries(token[1]).map((value) => (
                <div className={styles.colorPaletteItemColor} key={value[0]}>
                  <div
                    className={styles.colorPaletteItemColorSwatch}
                    style={{
                      backgroundColor: getColor(value[1].value),
                    }}
                  ></div>
                  <div className={styles.colorPaletteItemColorName}>
                    --{token[0]}-{value[0]}
                  </div>
                  <div className={styles.colorPaletteItemColorValue}>
                    {getColor(value[1].value)}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Palette;
