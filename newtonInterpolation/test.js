var fs = require('fs');


function newtonInterpolation(z) {
    const fList = [];
    for (const m of z) {
        const Matrix = [];
        for (let i = 0; i < n; i++) {
            Matrix.push([]);   
            Matrix[i][0] = x[i];
            Matrix[i][1] = y[i];
        }


        for (let i = 2; i <= n; i++) {
            for (let j = 0; j <= n - i; j++) {
                Matrix[j][i] = (Matrix[j + 1][i - 1] - Matrix[j][i - 1]) / (x[j + i - 1] - x[j]);
            }
        }
        
        //console.log(Matrix[0])
        const b = Matrix[0].slice(1);
        console.log(b);
        let lst = [];
        let t = 1;
        for (let i = 0; i < x.length; i++) {
            t *= (m - x[i]);
            lst.push(t);
        }
        console.log(lst)



        let f = b[0];
        for (let k = 1; k < b.length; k++) {
           
            console.log(f += b[k] * lst[k - 1]);
        }
        
        fList.push(f);
        console.log(f);
    }
    return fList;
}


const x = [-2,-1,0,2,4];
const y = [-1,0,5,99,-55];

const n = x.length;





const z = [1];
console.log("Wartosc x to:", newtonInterpolation(z));



