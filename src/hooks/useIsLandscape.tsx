import { useWindowDimensions } from 'react-native';

export function useIsLandscape(): boolean {
  const { width, height } = useWindowDimensions();
  return width >= height;
}
