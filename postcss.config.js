import postcssFor from "postcss-for";
import postcssNested from "postcss-nested";

export default {
  plugins: [postcssNested(), postcssFor()],
};
