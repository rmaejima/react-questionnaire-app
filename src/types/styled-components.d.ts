import "styled-components";
import * as theme from "consts/theme";

type Theme = typeof theme;

// overload
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
