import { 
  axisBottom,
  format, 
  select, 
  scaleLinear,
  timeFormat,  
  timeYear 
} from 'd3';
import { chart, innerWidth, innerHeight } from './chartParameters'
import { colorValue } from './accessors';
import { handleMouseOver, handleMouseOut } from './handleMouse';

// Color legend that is itself a mini chart

// one dimensional chart, showing the color scale

// legend's x-axis accessor the main chart's colorValue
const legendXValue = colorValue; 


export const makeDivergingLegend = (dataset, colorScale, cMin, cMax) => {
  
  const legendXScale = scaleBand()
  .domain(dataset.map(legendXValue))
  .range([0, innerWidth])
  .paddingInner(0)
  .paddingOuter(0);;

  const legendXAxis = axisBottom(legendXScale);

  let legend = chart.append("g")
  .attr("transform", `translate(${(innerWidth - 250)}, ${350})`)
  .attr("id", "legend")
  .append("rect")
    .attr("fill", "var(--secondary-color)")
    .attr("opacity", 1)
    .attr("height", 55)
    .attr("width", 150)
    .attr("id", "legend-box")
    .attr("stroke", "var(--primary-color)")
    .attr("stroke-opacity", 0.3)
    .attr("stroke-dasharray", "10 5 5 5");
  
  legend.selectAll("rect .swatch")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "swatch")
    // .attr("data-year", xValue)
    // .attr("data-month", yValue)
    .attr("temp", legendXValue)
    .attr("x", d => xScale(xValue(d)))
    .attr("y", d => yScale(yValue(d)))
    .attr("width", xBand.bandwidth())
    .attr("height", yScale.bandwidth())
    .attr("margin", 0)
    .attr("opacity", 1)
    .attr("fill", d => colorScale((colorValue(d))))

  select("#legend").selectAll("legend-mark")
    .data(colorKeys)
    .enter()
    .append("circle")
      .attr("cx", (d, i) => 20 )
      .attr("cy", (d, i) => 15 + i * 25)
      .attr("r", 10)
      .attr("fill", d => colorScale(d))
      .attr("class", "legend-mark")
      .attr("opacity", 0.5)
      .attr("stroke", `var(--secondary-color)`)
      .attr("stroke-width", "1px")
      .attr("stroke-linejoin", "round")
      .attr("stroke-dasharray", "4 1 3 1 2 1")
      .on("mouseover focus", handleMouseOver)
      .on("mouseout", handleMouseOut)

  select("#legend").selectAll("legend-label")
    .data(colorKeys)
    .enter()
    .append("text")
      .attr("x", (d, i) => 35)
      .attr("y", (d, i) => 15 + i * 25)
      .text(d => d)
      .attr("text-anchor", "left")
      .style("alignment-baseline", "middle")
      .style("font-size", "0.6em")
      .attr("class", "legend-label")
      .attr("fill", "var(--primary-color)")

    select("#legend")
      .append("text")
      .text("Variance from base temperature (8.66℃)")
      .attr("font-size", "0.9em")
      .attr("y", 70)




  chart.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(${(innerWidth - 250)}, ${350})`)
    .style("color", "var(--primary-color)")
    .call(legendXAxis)
    .call(g => g.selectAll("#x-axis .tick text")
      .text(t => `${format(`+.3~`)(t)}°C`)
      )
    .call(g => g.selectAll("#x-axis .tick line")
      // .attr("stroke-opacity", 0.3)
      // .attr("y1", -18)
      // .attr("y2", 10)
      // .attr("transform", `translate(${0}, ${-0})`)
      // .attr("stroke-dasharray", "10 5 5 5")
      )
    .call(g => g.select(".domain")
      .attr("stroke-opacity", 0.0)
      .attr("stroke-dasharray", "10 5 5 5"))
    .append("text")
      .text("Variance from base temperature (8.66℃)")
      .attr("font-size", "0.9em")
      .attr("y", 70)
      ;
}






export const legend = ( 
  colorKeys, 
  colorScale, 
  ) => {
  


}