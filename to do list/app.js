const card1=document.querySelectorAll(".card-header");
const form =document.querySelector("#todoform");
const InputForm = document.querySelector("#todoinput");
const ullist = document.querySelector("#ullist")


eventlisteners();


function eventlisteners(e){
form.addEventListener("submit",add);
ullist.addEventListener("click",del)
}

function add(e){
AddToDoUI();
e.preventDefault();

}
function AddToDoUI(e){
    let InputData = InputForm.value.trim();
uyari();
function uyari(){
    if(InputData===""){
      
       
        document.getElementById("alertfalse").style.visibility="visible";
        setTimeout(function()  {
            document.getElementById("alertfalse").style.visibility="hidden";
        }, 1000);
  
        
    }

    else{

     const newelement =document.createElement("li");
     const elementLink=document.createElement("a");
     elementLink.href="#";
     elementLink.id="delete-item"
     newelement.appendChild(elementLink);
     elementLink.innerHTML ="<i class='fa fa-trash-o'id='liinul' style='font-size:24px'></i>"
     const elementNode = document.createTextNode(InputData);
     newelement.appendChild(elementNode);
     ullist.appendChild(newelement);
    
        document.getElementById("alerttrue").style.visibility="visible";
               



        setTimeout(function()  {
            document.getElementById("alerttrue").style.visibility="hidden";
        }, 1000);
        setTimeout(function()  {
            InputForm.value=""
         },1000 );
      
    }
}
}
function del(e){
    const tus = e.target.tagName
    console.log(tus)
    if(tus=='I'){
        
       e.target.parentElement.parentElement.remove();
    }
  
}