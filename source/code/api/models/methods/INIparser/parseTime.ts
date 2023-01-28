// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

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