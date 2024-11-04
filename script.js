const textElement = document.querySelector("#text"); //saves the text into a variable
const changeColorButton = document.querySelector("#changeColorButton"); //saves the button into a variable
console.log(textElement.textContent); //Use the textContent property to see inside or change text.
//textElement.textContent = "Hello"; //Show them this so it shows them how to change text elements

const pictureElement = document.getElementById("toggle-image"); //Image element to display pictures

function changeTextColor() {
    const colors = ["blue", "brown", "red", "green", "purple", "yellow", "orange"]; //array for color changing
    changeColorButton.addEventListener("click", () => {                         //change color button event listener
        const randomColor = colors[Math.floor(Math.random() * colors.length)];  //iterating through color list
        textElement.style.color = randomColor;
    })
}
changeTextColor()

//---------------------------------------------------------------------------------//

const picturesElement = document.getElementById("toggle-image");
function changePicture(){
    const images = [
        "https://static.vecteezy.com/system/resources/thumbnails/008/951/892/small_2x/cute-puppy-pomeranian-mixed-breed-pekingese-dog-run-on-the-grass-with-happiness-photo.jpg", 
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200",
        "https://originstudiosphotography.com/wp-content/uploads/2022/01/334139716_737217144660470_2141774199510005670_n%28pp_w1200_h1200%29.jpg"
    ];
    
    let currentIndex = 0;
    
    picturesElement.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        picturesElement.src = images[currentIndex];
    });
}

changePicture()