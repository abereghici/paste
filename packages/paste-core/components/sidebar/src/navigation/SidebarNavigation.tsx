import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';
import type {ThemeShape} from '@twilio-paste/theme';

import {SidebarNavigationContext} from './SidebarNavigationContext';

/**
 * This wrapper applies styles that customize the scrollbar and its track,
 * as well as using a gradient to fade out the top and bottom of the sidebar
 * only when they are scrolled out of view
 */
const SidebarNavigationWrapper = styled.div(({theme}: {theme: ThemeShape}) => {
  const {colorBackgroundInverse, colorBackgroundInverseStronger} = theme.backgroundColors;

  return css({
    overflowScrolling: 'touch',
    // CSS magic to apply shadow on top and bottom of container when they scroll
    background: `linear-gradient(${colorBackgroundInverse} 33%, rgba(20,28,44, 0)),
    linear-gradient(rgba(20,28,44, 0), ${colorBackgroundInverse} 66%) 0 100%,
    radial-gradient(farthest-side at 50% 100%, rgba(57, 71, 98, 0.5), rgba(0,0,0,0)) 0 100%`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 15px, 100% 15px, 100% 5px, 100% 5px',
    backgroundAttachment: `local, local, scroll, scroll`,
    // Scrollbar
    '::-webkit-scrollbar': {
      width: '10px',
    },
    // Track
    '::-webkit-scrollbar-track': {
      background: colorBackgroundInverse,
    },
    // Handle
    '::-webkit-scrollbar-thumb': {
      background: colorBackgroundInverseStronger,
      borderRadius: '10px',
    },
    // Handle on hover
    '::-webkit-scrollbar-thumb:hover': {
      background: colorBackgroundInverseStronger,
    },
  });
});

export interface SidebarNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: BoxProps['element'];
  hideItemsOnCollapse?: boolean;
  hierarchical?: boolean;
}

export const SidebarNavigation = React.forwardRef<HTMLDivElement, SidebarNavigationProps>(
  ({element = 'SIDEBAR_NAVIGATION', hideItemsOnCollapse = false, hierarchical = false, children, ...props}, ref) => {
    return (
      <SidebarNavigationContext.Provider
        value={{
          hideItemsOnCollapse,
          hierarchical,
        }}
      >
        <Box
          {...safelySpreadBoxProps(props)}
          as={SidebarNavigationWrapper as any}
          element={element}
          ref={ref}
          transition="opacity 150ms ease"
          maxHeight="100%"
          overflowY="auto"
          overflowX="hidden"
          paddingY="space50"
          paddingX="space60"
          flexGrow={1}
        >
          {children}
        </Box>
      </SidebarNavigationContext.Provider>
    );
  }
);
SidebarNavigation.displayName = 'SidebarNavigation';