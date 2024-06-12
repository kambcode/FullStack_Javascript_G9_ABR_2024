const valorTotal = document.getElementById("counter")

let count = 0;
valorTotal.innerHTML = count;

const suma = () => {
    count = count + 1;
    valorTotal.innerHTML = count;
}


const restar = () =>{
    if(count > 0){
        count = count - 1;
        valorTotal.innerHTML = count
    }
    // count = count - 1;
    // if(count <= 0){
    //     count = 0;
    //     valorTotal.innerHTML = count;
    // } else
    //     valorTotal.innerHTML = count;
} 