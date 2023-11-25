import { Meta, StoryObj } from '@storybook/react';
import Block from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof Block> = {
    title: 'Components/Block',
    component: Block,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Block>;

export const Icon: Story = {
    args: {
        icon: {
            name: IconName.ACCESSIBILITY,
            size: 'xlarge',
        },
    },
};

export const Counter: Story = {
    args: {
        counter: true,
    },
};
