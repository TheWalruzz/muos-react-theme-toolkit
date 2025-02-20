import { PropsWithChildren } from "react";

import styles from "./Default.module.css";

export function Default({ children }: PropsWithChildren) {
  return (
    <div className={styles.Default}>
      {children}
      <div className={styles.scanlines} />
      <svg width="0" height="0">
        <filter id="rgb-split">
          <feOffset in="SourceGraphic" dx="1" dy="1" result="layer-one" />
          <feComponentTransfer in="layer-one" result="red">
            <feFuncR type="identity" />
            <feFuncG type="discrete" tableValues="0" />
            <feFuncB type="discrete" tableValues="0" />
          </feComponentTransfer>

          <feOffset in="SourceGraphic" dx="-1" dy="-1" result="layer-two" />
          <feComponentTransfer in="layer-two" result="cyan">
            <feFuncR type="discrete" tableValues="0" />
            <feFuncG type="identity" />
            <feFuncB type="identity" />
          </feComponentTransfer>

          <feBlend in="red" in2="cyan" mode="screen" result="color-split" />
        </filter>
      </svg>
    </div>
  );
}
