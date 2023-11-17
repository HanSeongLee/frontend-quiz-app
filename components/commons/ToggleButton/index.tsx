import React, { ButtonHTMLAttributes, useEffect } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { IconName } from 'constants/Icons';
import Icon from 'components/commons/Icon';

interface IProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'defaultValue'> {
    icons: {
        off: IconName;
        on: IconName;
    };
    onChange?: (on: boolean) => void;
    value?: boolean;
    defaultValue?: boolean;
}

const ToggleButton: React.FC<IProps> = ({
                                           icons, onChange, value, defaultValue=false,
                                           className, ...props
                                       }) => {
    const [on, setOn] = React.useState(defaultValue);

    const handleClick = () => {
        setOn(!on);
        onChange?.(!on);
    };

    const handleOff = () => {
        setOn(false);
        onChange?.(false);
    };

    const handleOn = () => {
        setOn(true);
        onChange?.(true);
    };

    useEffect(() => {
        if (value === undefined) {
            return;
        }
        setOn(value);
    }, [value]);

    return (
        <div className={styles.toggleButtonWrapper}>
            {icons?.off && (
                <Icon className={styles.icon}
                      name={icons.off}
                      size={'medium'}
                      responsive
                      onClick={handleOff}
                />
            )}
            <button className={cn(styles.toggleButton, {
                [styles.on]: on,
            }, className)}
                    type={'button'}
                    onClick={handleClick}
                    {...props}
            />
            {icons?.on && (
                <Icon className={styles.icon}
                      name={icons.on}
                      size={'medium'}
                      responsive
                      onClick={handleOn}
                />
            )}
        </div>
    );
};

export default ToggleButton;
