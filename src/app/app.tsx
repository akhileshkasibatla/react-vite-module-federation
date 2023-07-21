// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { lazy, Suspense } from 'react';
const RemoteApp = lazy(() => import('remoteApp/App') as any);

export function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp />
      </Suspense>
    </>
  );
}

export default App;
