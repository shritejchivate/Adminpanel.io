var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
		datasets: [{
			data: [-0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
			label: "Current",
			borderColor: "#ED9A36",
			fill: false
		}, {
			data: [-0.1, 0.2, 0.3, 0.6, 0.4, 0.7, 0.5],
			label: "Previous",
			borderColor: "#2CC361",
			fill: false
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				scaleLabel: {
					display: true,
					fontColor: 'yellow'
				},
			}]
		},
		defaultFontColor: 'green'
	}
});