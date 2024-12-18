import { ButtonProps, Button as MButton } from '@mantine/core';

export function Button({ children, ...props }: ButtonProps) {
  return <MButton {...props}>{children}</MButton>;
}
