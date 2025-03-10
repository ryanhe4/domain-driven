import { PropsWithChildren } from 'react';

export function HospitalTabLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full mx-auto max-w-[1200px] px-4 lg:px-14 xl:px-24 my-8">
      {children}
    </div>
  );
}
