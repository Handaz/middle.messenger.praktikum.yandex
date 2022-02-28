const padTo2Digits = (num: number) => {
  return String(num).padStart(2, '0');
};

const getTime = (stringDate: string) => {
  const date = new Date(stringDate);
  return padTo2Digits(date.getHours()) + ':' + padTo2Digits(date.getMinutes());
};

export default getTime;
