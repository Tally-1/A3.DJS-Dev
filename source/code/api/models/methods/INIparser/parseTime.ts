// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

export default
function parseTime(stringTime:string):string {
    const daytime = JSON.parse(JSON.parse(stringTime));
    let hour = daytime[0];
    let minute = daytime[1];

    if(hour < 10){hour="0"+hour+''};
    if(minute < 10){minute="0"+minute+''};

    const time = ('' + hour +':'+minute);
    return time;
};