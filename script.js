const pictureElement = document.getElementById("toggle-image");
function changePicture(){
    const images = [
        "https://static.vecteezy.com/system/resources/thumbnails/008/951/892/small_2x/cute-puppy-pomeranian-mixed-breed-pekingese-dog-run-on-the-grass-with-happiness-photo.jpg", 
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200",
        "https://originstudiosphotography.com/wp-content/uploads/2022/01/334139716_737217144660470_2141774199510005670_n%28pp_w1200_h1200%29.jpg"
    ];
    
    let currentIndex = 0;
    
    pictureElement.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        pictureElement.src = images[currentIndex];
    });
}

changePicture()