import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import ThemeToggleContainer from 'containers/ThemeToggleContainer';
import Container from 'components/commons/Container';
import QuizTitle from 'components/QuizTitle';
import { IconName } from 'constants/Icons';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    iconName?: IconName;
    title?: string;
}

const Header: React.FC<IProps> = ({ iconName, title, className, ...props }) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <Container className={styles.container}>
                <div>
                    {(iconName && title) && (
                        <QuizTitle iconName={iconName}>
                            {title}
                        </QuizTitle>
                    )}
                </div>
                <ThemeToggleContainer />
            </Container>
        </header>
    );
};

export default Header;
