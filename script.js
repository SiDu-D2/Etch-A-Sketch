function createGrid(gridSize = 16){

    const display = document.querySelector(".display");
    display.innerHTML = ""; //clears existing grid
    display.style.display = "flex";
    display.style.flexWrap = "wrap";
    
    for (let i = 1; i <= gridSize * gridSize; i++) {
        let gridMaker = document.createElement("div");
        gridMaker.classList.add("grid-box");

        //add event listener for mouseover event
        gridMaker.addEventListener("mouseover", () => {
            gridMaker.classList.add("hovered");
        });

        display.appendChild(gridMaker);
    }

    // Update CSS grid-box properties based on new grid size
    const gridBoxSize = `calc(100% / ${gridSize})`;
    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach(gridBox => {
        gridBox.style.width = gridBoxSize;
        gridBox.style.height = gridBoxSize;
    });
}
createGrid();



const button  = document.querySelector("button");

button.addEventListener("click", () => {
    const userInput = prompt("Enter new grid size (1-100)");
    const newSize = Number(userInput);
    if (!isNaN(newSize) && newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert ("please enter a number between 1 and 100!");
    }
});