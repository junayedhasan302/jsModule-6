function vowelCounter(character){
    for(char of character){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || 
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            console.log("Vowel");
        }
        else console.log("Consonent!")
    }
}
vowelCounter("a");
vowelCounter("B");
vowelCounter("E");