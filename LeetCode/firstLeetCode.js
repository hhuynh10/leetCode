// linked lists
// - primative data structures

// fizz buzz

// given 100 outputs/print statements
// fizz every multiple of 3
// buzz every mutiple of 5

// string literal
// for (let i = 0 ; i < 100; i++ ){
//     if (i % 3 == 0){
//         console.log( i + ' ' + 'fizz')
//     }
//     if (i % 5 == 0 ){
//         console.log(i + ' ' + 'buzz')
//     }
// }

// let str = 'bitchface';
// let res = '';

// StringBuilder sb = new StringBuilder();

// for (let i = str.length-1; i >= 0; i--) {
//     res += str.charAt(i);
//     sb.append(s.charAt(i));
// }
// sb.toString();
// console.log(res);

// let newSts = str.split('')
// let arr = []
// (N)
// (1)
// for (i = 0, j = newSts.length -1; i <newSts.length; i++, j--){
//     arr[i] = newSts[j]
// }
// let finalStr = arr.join('')
// console.log(finalStr)

// Wealthiest Customer
// i = cust, j = wealth

let accounts = [[1,2,3],[3,2,1]];
//  iterate through array
//      compare values in array
//          return value
//  variables: total, prev/temp; curr/prev,  = result

    //     col
    // row 0,0   0,1   0,2
    //     1,0   1,1   1,2
    //     2,0   2,1   2,2
let sum = 0, result = 0;
for (let i = 0; i < accounts.length; i++) {
    let total = 0;
    for (let j = 0; j < accounts.length; j++) {
        // wealth of each cust, reset variable for each iteration/customer
        total += accounts[j];
        
        if (sum < total) {
            sum = total
        }

        // compare wealth
    }    
    console.log(total);
}
