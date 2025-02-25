import type { BoxElementProps, BoxStyleProps } from "@twilio-paste/box";
import type {
  MenuPrimitiveItemCheckboxProps,
  MenuPrimitiveItemProps,
  MenuPrimitiveItemRadioProps,
  MenuPrimitiveProps,
  MenuPrimitiveSeparatorProps,
} from "@twilio-paste/menu-primitive";
import type { HTMLPasteProps, ValueOf } from "@twilio-paste/types";

import type { MenuItemVariants } from "./constants";

export type MenuProps = MenuPrimitiveProps & { "aria-label": string; element?: BoxElementProps["element"] };

export type MenuItemVariant = ValueOf<typeof MenuItemVariants>;

export type MenuItemVariantStyles = {
  [key in MenuItemVariant]?: BoxStyleProps;
};

export interface MenuItemProps extends MenuPrimitiveItemProps {
  href?: string;
  element?: BoxElementProps["element"];
  variant?: MenuItemVariant;
  as?: any;
}
export interface MenuItemCheckboxProps extends MenuPrimitiveItemCheckboxProps {
  href?: string;
  element?: BoxElementProps["element"];
  variant?: MenuItemVariant;
  as?: any;
}
export interface MenuItemRadioProps extends MenuPrimitiveItemRadioProps {
  href?: string;
  element?: BoxElementProps["element"];
  variant?: MenuItemVariant;
  as?: any;
}

export interface MenuGroupProps extends HTMLPasteProps<"div"> {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  element?: BoxElementProps["element"];
}

export type MenuSeparatorProps = MenuPrimitiveSeparatorProps & { element?: BoxElementProps["element"] };
