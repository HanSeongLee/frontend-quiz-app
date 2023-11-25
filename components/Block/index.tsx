import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Icon from 'components/commons/Icon';
import { IIcon } from 'types/icon';
import { IconName } from 'constants/Icons';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    icon?: IIcon;
    counter?: boolean;
}

const Block: React.FC<IProps> = ({ icon, counter=false, className, ...props }) => {
    return (
        <span className={cn(styles.iconBlock, {
            [styles.html]: icon?.name === IconName.HTML,
            [styles.css]: icon?.name === IconName.CSS,
            [styles.javascript]: icon?.name === IconName.JAVASCRIPT,
            [styles.accessibility]: icon?.name === IconName.ACCESSIBILITY,

            [styles.counter]: counter,
        }, className)}
             {...props}
        >
            {icon && <Icon {...icon} />}
        </span>
    );
};

export default Block;
