import {people} from "./lib/peoples.mjs";

console.log(people);

hello(people);

function hello(array) {
    console.log("how are you"); for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
}