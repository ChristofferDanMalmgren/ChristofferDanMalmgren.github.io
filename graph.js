// graph.js
var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [10, 11, 12, 13, 14],
    mode: 'markers+lines',
    name: 'Data Points',
};

var trace2 = {
    x: [1, 2, 3, 4, 5],
    y: [10, 11, 12, 13, 14],
    mode: 'lines',
    name: 'Line',
    line: {
        dash: 'solid'
    }
};

var layout = {
    title: 'Scatter Plot with Line',
    xaxis: { 
        title: 'X Axis',
        scaleanchor: "y", // Bevarar proportioner mellan x- och y-axeln
        rangemode: 'tozero',  // Tvingar x-axeln att börja vid 0
    },
    yaxis: { title: 'Y Axis' },
    dragmode: '', 
    showlegend: true,
    autosize: true,
    margin: { l: 40, r: 40, t: 40, b: 40 }
};

var data = [trace1, trace2];

// Skapa grafen i div-en med id "plotly-graph"
Plotly.newPlot('plotly-graph', data, layout);
