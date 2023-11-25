import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Icon from 'components/commons/Icon';
import { IconName } from 'constants/Icons';
import Link from 'next/link';
import { QuizIconName } from 'types/quiz';
import Block from 'components/Block';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'selection';
    href?: string;
    preIcon?: QuizIconName;
    postIcon?: IconName;
    state?: 'active' | 'success' | 'error';
}

const Button: React.FC<IProps> = ({
                                      variant, href, preIcon, postIcon,
                                      state, children, className, ...props
                                  }) => {
    const ButtonComponent = (
        <button className={cn(styles.button, {
            [styles.primary]: variant === 'primary',
            [styles.selection]: variant === 'selection',

            [styles.active]: state === 'active',
            [styles.success]: state === 'success',
            [styles.error]: state === 'error',
        }, className)}
                type={'button'}
                {...props}
        >
            {variant === 'selection' && (
                <Block icon={preIcon ? {
                    name: preIcon as IconName,
                    size: 'xlarge',
                    responsive: true,
                } : undefined}
                       counter={!preIcon}
                />
            )}
            <div className={styles.content}>
                {children}
                {postIcon && (
                    <div>
                        <Icon name={postIcon}
                              size={'xlarge'}
                              responsive
                        />
                    </div>
                )}
            </div>
        </button>
    );

    return href ? (
        <Link href={href}>
            {ButtonComponent}
        </Link>
    ) : ButtonComponent;
};

export default Button;
