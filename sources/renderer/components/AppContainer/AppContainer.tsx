import { ReactNode } from 'react';

import styles from './AppContainerStyles';

interface IProps {
  children: ReactNode;
}

export default function AppContainer(props: IProps) {
  return <div style={styles.wrapper}>{props.children}</div>;
}
