function saveadd(x){
    let z;
if(x.id=="add")z="#save";
else z="#add";
console.log(z);
    if(document.querySelector(".save").style.display=="none"){
        document.querySelector(".save").style.display="block";
        document.querySelector(".add").style.display="none";}
        else{
            document.querySelector(".save").style.display="none";
            document.querySelector(".add").style.display="block"; 
        }
if(x.classList.contains("active1")){
    
x.classList.remove("active1","d-sm-flex","justify-content-sm-center")
x.classList.add("disabled");

let y=document.querySelector(z);
y.classList.remove("disabled");
y.classList.add("active1","d-sm-flex","justify-content-sm-center");
y.style.display="block";
}
else{
    x.classList.remove("disabled");
    x.classList.add("active1","d-sm-flex","justify-content-sm-center")
  
    let y=document.querySelector(z);

    y.classList.add("disabled");
    y.classList.remove("active1","d-sm-flex","justify-content-sm-center");
    y.style.display="block"; 
}
}
function rembg(x){

    x.classList.add("tag1");
    x.value="";
}
function rembg1(x){

    x.classList.remove("tag1");
    x.classList.add("tag");
    x.value="Tag";
}
var i=1;
function addmore(x){

    var source = document.getElementById(`add${i.toString()}`);
 
    destination = document.getElementById(`add${(i+1).toString()}`);

// Create & append evil clone 
let evilclone = source.cloneNode(true);
let evilclone1 = destination.cloneNode(true);
evilclone.removeAttribute("id");
evilclone1.removeAttribute("id");
evilclone.id = `add${(i+1).toString()}`;
evilclone1.id = `add${(i+2).toString()}`;
destination.appendChild(evilclone);-
destination.appendChild(evilclone1);
i=i+1;
x.style.display="none";
evilclone.querySelector("#addid").innerHTML=`Address ${(i).toString()}`;


}

function deletead(x){ 
$($(x).attr('href')).remove();
$(`${$(x).attr('href')}b`).remove();
  
}