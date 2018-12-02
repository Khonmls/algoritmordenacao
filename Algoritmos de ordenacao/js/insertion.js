let insertionCrescente = []
for (let i = 1; i <= 100000; ++i) {
    insertionCrescente.push(i)
}

let insertionDecrescente = []
for (let i = 100000; i >= 1; --i) {
    insertionDecrescente.push(i)
}

let insertionRandom = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 100000; ++i) {
    insertionRandom.push(getRandom(1, 100000))
}

function insertionOrdenacao(array) {
    var length = array.length;

    for (var i = 1, j; i < length; i++) {
        var temp = array[i];
        for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }

    return array;
}

const insertionSort  = function() {
    let insertionCI = new Date().getTime()
    insertionOrdenacao(insertionCrescente)
    let insertionCE = new Date().getTime()
    let insertionCF = insertionCE - insertionCI
    console.log(`Vetor Crescente em Insertion Sort levou: ${insertionCF}ms`)
    document.getElementById("insertionC").value = insertionCF

    let insertionDI = new Date().getTime()
    insertionOrdenacao(insertionDecrescente)
    let insertionDE = new Date().getTime()
    let insertionDF = insertionDE - insertionDI
    console.log(`Vetor Decrescente em Insertion Sort levou: ${insertionDF}ms`)
    document.getElementById("insertionD").value = insertionDF

    let insertionRI = new Date().getTime()
    insertionOrdenacao(insertionRandom)
    let insertionRE = new Date().getTime()
    let insertionRF = insertionRE - insertionRI
    console.log(`Vetor Random em Insertion Sort levou: ${insertionRF}ms`)
    document.getElementById("insertionR").value = insertionRF
    alert ("Insertion Sort já finalizou!")
}