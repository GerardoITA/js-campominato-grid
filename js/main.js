let inizio = document.getElementById("start")

inizio.addEventListener("click", 

    createBox(100, "container")

    ,("box")

    
)
let scatole = document.getElementsByClassName("box");

for (const box of scatole) {
    box.addEventListener('click', function onClick() {

        for(i = 1; i < scatole.length; i++){

            this.classList.toggle("clicked");

        }   
        console.log(i)
    });
} 



