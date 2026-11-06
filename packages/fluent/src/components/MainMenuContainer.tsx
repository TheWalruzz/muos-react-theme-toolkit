import { Box } from "./Box";
import { Default } from "./Default";
import styles from "./MainMenuContainer.module.css";

interface Props {
  mainItems?: JSX.Element[];
  miscItems?: JSX.Element[];
  showBackground?: boolean;
  transparentHeader?: boolean;
}

export function MainMenuContainer({
  mainItems = [],
  miscItems = [],
  showBackground,
  transparentHeader = true,
}: Props) {
  return (
    <Default
      showBackground={showBackground}
      transparentHeader={transparentHeader}
    >
      <div className={styles.MainMenuContainer}>
        <div className={styles.mainList}>{mainItems}</div>
        <div className={styles.miscListContainer}>
          <Box className={styles.miscList}>{miscItems}</Box>
        </div>
      </div>
    </Default>
  );
}
