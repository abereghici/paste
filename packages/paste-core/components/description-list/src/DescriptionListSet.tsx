import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export const StyledDescriptionListSet = styled.div(
  css({
    "& > dd:last-of-type": {
      marginBottom: "space60",
    },
    "& > dd:not(:last-of-type)": {
      marginBottom: "space10",
    },
    "& > dt:last-of-type": {
      marginBottom: "space20",
    },
    "& > dt:not(:last-of-type)": {
      marginBottom: "space10",
    },
  }),
);

export interface DescriptionSetListProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DESCRIPTION_LIST_SET'
   * @type {BoxProps['element']}
   * @memberof DescriptionSetListProps
   */
  element?: BoxProps["element"];
}

const DescriptionListSet = React.forwardRef<HTMLDivElement, DescriptionSetListProps>(
  ({ element = "DESCRIPTION_LIST_SET", children, ...props }, ref) => {
    return (
      // @ts-expect-error Use Box as styled div to apply complex css to the child terms and details
      <Box {...safelySpreadBoxProps(props)} as={StyledDescriptionListSet} ref={ref} element={element}>
        {children}
      </Box>
    );
  },
);

DescriptionListSet.displayName = "DescriptionListSet";

export { DescriptionListSet };
