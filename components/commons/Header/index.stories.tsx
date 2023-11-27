import { Meta, StoryObj } from '@storybook/react';
import Header from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
    },
};

export const Title: Story = {
    args: {
        iconName: IconName.ACCESSIBILITY,
        title: 'Accessibility',
    },
};
