class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    }
}

const myDic = new Dictionary();
myDic.add("imran", "0372827373");
myDic.add("bappy", "0493848233");
myDic.add("rana", "4324324234");
myDic.add("roni", "3243432444");

console.log(myDic);