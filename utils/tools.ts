export const timestampFoDate = (time: number) => {
  return new Date(parseInt(String(time)) * 1000)
    .toLocaleString().replace(/:\d{1,2}$/, ' ')
}
