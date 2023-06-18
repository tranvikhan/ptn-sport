export const formatClock = (num: number): string => {
  if (num > 9) return num + "";
  return `0${num}`;
};
