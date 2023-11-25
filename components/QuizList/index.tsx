import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { Quiz } from 'types/quiz';
import Button from 'components/commons/Button';

interface IProps extends HTMLAttributes<HTMLUListElement>{
    quizzes: Quiz[];
}

const QuizList: React.FC<IProps> = ({ quizzes, className, ...props}) => {
    return (
        <ul className={cn(styles.quizList, className)}
            {...props}
        >
            {quizzes.map(({ title, icon }) => (
                <li key={title}>
                    <Button variant={'selection'}
                            preIcon={icon}
                            href={`/${title.toLowerCase()}`}
                    >
                        {title}
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default QuizList;
