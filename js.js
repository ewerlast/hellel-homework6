

function isSymbolPresentInString(str, simbol) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === simbol) {
            console.log(true);
            return true
        }

    }
    for (let j = 0; j < str.length; j++) {
        if (str[j] !== simbol) {
            console.log(false);
            return false;
        }

    }
}

isSymbolPresentInString("bhh", "v");

// *************не получаеться у меня с одним for *******************
function getSymbolIndex(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symbol) {
            console.log(`index:${i}`);
            return i;
        }

    }
    for (let j = 0; j < str.length; j++) {
        if (str[j] !== symbol) {
            console.log(-1);
            return -1;
        }
    }

}


getSymbolIndex("Slavik", "v");

let obj1 = {
    user: "Slavik",
    age: 34,
    emei: "ewerlast1984@gmail.com",
    learn: "JavaScript"
}
let obj2 = {}


function copy(target, origin) {
    for (let key in origin) {
        target[key] = origin[key]
    }
    return target
}
copy(obj2, obj1);
console.log('obj1', obj1);

console.log('obj2', obj2);



function comparisonObject(target, origin) {
    if (Object.keys(target).length !== Object.keys(origin).length) {
        console.log("FALSE");
        return false
    } else {
        for (let key in target) {
            if (target[key] !== origin[key]) {
                console.log(false);
                return false;
            } else {
                console.log(true);
                return true;
            }
        }
    }


}
comparisonObject(obj1, obj2);



function checkStr(str) {

    let obj10 = {};

    for (let i = 0; i < str.length; i++) {

        if (obj10[str[i]] !== undefined) {
            obj10[str[i]] += 1;
        } else {
            obj10[str[i]] = 1;
        }


    }
    return obj10;
}
console.log(checkStr("sdfgghh"))







