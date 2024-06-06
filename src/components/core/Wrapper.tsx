import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Wrapper: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto w-full max-w-5xl p-2.5 ' >
      {children}
    </div>
  );
};

export default Wrapper;