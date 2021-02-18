let stocksSection = $('#stocks');

$.get("https://api.twelvedata.com/time_series?symbol=AAPL,MSFT&interval=1week&apikey=94052ab7a65c496786b0a1a7eaca0d03")
.then((data) => {
    let applePriceData = data.AAPL.values;
    let applePrices = [];
    for (let i = 25; i < applePriceData.length; i++) {
        applePrices.push(parseInt(applePriceData[i].open))
    }
    console.log('apple', applePrices)
    let msftPriceData = data.MSFT.values;
    let msftPrices = [];
    for (let i = 25; i < msftPriceData.length; i++) {
        msftPrices.push(parseInt(msftPriceData[i].open))
    }

    let msftChart = document.getElementById('msftChart');
    let msftGraph = new Chart(msftChart, {
        type: 'line',
        data: {
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
            datasets: [{
                label: ['Apple'],
                data: applePrices,
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

