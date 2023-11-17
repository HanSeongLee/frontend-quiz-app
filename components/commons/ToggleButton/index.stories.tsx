import { Meta, StoryObj } from '@storybook/react';
import ToggleButton from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof ToggleButton> = {
    title: 'Components/ToggleButton',
    component: ToggleButton,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
    args: {
    },
};

export const ThemeToggle: Story = {
    args: {
        icons: {
            off: IconName.SUN_DARK,
            on: IconName.MOON_DARK,
        },
    },
};
