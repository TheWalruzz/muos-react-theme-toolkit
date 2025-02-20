import { PropsWithChildren, useEffect } from "react";
import classNames from "classnames";
import { useGlitch } from "@/utils/powerglitch";

import background from "./background.png";

import styles from "./Default.module.css";

interface Props extends PropsWithChildren {
  animationFrame?: number;
}

export function Default({ children, animationFrame = 0 }: Props) {
  const glitch = useGlitch({
    glitchTimeSpan: { start: 0, end: 1 },
    timing: { duration: 1500, iterations: 1 },
    playMode: "manual",
  });

  useEffect(() => {
    let timeout: number | null = null;

    if (animationFrame > 0) {
      glitch.startGlitch();
      timeout = window.setTimeout(() => {
        glitch.stopGlitch();
      }, animationFrame * (1 / 12) * 1000);
    }

    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [animationFrame, glitch]);

  return (
    <div className={styles.Default}>
      <div className={classNames(styles.background)}>
        <img ref={glitch.ref} src={background} />
      </div>
      {children}
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
