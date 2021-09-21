import React, { useState } from 'react';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';
interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: { color: string; background: string };
}
const themes: IThemeProps = {
  light: {
    color: '#000',
    background: '#eee',
  },
  dark: {
    color: '#fff',
    background: '#222',
  },
};

export const ThemeContext = React.createContext(themes.light);
const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const positions = useMousePosition();
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random');
  const dogResult = data as IShowResult;
  return (
    <div className='App'>
      <ThemeContext.Provider value={themes.light}>
        <div>-----------第一个组件hello------------</div>
        <Hello />
        <div>------------第二个组件点赞---------------</div>
        <LikeButton />
        <button onClick={() => setShow(!show)}>切换</button>
        <div>---------------第三个组件鼠标位置</div>
        {show && <MouseTracker />}
        <div>自定义hooks展示内容-----------</div>
        <div>
          {positions.x}，{positions.y}
        </div>
        <div>显示加载图----------------</div>
        {loading ? (
          <p>dogLoading</p>
        ) : (
          <img
            style={{ width: '100px', height: '100px' }}
            src={dogResult && dogResult.message}
            alt=''
          />
        )}
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
