'use strict';

var _ = require('lodash');

// Get list of bubbles
exports.index = function(req, res) {
  res.json({
 "name": "Nils",
 "children": [
  {
   "name": "Carin Nilsdotter",
   "children": [
      {"name": "Nils Eriksson", "size": 3938},
      {"name": "Johannes Eriksson", "size": 3812},
      {"name": "Anna-Britta Ericsdotter", "size": 6714},
      {"name": "Edela Ericsdotter", "size": 743},
      {"name": "Per Eriksson", "children":[
	    {"name": "Anna Lotta Persdotter", "size": 1082},
	    {"name": "Johanna Persdotter", "spouses": ['Johannes'], "children": [
	    	{"name": "Oskar Persson", "spouses": ['Emma','Karin'], "children": [
	    		{"name": "Eivor Persson", "spouses":['Lennart Bergagard'],"otherParent": 'Karin',"children": [
	    			{"name": "Elisabeth Bergagard", "otherParent": "Lennart","size": 714},
				    {"name": "Anna-Carin Bergagard", "otherParent": 'Lennart',"children":[
				    	{"name": "Emmelie Bergagard", "otherParent": "Peder","size": 714},
					    {"name": "Stina Bergagard Dichter", "otherParent": 'Anders Dichter',"size": 714},
					    {"name": "David Bergagard Dichter", "otherParent": "Anders Dichter","size": 714},
					    {"name": "Samuel Bergagard Dichter", "otherParent": 'Anders Dichter',"size": 714},
					    {"name": "Ellen Bergagard Dichter", "otherParent": "Anders Dichter","size": 714},
					    {"name": "Gun Bergagard Dichter", "otherParent": 'Anders Dichter',"size": 714}
				    ]}
	    		]},
			    {"name": "Margit Lilian Irene Johansson", "otherParent": "Karin", "spouses":["Ingvar"],"size": 714},
			    {"name": "Elsa Persson", "otherParent": "Emma","size": 714},
			    {"name": "Bertil Persson", "otherParent": 'Emma',"size": 714},
			    {"name": "?? Persson", "otherParent": "Emma","size": 714},
	    	]},
		    {"name": "Augusta Persdotter", "size": 10498},
		    {"name": "Anna-Britta Persdotter", "size": 2822},
		    {"name": "Kristina Persdotter", "size": 9983}
	    ]},
	    {"name": "Anders Peter Persson", "size": 319},
	    {"name": "Augusta Persdotter", "size": 10498},
	    {"name": "Anna-Britta Persdotter", "size": 2822},
	    {"name": "Kristina Persdotter", "size": 9983},
	    {"name": "Johannes Persson/John Hedberg", "children": [
	    	{"name": "Eleanor Hedberg", "size": 1616},
		    {"name": "Hazel Hedberg", "size": 1027},
		    {"name": "Fred Hedberg", "children": [
		    	{"name": "Norman Hedberg", "children": [

			    ]},
			    {"name": "John Hedberg", "children": [
			    	{"name": "Stephen Hedberg", "children": [
			    		{"name": "Christopher Hedberg", "spouses":['?', 'Stevie'],"children": [
			    			{"name": "Alexis Hedberg", "otherParent": "?","size": 345},
			    			{"name": "Fiona Hedberg","otherParent": "Stevie", "size": 345},
			    			{"name": "Oliver Hedberg","otherParent": "Stevie", "size": 345}
					    ]},
					    {"name": "David Hedberg", "size": 345},
					    {"name": "Jade Hedberg", "size": 345}
				    ]},
				    {"name": "Carolyn Hedberg", "children": [
				    	{"name": "Lauren Stucky", "size": 345},
				    	{"name": "Kyle Stucky", "size": 345},
				    	{"name": "Eric Stucky", "size": 345}
				    ]},
				    {"name": "Peter Hedberg", "children": [
				    	{"name": "Anda Moettus", "size": 345},
				    	{"name": "Mara Moettus", "size": 345},
				    	{"name": "Riga Moettus", "size": 345}
				    ]},
				    {"name": "Tom Hedberg", "children": [
				    	{"name": "Brian Hedberg", "size": 345, "birth": 1988, "death": 'alive'},
				    	{"name": "Ellie Hedberg", "size": 345, "birth": 1991, "death": 'alive'},
				    	{"name": "Lena Hedberg", "size": 345, "birth": 1995, "death": 'alive'}
				    ]},
			    ]}
		    ]}
	    ]},
	    {"name": "Emma Persdotter", "size": 1681}
      ]
    }
    ]
  },
  {
   "name": "Anna Nilsdotter",
   "children": []
  },
  {
   "name": "Anders Nilsson",
   "children": []
  },
  {
   "name": "Britta Nilsdotter",
   "children": []
  }
 ]
});
};