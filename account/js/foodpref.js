function show(x){

    if(x.innerHTML=="+More"){
    x.innerHTML="Less";
    let y=x.parentNode.getElementsByTagName('a');
    for(let i=0;i<y.length;i++){
        console.log(y[i].classList.contains("collaps"))
        if(y[i].classList.contains("collaps")){
        y[i].classList.remove('collaps');
        y[i].classList.add('show');}
        
    }
    }
    else{
    x.innerHTML="+More";
    let y=x.parentNode.getElementsByTagName('a');
    for(let i=0;i<y.length;i++){
        console.log(y[i].classList.contains("collaps"))
        if(y[i].classList.contains("show")){
            y[i].classList.add('collaps');
            y[i].classList.remove('show');
        }
    }
}
}

function selec(x){

    let y=x.parentNode.parentNode.getElementsByTagName('a');
    for(let i=0;i<y.length;i++){
        y[i].classList.remove('btn-warning');
    }
    x.classList.add('btn-warning');
}
function sel(x){
    if(x.classList.contains("btn-warning")){
        x.classList.remove("btn-warning")
    }
    else{
        x.classList.add("btn-warning")
    }
}