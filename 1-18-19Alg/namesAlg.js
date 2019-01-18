// let fs = require('fs');
// var names = fs.readFileSync('names.txt', 'utf8');
// let nameArray=names.split('\n');    //this will spit it off at the end of every word and create one large array
// console.log(nameArray);

// for(let i=0; i<nameArray.length; i++){
//     if(nameArray[i][0]===nameArray.length[i]-1)
//     console.log(firstLastMatch.push(nameArray[i]));
// }


// Correct Code:
var fs = require('fs')
let contents = (fs.readFileSync('names.txt','utf8'));
   // console.log(contents)
let namesArray = contents.split('\n')
   // console.log(namesArray)


// while(namesArray.length > 1){
//     for (let i = 0; i <namesArray.length; i++){
//         // console.log()
//     if (namesArray[i][0] !== namesArray[i][namesArray[i].length-1]){
//           namesArray.slice(namesArray[i])
//         }
//     }
//     console.log(namesArray)
// }

let firstLastMatch = []
for (let i=0;i<namesArray.length;i++){
   if (namesArray[i][0] === namesArray[i][namesArray[i].length-1]){
      firstLastMatch.push(namesArray[i])
   }
}
// console.log(firstLastMatch.length)
let firstLastMatch2 = []
for (let i=0;i<firstLastMatch.length;i++){
   if (firstLastMatch[i][1] === firstLastMatch[i][firstLastMatch[i].length-2] && firstLastMatch[i][2] === firstLastMatch[i][firstLastMatch[i].length-3]){
      firstLastMatch2.push(firstLastMatch[i])
   }
}
console.log(firstLastMatch2)
console.log(firstLastMatch2.length)
