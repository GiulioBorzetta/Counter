
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let counter = document.querySelector("p");
let i = 0;

counter.innerHTML = "Il Counter si trova al numero:" + i;

plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);

function increase(plus){
    while(plus){
        i++;
        console.log(i);
        counter.innerHTML = "Il Counter si trova al numero:" + i;
        return i;
    }
}

function decrease(minus){
    while(minus){
        i--;

        if(i < 0){
            i = 0;
        }
        
        console.log(i);
        counter.innerHTML = "Il Counter si trova al numero:" + i;
        return i;
    }
}

