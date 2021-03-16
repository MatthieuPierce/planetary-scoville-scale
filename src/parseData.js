// Parse data from source into chart-useable components
// Standard application: Array of objects

export const parseData = (data) => {

  // Console dataset to examine (comment out afterwards)
  // console.log(data);

  // Object
  // baseTemperature: number (8.66)
  // monthlyVariance: Array (3153)
  // // month: num
  // // variance: num
  // // year: num

  return data.monthlyVariance.map(d => {
    return {
      ...d,
      // in-data starts month at 1 rather than js 0-index, so subtract before
      // ceating precise date 
      preciseDate: new Date(d.year, (d.month - 1)),
      jsMonth: d.month - 1,
      jsYear: new Date(d.year, 0),
      // actual temperature for month, given data-provided baseTemperature 8.66
      // degrees Celsius 
      temp: d.variance + 8.66,
    }
  })
}