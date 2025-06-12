// make a functiont to check person is eligible to vote or not

function isEligibleToVote(age)  {
   if(age >= 18) {
      return "you can vote"
   }else {
      return "you are not eligible for vote"
   }
}

const res = isEligibleToVote(25);
console.log(res);


// write a function to check whether the number is even or odd

function isEvenOrOdd (val) {
   if(val % 2 == 0) {
      return 'even'
   }else {
      return 'odd'
   }
}

const res2 = isEvenOrOdd(11);
console.log(res2)