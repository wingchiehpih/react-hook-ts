import React, { useContext } from 'react';
import { ThemeContext } from '../App';
interface IHelloProps {
  message?: string;
}

// react官方定义的interface:react.FC,接受一个泛型，经过interface和泛型的修饰，props被PropsWithChildren定义
// 定义后Hello具备该接口的属性

const Hello: React.FunctionComponent<IHelloProps> = props => {
  const theme = useContext(ThemeContext);

  const style = {
    background: theme.background,
    color: theme.color,
  };
  return <div style={style}>{props.message}</div>;
};

Hello.defaultProps = {
  message: 'welcome ts',
};
export default Hello;
