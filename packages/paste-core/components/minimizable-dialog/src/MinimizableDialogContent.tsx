import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { MinimizableDialogContext } from "./MinimizableDialogContext";

export interface MinimizableDialogContentProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  element?: BoxProps["element"];
}

const MinimizableDialogContent = React.forwardRef<HTMLDivElement, MinimizableDialogContentProps>(
  ({ children, element = "MINIMIZABLE_DIALOG_CONTENT", ...props }, ref) => {
    const { minimized } = React.useContext(MinimizableDialogContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        display={minimized ? "none" : "block"}
        borderBottomLeftRadius="borderRadius20"
        borderBottomRightRadius="borderRadius20"
      >
        {children}
      </Box>
    );
  },
);

MinimizableDialogContent.displayName = "MinimizableDialogContent";
export { MinimizableDialogContent };
