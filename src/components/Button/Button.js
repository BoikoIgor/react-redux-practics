import { clsx } from 'clsx';
import { Btn } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <Btn
      className={clsx(Btn, {
        [Btn.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </Btn>
  );
};
