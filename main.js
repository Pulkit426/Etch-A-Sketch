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


function resetGrid() {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item => item.style.backgroundColor = "white")
}

function setColorToBlack() {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item =>  item.addEventListener('mouseover', () => item.style.backgroundColor = "black"))
}

function setRandomColor() {
    const gridItems = document.querySelectorAll('.grid-item')
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

colorPicker.addEventListener('change', (e) => {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item =>  item.addEventListener('mouseover', () => item.style.backgroundColor = e.target.value))
})

const colorPickerContainer = document.createElement('div')
colorPickerContainer.classList.add('color-picker-container')
colorPickerContainer.appendChild(text)
colorPickerContainer.appendChild(colorPicker)
selection.appendChild(colorPickerContainer)

const sliderAndValue = document.createElement('div')
sliderAndValue.classList.add('slider-and-value')
const slider = document.createElement('input')
slider.setAttribute('type', 'range')
slider.setAttribute('min', 5)
slider.setAttribute('max', 100)
slider.setAttribute('value', 16)
slider.classList.add('slider')

const p= document.createElement('span')
p.textContent = slider.value
sliderAndValue.appendChild(slider)
sliderAndValue.appendChild(p)
selection.appendChild(sliderAndValue)

function removeGrid(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

slider.addEventListener('input', (e) => changeGrid(e))
function changeGrid(e){
    const value =  e.target.value
    p.textContent = value
    removeGrid(gridContainer)

    for(let i=0;i<value*value;i++){
        gridContainer.style = ` grid-template-columns: repeat(${value}, 2fr);
        grid-template-rows: repeat(${value}, 2fr);`
        const gridDiv = document.createElement('div')
        gridDiv.classList.add('grid-item')
        gridDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black'
        })
        gridContainer.appendChild(gridDiv)
    }
}