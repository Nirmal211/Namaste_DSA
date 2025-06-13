for (i = 3 ;  i < 5 ; i++) {
    // console.log('HW');
}


for ( i = 2 ; i < 9 ; i = i + 2) {
    // console.log('Hello World')
}

// 2 - hello world  2+2 = 4
// 4 - hello world  4+2 = 6
// 6 - hello world  6+2 = 8
// 8 - hello world  8+2 = 10  10 < 9 false


for( i = 5 ; i > 0 ; i--) {
    // console.log(i);
}

// 5
// 4
// 3
// 2
// 1

function add(x) {
    console.log(x + 1);
}

for(let i=0 ; i < 10 ; i++) {
    // add(i);
}


const arr = [1,2,3,4,5,6];

for(let i = 0 ; i<arr.length ; i++) {
    if(arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}

//  while loop
{
let i = 0;

while (i < 5) {
 console.log('hello world')
 i++;
}
}