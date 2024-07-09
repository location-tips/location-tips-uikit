import React, { Suspense } from 'react';
import { MIconProps } from './types';
import * as Icons from './index';

type MIconLoaderProps = MIconProps & {
  name: string;
};

export const MIconLoader = ({ name, ...restProps }: MIconLoaderProps) => {
  // console.log('name', Icons);

  const LazyComponent = (Icons as any)[name];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...restProps} />
    </Suspense>
  );
};

export default MIconLoader;
