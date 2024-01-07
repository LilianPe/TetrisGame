const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

let blockList = []

let box = 50;

let baseX = box * 5;
let baseY = 0;

var currentBlock = getRandomInt(8)
var currentBlockPosition = [];
var currentOrientation = 0;
var currentColor;

//creation of position of differents blocks depending on baseX and baseY

function getPositionBlock1() {
    return ({
        p0: [block(baseX, baseY), block(baseX, baseY + box), block(baseX, 2 * box + baseY), block(baseX, 3 * box + baseY)],
        p1: [block(baseX - box, baseY + box), block(baseX, baseY + box), block(baseX + box, baseY + box), block(baseX + 2 * box, baseY + box)],
        p2: [block(baseX - box, baseY), block(baseX - box, baseY + box), block(baseX - box, 2 * box + baseY), block(baseX - box, 3 * box + baseY)],
        p3: [block(baseX - box, baseY + 2 * box), block(baseX, baseY + 2 * box), block(baseX + box, baseY + 2 * box), block(baseX + 2 * box, baseY + 2 * box)]
    })
}

function getPositionBlock2() {
    return ({
        p0: [block(baseX - box, baseY + box), block(baseX, baseY), block(baseX + box, baseY + box), block(baseX, baseY + box)],
        p1: [block(baseX + box, baseY), block(baseX + box, baseY + box), block(baseX + box, baseY + 2 * box), block(baseX + 2 * box, baseY + box)],
        p2: [block(baseX, box + baseY), block(baseX + box, box + baseY), block(baseX + box * 2, box + baseY), block(baseX + box, baseY + 2 * box)],
        p3: [block(baseX, box + baseY), block(baseX, baseY + 2 * box), block(baseX, baseY + 3 * box), block(baseX - box, baseY + 2 * box)]
    })
}

function getPositionBlock3() {
    return ({
        p0: [block(baseX, baseY), block(baseX + box, baseY), block(baseX, baseY + box), block(baseX + box, baseY + box)],
        p1: [block(baseX, baseY), block(baseX + box, baseY), block(baseX, baseY + box), block(baseX + box, baseY + box)],
        p2: [block(baseX, baseY), block(baseX + box, baseY), block(baseX, baseY + box), block(baseX + box, baseY + box)],
        p3: [block(baseX, baseY), block(baseX + box, baseY), block(baseX, baseY + box), block(baseX + box, baseY + box)]
    })
}

function getPositionBlock4() {
    return ({
        p0: [block(baseX, baseY), block(baseX - box, baseY), block(baseX, baseY + box), block(baseX, baseY + 2 * box)],
        p1: [block(baseX, baseY + box), block(baseX + box, baseY + box), block(baseX + 2 * box, baseY + box), block(baseX + 2 * box, baseY)],
        p2: [block(baseX + box, baseY + box), block(baseX + box, baseY + 2 * box), block(baseX + box, baseY + 3 * box), block(baseX + box * 2, baseY + 3 * box)],
        p3: [block(baseX - box, baseY + 3 * box), block(baseX - box, baseY + 2 * box), block(baseX, baseY + 2 * box), block(baseX + box, baseY + 2 * box)]
    })
}

function getPositionBlock5() {
    return ({
        p0: [block(baseX, baseY), block(baseX, baseY + box), block(baseX, baseY + 2 * box), block(baseX + box, baseY)],
        p1: [block(baseX, baseY), block(baseX + box, baseY), block(baseX + 2 * box, baseY), block(baseX + 2 * box, baseY + box)],
        p2: [block(baseX + box, baseY + box), block(baseX + box, baseY + box * 2), block(baseX + box, baseY + 3 * box), block(baseX, baseY + 3 * box)],
        p3: [block(baseX - box, baseY + box), block(baseX - box, baseY + 2 * box), block(baseX, baseY + 2 * box), block(baseX + box, baseY + 2 * box)]
    })
}

function getPositionBlock6() {
    return ({
        p0: [block(baseX, baseY), block(baseX, baseY + box), block(baseX - box, baseY + box), block(baseX - box, baseY + 2 * box)],
        p1: [block(baseX, baseY), block(baseX + box, baseY), block(baseX + box, baseY + box), block(baseX + 2 * box, baseY + box)],
        p2: [block(baseX + box, baseY + 2 * box), block(baseX + box, baseY + 3 * box), block(baseX + 2 * box, baseY + box), block(baseX + 2 * box, baseY + 2 * box)],
        p3: [block(baseX - box, baseY + 2 * box), block(baseX, baseY + 2 * box), block(baseX, baseY + 3 * box), block(baseX + box, baseY + 3 * box)]
    })
}

function getPositionBlock7() {
    return ({
        p0: [block(baseX - box, baseY), block(baseX - box, baseY + box), block(baseX, baseY + box), block(baseX, baseY + 2 * box)],
        p1: [block(baseX, baseY + box), block(baseX + box, baseY + box), block(baseX + box, baseY), block(baseX + 2 * box, baseY)],
        p2: [block(baseX + box, baseY + box), block(baseX + box, baseY + 2 * box), block(baseX + 2 * box, baseY + 2 * box), block(baseX + 2 * box, baseY + 3 * box)],
        p3: [block(baseX - box, baseY + 3 * box), block(baseX, baseY + 3 * box), block(baseX, baseY + 2 * box), block(baseX + box, baseY + 2 * box)]
    })
}

