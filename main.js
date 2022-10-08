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