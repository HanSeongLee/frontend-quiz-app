import { Meta, StoryObj } from '@storybook/react';
import Icon from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        name: IconName.ACCESSIBILITY,
        size: 'small',
    },
};
