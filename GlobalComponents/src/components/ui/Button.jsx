/**
 * Simple Button component (Beginner-friendly)
 *
 * Examples you can copy/paste:
 *  <Button>Click me</Button>               // renders a <button>
 *  <Button href="/docs">Docs</Button>     // renders an <a> with button styles
 *  <Button variant="secondary" size="sm">Small</Button>
 *
 * Props explained:
 *  - variant: visual style ("primary" | "secondary" | "ghost")
 *  - size: padding and font size ("sm" | "md" | "lg")
 *  - href: when provided, the Button renders as an <a> so it works like a normal link
 *  - className / class: extra CSS classes (same as `class` in HTML)
 *
 * Note: This component uses Tailwind CSS utility classes. If you know HTML/CSS
 * and how classes work, treat `className` exactly like the `class` attribute.
 */
const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none disabled:opacity-50";

const variants = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
  ghost: "bg-transparent text-black hover:bg-gray-100",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-4 text-lg",
};

/**
 * Button component
 * @param {{
 *   children?: import('react').ReactNode,
 *   variant?: 'primary'|'secondary'|'ghost',
 *   size?: 'sm'|'md'|'lg'|'small'|'medium'|'large',
 *   type?: string,
 *   href?: string,
 *   className?: string,
 *   class?: string,
 * }} props
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  href = undefined,
  className = "",
  class: classProp = "",
  ...props
}) {
  // Friendly size names map. This lets beginners pass either 'small' or 'sm', etc.
  const sizeNames = {
    small: sizes.sm,
    medium: sizes.md,
    large: sizes.lg,
    sm: sizes.sm,
    md: sizes.md,
    lg: sizes.lg,
  };

  // Choose the final size classes. The component supports both 'sm' and 'small'.
  const sizeClass = sizes[size] || sizeNames[size] || "";

  // Choose the visual variant ('primary', 'secondary', 'ghost'). Falls back to 'primary'.
  const variantClass = variants[variant] || variants.primary;

  // The final CSS classes are built by joining base, variant, size, and any extra classes
  // you pass through `class` or `className`.

  // Merge both `className` (React convention) and `class` (Astro users may pass this)
  const classes = [baseStyles, variantClass, sizeClass, className, classProp]
    .filter(Boolean)
    .join(" ");

  // If the `href` prop exists, render an <a> element. This is the preferred
  // way to create links that look like buttons (good for SEO and accessibility).
  if (href) {
    const { type: _omitType, ...rest } = props;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  // Otherwise render a normal <button> for actions that depend on JavaScript
  // (e.g., open a modal, submit a form, run onClick handlers).
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
