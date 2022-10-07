const gridContainer= document.querySelector('.grid-container')

for(let i=0;i<256;i++){
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('grid-item')
    gridContainer.appendChild(gridDiv)
}

console.log(gridContainer)