import React from 'react';

interface IHelloProps {
  message?: string;
}

// react官方定义的interface:react.FC,接受一个泛型，经过interface和泛型的修饰，props被PropsWithChildren定义
// 定义后Hello具备该接口的属性
const Hello: React.FunctionComponent<IHelloProps> = props => {
  return <div>{props.message}</div>;
};

Hello.defaultProps = {
  message: 'welcome ts',
};
export default Hello;
