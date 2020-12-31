// Import the Dog class

import dog from "./dogData";
//dog.info(); ini dihapus aja dan diganti sama yang dibawah 
console.log("---------");
dog1.info();
console.log("---------");
dog2.info();


//catatan 
//A default export can only be used for one value in one file   
//kalo mau export multiple values, use "named export"
//cara named export : export { value name};
//kalo mau multiple export : export {value name1, value name2};
//untuk importnya : import { value name} from "./fileName"
//kalo mau multiple import : import {value name1, value name2};
//cara tulis import : ./fileName (disebut relative path)
// ./data with one dot artinya current directory and relative path di folder/ tempat yg sama 
// ./data/dogData : kalo ternyata filenya harus akses ke file di folder lain  
// ../../ : kalo file import dan export berada di 2 folder yang beda 
