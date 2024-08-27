import { deviceWidth } from './dimension-utils';

const getItemLayout = (_: any, rowIndex: number) => {
  const length = 400;
  const scrollOffset = length * rowIndex;
  return {
    offset: scrollOffset,
    length,
    index: rowIndex,
  };
};
export const getItemLayoutMeetings = (data: any, index: any) => {
  // Assuming meeting items have a fixed width (adjust as needed)
  const itemWidth = deviceWidth / 2 + 30;
  return { length: itemWidth, offset: itemWidth * index, index };
};

export default {
  getItemLayout,
  getItemLayoutMeetings,
};
