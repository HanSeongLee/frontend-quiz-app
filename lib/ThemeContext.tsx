import React, { HTMLAttributes, useEffect, useState } from 'react';
import { Theme } from 'types/theme';

export enum ActionType {
    CHANGE_THEME,
}

const initialValue = {
    theme: Theme.LIGHT,
    dispatch: (actionType: ActionType, payload: { on: boolean }) => {},
};

export const ThemeContextWrapper: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    const [value, setValue] = useState(initialValue);

    const dispatch = (actionType: ActionType, payload: { on: boolean }) => {
        switch (actionType) {
            case ActionType.CHANGE_THEME: {
                const newTheme = payload.on ? Theme.DARK : Theme.LIGHT;
                setValue({
                    ...value,
                    theme: newTheme,
                });
                window.localStorage.setItem('theme', Theme.toString(newTheme));
                return;
            }
            default:
                return;
        }
    };

    useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const localTheme = window.localStorage.getItem('theme');
        const theme = localTheme && localTheme !== 'undefined' ? Theme.fromString(localTheme) :
            isDark ? Theme.DARK : Theme.LIGHT;

        if (theme === Theme.DARK) {
            dispatch(ActionType.CHANGE_THEME, {
                on: true,
            });
        }
    }, []);

    useEffect(() => {
        const htmlElement = window.document.querySelector('html');
        const { theme } = value;

        if (!htmlElement) {
            return;
        }

        if (theme === Theme.LIGHT) {
            htmlElement.classList.add('light');
            htmlElement.classList.remove('dark');
        } else {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
        }
    }, [value]);

    return (
        <ThemeContext.Provider value={{
            ...value,
            dispatch,
        }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const ThemeContext = React.createContext(initialValue);
