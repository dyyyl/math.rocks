const sanitizeDateTime = (time: number): string | number => {
  if (time >= 10) return time;
  return `0${time}`;
};

export default sanitizeDateTime;
