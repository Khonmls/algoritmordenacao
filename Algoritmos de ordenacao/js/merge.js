let mergeCrescente = []
for (let i = 1; i <= 100000; ++i) {
    mergeCrescente.push(i)
}

let mergeDecrescente = []
for (let i = 100000; i >= 1; --i) {
    mergeDecrescente.push(i)
}

let mergeRandom = []
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i <= 100000; ++i) {
    mergeRandom.push(getRandom(1, 100000))
}

function mergeOrdenacao(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = mergeOrdenacao(arr.slice(0, mid));
    var subRight = mergeOrdenacao(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge(node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
    return result.concat(node1.length ? node1 : node2);
}

const mergeSort  = function() {
    let mergeCI = new Date().getTime()
    mergeOrdenacao(mergeCrescente)
    let mergeCE = new Date().getTime()
    let mergeCF = mergeCE - mergeCI
    console.log(`Vetor Crescente em Merge Sort levou: ${mergeCF}ms`)
    document.getElementById("mergeC").value = mergeCF

    let mergeDI = new Date().getTime()
    mergeOrdenacao(mergeDecrescente)
    let mergeDE = new Date().getTime()
    let mergeDF = mergeDE - mergeDI
    console.log(`Vetor Decrescente em Merge Sort levou: ${mergeDF}ms`)
    document.getElementById("mergeD").value = mergeDF

    let mergeRI = new Date().getTime()
    mergeOrdenacao(mergeRandom)
    let mergeRE = new Date().getTime()
    let mergeRF = mergeRE - mergeRI
    console.log(`Vetor Random em Merge Sort levou: ${mergeRF}ms`)
    document.getElementById("mergeR").value = mergeRF
    alert ("Merge Sort já finalizou!")
}


