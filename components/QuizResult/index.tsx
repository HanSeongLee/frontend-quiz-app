import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Title from 'components/commons/Typography/Title';
import Text from 'components/commons/Typography/Text';
import Button from 'components/commons/Button';
import QuizTitle from 'components/QuizTitle';
import { IconName } from 'constants/Icons';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    iconName: IconName;
    title: string;
    score: number;
    maxScore: number;
    onPlayAgain: () => void;
}

const QuizResult: React.FC<IProps> = ({
                                          iconName, title, score, maxScore,
                                          onPlayAgain, className, ...props
                                      }) => {
    return (
        <div className={cn(styles.quizResult, className)}
             {...props}
        >
            <Title level={2} size={'large'}>
                <Text weight={'300'}>Quiz completed</Text><br />
                You scored...
            </Title>

            <div>
                <div className={styles.scoreBoard}>
                    <QuizTitle iconName={iconName}>
                        {title}
                    </QuizTitle>
                    <div className={styles.scoreContainer}>
                        <Text size={'display'}
                              type={'secondary'}
                              weight={'500'}
                        >
                            {score}
                        </Text>
                        <Text>
                            out of {maxScore}
                        </Text>
                    </div>
                </div>

                <Button variant={'primary'}
                        onClick={onPlayAgain}
                >
                    Play Again
                </Button>
            </div>
        </div>
    );
};

export default QuizResult;
