import React, { ReactNode } from 'react';
import { Img } from './Img';

interface WaveInnerPropsI {
  type: 'top' | 'bottom';
}

function WaveInner({ type }: WaveInnerPropsI) {
  return (
    <div className={`pt-64 xl:pt-128 ${type === 'top' ? '' : 'bg-[#FFF8F3]'}`}>
      <Img
        src={`https://raw.githubusercontent.com/Leon740/vladis-mobil-grooming-frontend/main/src/assets/images/general/wave_${type}.png`}
        alt="Vladis Mobil Grooming"
        className="w-full h-64 xl:h-128"
      />
    </div>
  );
}

interface WavePropsI {
  children: ReactNode;
}

export function Wave({ children }: WavePropsI) {
  return (
    <>
      <WaveInner type="top" />
      <div className="bg-[#FFF8F3]">{children}</div>
      <WaveInner type="bottom" />
    </>
  );
}
