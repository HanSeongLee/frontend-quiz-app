import { Meta, StoryObj } from '@storybook/react';
import Title from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof Title> = {
    title: 'Components/Typography/Title',
    component: Title,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Small: Story = {
    args: {
        level: 1,
        size: 'small',
        children: 'Small',
    },
};

export const Medium: Story = {
    args: {
        level: 1,
        size: 'medium',
        children: 'Medium',
    },
};

export const Large: Story = {
    args: {
        level: 1,
        size: 'large',
        children: 'Large',
    },
};
