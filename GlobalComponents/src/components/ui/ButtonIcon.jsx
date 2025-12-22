import React from "react";
import Button from "./Button.jsx";
import * as Icons from "lucide-react";
// Some package builds export icons as the default export (CommonJS) and some as named exports (ESM).
// Normalize to a single object so `Icons[name]` works reliably.
const Lucide = Icons && Icons.default ? Icons.default : Icons;

/**
 * Button with icons (Beginner-friendly)
 *
 * Copy/paste examples:
 *  <ButtonIcon leftIcon="Plus">Add</ButtonIcon>             // use lucide icon name (string)
 *  <ButtonIcon icon={<PlusIcon/>} aria-label="Add" />        // use inline SVG / component
 *  <ButtonIcon href="/docs" leftIcon="ArrowRight">Docs</ButtonIcon> // link styled as button
 */

/**
 * @typedef ButtonIconProps
 * @property {string|import('react').ComponentType|import('react').ReactElement} [leftIcon]
 * @property {string|import('react').ComponentType|import('react').ReactElement} [rightIcon]
 * @property {string|import('react').ComponentType|import('react').ReactElement} [icon]
 * @property {import('react').ReactNode} [children]
 * @property {'primary'|'secondary'|'ghost'} [variant]
 * @property {string} [size]
 * @property {string} [href]
 * @property {string} [type]
 * @property {string} [className]
 */

/**
 * @param {ButtonIconProps} props
 */
export default function ButtonIcon({
  leftIcon = undefined,
  rightIcon = undefined,
  icon = undefined,
  children,
  variant = "primary",
  size = "md",
  href = undefined,
  type = "button",
  className = "",
  class: classProp = "",
  ...props
}) {
  const sizeMap = {
    small: "sm",
    medium: "md",
    large: "lg",
    sm: "sm",
    md: "md",
    lg: "lg",
  };
  const resolvedSize = sizeMap[(size || "md").toString()] || size;

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };
  const iconClass = iconSizes[resolvedSize] || iconSizes.md;

  const contentClasses = children
    ? "inline-flex items-center space-x-2"
    : "inline-flex items-center justify-center";

  const mergedClass = [className, classProp].filter(Boolean).join(" ");

  // renderIcon accepts 3 kinds of inputs for convenience:
  // 1) a string (lucide icon name, e.g. "Plus")
  // 2) an inline React element (e.g. <svg>...</svg>)
  // 3) a component/function reference (e.g. an imported icon component)
  // It returns a rendered icon with the correct sizing classes or null.
  const renderIcon = (iconProp) => {
    if (!iconProp) return null;

    // 1) If a string is passed, look up the icon in lucide by name.
    if (typeof iconProp === "string") {
      // Prefer the normalized `Lucide` object which handles both CommonJS (default export)
      // and ESM named exports. Fall back to `Icons` just in case.
      const Icon = (Lucide && Lucide[iconProp]) || Icons[iconProp];
      if (!Icon) {
        // Simple warning that helps beginners debug a misspelled icon name.
        console.warn(`lucide icon not found: ${iconProp}`);
        return null;
      }
      return <Icon className={iconClass} aria-hidden />;
    }

    // 2) If the user passed an inline element (like an SVG), clone it and set size.
    if (React.isValidElement(iconProp)) {
      return React.cloneElement(iconProp, {
        className: [iconClass, iconProp.props?.className]
          .filter(Boolean)
          .join(" "),
        "aria-hidden": true,
      });
    }

    // 3) If the user passed a component reference, render it with sizing.
    if (typeof iconProp === "function") {
      const IconComp = iconProp;
      return <IconComp className={iconClass} aria-hidden />;
    }

    return null;
  };

  const content = (
    <>
      {leftIcon ? renderIcon(leftIcon) : null}
      {children ? <span>{children}</span> : null}
      {rightIcon ? renderIcon(rightIcon) : null}
      {icon && !children ? renderIcon(icon) : null}
    </>
  );

  // Accessibility check: if the button has only an icon, ensure an aria-label exists.
  // This helps screen reader users know what the button does.
  if (!children && !props["aria-label"] && !props["ariaLabel"]) {
    // eslint-disable-next-line no-console
    console.warn(
      "ButtonIcon: icon-only button should have an aria-label for accessibility."
    );
  }

  if (href) {
    // Delegate to Button so anchor receives the same computed classes (base, variant, size)
    const { type: _omitType, ...rest } = props;
    return (
      <Button
        href={href}
        variant={variant}
        size={resolvedSize}
        className={`${mergedClass} ${contentClasses}`}
        {...rest}
      >
        {content}
      </Button>
    );
  }

  // Default to the styled Button for button semantics
  return (
    <Button
      variant={variant}
      size={resolvedSize}
      type={type}
      className={`${mergedClass} ${contentClasses}`}
      {...props}
    >
      {content}
    </Button>
  );
}
