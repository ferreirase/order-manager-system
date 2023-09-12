export const DifferenceInHours = (startDate: Date, endDate: Date): number => {
  const differenceInMiliseconds = startDate.getTime() - endDate.getTime();
  return differenceInMiliseconds / (1000 * 60 * 60); // 1 hora = 3600000 milissegundos
};
