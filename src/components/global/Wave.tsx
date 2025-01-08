import { type ReactNode } from 'preact/compat';
import { Img } from './Img';

interface IWaveInnerProps {
  type: 'top' | 'bottom';
}

function WaveInner({ type }: IWaveInnerProps) {
  return (
    <div className={`pt-64 xl:pt-128 ${type === 'top' ? '' : 'bg-[#FFF8F3]'}`}>
      <Img
        src={`global/global_wave_${type}.png`}
        alt="Vladis Mobil Grooming"
        width={1920}
        height={128}
        className="w-full h-64 xl:h-128"
      />
    </div>
  );
}

interface IWaveProps {
  children: ReactNode;
}

export function Wave({ children }: IWaveProps) {
  return (
    <>
      <WaveInner type="top" />
      <div className="bg-[#FFF8F3]">{children}</div>
      <WaveInner type="bottom" />
    </>
  );
}
