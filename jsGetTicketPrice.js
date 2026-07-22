function getTicketPrice(age){
    if(age<12) return "5$";
    else if(age>=60) return "7$";
    else return "10$";
}
console.log(getTicketPrice(10));
console.log(getTicketPrice(70));
console.log(getTicketPrice(50));