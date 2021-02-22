function saveProgressBar(goal) {
    console.log(goal.text())
    let goalArray = goal.text().split(':')   
    let goalsList = localStorage.getItem('goalsList')
    let goalsListJSON = JSON.parse(goalsList)
    if (goalsListJSON === null) {
        goalsListJSON = {};
    }
    let value = goalArray[goalArray.length - 1]
    goalsListJSON[goalArray[0]] = value

    goalsList = JSON.stringify(goalsListJSON)
    localStorage.setItem('goalsList', goalsList)



}



const parentBars = $('.progress')

parentBars.on('click', function(e) {
    const parent = $(this)
    const child = parent.find('.progress-bar')
    let newText = child.text().split(':')
    let userClickX = e.pageX - parent.offset().left
    let barWidth = parent.width()
    let percentageOfBar = ((userClickX / barWidth) * 100).toFixed(0);
    const widthStr = percentageOfBar + '%'
    child.width(widthStr)
    let finalText = newText[0] + ': ' +  widthStr;
    child.text(finalText)
    saveProgressBar(child)
})

