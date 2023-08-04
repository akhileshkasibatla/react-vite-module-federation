// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { lazy, Suspense } from 'react';
// const Mobx = lazy(() => import('remoteApp/Mobx') as any);
// const Mobx = lazy(() => import('viteRemoteApp/Mobx') as any);
import Mobx from 'viteRemoteApp/Mobx';

export function App() {
  return (
    <div>
        <Mobx />
    </div>
  );
}

export default App;