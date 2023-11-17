import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { IconName, ICONS } from 'constants/Icons';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    name: IconName;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    responsive?: boolean;
}

const Icon: React.FC<IProps> = ({
                                    name, size = 'small', className, responsive = false,
                                    ...props
                                }) => {
    return (
        <div className={cn(styles.icon, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
            [styles.xlarge]: size === 'xlarge',
            [styles.responsive]: responsive,
        }, className)}
             {...props}
        >
            {ICONS[name]}
        </div>
    );
};

export default Icon;
