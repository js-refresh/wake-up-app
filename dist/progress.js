// need to crate event listeners for each progress bar 
// make event listeners measure x value of mouse click relative to element
// 

const parentBar1 = $('#parentBar1')
const childBar1 = $('#childBar1')
let bar1Text = parentBar1.text()

parentBar1.on('click', (e) => {
    let userClickX = e.pageX - parentBar1.offset().left
    let barWidth = parentBar1.width()
    let percentageOfBar = ((userClickX / barWidth) * 100).toFixed(0);
    const widthStr = percentageOfBar + '%'
    childBar1.width(widthStr)
    let newText = bar1Text + widthStr;
    childBar1.text(newText)
})

const parentBar2 = $('#parentBar2')
const childBar2 = $('#childBar2')
let bar2Text = parentBar2.text()

parentBar2.on('click', (e) => {
    let userClickX = e.pageX - parentBar2.offset().left
    let barWidth = parentBar2.width()
    let percentageOfBar = ((userClickX / barWidth) * 100).toFixed(0);
    const widthStr = percentageOfBar + '%'
    childBar2.width(widthStr)
    let newText = bar2Text + widthStr;
    childBar2.text(newText)
})

const parentBar3 = $('#parentBar3')
const childBar3 = $('#childBar3')
let bar3Text = parentBar3.text()

parentBar3.on('click', (e) => {
    let userClickX = e.pageX - parentBar3.offset().left
    let barWidth = parentBar3.width()
    let percentageOfBar = ((userClickX / barWidth) * 100).toFixed(0);
    const widthStr = percentageOfBar + '%'
    childBar3.width(widthStr)
    let newText = bar3Text + widthStr;
    childBar3.text(newText)
})

const parentBar4 = $('#parentBar4')
const childBar4 = $('#childBar4')
let bar4Text = parentBar4.text()

parentBar4.on('click', (e) => {
    let userClickX = e.pageX - parentBar4.offset().left
    let barWidth = parentBar4.width()
    let percentageOfBar = ((userClickX / barWidth) * 100).toFixed(0);
    const widthStr = percentageOfBar + '%'
    childBar4.width(widthStr)
    let newText = bar4Text + widthStr;
    childBar4.text(newText)
})

