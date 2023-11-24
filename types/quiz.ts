export type Quiz = {
    title: string;
    icon: QuizIconName;
    questions: Question[];
};

export type Question = {
    question: string;
    options: string[];
    answer: string;
};

export type QuizIconName = 'html' | 'css' | 'javascript' | 'accessibility';
