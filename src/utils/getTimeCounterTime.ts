function formatMonthName(month: number): string {
  const monthNames: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  return monthNames[month];
}

function getFormattedDate(date: Date): string {
  const month = formatMonthName(date.getMonth());
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year} 00:00:00`;
  return formattedDate;
}

export function getNextTwoDays(): [string, string] {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  const formattedTomorrow = getFormattedDate(tomorrow);
  const formattedDayAfterTomorrow = getFormattedDate(dayAfterTomorrow);

  return [formattedTomorrow, formattedDayAfterTomorrow];
}
