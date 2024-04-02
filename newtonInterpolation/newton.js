var fs = require('fs');

function newtonInterpolation(z,n,x,y) {
    
        const Matrix = [];
        for (let i = 0; i < n; i++) {
            Matrix.push([]);   
            Matrix[i][0] = x[i];
            Matrix[i][1] = y[i];
        }
        // console.log(Matrix)


        for (let i = 2; i <= n; i++) {
            for (let j = 0; j <= n - i; j++) {
                Matrix[j][i] = (Matrix[j + 1][i - 1] - Matrix[j][i - 1]) / (x[j + i - 1] - x[j]);
            }
        }
        
        console.log(Matrix)
        // console.log(Matrix[0])
        const b = Matrix[0].slice(1);
        console.log(b);
        let lst = [];
        let t = 1;
        for (let i = 0; i < x.length; i++) {
            t *= (z - x[i]);
            lst.push(t);
        }
        console.log(lst)

        let f = b[0];
        for (let k = 1; k < b.length; k++) {
           
            f += b[k] * lst[k - 1];
        }
        
        return f;

    }
   


    fs.readFile('liczby.txt', 'utf8', function(err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        
        const lines = data.trim().split('\n');
        const x = lines[0].split(',').map(parseFloat);
        const y = lines[1].split(',').map(parseFloat);
    

        const n = x.length;



        const xp = lines[2];
        
        console.log(newtonInterpolation(xp,n,x,y));
    });
    



