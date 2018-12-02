let selectionCrescente = []
for (let i = 1; i <= 100000; ++i) {
    selectionCrescente.push(i)
}

let selectionDecrescente = []
for (let i = 100000; i >= 1; --i) {
    selectionDecrescente.push(i)
}

let selectionRandom = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 100000; ++i) {
    selectionRandom.push(getRandom(1, 100000))
}

function selectionOrdenacao(arr) {

    let temp = 0;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return (arr);
}

const selectionSort  = function() {
    let selectionCI = new Date().getTime()
    selectionOrdenacao(selectionCrescente)
    let selectionCE = new Date().getTime()
    let selectionCF = selectionCE - selectionCI
    console.log(`Vetor Crescente em Selection Sort levou: ${selectionCF}ms`)
    document.getElementById("selectionC").value = selectionCF

    let selectionDI = new Date().getTime()
    selectionOrdenacao(selectionDecrescente)
    let selectionDE = new Date().getTime()
    let selectionDF = selectionDE - selectionDI
    console.log(`Vetor Decrescente em Selection Sort levou: ${selectionDF}ms`)
    document.getElementById("selectionD").value = selectionDF

    let selectionRI = new Date().getTime()
    selectionOrdenacao(selectionRandom)
    let selectionRE = new Date().getTime()
    let selectionRF = selectionRE - selectionRI
    console.log(`Vetor Random em Selection Sort levou: ${selectionRF}ms`)
    document.getElementById("selectionR").value = selectionRF
    alert ("Selection Sort já finalizou!")
}