//  star pattern

/**
 *    * * * *
 *    * * * *
 *    * * * *
 *    * * * *
 */

// {
   
//   for (let i = 0 ; i < 4 ; i++) {
//      let row = '';
//      for( let j = 0 ; j < 10 ; j++) {
//         row = row + "* "
//      }
//      console.log(row);
//   }

// }


/**
 *    * 
 *    * * 
 *    * * * 
 *    * * * *
 */

// {
//     let n = 10;
//      for ( let i = 0 ; i < n ; i++) {
//         let row = '';
//          for( let j = 0 ; j < i+1 ; j++) {
//             row = row + "* "
//          }
//          console.log(row);
//      }
// }

/**
 *   * * * *
 *   * * *
 *   * *
 *   *
 */

//  {
//     let n = 5;
//     for( let i = 0 ; i < n ; i++) {
//         let row = "";
//          for( let j = n ; j > i ; j--) {
//             row = row + "* ";
//          }
//          console.log(row);
//     }
//  }

/**
 *  1
 *  1 2
 *  1 2 3 
 *  1 2 3 4 
 *  1 2 3 4 5
 */

// {
//      let n = 6;

//      for (let i = 0; i < n; i++) {
//          let row = "";
//         for( j = 0 ; j < i + 1 ; j++) {
//              row = row + (j+1);
//         }
//         console.log(row);
//      }
// }

/**
 *  1
 *  2 2
 *  3 3 3 
 *  4 4 4 4 
 *  5 5 5 5 5
 */

// {
//      let n = 5;

//      for (let i = 0; i < n; i++) {
//          let row = "";
//         for( j = 0 ; j < i + 1 ; j++) {
//              row = row + (i+1);
//         }
//         console.log(row);
//      }
// }

/**
 *  1 2 3 4 5   j=5
 *  1 2 3 4     j=4
 *  1 2 3       j=3
 *  1 2         j=2
 *  1
 * 
 *  pattern 2 - 
 *  
 *  1 1 1 1 1 
 *  2 2 2 2
 *  3 3 3
 *  4 4 
 *  5
 */

// {

//      for(let i = 5 ; i > 0 ; i-- ) {
//           let row = '';
//           for(let j = 0 ; j < i ; j++) {
//                row = row + (j+1)
//           }
//           console.log(row)
//      }
// }


// {
//      let n=5;
//      for( let i=0; i<n ; i++) {
//           let row = '';
//           for(let j=0 ; j < n-(i+1) ; j++) {
//                row = row + " "
//           }
//           for(let k = 0; k < i+1 ; k++) {
//                row = row + "*"
//           }
//           console.log(row)
//      }
// }

/**
 *  1
 *  1 0
 *  1 0 1
 *  1 0 1 0
 *  1 0 1 0 1
 *  1 0 1 0 1 0
 */

// {
//      let n=6;

//      for( let i= 0 ; i<n; i++) {
//           let row = '';
//           let switchValue = 1;
//           for( let j= 0; j < i+1 ; j++) {
//                row = row + switchValue;

//                if( switchValue == 1) {
//                     switchValue = 0;
//                }else {
//                     switchValue = 1;
//                }
//           }
//           console.log(row);
//      }
// }

/**
 * 1
 * 0 1
 * 0 1 0
 * 1 0 1 0 
 * 1 0 1 0 1
 */

{
     let n=6;

     var switchValue = 1;
     for( let i= 0 ; i<n; i++) {
          let row = '';
          for( let j= 0; j < i+1 ; j++) {
               row = row + switchValue;

              switchValue == 1 ? switchValue = 0 : switchValue = 1;
          }
          console.log(row);
     }
}

