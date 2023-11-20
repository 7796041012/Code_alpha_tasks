
// we have gives event to add button.so we have need to  give functionality to add button.
// we take one variable and that gives variable name
// we  have take target element .GetElementId for that.
let input = document.getElementById("inp");
// // we have using query selector for targeting text
let text = document.querySelector(".text");
 // we have  define add fuction
function Add(){
    //  suppose user not enter any content .so we have say to add content. for that we used if condition.
// // if inside input value will empty    .for that we have used alert message
    if(input.value == ""){
        alert("Please Enter Task")
    }else{
        // suppose user want to add any content .for that we have used create element 
        let newEle = document.createElement("ul");
        // we have used inner html for adding content in ul.we want to will add content .
     // we have assigned value inside input.value of ul.
        newEle.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
  // we create element.for show we have used text for targeting append child.in that we have adding  element.
        text.appendChild(newEle);
        input.value="";
//  after entering input content we get output.then input should remove.for adding another input content
    // also show delete icon.
    // first we need input should empty.
    // we should go for icon on google and search delete icon
    // We have need give functionality to delete icon. we have used addevent listener for that.
        newEle.querySelector("i").addEventListener("click" , remove);
        // we have used function remove for that
        // for removing input we used .
        function remove(){
            newEle.remove()
        }
    }
}