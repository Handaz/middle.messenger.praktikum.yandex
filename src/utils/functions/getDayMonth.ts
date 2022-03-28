enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  November,
  December,
}

export default function getDayMonth(date: Date) {
  const day = date.getDay();
  const month = Months[date.getMonth()];

  return `${month} ${day}`;
}
