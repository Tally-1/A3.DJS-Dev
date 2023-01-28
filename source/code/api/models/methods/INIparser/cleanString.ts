// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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