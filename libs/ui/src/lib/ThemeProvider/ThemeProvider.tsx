import { MantineProvider, MantineProviderProps } from '@mantine/core';

export const ThemeProvider = ({
  children,
  theme,
  ...props
}: MantineProviderProps) => {
  return (
    <MantineProvider theme={theme} {...props}>
      {children}
    </MantineProvider>
  );
};
