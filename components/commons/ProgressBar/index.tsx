import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    progress: number;
    max?: number;
}

const ProgressBar: React.FC<IProps> = ({ progress, max=100, children, className, ...props }) => {
    const clampProgress = Math.max(0, Math.min(max, progress));

    return (
        <div className={cn(styles.progressBar, className)}
             {...props}
        >
            <div className={styles.progress}
                 style={{ width: `${(clampProgress/ max) * 100}%` }}
            />
        </div>
    );
};

export default ProgressBar;
