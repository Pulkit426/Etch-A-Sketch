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

function createButton(buttonName, setFunction){
const newButton = document.createElement('button')
newButton.textContent = buttonName
newButton.addEventListener('click', setFunction)
selection.appendChild(newButton)
}

const gridItems = document.querySelectorAll('.grid-item')
function resetGrid() {
    gridItems.forEach(item => item.style.backgroundColor = "white")
}

function setColorToBlack() {
    gridItems.forEach(item =>  item.addEventListener('mouseover', () => item.style.backgroundColor = "black"))
}

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

createButton("Reset", resetGrid)
createButton("Black", setColorToBlack)
createButton("RGB", setRandomColor)

const text = document.createElement('span')
text.textContent = "Chose a color"

const colorPicker = document.createElement('input')
colorPicker.setAttribute("type", "color")
colorPicker.style = "width: 75px"
colorPicker.textContent = "Chose a color"

colorPicker.addEventListener('change', (e) => gridItems.forEach(item =>  item.addEventListener('mouseover', () => item.style.backgroundColor = e.target.value)))
selection.appendChild(text)
selection.appendChild(colorPicker)
