import { Meta, StoryObj } from '@storybook/react';
import Text from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof Text> = {
    title: 'Components/Typography/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        size: 'medium',
        children: 'Default',
    },
};

export const Secondary: Story = {
    args: {
        type: 'secondary',
        children: 'Secondary',
    },
};

export const Display: Story = {
    args: {
        type: 'secondary',
        size: 'display',
        children: 'Display',
    },
};

export const Danger: Story = {
    args: {
        type: 'danger',
        children: 'Danger',
    },
};
