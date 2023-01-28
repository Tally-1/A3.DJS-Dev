//This solution was retrieved at stack-overflow and modified to fit Typescript.
//source:
//https://stackoverflow.com/questions/3870019/javascript-parser-for-a-string-which-contains-ini-data




export default 
function parseINIString(data:string):any{
    var regex = {
        section: /^\s*\[\s*([^\]]*)\s*\]\s*$/ as  any,
        param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/ as  any,
        comment: /^\s*;.*$/ as  any
    };
    var value = {} as any;
    var lines = (data.split(/[\r\n]+/)) as any;
    var section  = null as any;
    lines.forEach(function(line:any){
        if(regex.comment.test(line)){
            return;
        }else if(regex.param.test(line)){
            var match = line.match(regex.param);
            if(section){
                value[section][match[1]] = match[2];
            }else{
                value[match[1]] = match[2];
            }
        }else if(regex.section.test(line)){
            var match = line.match(regex.section);
            value[match[1]] = {};
            section = match[1];
        }else if(line.length == 0 && section){
            section = null;
        };
    });
    return value;
};