//block object creation
function block(abs, ord) {
    return ({ x: abs, y: ord })
}

//block display
function createBlock(b, color) {
    for (let i = 0; i < b.length; i++) {
        const x = b[i].x;
        const y = b[i].y;
        context.fillStyle = color
        context.fillRect(x, y, box, box)
        context.strokeStyle = "black"
        context.strokeRect(x, y, box, box)
    }
}

//creation of all different blocks

function createBlock1() {
    if (currentOrientation === 0) {
        b = getPositionBlock1().p0
    } else if (currentOrientation === 1) {
        b = getPositionBlock1().p1
    } else if (currentOrientation === 2) {
        b = getPositionBlock1().p2
    } else {
        b = getPositionBlock1().p3
    }

    currentBlockPosition = b
    currentColor = "blue"
    createBlock(b, "blue")
}
function createBlock2() {
    if (currentOrientation === 0) {
        b = getPositionBlock2().p0
    } else if (currentOrientation === 1) {
        b = getPositionBlock2().p1
    } else if (currentOrientation === 2) {
        b = getPositionBlock2().p2
    } else {
        b = getPositionBlock2().p3
    }
    currentBlockPosition = b
    currentColor = "yellow"
    createBlock(b, "yellow")
}
function createBlock3() {
    if (currentOrientation === 0) {
        b = getPositionBlock3().p0
    } else if (currentOrientation === 1) {
        b = getPositionBlock3().p1
    } else if (currentOrientation === 2) {
        b = getPositionBlock3().p2
    } else {
        b = getPositionBlock3().p3
    }
    currentBlockPosition = b
    currentColor = "cyan"
    createBlock(b, "cyan")
}
function createBlock4() {
    if (currentOrientation === 0) {
        b = getPositionBlock4().p0
    } else if (currentOrientation === 1) {
        b = getPositionBlock4().p1
    } else if (currentOrientation === 2) {
        b = getPositionBlock4().p2
    } else {
        b = getPositionBlock4().p3
    }
    currentBlockPosition = b
    currentColor = "green"
    createBlock(b, "green")
}
function createBlock5() {
    if (currentOrientation === 0) {
        b = getPositionBlock5().p0
    } else if (currentOrientation === 1) {
        b = getPositionBlock5().p1
    } else if (currentOrientation === 2) {
        b = getPositionBlock5().p2
    } else {
        b = getPositionBlock5().p3
    }
    currentBlockPosition = b
    currentColor = "orange"
    createBlock(b, "orange")
}
function createBlock6() {
    if (currentOrientation === 0) {
        b = getPositionBlock6().p0
    } else if (currentOrientation === 1) {
        b = getPositionBlock6().p1
    } else if (currentOrientation === 2) {
        b = getPositionBlock6().p2
    } else {
        b = getPositionBlock6().p3
    }
    currentBlockPosition = b
    currentColor = "pink"
    createBlock(b, "pink")
}
function createBlock7() {
    if (currentOrientation === 0) {
        b = getPositionBlock7().p0
    } else if (currentOrientation === 1) {
        b = getPositionBlock7().p1
    } else if (currentOrientation === 2) {
        b = getPositionBlock7().p2
    } else {
        b = getPositionBlock7().p3
    }
    currentBlockPosition = b
    currentColor = "magenta"
    createBlock(b, "magenta")
}

function newBlock(currentBlock) {
    if (currentBlock === 1) {
        createBlock1()
    } else if (currentBlock === 2) {
        createBlock2()
    } else if (currentBlock === 3) {
        createBlock3()
    } else if (currentBlock === 4) {
        createBlock4()
    } else if (currentBlock === 5) {
        createBlock5()
    } else if (currentBlock === 6) {
        createBlock6()
    } else {
        createBlock7()
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function start() {
    setInterval(game, 30)
}

function collision() {
    for (let l = 0; l < blockList.length; l++) {
        for (let bl = 0; bl < blockList[l].list.length; bl++) {
            for (let p = 0; p < currentBlockPosition.length; p++) {
                if (blockList[l].list[bl].x == currentBlockPosition[p].x && blockList[l].list[bl].y - box == currentBlockPosition[p].y) {
                    return true;
                }
            }
        }
    }
    return false;
}

function game() {
    for (let g = 0; g < currentBlockPosition.length; g++) {
        if (currentBlockPosition[g].y === 950 || collision()) {
            blockList.push({ list: currentBlockPosition, color: currentColor })
            currentBlock = getRandomInt(8)
            baseX = box * 5;
            baseY = 0;
        }
    }
    context.clearRect(0, 0, 550, 1000)
    for (let b = 0; b < blockList.length; b++) {
        console.log(blockList[b].list)
        console.log(blockList[b].color)
        createBlock(blockList[b].list, blockList[b].color)
    }
    newBlock(currentBlock)
    baseY += box
}

start()
