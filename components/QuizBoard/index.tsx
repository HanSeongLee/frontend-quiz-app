import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { Question } from 'types/quiz';
import SelectionGroup from 'components/commons/SelectionGroup';
import Title from 'components/commons/Typography/Title';
import Button from 'components/commons/Button';
import Text from 'components/commons/Typography/Text';
import Icon from 'components/commons/Icon';
import { IconName } from 'constants/Icons';
import ProgressBar from 'components/commons/ProgressBar';

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    question: Question;
    initialTime: number;
    time: number;
    currentQuestionNumber: number;
    numberOfQuestions: number;
    showResult: boolean;
    error: string;
    onChange: (option: string) => void;
    onSubmit: () => void;
}

const QuizBoard: React.FC<IProps> = ({
                                         question, initialTime, time, currentQuestionNumber,
                                         numberOfQuestions, showResult, error, onChange,
                                         onSubmit, className, ...props
                                     }) => {
    const { question: title, options, answer } = question;

    return (
        <div className={cn(styles.quizQuestion, className)}
             {...props}
        >
            <div className={styles.head}>
                <Text className={styles.subtitle}
                      size={'small'}
                >
                    Question {currentQuestionNumber + 1} of {numberOfQuestions}
                </Text>
                <Title className={styles.title}
                       level={2}
                       size={'medium'}
                >
                    {title}
                </Title>
                <ProgressBar className={styles.progressBar}
                             progress={time}
                             max={initialTime}
                />
            </div>
            <div className={styles.selectionContainer}>
                <SelectionGroup items={options}
                                answer={answer}
                                onChange={onChange}
                                showResult={showResult}
                />
                <Button variant={'primary'}
                        onClick={onSubmit}
                >
                    {showResult ? 'Next Question' : 'Submit Answer'}
                </Button>
                {error && (
                    <div className={styles.errorMessage}>
                        <Icon name={IconName.ERROR}
                              size={'xlarge'}
                              responsive
                        />
                        <Text type={'danger'}
                              size={'medium'}
                        >
                            {error}
                        </Text>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizBoard;
