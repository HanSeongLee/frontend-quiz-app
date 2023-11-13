import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { IconName, ICONS } from 'constants/Icons';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    name: IconName;
    size?: 'small' | 'medium' | 'large';
}

const Icon: React.FC<IProps> = ({ name, size='small', className, ...props }) => {
    return (
        <div className={cn(styles.icon, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
        }, className)}
             {...props}
        >
            {ICONS[name]}
        </div>
    );
};

export default Icon;
