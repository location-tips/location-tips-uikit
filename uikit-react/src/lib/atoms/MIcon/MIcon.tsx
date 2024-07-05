import React, { FC, SVGProps, useEffect, useRef, useState } from 'react';
import { IconProps } from '../../types/Icons';

type MIconProps = SVGProps<SVGElement> & {
    mode: 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';
} & IconProps;

export const IconModeIndex = new Map<MIconProps["mode"], number>([
    ['regular', 0],
    ['thin', 1],
    ['light', 2],
    ['bold', 3],
    ['fill', 4],
    ['duotone', 5],
]);

export const MIcon = ({ name, catalog, mode, width, height, viewBox, ...restProps }: MIconProps) => {
    const ImportedIconRef = useRef<FC<SVGProps<SVGElement>>>();
    const Icon = ImportedIconRef.current;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                ImportedIconRef.current = (await import(`../../icons/${catalog}/${name}.svg?react`)).default as React.FC<SVGProps<SVGElement>>;
                setLoaded(true);
            } catch (e) {
                console.log(`Icon ${name} not found in catalog ${catalog}`);
            }
        })();
    }, [name, catalog, mode]);

    const gap = 16;
    const finalWidth = Number(width ?? 32);
    const finalHeight = Number(height ?? finalWidth);
    const xPosition = (IconModeIndex.get(mode) ?? 0) * (32 + gap);
    const finalViewBox = viewBox ?? `${xPosition} 0 32 32`;

    return <>
        {loaded && Icon && <Icon width={finalWidth} height={finalHeight} viewBox={finalViewBox} {...restProps} />}
    </>
}

export default MIcon;
