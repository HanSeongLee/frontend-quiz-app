import type { Meta, StoryObj } from '@storybook/react';

import Home from './index.page';
import { Quiz } from 'types/quiz';
import data from 'data/data.json';

const meta: Meta<typeof Home> = {
    title: 'Pages/Home',
    component: Home,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Home>;

const quizzes: Quiz[] = data.quizzes as Quiz[];

export const HomePage: Story = {
    args: {
        quizzes,
    },
};
