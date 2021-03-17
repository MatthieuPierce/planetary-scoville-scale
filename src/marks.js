import { schemeRdBu } from 'd3';
import { xValue, yValue, colorValue, } from './accessors';
import { chart, margin } from './chartParameters'
import { handleMouseOver, handleMouseOut } from './handleMouse';

export let marks = (
  dataset, 
  xScale, 
  yScale, 
  colorScale,
  xBand
  ) => {
    chart.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("data-year", xValue)
    .attr("data-month", yValue)
    .attr("data-temp", colorValue)
    .attr("x", d => xScale(xValue(d)))
    .attr("y", d => yScale(yValue(d)))
    // .attr("width", innerWidth / (dataset.length / 12))
    // .attr("height", ((innerHeight) / 12) - 65 )
    .attr("width", xBand.bandwidth())
    .attr("height", yScale.bandwidth())
    .attr("margin", 0)
    .attr("opacity", 1)
    .attr("fill", d => colorScale((colorValue(d))))
    // .attr("stroke", d => colorScale((colorValue(d))))
    // .attr("stroke-width", "1px")
    // .attr("stroke-linejoin", "round")
    // .attr("stroke-dasharray", "4 1 3 1 2 1")
    .on("mouseover pointerover focus", handleMouseOver)
    .on("mouseout pounterout pointerleave", handleMouseOut)
  }