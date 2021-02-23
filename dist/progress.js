function saveProgressBar(goal) {
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

$(function() {
    let goalsList = localStorage.getItem('goalsList')
    let goalsListJSON = JSON.parse(goalsList);

    let $pythonPerc = $('#pythonPerc')
    let $fePerc = $('#fePerc')
    let $bePerc = $('#bePerc')
    let $fsPerc = $('#fsPerc')

    let $pythonTitle = $('#pythonTitle')
    let $feTitle = $('#feTitle')
    let $beTitle = $('#beTitle')
    let $fsTitle = $('#fsTitle')

    let percObj = {}

    percObj[$pythonTitle.text()] = $pythonPerc
    percObj[$feTitle.text()] = $fePerc 
    percObj[$beTitle.text()] = $bePerc
    percObj[$fsTitle.text()] = $fsPerc


    for (let i = 0; i < Object.keys(percObj).length; i++) {
        currValue = Object.keys(percObj)[i]
        const child = $(`#childBar${i+1}`)

        if (goalsListJSON[currValue]) {
            percObj[currValue].text((goalsListJSON[currValue]))
            child.width(goalsListJSON[currValue])
        }
    }

    
})





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

    // let goalsKeys = Object.keys(goalsListJSON);
    // let goalsValues = Object.values(goalsListJSON)
    // let goalsArray = $('.progress-bar')
    // for (let i = 0; i < goalsArray.length; i++) {
    //     let item = goalsArray[i]
    //     let finalString = goalsKeys[i] + goalsValues[i];
    //     item.innerHTML = finalString
        
    // }

    

    // console.log(titleText)
    // $.map(goalsListJSON, currentGoal => {
    //     console.log(currentGoal)
    //     let finalText = titleText[0] + ': ' + currentGoal
    //     console.log(finalText)
    //     ?.text(finalText)
    // })

// need to check width of each bar with local data and render
// how do i change inner text of each element upon rednering?
// i can get both pieces of data
// just have no way of rendering in the correct order (in relation to html and local data)