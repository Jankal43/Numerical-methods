
function f1(x) {
    return x * x * x + 2;
}


function metodaProstokatow(f, xp, xk, n) {
    let dx = (xk - xp) / n;
    let calka = 0;

    for (let i = 1; i <= n; i++) {
        let xi = xp + (i * dx);
        calka += f(xi);
    }


    return calka*dx;
}

let wynik = metodaProstokatow(f1, 1, 4, 3);
console.log("Wynik calkowania metoda prostokatow: " + wynik);


function metodaTrapezow(f, xp, xk, n) {
    let dx = (xk - xp) / n;
    let calka = 0;

    for (let i = 0; i < n; i++) {
        let xi = xp + i;
        let xj = xp + i + 1

        let ex = (f(xi)+f(xj))/2*dx
        calka += ex;
    }

    return calka;
}

// Testowanie funkcji
wynik = metodaTrapezow(f1, 1, 4, 3);
console.log("Wynik calkowania metoda trapezow: " + wynik);


function monteCarlo(f, xp, xk, n) {
    let calka = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let x = xp + Math.random() * (xk - xp); 
        sum += f(x);
    }

    calka = Math.abs(xk - xp) * (sum / n);

    return calka;
}

wynik = monteCarlo(f1, 1, 5, 4);
console.log("Wynik calkowania metoda monteCarlo: " + wynik);


function metodaSimpsona(f, xp, xk, n) {
    let dx = (xk - xp) / n;
    let sum = f(xp) + f(xk);

    for (let i = 1; i < n; i++) {
        let x = xp + i * dx;
        if (i % 2 === 0) {
            sum += 2 * f(x);
        } else {
            sum += 4 * f(x);
        }
    }

    return sum * dx / 3;
}


// Testowanie funkcji
wynik = metodaSimpsona(f1, 1, 5, 4);
console.log("Wynik całkowania metodą Simpsona: " + wynik);
