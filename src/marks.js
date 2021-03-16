import { xValue, yValue, colorValue } from './accessors';
import { chart } from './chartParameters'
import { handleMouseOver, handleMouseOut } from './handleMouse';

export let marks = (
  dataset, 
  xScale, 
  yScale, 
  colorScale,
  ) => {
    chart.selectAll("circle")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("data-year", xValue)
    .attr("data-month", yValue)
    .attr("data-temp", colorValue)
    .attr("x", d => xScale(xValue(d)))
    .attr("y", d => yScale(yValue(d)))
    .attr("width", 10)
    .attr("height", 10)
    .attr("opacity", 0.5)
    .attr("fill", d => colorScale((colorValue(d))))
    .attr("stroke", `var(--secondary-color)`)
    .attr("stroke-width", "1px")
    .attr("stroke-linejoin", "round")
    .attr("stroke-dasharray", "4 1 3 1 2 1")
    .on("mouseover pointerover focus", handleMouseOver)
    .on("mouseout pounterout pointerleave", handleMouseOut)
  }