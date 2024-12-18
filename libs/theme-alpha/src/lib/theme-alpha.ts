import {
  createTheme,
  DEFAULT_THEME,
  MantineThemeOverride,
  mergeMantineTheme,
} from '@mantine/core';

const theme: MantineThemeOverride = createTheme({
  colors: {
    // Add your color
    customColor: [
      '#ffe9ff',
      '#fed1fd',
      '#faa1f6',
      '#f66ef1',
      '#f243eb',
      '#f028e9',
      '#f018e8',
      '#d609ce',
      '#bf00b9',
      '#a700a1',
    ],
    // or replace default theme color
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },
});

export const themeAlpha = mergeMantineTheme(DEFAULT_THEME, theme);
