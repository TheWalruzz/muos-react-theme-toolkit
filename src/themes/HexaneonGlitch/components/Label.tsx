interface Props {
  text: string;
}

import styles from "./Label.module.css";

export function Label({ text }: Props) {
  return <div className={styles.Label}>{text}</div>;
}
