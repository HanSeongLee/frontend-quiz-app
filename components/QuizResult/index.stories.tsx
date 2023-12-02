import { Meta, StoryObj } from '@storybook/react';
import QuizResult from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof QuizResult> = {
    title: 'Components/QuizResult',
    component: QuizResult,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof QuizResult>;

export const Default: Story = {
    args: {
        iconName: IconName.ACCESSIBILITY,
        title: 'Accessibility',
        score: 8,
        maxScore: 10,
    },
};
