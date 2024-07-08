import whiteLabel from './brand/whitelabel.json';
import brand01 from './brand/brand01.json';
import brand02 from './brand/brand02.json';

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

export default {
  whiteLabel: parsePalette(whiteLabel),
  brand01: parsePalette(brand01),
  brand02: parsePalette(brand02),
};
