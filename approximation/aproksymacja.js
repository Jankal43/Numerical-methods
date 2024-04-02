function leastSquares(n,x,y)
{
    let xy = 0;
    let xi = 0;
    let yi = 0;
    let xi2 = 0;
    let yi2 = 0;

    for(let i = 0; i<n; i++){
        xy += x[i]*y[i];
        xi += x[i]
        yi += y[i]
        xi2 += (x[i]*x[i])  
        yi2 += (y[i]*y[i])  
    }   

    let m1 = (n* xy-xi*yi)
    let d1 = (n*xi2-(xi*xi))

    let m0 =yi*xi2-xi*xy;
    let d0 =n*xi2-xi*xi;


    let a1 = m1/d1;
    let a0 = m0/d0;

    
    let rm1 = n*xy-xi*yi
    let dm1 = Math.sqrt(n*xi2-xi*xi)*Math.sqrt(n*yi2-yi*yi)
    let r = rm1/dm1

   
 
    return [a0, a1, r];
}




const x = [2,4,6,10,12]
const y = [-2,1,5,6,15]

const x2 = [1, 2, 3, 4, 5];
const y2 = [2, 3, 4, 5, 6];

const x3 = [0, 1, 2, 3, 4];
const y3 = [0, 2, 4, 6, 8];

const x4 = [-1, 0, 1, 2, 3];
const y4 = [1, 2, 3, 4, 5];

const x5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const y5 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

const x6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const y6 = [0, 0.5, 2, 4.5, 8, 12.5, 18, 24.5, 32, 40.5];

const x7 = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
const y7 = [9, 4, 1, 0, 1, 4, 9, 16, 25];


const n = x.length

// console.log(leastSquares(n,x,y))

// console.log(leastSquares(x2.length, x2, y2));
// console.log(leastSquares(x3.length, x3, y3));
// console.log(leastSquares(x4.length, x4, y4));

console.log(leastSquares(x5.length, x5, y5));
// console.log(leastSquares(x6.length, x6, y6));
// console.log(leastSquares(x7.length, x7, y7));