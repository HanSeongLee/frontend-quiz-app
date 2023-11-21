import { Meta, StoryObj } from '@storybook/react';
import SelectionGroup from './index';

const meta: Meta<typeof SelectionGroup> = {
    title: 'Components/SelectionGroup',
    component: SelectionGroup,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof SelectionGroup>;

export const Default: Story = {
    args: {
        items: [
            '4.5 : 1',
            '3 : 1',
            '2.5 : 1',
            '5 : 1',
        ],
        answer: '4.5 : 1',
        showResult: false,
    },
};
