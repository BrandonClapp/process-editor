<!--How to drag and drop-->

// var width = 240,
//     height = 125,
//     radius = 20;
//
// var drag = d3.behavior.drag()
//     .origin(function(d) { return d; })
//     .on("drag", dragmove);

// var svg = d3.select("div#editorPanel").append("div").selectAll("svg")
//     .data(d3.range(16).map(function() { return {x: width / 2, y: height / 2}; }))
//   .enter().append("svg")
//     .attr("width", width)
//     .attr("height", height);
//
// console.log('svg');
// console.log(svg);
//
// svg.append("circle")
//     .attr("r", radius)
//     .attr("cx", function(d) { return d.x; })
//     .attr("cy", function(d) { return d.y; })
//     .call(drag);
//
//
//
// function dragmove(d) {
//   d3.select(this)
//       .attr("cx", d.x = Math.max(radius, Math.min(width - radius, d3.event.x)))
//       .attr("cy", d.y = Math.max(radius, Math.min(height - radius, d3.event.y)));
// }
