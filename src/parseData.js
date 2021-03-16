import { format } from 'd3'

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
      // // month: num
      // // variance: num
      // // year: num
      ...d,
      // in-data starts month at 1 rather than js 0-index, so subtract before
      // ceating precise date 
      preciseDate: new Date(d.year, (d.month - 1)),
      // force 1983-{Month}-01 for jsMonth
      jsMonth: new Date(0, d.month - 1, 1),
      jsYear: new Date(d.year, 0),
      // actual temperature for month, given data-provided baseTemperature 8.66
      // degrees Celsius 
      temp: d.variance + 8.66,
      tempString: `${format(+.3)(d.variance + 8.66)}°C`,
      varianceString: `${format(`+.3~`)(d.variance)}°C`
    }
  })
}