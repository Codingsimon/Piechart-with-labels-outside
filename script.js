var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'outlabeledDoughnut',
    data: {
        labels: ['Java', 'Python', 'HTML', 'Git', 'CSS', 'Linux', 'Docker', 'Javascript'],
        datasets: [{
            data: [60, 10, 9, 8, 5, 5, 2,1],
            backgroundColor: ['#24648F', '#3F9BBF', '#F5D217', '#F5A301', '#F55B0B', '#F53986', '#A781F5', '#3BBD7D'],
            borderWidth: 0.5 ,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            position: 'bottom',
            padding: -100,
            text: 'Tools die ich benutze'
        },
        tooltips: {
            enabled: true
        },
        zoomOutPercentage: 0,
        layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 0
            }
        },
        plugins: {
            outlabels: {
                backgroundColor: "white", // Background color of Label
                color: '#696969',
                lineWidth: 2,
                stretch: 18, // The length between chart arc and Label
                borderRadius: 8, // Border radius of Label
                borderWidth: 2, // Thickness of border
                font: {
                    resizable: false,
                    size: 15
                }
            }
            
        }
    }
});