// ARRAYS - SPREAD: Uma forma de lidar separadamente com elementos.

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3]; 

console.log(sum(...numbers)); // A sintaxe "..." faz com que cada número corresponda as suas respectivas posiçoes, x, y, z

