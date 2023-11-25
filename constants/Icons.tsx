import React from 'react';
import AccessibilityIcon from 'public/icons/icon-accessibility.svg';
import CorrectIcon from 'public/icons/icon-correct.svg';
import CssIcon from 'public/icons/icon-css.svg';
import ErrorIcon from 'public/icons/icon-error.svg';
import HtmlIcon from 'public/icons/icon-html.svg';
import IncorrectIcon from 'public/icons/icon-incorrect.svg';
import JsIcon from 'public/icons/icon-js.svg';
import MoonDarkIcon from 'public/icons/icon-moon-dark.svg';
import MoonLightIcon from 'public/icons/icon-moon-light.svg';
import SunDarkIcon from 'public/icons/icon-sun-dark.svg';
import SunLightIcon from 'public/icons/icon-sun-light.svg';

export enum IconName {
    ACCESSIBILITY = 'accessibility',
    CORRECT = 'correct',
    CSS = 'css',
    ERROR = 'error',
    HTML = 'html',
    INCORRECT = 'incorrect',
    JAVASCRIPT = 'javascript',
    MOON_DARK = 'moon-dark',
    MOON_LIGHT = 'moon-light',
    SUN_DARK = 'sun-dark',
    SUN_LIGHT = 'sun-light',
}

export const ICONS: { [key in IconName]: React.ReactNode } = {
    [IconName.ACCESSIBILITY]: <AccessibilityIcon />,
    [IconName.CORRECT]: <CorrectIcon />,
    [IconName.CSS]: <CssIcon />,
    [IconName.ERROR]: <ErrorIcon />,
    [IconName.HTML]: <HtmlIcon />,
    [IconName.INCORRECT]: <IncorrectIcon />,
    [IconName.JAVASCRIPT]: <JsIcon />,
    [IconName.MOON_DARK]: <MoonDarkIcon />,
    [IconName.MOON_LIGHT]: <MoonLightIcon />,
    [IconName.SUN_DARK]: <SunDarkIcon />,
    [IconName.SUN_LIGHT]: <SunLightIcon />,
};
