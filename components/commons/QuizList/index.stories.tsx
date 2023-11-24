import { Meta, StoryObj } from '@storybook/react';
import QuizList from './index';
import data from 'data/data.json';
import { Quiz } from 'types/quiz';

const meta: Meta<typeof QuizList> = {
    title: 'Components/QuizList',
    component: QuizList,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof QuizList>;

export const Default: Story = {
    args: {
        quizzes: data.quizzes as Quiz[],
    },
};
