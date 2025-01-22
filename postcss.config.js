import postcssAdvancedVariables from "postcss-advanced-variables";
import postcssNested from "postcss-nested";

export default {
  plugins: [postcssNested(), postcssAdvancedVariables()],
};
