import { Meta, StoryObj } from '@storybook/react';
import Container from './index';

const meta: Meta<typeof Container> = {
    title: 'Components/Container',
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
    args: {
        children: 'Container Area',
        style: {
            backgroundColor: 'red',
            textAlign: 'center',
        }
    },
};
