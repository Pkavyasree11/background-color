const button = document.getElementById("btn");
const colorText = document.querySelector(".color");

const hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

button.addEventListener("click", () => {
    const hexcolor = generateHexColor();
    document.body.style.backgroundColor = hexcolor;  
    colorText.textContent = hexcolor;                
});

function generateHexColor() {
    let hexcolor = "#";
    for ( i = 0; i < 6; i++) {                    
        hexcolor += hex[generateRandomNumber()];    
    }
    return hexcolor;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

