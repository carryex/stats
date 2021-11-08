enum Index {
  Day = 0,
  Month,
  Year
}

const dateStringToDate = (dateString: string): Date => {
  const dateParse = dateString
    .split('/')
    .map((value: string):number => parseInt(value));

  return new Date(dateParse[Index.Year],dateParse[Index.Month]-1, dateParse[Index.Day])
}

export {dateStringToDate};