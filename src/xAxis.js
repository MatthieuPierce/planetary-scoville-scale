import { axisBottom, select, timeFormat,  timeYear } from 'd3';
import { chart, innerWidth, innerHeight } from './chartParameters'

export const buildXAxis = (xScale) => {
  const xAxis = axisBottom(xScale).ticks(timeYear.every(15));

  chart.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${innerHeight})`)
    .style("color", "var(--primary-color)")
    .call(xAxis)
    .call(g => g.selectAll("#x-axis .tick text")
      .text(t => timeFormat("%Y")(t))
      )
    .call(g => g.selectAll("#x-axis .tick line")
      .attr("y1", 0)
      .attr("y2", 5)
      .attr("transform", `translate(${0}, ${-0})`)
      .attr("stroke-opacity", 1)
      .attr("stroke-width", 0.5)
      // .attr("stroke-dasharray", "1 1")
      )
    .call(g => g.select(".domain")
      .attr("stroke-opacity", 0.0)
      // .attr("stroke-dasharray", "10 5 5 5")
      )
    // .append("text")
    //   .text("Year")
    //   .attr("transform", `translate(${innerWidth / 20 }, ${45})`)
    //   .attr("fill", "var(--primary-color)")
    //   .style("font-size", "1.7em")
      ;

  // Sassy note
  chart
    .append("line")
      .attr("id", "snarky-note")
      .attr("x1", xScale(new Date(1903, 2, 2)))
      .attr("x2", innerWidth + 100 )
      .attr("y1", `${0}`)
      .attr("y2", innerHeight + 100)
      .attr("stroke-opacity", 1)
      .attr("stroke-width", 2.5)  
      .attr("stroke-dasharray", "1 1")

    
    }