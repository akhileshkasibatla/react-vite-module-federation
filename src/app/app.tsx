// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { lazy, Suspense } from 'react';
const Mobx = lazy(() => import('remoteApp/Mobx') as any);

export function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Mobx />
      </Suspense>
    </>
  );
}

export default App;
