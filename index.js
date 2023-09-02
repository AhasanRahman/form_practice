
const img = document.getElementById("img");
const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", () => {
    img.src = URL.createObjectURL(image_input.files[0]);
});

// const element = document.getElementById("input_data");

let repeat1 = document.getElementById("repeat1");
let countId=0
let field =0
const handleaddInput = () => {
      //event.preventDefault();
    
      const newinput = ` 

      <input type="text" name="" class="field" id="inputid${countId+=1}" placeholder="on budget" >
      
      <input type="text" name="" id="inputid${countId}" placeholder="on time ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>` 

    repeat1.innerHTML += (newinput);

}

const removeFunction=(event,id)=>{
    event.preventDefault();

    document.getElementById(`inputid${id}`).remove();
    document.getElementById(`btn${id}`).remove();
    document.getElementById(`inputid${id}`).remove();
}

let repeat2 = document.getElementById("repeat2");

const handleaddInput2 = (event) => {
    event.preventDefault();
    const newinput = ` 

      <input type="text" name="" id="inputid${countId+=1}" placeholder="work time" >
      
      <input type="text" name="" id="inputid${countId}" placeholder="work hours ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>` 

    repeat2.innerHTML += (newinput);
}


let repeat3 = document.getElementById("repeat3");

const handleaddInput3 = (event) => {
    event.preventDefault();
    const newinput = ` 

      <input type="text" name="" id="inputid${countId+=1}" placeholder="new task ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>

      <input type="text" name="" id="inputid${countId+=1}" placeholder="previous work ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>

      <input type="text" name="" id="inputid${countId+=1}" placeholder=" another ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>` 

    repeat3.innerHTML += (newinput);
}


function takevalue(){

    
    var name = document.getElementById("hname").value;
    var position = document.getElementById("Position").value;
    var Address = document.getElementById("Address").value;
    var activities = document.getElementById("Activities").value;

    //var newfield = document.getElementById("inputid").value;
    //var newvalueadd = document.getElementsByClassName("push-to-add").value;

     
    document.write("His Name is : " + name+"<br>");
    document.write("His Position  : " + position+"<br>");
    document.write("His Address--- : " + Address+"<br>");
    document.write("His activities : " + activities+"<br>");

   // document.write("newfield : " +newfield );
    //document.write("His activities : " + activities+"<br>");

}





// const handleaddInput4 =(event ) => {
//     event.preventDefault();
//     const newinput =`<input type="text name=" id="input ` 
// }

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
