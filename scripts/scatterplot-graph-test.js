<!--Scatterplot-->

var h = 350;
var w = 400;

monthlySales = [
{"month": 10, "sales": 100},
{"month": 20, "sales": 130},
{"month": 30, "sales": 250},
{"month": 40, "sales": 300},
{"month": 50, "sales": 265},
{"month": 60, "sales": 225},
{"month": 70, "sales": 180},
{"month": 80, "sales": 120},
{"month": 90, "sales": 145},
{"month": 100, "sales": 130}
];
// create our svg
var svg = d3.select("div#testing").append("svg").attr({
  width: w,
  height: h
});

function getDotColor(d) {
  var dotColor = "black";
  if (d >= 250) {
    dotColor = "#33CC66";
  } else if (d < 250) {
    dotColor = "#666666";
  }
  return dotColor;
}

function showMinMax(dataSet, colName, colVal, type){
  // dataSet = all data
  // col = index
  var max = d3.max(dataSet, function(d){ return d[colName] });
  var min = d3.min(dataSet, function(d){ return d[colName] });

  if(type == 'minmax' && (colVal == max || colVal == min)){
    return colVal;
  } else {
    if (type=='all'){
      return colVal;
    }
  }
}

var dots = svg.selectAll("circles")
  .data(monthlySales)
  .enter()
  .append("circle")
  .attr({
    cx: function(d) {
      return d.month * 4 - 25;
    },
    cy: function(d) {
      return h - d.sales;
    },
    r: 5,
    "fill": function(d) {
      return getDotColor(d.sales);
    }
  });

  var labels = svg.selectAll("text")
    .data(monthlySales)
    .enter()
    .append("text")
      .text(function(d){
        return showMinMax(monthlySales, 'sales', d.sales, 'minmax');
      })
      .attr({
        x: function(d) { return d.month * 4 - 25},
        y: function(d) { return h- d.sales }
      });
