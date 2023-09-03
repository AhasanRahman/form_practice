
const img = document.getElementById("img");
const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", () => {
    img.src = URL.createObjectURL(image_input.files[0]);
});

// const element = document.getElementById("input_data");

let repeat1 = document.getElementById("repeat1");
let countId=0
const handleaddInput = () => {
      //event.preventDefault();
    
      const newinput = ` 

      <input class="firstinputchild" type="text" name="" id="inputid${countId+=1}" placeholder="Repeat hire" >
      
      <input class="firstinputchild" type="text" name="" id="inputid${countId}" placeholder="job success ">
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

      <input class="firstinputchild"  type="text" name="" id="inputid${countId+=1}" placeholder="work time" >
      
      <input class="firstinputchild"  type="text" name="" id="inputid${countId}" placeholder="work hours ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>` 

    repeat2.innerHTML += (newinput);
}


let repeat3 = document.getElementById("repeat3");

const handleaddInput3 = (event) => {
    event.preventDefault();
    const newinput = ` 

      <input class="firstinputchild"   type="text" name="" id="inputid${countId+=1}" placeholder="new task ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>

      <input class="firstinputchild"  type="text" name="" id="inputid${countId+=1}" placeholder="previous work ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>

      <input class="firstinputchild"  type="text" name="" id="inputid${countId+=1}" placeholder=" another ">
      <button id="btn${countId}" onclick="removeFunction(event,${countId})">remove</button>` 

    repeat3.innerHTML += (newinput);
}

function takevalue(e){

    e.preventDefault();
    var name = document.getElementById("hname").value;
    var position = document.getElementById("Position").value;
    var Address = document.getElementById("Address").value;
    var activities1 = document.getElementById("Activities1").value;
    var activities2 = document.getElementById("Activities2").value;


    // const firstinputchild = document.getElementsByClassName("firstinputchild");
    
    // if(firstinputchild[0]){
    //     for(let i=0;i<firstinputchild.length;i++){
    //         console.log(firstinputchild[i].value);
    //     }
    // }

    let showData=document.getElementById("showData");

    const shownewvalue=`
    <p>name:${name}</p>
    <p>position: ${position}</p>
    <p>Address: ${Address}</p>
    <p>activities1:${activities1}</p>
    <p>activities2:${activities2}</p>

    `
    
    showData.innerHTML=shownewvalue;



    // document.write("His name :" +hname+"<br>");
    // document.write("His Position  : " + position+"<br>");
//     document.write("His Address--- : " + Address+"<br>");
//     document.write("His activities : " + activities1+"<br>"); 
//     document.write("His activities : " + activities2+"<br>");
 }




// function AddRow(e){

// }

/*
    const newbody=`
    <tr>
                            <th>${name}</th>
                            <th>${position}</th>
                            <th>${Address}</th>
                            <th>${activities}</th>
                            <th>work history</th>
                        </tr>`
    
*/
 
// const handleaddInput = () => {
//     //  e.preventDefault();
    
//     const newinput = ` 

//     Job success <input id="input${idcount=idcount+1}" type="text" name="" placeholder=""   >
//     <br><br>
//      On budget
//     <input id="input${idcount=idcount+1}" type="text" name=""  >`

//     repeating.innerHTML += (newinput);
