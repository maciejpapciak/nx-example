import {
  createTheme,
  DEFAULT_THEME,
  MantineThemeOverride,
  mergeMantineTheme,
} from '@mantine/core';
import { themeToVars, MantineVars } from '@mantine/vanilla-extract';
import { StyleRule, style as veStyle } from '@vanilla-extract/css';

const themeBaseOverride: MantineThemeOverride = createTheme({
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

type ColorTuple = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export type UiThemeVars = MantineVars & {
  colors: MantineVars['colors'] & {
    customColor: ColorTuple;
  };
};

export const themeBase = mergeMantineTheme(DEFAULT_THEME, themeBaseOverride);

export const themeBaseVars = themeToVars(themeBase) as UiThemeVars;

type ThemeBaseVars = typeof themeBaseVars;

type ThemedStyle = (theme: ThemeBaseVars) => StyleRule;

export const style = (themedStyleFn: ThemedStyle) =>
  veStyle(themedStyleFn(themeBaseVars));
