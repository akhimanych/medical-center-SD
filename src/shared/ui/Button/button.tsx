import clsx from 'clsx';

import type { ButtonProps } from './types';

import styles from './button.module.css';

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button_variant_${variant}`],
        styles[`button_size_${size}`],
        fullWidth && styles.button_fullWidth,
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}