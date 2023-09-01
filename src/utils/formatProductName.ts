export function formatProductName(name: string) {
  const nameFormated = name?.replace(/%20/gi, ' ');

  return nameFormated;
}
