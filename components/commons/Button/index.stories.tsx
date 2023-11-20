import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
    },
};

export const Selection: Story = {
    args: {
        children: '4.5 : 1',
        variant: 'selection',
    },
};

export const SelectionLink: Story = {
    args: {
        children: 'HTML',
        variant: 'selection',
        href: '#html',
        preIcon: 'html',
    },
};
