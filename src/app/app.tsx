// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { lazy, Suspense } from 'react';
const Mobx = lazy(() => import('remoteApp/Mobx') as any);

export function App() {
  return (
    <div>
        <Mobx />
    </div>
  );
}

export default App;