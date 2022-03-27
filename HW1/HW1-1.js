const num = [  4 , 9 , 5 , 3 , 8  ];
const sortedSquaredNums = transform(num);

function transform (num) {

  let squared = num.map(x => x ** 2)

  squared.sort(function (a , b) {

        return a - b ; 
    })

  return squared; 
    
}

console.log(sortedSquaredNums);