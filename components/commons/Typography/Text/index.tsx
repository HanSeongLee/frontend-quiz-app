import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    type?: 'default' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large' | 'display';
    weight?: '300' | '400' | '500';
    strong?: boolean;
}

const Text: React.FC<IProps> = ({
                                    type = 'default', size, weight = 400, strong,
                                    className, children, ...props
                                }) => {
    return (
        <span className={cn({
            [styles.default]: type === 'default',
            [styles.secondary]: type == 'secondary',
            [styles.danger]: type === 'danger',

            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
            [styles.display]: size === 'display',

            [styles.strong]: strong,
        }, className)}
              style={{
                  fontWeight: weight,
              }}
              {...props}
        >
            {children}
        </span>
    );
};

export default Text;
