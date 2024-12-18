import type { Meta, StoryObj } from '@storybook/react';
import { ButtonCopy } from './CopyButton';

const meta: Meta<typeof ButtonCopy> = {
  component: ButtonCopy,
  title: 'ButtonCopy',
};
export default meta;
type Story = StoryObj<typeof ButtonCopy>;

export const Primary: Story = {
  args: {
    value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Skopiuj do schowka',
  },
};
