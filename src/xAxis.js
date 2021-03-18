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
  let oldestLivingPersonBorn = new Date(1903, 0, 2);
  chart
    .append("line")
      .attr("id", "snarky-note")
      .attr("x1", xScale(oldestLivingPersonBorn) )
      .attr("x2", xScale(oldestLivingPersonBorn) )
      .attr("y1", `${-15}`)
      .attr("y2", innerHeight)
      .attr("stroke", "var(--primary-color)")
      .attr("stroke-opacity", 1)
      .attr("stroke-width", 0.5)  
      .attr("stroke-dasharray", "9 4 1 5")
    
    chart.append("text")
      .text(`Oldest living person born`)
      // .text(`Oldest living person born ${timeFormat("%b %e, %Y")
      //   (oldestLivingPersonBorn)}`)
        .attr("fill", "var(--primary-color)")
        .style("font-size", `0.9em`)
        .attr("x", xScale(oldestLivingPersonBorn) + 5)
        .attr("y", -10 )



    
    }