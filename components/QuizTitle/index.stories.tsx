import { Meta, StoryObj } from '@storybook/react';
import QuizTitle from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof QuizTitle> = {
    title: 'Components/QuizTitle',
    component: QuizTitle,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof QuizTitle>;

export const Default: Story = {
    args: {
        iconName: IconName.ACCESSIBILITY,
        children: 'Accessibility',
    },
};
