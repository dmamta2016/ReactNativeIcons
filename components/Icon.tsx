
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


import { createIconSetFromFontello } from 'react-native-vector-icons'; 
import fontelloConfig from './config.json';

const Icons = {
Entypo,
Ionicons,
SimpleLineIcons,
}
 

export default Icons

Ionicons.loadFont();
type IconSizeProps = {
 iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};


export const IIcon = ({size, name, color}: IconProps) => (
<Ionicons size={IconSizes[size]} name={name} color={color} />
);

const CustomIcon1 = createIconSetFromFontello(fontelloConfig);

export const CustomIcon =  ({size, name, color}: IconProps) => ( 
<CustomIcon1 size={IconSizes[size]} name={name} color={color} />
);