import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Icon from 'components/commons/Icon';
import { IconName } from 'constants/Icons';
import Link from 'next/link';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'selection';
    href?: string;
    preIcon?: 'html' | 'css' | 'javascript' | 'accessibility';
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
                <span className={cn(styles.icon, {
                    [styles.default]: !preIcon,
                    [styles.html]: preIcon === 'html',
                    [styles.css]: preIcon === 'css',
                    [styles.javascript]: preIcon === 'javascript',
                    [styles.accessibility]: preIcon === 'accessibility',
                })}
                >
                    {preIcon && (
                        preIcon === 'html' ? (
                            <Icon name={IconName.HTML}
                                  size={'xlarge'}
                                  responsive
                            />
                        ) : preIcon === 'css' ? (
                            <Icon name={IconName.CSS}
                                  size={'xlarge'}
                                  responsive
                            />
                        ) : preIcon === 'javascript' ? (
                            <Icon name={IconName.JS}
                                  size={'xlarge'}
                                  responsive
                            />
                        ) : preIcon === 'accessibility' ? (
                            <Icon name={IconName.ACCESSIBILITY}
                                  size={'xlarge'}
                                  responsive
                            />
                        ) : null
                    )}
                </span>
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
