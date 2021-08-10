function selec(x){
  
        let y=x.parentNode.getElementsByTagName('a');
        for(let i=0;i<y.length;i++){
            y[i].classList.remove('btn-warning');
        }
        x.classList.add('btn-warning');
    }
    function selec1(x){
  
        let y=x.parentNode.parentNode.getElementsByTagName('a');
        for(let i=0;i<y.length;i++){
            y[i].classList.remove('btn-warning');
        }
        x.classList.add('btn-warning');
    }