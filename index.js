let repeating = document.getElementById("repeating");
const img = document.getElementById("img");

const handleaddInput = () => {
    //  event.preventDefault();
    const newinput = ` 

    <input type="text" name=""   ><br>
     
    <br>
    <input type="text" name=""  ><br><br>

   
    <input type="text" name=""  ><br>`

    repeating.innerHTML += (newinput);
}

const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", () => {
    img.src = URL.createObjectURL(image_input.files[0]);
});