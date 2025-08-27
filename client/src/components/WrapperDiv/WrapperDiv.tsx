import * as React from 'react';

type Props = { children: React.ReactNode };

export const WrapperDiv: React.FC<Props> = ({ children }) => <div className="wrapper">{children}</div>
