/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '@mantine/core/styles.css';

import { useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { createTheme, useMantineColorScheme } from '@mantine/core';
import { ThemeProvider } from '../src/lib/ThemeProvider/ThemeProvider';

const theme = createTheme({
  colors: {
    // Add your color
    customColor: [
      '#fdfce4',
      '#f8f6d3',
      '#f0ecaa',
      '#e7e17c',
      '#e0d856',
      '#dbd33e',
      '#d9d02f',
      '#c0b820',
      '#aaa317',
      '#928d03',
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

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) =>
    setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return children;
}

export const decorators = [
  (renderStory: any) => (
    <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
  ),
  (renderStory: any) => (
    <ThemeProvider theme={theme}>{renderStory()}</ThemeProvider>
  ),
];
