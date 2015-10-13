alert("Welcome to my site!");


google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Genre', 'Number'],
        ['Action',     35.8],
        ['Shooter',      27.6],
        ['Sports Games',  16.9],
        ['Role-Playing', 12.1],
        ['Adventure',    7.6]
    ]);

    var options = {
        title: 'Top 5 Most Played Video Game Genres',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}

// make a back ground image and do a bunch more things. add links. have 2 java script functions. get another graph up in here.
//make it look good and have information on video game things
