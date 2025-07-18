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

{
     let n = 5;

     for (let i = 0; i < n; i++) {
         let row = "";
        for( j = 0 ; j < i + 1 ; j++) {
             row = row + (i+1);
        }
        console.log(row);
     }
}

