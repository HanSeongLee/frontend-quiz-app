import React, { HTMLAttributes, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    items: string[];
    answer: string;
    showResult?: boolean;
    onChange?: (value: string) => void;
}

const SelectionGroup: React.FC<IProps> = ({
                                              items, answer, showResult, onChange,
                                              children, className, ...props
                                          }) => {
    const [selected, setSelected] = useState<string>('');

    const handleButtonClick = (item: string) => {
        setSelected(item);
        onChange?.(item);
    };

    const getState = (item: string): 'active' | 'success' | 'error' | undefined => {
        if (!showResult) {
            return selected === item ? 'active' : undefined;
        }

        if (item === selected && item === answer) {
            return 'success';
        }

        if (item === selected && item !== answer) {
            return 'error';
        }

        return undefined;
    }

    return (
        <div className={cn(styles.selectionGroup, className)}
             {...props}
        >
            {items.map((item) => {
                const state = getState(item);

                return (
                    <Button key={item}
                            variant={'selection'}
                            state={state}
                            postIcon={(showResult ?
                                    answer === item ? IconName.CORRECT :
                                        (item === selected && item !== answer) ? IconName.INCORRECT : undefined
                                    : undefined
                            )}
                            onClick={_ => handleButtonClick(item)}
                            disabled={showResult}
                    >
                        {item}
                    </Button>
                )
            })}
        </div>
    );
};

export default SelectionGroup;
