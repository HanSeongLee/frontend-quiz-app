import { IconName } from 'constants/Icons';

export interface IIcon {
    name: IconName;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    responsive?: boolean;
}
