let repeat1 = document.getElementById("repeat1");
const img = document.getElementById("img");

// const element = document.getElementById("input_data");
let countId=0
const handleaddInput = () => {
      //event.preventDefault();
    
    const newinput = ` 

     <input type="text" name="" id="inputid${countId=countId+1}" placeholder="work hours">
    

     <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>`
      
    repeat1.innerHTML += (newinput);

}

const removeFunction=(event,id)=>{
    event.preventDefault();

    document.getElementById(`inputid${id}`).remove();
    document.getElementById(`btn${id}`).remove();
}

let repeat2 = document.getElementById("repeat2");

const handleaddInput2 = (event) => {
    event.preventDefault();
    const newinput = ` 

    <input type="text" name="" id="inputid${countId=countId+1}" placeholder="Development">
   

    <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>`

    repeat2.innerHTML += (newinput);
}


let repeat3 = document.getElementById("repeat3");

const handleaddInput3 = (event) => {
    event.preventDefault();
    const newinput = ` 

    <input type="text" name="" id="inputid${countId=countId+1}" placeholder="">
   

    <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>`

    repeat3.innerHTML += (newinput);
}


const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", () => {
    img.src = URL.createObjectURL(image_input.files[0]);
});













// if(input_data.value){
    //     const para =document.createElement("");
    
    //     para.innerHTML = `${input_data.value} <button>delete</button>`;
    
    //     const deleteBtn = para.getElementsByTagName("button");
    
    //     deleteBtn[0].addEventListener("click",() => {
    //         para.remove();
    //     })
    
    // element.appendChild(para)
    // }
    
   

// const handleaddInput = () => {
//     //  e.preventDefault();
    
//     const newinput = ` 

//     Job success <input id="input${idcount=idcount+1}" type="text" name="" placeholder=""   >
//     <br><br>
//      On budget
//     <input id="input${idcount=idcount+1}" type="text" name=""  >`

//     repeating.innerHTML += (newinput);

// }
