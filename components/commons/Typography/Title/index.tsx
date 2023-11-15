import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    size: 'small' | 'medium' | 'large';
}

const Title: React.FC<IProps> = ({ level, size, children, className, ...props }) => {
    return React.createElement(`h${level}`, {
        className: cn({
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
        }, className),
        ...props,
    }, children);
};

export default Title;
