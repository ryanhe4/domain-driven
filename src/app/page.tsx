import { Suspense } from 'react';
import { PrefetchColorContainer } from '@/components/prefetch-color-container';

export default async function Home() {
  return (
    <div>
      <div>header onloading</div>
      <input placeholder={'test ui'} />
      <Suspense fallback={<div>loading home 3seconds</div>}>
        <PrefetchColorContainer />
      </Suspense>
    </div>
  );
}
