import { forwardRef, memo, type HTMLAttributes, type ReactNode } from "react";
import styles from './CardContainer.module.scss';
import clsx from "clsx";

export interface CardContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  extra?: ReactNode;
  children: ReactNode;
  // className: string;
}

const CardContainerBase = forwardRef<HTMLDivElement, CardContainerProps>((props, ref) => {
  const {
    title,
    extra,
    children,
    ...rest
  } = props;

  return (
    <section
      ref={ref}
      {...rest}
      className={clsx(styles.cardContainer)}
    >
      <div className={clsx(styles.cardContainerHeader)}>
        <div className={clsx(styles.cardIconSlot)}>{extra}</div>
        <div className={clsx(styles.cardTitleBox)}>
          <h2 className={clsx(styles.cardTitle)}>{title}</h2>
        </div>
      </div>
      <div className={clsx(styles.cardContent)}>{children}</div>
      <div className={clsx(styles.cardFooter)}></div>
    </section>
  )
});

export const CardContainer = memo(CardContainerBase);