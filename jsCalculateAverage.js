function calculateAverage(array){
    let sum = 0, len = 0;
    for(num of array){
        sum+=num;
        len++;
    }
    return sum/len;
}
let numnbers = [10,20,30,40,50];
console.log("Avarage of numbers: ",calculateAverage(numnbers));