
// Create SVG element
  
var svg = d3.select("div#mysvg")
            .append("svg")
            .attr("width", "400")
            .attr("height", "400");

svg.append("circle").attr("cx", "250").attr("cy", "250").attr("r", "50")
  .attr("fill", "red");