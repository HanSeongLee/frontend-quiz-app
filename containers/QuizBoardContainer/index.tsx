import React, { HTMLAttributes, useEffect, useState } from 'react';
import { Quiz } from 'types/quiz';
import QuizBoard from 'components/QuizBoard';
import useTimer from 'lib/useTimer';
import QuizResult from 'components/QuizResult';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    quiz: Quiz;
}

const QuizBoardContainer: React.FC<IProps> = ({ quiz, ...props }) => {
    const initialTime = 3000;
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const {
        time, isRunning, start, stop, reset,
    } = useTimer(initialTime);
    const numberOfQuestions = quiz.questions.length;

    const handleChange = (option: string) => {
        setSelected(option);

        if (error) {
            setError('');
        }
    };

    const handlePlayAgain = () => {
        setCurrentQuestionNumber(0);
        setSelected('');
        setScore(0)
        setError('');
        setShowResult(false);
        reset();
        setTimeout(() => {
            start();
        }, 300);
    };

    const handleSubmit = () => {
        if (showResult) {
            setCurrentQuestionNumber(currentQuestionNumber + 1);
            setSelected('');
            setError('');
            setShowResult(false);
            reset();
            setTimeout(() => {
                start();
            }, 300);
            return;
        }

        if (!selected) {
            setError('Please select an answer');
            return;
        }

        if (selected === quiz.questions[currentQuestionNumber].answer) {
            setScore(score + 1);
        }
        setShowResult(true);
        stop();
    };

    useEffect(() => {
        start();
    }, []);

    useEffect(() => {
        if (isRunning && time === 0) {
            stop();
            setShowResult(true);
        }
    }, [isRunning, time]);

    return (
        <div {...props}>
            {currentQuestionNumber < quiz.questions.length ? (
                <QuizBoard question={quiz.questions[currentQuestionNumber]}
                       initialTime={initialTime}
                       time={time}
                       currentQuestionNumber={currentQuestionNumber}
                       numberOfQuestions={numberOfQuestions}
                       showResult={showResult}
                       error={error}
                       onChange={handleChange}
                       onSubmit={handleSubmit}
            />
            ) : (
                <QuizResult iconName={quiz.icon}
                            title={quiz.title}
                            score={score}
                            maxScore={10}
                            onPlayAgain={handlePlayAgain}
                />
            )}
        </div>
    );
};

export default QuizBoardContainer;
