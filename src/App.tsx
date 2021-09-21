import React, { useState } from 'react';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
const App: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div className='App'>
      <div>-----------第一个组件hello------------</div>
      <Hello />
      <div>------------第二个组件点赞---------------</div>
      <LikeButton />
      <button onClick={() => setShow(!show)}>切换</button>
      <div>---------------第三个组件鼠标位置</div>
      {show && <MouseTracker />}
    </div>
  );
};

export default App;
