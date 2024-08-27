export const trimTitle = ({ title, length }) => {
  const trimmedTitle =
    title?.length > length ? title?.substring(0, length) + '...' : title;

  return trimmedTitle ?? '';
};

//Profiles phone-number validation
export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;
export const titleCaseregex = /\b\w/g;
