export const isWithinMaxLength = (
  trimmedAnswer: string,
  maxLength: number,
): boolean => {
  if (maxLength && trimmedAnswer.length > maxLength) {
    return false;
  }
  return true;
};

export const isWithinNumOfLines = (lines: number, numLines: number): boolean =>
  lines <= numLines;
