
const parentBars = $('.progress')

parentBars.on('click', function(e) {
    const parent = $(this)
    const child = parent.find('.progress-bar')
    console.log(parent)
    console.log(child)
    let userClickX = e.pageX - parent.offset().left
    let barWidth = parent.width()
    let percentageOfBar = ((userClickX / barWidth) * 100).toFixed(0);
    const widthStr = percentageOfBar + '%'
    child.width(widthStr)
    let newText = child.text() + ': ' + widthStr;
    child.text(newText)
})

