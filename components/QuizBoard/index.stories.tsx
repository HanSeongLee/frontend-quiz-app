import { Meta, StoryObj } from '@storybook/react';
import QuizBoard from './index';
import data from 'data/data.json';

const meta: Meta<typeof QuizBoard> = {
    title: 'Components/QuizBoard',
    component: QuizBoard,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof QuizBoard>;

const accessibilityQuiz = data.quizzes.find((quiz) => quiz.title.toLowerCase() === 'accessibility');
const currentQuestionNumber = 5;
const numberOfQuestions = accessibilityQuiz?.questions.length;

export const Default: Story = {
    args: {
        question: accessibilityQuiz?.questions[currentQuestionNumber],
        currentQuestionNumber,
        numberOfQuestions,
        showResult: false,
        error: '',
    },
};
