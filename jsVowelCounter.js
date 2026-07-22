function vowelCounter(string){
    let VowelCnt = 0,
    ConsonentCnt = 0;
    for(char of string){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || 
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            VowelCnt++;
        }
        else ConsonentCnt++;
    }
    console.log("Number of vowel is: ", VowelCnt);
    console.log("Number of Consonent is: ", ConsonentCnt);
}
vowelCounter("abcdEfgHijKlmNopQrsTUvWxyZ");
