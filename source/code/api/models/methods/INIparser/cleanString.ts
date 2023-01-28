// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

export default
function cleanString(text:string){

    const letters = text.split("");
    const filtered:string[]=[];
    for (const letter of letters) {
        if(letter !== "'"){filtered.push(letter);}
        else{filtered.push("`")};
    };
    const newText = filtered.join("");

    return newText;
}