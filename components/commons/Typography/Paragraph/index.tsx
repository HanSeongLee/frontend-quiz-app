import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
    size: 'small' | 'medium';
}

const Paragraph: React.FC<IProps> = ({ size, className, children, ...props }) => {
    return (
        <p className={cn({
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
        }, className)}
           {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;
