d3.json("samples.json").then(function(belly) {
    var belly = belly.samples;
    console.log(belly);

});

function dripdrop() {
  var picky = d3.select("#subjectHere");
  d3.json("samples.json").then((belly) => {
    var name = belly.names;

    var patientzero = name[0];
    builder(patientzero);
  });
}



dripdrop();


function builder(sample) {
  d3.json("samples.json").then((belly) => {
    var samples = belly.samples;
    var filtered = samples.filter(thing=> thing.id == sample);
    var yolo = filtered[0];

    var otu_ids = yolo.otu_ids;
    var otu_labels = yolo.otu_labels;
    var sample_values = yolo.sample_values;

    var yticks = otu_ids.map(otuID => `OTU ${otuID}`).reverse();
    var babar = [
      {
        y: yticks,
        x: sample_values.reverse(),
        text: otu_labels.reverse(),
        type: "bar",
        orientation: "h",
      }
    ];

    var theElephant = {
      title: "Bacteria Cultures Found",
      margin: { t: 30, l: 150 }
    };

    Plotly.newPlot("bar", babar, theElephant);
  });
}

