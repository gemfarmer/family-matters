'use strict';

angular.module('familyTreeApp')
  .controller('MainCtrl', function ($scope, $http, $window) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    console.log($window)

    $scope.showName = function(d){
    	console.log('showName', d)
    }
    $scope.selectedPerson = {};
    $scope.hoveredName = 'hoveredName';

    var margin = 20,
    diameter = $window.outerWidth < 960 ? $window.outerWidth : 960;

var color = d3.scale.linear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.layout.pack()
    .padding(2)
    .size([diameter - margin, diameter - margin])
    .value(function(d) { return d.size; })

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

$http.get('/api/bubbles').success(function(root) {
   
  // if (error) return console.error(error);

  var focus = root,
      nodes = pack.nodes(root),
      view;

  var circle = svg.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      // .on("mouseover",function(d){ console.log(d); $scope.hoveredName = d.name; $scope.$apply(); d3.event.stopPropagation();})
      .style("fill", function(d) { return d.children ? color(d.depth) : null; })
      .on("click", function(d) { 
      	if (d.parent && !d.children){updateName(d); d3.event.stopPropagation();} else {
      		if (focus !== d) zoom(d), d3.event.stopPropagation(); 
      	}
      	
      	console.log('yo')
      });

  var text = svg.selectAll("text")
      .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { return d.parent === root ? null : "none"; })
      .text(function(d) { return d.name; });

  var node = svg.selectAll("circle,text");

  d3.select("body")
      .style("background", color(-1))
      .on("click", function() { zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function updateName(d){
  	$scope.hoveredName = d.name;
  	$scope.selectedPerson = d;
    $scope.$apply();
    console.log(d)
  }

  function zoom(d) {
    var focus0 = focus; focus = d;
    //update name
    updateName(d);
    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }
  $scope.hoveredName = nodes[0].name;
  $scope.selectedPerson = nodes[0];
});

d3.select(self.frameElement).style("height", diameter + "px");

  });
