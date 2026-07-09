
import { useState, lazy, Suspense } from 'react';

import Message from './Message';
const Emoji = lazy(() => import('./Emoji'));

function App() {

  const [showEmoji, setShowEmoji] = useState(false);

  return (
    <>
      <Message />
      <button onClick={() => setShowEmoji(!showEmoji)}>Show Emoji</button>
      {showEmoji && (
        <Suspense fallback="Loading...">
          <Emoji />
        </Suspense>
      )}
    </>
  )
}

export default App
