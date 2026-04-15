import { memo, type ComponentPropsWithoutRef, type ElementType } from "react";

interface CustomProps {
  btnLabel: string;
  textColor?: string;
  customClass?: string;
}

export type TextButtonProps<T extends ElementType> = CustomProps & {
  as?: T
} & ComponentPropsWithoutRef<T>;

function TextButtonBase<T extends ElementType = "button">({as, ...props}: TextButtonProps<T>) {
  const Tag = as || 'button';
  const {
    btnLabel,
    textColor,
    customClass,
    ...rest
  } = props;

  const isButton = Tag === 'button';

  return (
    <Tag
      className={`${isButton ? 'buttonReset' : ''} ${customClass}`}
      {...rest}
    >
      <span
        className={`${textColor || ''} secondaryText secondaryText--color1 `}
      >
          {btnLabel}
      </span>
    </Tag>
  )
};

export const TextButton = memo(TextButtonBase) as typeof TextButtonBase;