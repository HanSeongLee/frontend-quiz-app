import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Layout = ({ className, children, ...props }: IProps) => {
    return (
        <div className={cn(styles.layout, className)}
             {...props}
        >
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
