google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Gender', 'Percentage'],
        ['Male',     53],
        ['Female',      47]

    ]);

    var options = {
        title: 'Male - Female Gamers'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
