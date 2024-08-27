import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ISqaureCheckbox {
  isSelected: boolean;
}

const SelectedCheckBox = () => (
  <Svg width={24} height={24} viewBox='0 0 24 24' fill='none'>
    <Path
      fill='#16666F'
      stroke='#16666F'
      strokeWidth={1.25}
      d='M4.625 4.625H19.375V19.375H4.625z'
    />
    <Path
      d='M15 10l-4.125 5L9 12.727'
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

const UnSelectedCheckBox = () => (
  <Svg width={24} height={24} viewBox='0 0 24 24' fill='none'>
    <Path
      fill='#fff'
      stroke='#16666F'
      strokeWidth={1.25}
      d='M4.625 4.625H19.375V19.375H4.625z'
    />
  </Svg>
);

function SqaureCheckbox(props: ISqaureCheckbox) {
  const { isSelected = false } = props;

  return isSelected ? <SelectedCheckBox /> : <UnSelectedCheckBox />;
}

export default SqaureCheckbox;
