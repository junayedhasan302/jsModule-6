function myFloor(num) {
    return num - (num % 1);
}
function SumOfDigits(digit){
    sum = 0;
    while(digit!=0){
        sum+=digit%10;
        digit = myFloor(digit/10);
    }
    console.log(sum);
}
SumOfDigits(12345)