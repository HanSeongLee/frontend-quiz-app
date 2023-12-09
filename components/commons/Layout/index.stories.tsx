import { Meta, StoryObj } from '@storybook/react';
import Layout from './index';

const meta: Meta<typeof Layout> = {
    title: 'Components/Layout',
    component: Layout,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    args: {
    },
};
