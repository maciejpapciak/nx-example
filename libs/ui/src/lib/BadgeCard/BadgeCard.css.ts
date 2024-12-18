import { style } from '@monorepo-example/theme-base';

export const card = style((theme) => ({
  backgroundColor: `light-dark(${theme.colors.white}, ${theme.colors.dark[7]})`,
}));

export const section = style((theme) => ({
  borderBottom: `1px solid light-dark(${theme.colors.gray[3]}, ${theme.colors.dark[4]})`,
  paddingLeft: theme.spacing.md,
  paddingRight: theme.spacing.md,
  paddingBottom: theme.spacing.md,
}));

export const like = style((theme) => ({
  color: theme.colors.red[6],
  width: '20px',
  height: '20px',
}));

export const label = style((theme) => ({
  textTransform: 'uppercase',
  fontSize: theme.fontSizes.xs,
  fontWeight: 700,
}));
