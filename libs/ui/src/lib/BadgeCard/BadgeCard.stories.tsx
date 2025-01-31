import type { Meta, StoryObj } from '@storybook/react';
import { BadgeCard } from './BadgeCard';

const meta: Meta<typeof BadgeCard> = {
  component: BadgeCard,
  title: 'BadgeCard',
};
export default meta;
type Story = StoryObj<typeof BadgeCard>;

export const Primary: Story = {
  args: {
    image:
      'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    title: 'Verudela Beach',
    country: 'Croatia',
    description:
      'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
    badges: [
      { emoji: '☀️', label: 'Sunny weather' },
      { emoji: '🦓', label: 'Onsite zoo' },
      { emoji: '🌊', label: 'Sea' },
      { emoji: '🌲', label: 'Nature' },
      { emoji: '🤽', label: 'Water sports' },
    ],
  },
};
