

function isSymbolPresentInString(str,simbol){
    for(let i = 0; i< str.length; i++){
        if(str[i] === simbol){
            console.log(true);
            return true
        }else{
            console.log(false);
            return false;
        }
    }
}
isSymbolPresentInString("ffff","v");

function getSymbolIndex(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            console.log(`index:${i}`);
            return i;

        }

    }
    for (let j = 0; j < str.length; i++) {
        if (str[j] !== symbol) {
            console.log(-1);
            return -1
        }

    }

}
getSymbolIndex("Slavik", "g");

let obj1 = {
    user: "Slavik",
    age: 34,
    emei: "ewerlast1984@gmail.com",
    learn: "JavaScript"
}
let obj2 = {}

function copy(target, origin) {
    for (key in origin) {
        target[key] = origin[key]
    }
    return target
}
copy(obj2, obj1);
console.log('obj1', obj1);

console.log('obj2', obj2);



function comparisonObject(target, origin) {
    let ObjArrey = [];
    let ObjArrey2 = [];
    for (key in target) {
        ObjArrey.push(target[key]);

    }
    for (key in origin) {
        ObjArrey2.push(origin[key]);

    }
    if ((ObjArrey.length === ObjArrey2.length) && (target[key] === origin[key])) {
        console.log(true)
        return true;
    } else {
        return false;
        console.log(false);
    }

}
comparisonObject(obj1, obj2);



function checkStr(str) {

    let obj10 = {};

    for (let i = 0; i < str.length; i++) {

        if (obj10[str[i]] == true) {
            obj10[str[i]] += 1;
        } else {
            obj10[str[i]] = 1;
        }


    }
    return obj10;
}
console.log(checkStr("sdfgghh"))







