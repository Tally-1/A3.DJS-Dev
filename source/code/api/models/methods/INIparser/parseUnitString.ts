// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

export default 
function parseUnitString(string:string):[] {
    const lastLetter = string.length -2;
    const newString  = string.substring(2, lastLetter);
    const segments = newString.split(',');

    const newSegments= [];
    for (const segment of segments) {
        let newSegment = segment.replace('""', '"');
        newSegment = newSegment.replace('""""', '""');
        const canChange = newSegment !== '""';
        
        if(canChange && newSegment.endsWith('""'))
        {newSegment = newSegment.replace('""', '"');};

        newSegment = newSegment.replace('"[', '[');
        newSegment = newSegment.replace(']"', ']'); 
        newSegment = newSegment.replace('""]', '"]');
        newSegments.push(newSegment);
    };

    const finalString = newSegments.join(", ");
    const parsedArray = JSON.parse(finalString);
    return parsedArray;
};