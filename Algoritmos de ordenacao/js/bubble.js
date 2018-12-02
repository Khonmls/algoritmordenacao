let bubbleCrescente = []
for (let i = 1; i <= 100000; ++i) {
    bubbleCrescente.push(i)
}

let bubbleDecrescente = []
for (let i = 100000; i >= 1; --i) {
    bubbleDecrescente.push(i)
}

let bubbleRandom = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 100000; ++i) {
    bubbleRandom.push(getRandom(1, 100000))
}

function bubbleOrdenacao(arr) {
    const sortedArray = Array.from(arr);
    let swap;
    do {
        swap = false;
        for (let i = 1; i < sortedArray.length; ++i) {
            if (sortedArray[i - 1] > sortedArray[i]) {
                [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
                swap = true;
            }
        }
    } while (swap)
    return sortedArray;
}

const bubbleSort  = function() {
    let bubbleCI = new Date().getTime()
    bubbleOrdenacao(bubbleCrescente)
    let bubbleCE = new Date().getTime()
    let bubbleCF = bubbleCE - bubbleCI
    console.log(`Vetor Crescente em Bubble Sort levou: ${bubbleCF}ms`)
    document.getElementById("bubbleC").value = bubbleCF

    let bubbleDI = new Date().getTime()
    bubbleOrdenacao(bubbleDecrescente)
    let bubbleDE = new Date().getTime()
    let bubbleDF = bubbleDE - bubbleDI
    console.log(`Vetor Decrescente em Bubble Sort levou ${bubbleDF}ms`)
    document.getElementById("bubbleD").value = bubbleDF

    let bubbleRI = new Date().getTime()
    bubbleOrdenacao(bubbleRandom)
    let bubbleRE = new Date().getTime()
    let bubbleRF = bubbleRE - bubbleRI
    console.log(`Vetor Random em Bubble Sort levou ${bubbleRF}ms`)
    document.getElementById("bubbleR").value = bubbleRF
    alert ("Bubble Sort já finalizou!")
}