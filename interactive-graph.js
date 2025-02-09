
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
        xaxis: { title: 'X Axis' },
        yaxis: { title: 'Y Axis' },
        dragmode: '',  // Disable zoom and pan
        showlegend: true,
        autosize: true, // Gör grafen responsiv
        margin: { l: 40, r: 40, t: 40, b: 40 } // Tar bort onödiga marginaler
    };

    var data = [trace1, trace2];

    Plotly.newPlot('plotly-graph', data, layout);

    // Anpassa storlek när fönstret ändras
    window.addEventListener('resize', function() {
        Plotly.relayout('plotly-graph', {
            width: window.innerWidth,
            height: window.innerHeight
        });
    });
