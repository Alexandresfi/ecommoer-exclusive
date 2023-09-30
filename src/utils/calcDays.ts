export function calcDays(date: string) {
  const dateProvided = new Date(date);

  const currentDate = new Date();

  const diferencaEmMilissegundos =
    dateProvided.getTime() - currentDate.getTime();

  const differenceDays = Math.round(
    diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
  );

  return differenceDays > 2
    ? `${differenceDays} dias`
    : `${differenceDays} dia`;
}
