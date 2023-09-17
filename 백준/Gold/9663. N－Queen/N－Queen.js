const arrLength = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 0;

const recurtion = (row, colCheck, diag1Check, diag2Check) => {
    if (row === arrLength) {
        count++;
        return;
    }

    for (let col = 0; col < arrLength; col++) {
        if (
            !(colCheck & (1 << col)) &&
            !(diag1Check & (1 << (row + col))) &&
            !(diag2Check & (1 << (row - col + arrLength - 1)))
        ) {
            colCheck |= 1 << col;
            diag1Check |= 1 << (row + col);
            diag2Check |= 1 << (row - col + arrLength - 1);
            recurtion(row + 1, colCheck, diag1Check, diag2Check);
            colCheck &= ~(1 << col);
            diag1Check &= ~(1 << (row + col));
            diag2Check &= ~(1 << (row - col + arrLength - 1));
        }
    }
};

recurtion(0, 0, 0, 0);
console.log(count);