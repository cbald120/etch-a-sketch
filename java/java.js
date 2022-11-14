let container = document.getElementById("container");
const body = document.querySelector('#container');
//let cell = document.createElement("div");
let big = document.getElementById("big");

var button = document.querySelector("#press");


  function createGrid (e) {
    container.style.gridTemplateColumns = `repeat(${e}, 1fr)`
    container.style.gridTemplateRows = `repeat(${e}, 1fr)`
        for (let i = 0; i < e * e; i++) {
            const div = document.createElement('div');
            div.classList.add('cell');
            div.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = "black"
            })
            body.appendChild(div); 
        }
        };
   

function clearGrid() {
    body.innerHTML = '';
}

/*function colorSelected (element) {
    document.cell.style.background = element.value

}*/

button.addEventListener("click", function() {
   let e = prompt("How large you want it?");
   clearGrid(); //needs to be created
    createGrid(e); 
})
 
createGrid(25);


