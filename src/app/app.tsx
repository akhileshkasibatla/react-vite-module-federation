// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Suspense, lazy } from 'react';
const MobxTest = lazy(() => import('viteRemoteApp/MobxTest').then(module => ({ default: module.MobxTest })) as any)

export function App() {
  return (
    <div>
      <Suspense fallback="<div>Loading.....</div>">
        <MobxTest />
      </Suspense>
    </div>
  );
}

export default App;
