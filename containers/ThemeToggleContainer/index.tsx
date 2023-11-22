import React, { HTMLAttributes, useContext } from 'react';
import ToggleButton from 'components/commons/ToggleButton';
import { IconName } from 'constants/Icons';
import { ActionType, ThemeContext } from 'lib/ThemeContext';
import { Theme } from 'types/theme';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const ThemeToggleContainer: React.FC<IProps> = ({ ...props }) => {
    const { theme, dispatch } = useContext(ThemeContext);

    const handleChange = (on: boolean) => {
        dispatch(ActionType.CHANGE_THEME, {
            on,
        });
    };

    return (
        <div {...props}>
            <ToggleButton icons={{
                off: theme === Theme.LIGHT ? IconName.SUN_DARK : IconName.SUN_LIGHT,
                on: theme === Theme.LIGHT ? IconName.MOON_DARK : IconName.MOON_LIGHT,
            }}
                          defaultValue={theme === Theme.DARK}
                          value={theme === Theme.DARK}
                          onChange={handleChange}
            />
        </div>
    );
};

export default ThemeToggleContainer;
