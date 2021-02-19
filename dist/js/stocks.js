let stocksSection = $('#stocks');

$.get("https://api.twelvedata.com/time_series?symbol=AAPL,MSFT,TSLA&interval=1week&apikey=94052ab7a65c496786b0a1a7eaca0d03")
.then((data) => {
    let applePriceData = data.AAPL.values;
    let applePrices = [];
    let appleDates = [];
    for (let i = 4; i >= 0; i--) {
        applePrices.push(parseInt(applePriceData[i].open))
        appleDates.push(applePriceData[i].datetime)
    }

    let msftPriceData = data.MSFT.values;
    let msftPrices = [];
    let msftDates = [];
    for (let i = 4; i >= 0; i--) {
        msftPrices.push(parseInt(msftPriceData[i].open))
        msftDates.push(msftPriceData[i].datetime)
    }

    let teslaPriceData = data.TSLA.values;
    let teslaPrices = [];
    let teslaDates = [];
    for (let i = 4; i >= 0; i--) {
        teslaPrices.push(parseInt(teslaPriceData[i].open))
        teslaDates.push(teslaPriceData[i].datetime)
    }

    let msftChart = document.getElementById('msftChart');
    let msftGraph = new Chart(msftChart, {
        type: 'line',
        data: {
            labels: msftDates,
            datasets: [{
                label: 'Microsoft',
                data: msftPrices,
                borderColor: [ 
                    'rgba(0, 140, 255, 1)',
                    'rgba(0, 140, 255, 1)',
                    'rgba(0, 140, 255, 1)',
                    'rgba(0, 140, 255, 1)',
                    'rgba(0, 140, 255, 1)',
                ],
                borderWidth: 1
                
            }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });

    let appleChart = document.getElementById('appleChart');
    let appleGraph = new Chart(appleChart, {
        type: 'line',
        data: {
            labels: appleDates,
            datasets: [{
                label: ['Apple'],
                data: applePrices,
                borderColor: [
                    'rgba(187, 36, 13, 1)', 
                    'rgba(187, 36, 13, 1)',
                    'rgba(187, 36, 13, 1)',
                    'rgba(187, 36, 13, 1)',
                    'rgba(187, 36, 13, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });

    let teslaChart = document.getElementById('teslaChart');
    let teslaGraph = new Chart(teslaChart, {
        type: 'line',
        data: {
            labels: teslaDates,
            datasets: [{
                label: ['Tesla'],
                data: teslaPrices,
                borderColor: [
                    'rgba(15, 206, 27, 1)', 
                    'rgba(15, 206, 27, 1)',
                    'rgba(15, 206, 27, 1)',
                    'rgba(15, 206, 27, 1)',
                    'rgba(15, 206, 27, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
})

