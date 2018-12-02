let quickCrescente = []
for (let i = 1; i <= 7800; ++i) {
    quickCrescente.push(i)
}

let quickDecrescente = []
for (let i = 7800; i >= 1; --i) {
    quickDecrescente.push(i)
}

let quickRandom = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 7800; ++i) {
    quickRandom.push(getRandom(1, 7800))
}

function quickOrdenacao(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quickOrdenacao(left).concat(pivot, quickOrdenacao(right));
};

    const quickSort  = function() {
    let quickCI = new Date().getTime()
    quickOrdenacao(quickCrescente)
    let quickCE = new Date().getTime()
    let quickCF = quickCE - quickCI
    console.log(`Vetor Crescente em Quick Sort levou: ${quickCF}ms`)
    document.getElementById("quickC").value = quickCF

    let quickDI = new Date().getTime()
    quickOrdenacao(quickDecrescente)
    let quickDE = new Date().getTime()
    let quickDF = quickDE - quickDI
    console.log(`Vetor Decrescente em Quick Sort levou: ${quickDF}ms`)
    document.getElementById("quickD").value = quickDF

    let quickRI = new Date().getTime()
    quickOrdenacao(quickRandom)
    let quickRE = new Date().getTime()
    let quickRF = quickRE - quickRI
    console.log(`Vetor Random em Quick Sort levou: ${quickRF}ms`)
    document.getElementById("quickR").value = quickRF
    alert ("Quick Sort já finalizou!")
}