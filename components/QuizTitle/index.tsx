import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import { IconName } from 'constants/Icons';
import cn from 'classnames';
import Title from 'components/commons/Typography/Title';
import Block from 'components/Block';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    iconName: IconName;
}

const QuizTitle: React.FC<IProps> = ({ iconName, className, children, ...props }) => {
    return (
        <div className={cn(styles.quizTitle, className)}
             {...props}
        >
            <Block icon={{
                name: iconName,
                size: 'xlarge',
                responsive: true,
            }} />
            <Title level={1}
                   size={'small'}
            >
                {children}
            </Title>
        </div>
    );
};

export default QuizTitle;
