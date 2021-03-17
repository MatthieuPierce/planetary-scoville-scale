import { axisBottom, timeFormat,  timeYear } from 'd3';
import { chart, innerWidth, innerHeight } from './chartParameters'

export const buildXAxis = (xScale) => {
  const xAxis = axisBottom(xScale).ticks(timeYear.every(15));

  chart.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${innerHeight +15})`)
    .style("color", "var(--primary-color)")
    .call(xAxis)
    .call(g => g.selectAll("#x-axis .tick text")
      .text(t => timeFormat("%Y")(t))
      )
    .call(g => g.selectAll("#x-axis .tick line")
      .attr("stroke-opacity", 0.3)
      .attr("y1", -18)
      .attr("y2", 10)
      .attr("transform", `translate(${0}, ${-0})`)
      .attr("stroke-dasharray", "10 5 5 5")
      )
    .call(g => g.select(".domain")
      .attr("stroke-opacity", 0.0)
      .attr("stroke-dasharray", "10 5 5 5"))
    .append("text")
      .text("Year")
      .attr("transform", `translate(${innerWidth / 6}, ${45})`)
      .attr("fill", "var(--primary-color)")
      .style("font-size", "1.7em")
      ;
}