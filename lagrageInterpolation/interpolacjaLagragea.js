  var fs = require('fs');
  
  
  function lagrangeInterpolation(x, y, xp) {
    let yp = 0;
    const n = x.length;

    for (let i = 0; i < n; i++) {
        let l = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                l *= (xp - x[j]) / (x[i] - x[j]);
            }
        }
        yp += l * y[i];
    }

    return yp;
}

fs.readFile('liczby.txt', 'utf8', function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    
    const lines = data.trim().split('\n');
    //console.log(lines)
    const x = lines[0].split(',').map(parseFloat);
    const y = lines[1].split(',').map(parseFloat);

    const xp = lines[2];
    
    console.log(lagrangeInterpolation(x, y, xp));
});
