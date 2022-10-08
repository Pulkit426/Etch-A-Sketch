const gridContainer= document.querySelector('.grid-container')

for(let i=0;i<256;i++){
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('grid-item')
    gridDiv.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'
    })
    gridContainer.appendChild(gridDiv)
}

const selection =  document.querySelector('.selection')
console.log(selection)
const resetButton = document.createElement('button')
const gridItems = document.querySelectorAll('.grid-item')
resetButton.addEventListener('click', resetGrid)
resetButton.textContent = "Reset"
selection.appendChild(resetButton)
function resetGrid() {
    gridItems.forEach(item => item.style.backgroundColor = "white")
}

const blackButton = document.createElement('button')
blackButton.textContent = 'Black'
blackButton.addEventListener('click', setColorToBlack)
selection.appendChild(blackButton)

function setColorToBlack() {
    gridItems.forEach(item =>  item.addEventListener('mouseover', () => item.style.backgroundColor = "black"))
}

const RGBButton = document.createElement('button')
RGBButton.textContent = 'RGB'
RGBButton.addEventListener('click', setRandomColor)
selection.appendChild(RGBButton)

function setRandomColor() {
    gridItems.forEach(item =>  item.addEventListener('mouseover', () => item.style.backgroundColor = getRandomColor()))
}
function getRandomColor(){
    let x= Math.floor(Math.random()*256)
    let y= Math.floor(Math.random()*256)
    let z= Math.floor(Math.random()*256)
    let bgColor= "rgb(" + x + "," + y + "," + z + ")"
    return bgColor
}