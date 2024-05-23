import { QueueHandler } from "./QueueHandler"
import { QueueHandler2 } from "./QueueHandler2"
import { QueueHandler3 } from "./QueueHandler3"

console.log('hi!')


function start1() {
    QueueHandler.init()
    QueueHandler.addFunction((x) => console.log('1--->', x))
    QueueHandler.addFunction((x) => console.log('2--->', x))

    setTimeout(() => {
        QueueHandler.addFunction((x) => console.log('3--->', x))
    }, 3 * 1000)

    setTimeout(() => {
        QueueHandler.addFunction((x) => console.log('4--->', x))
    }, 6 * 1000)

    setTimeout(() => {
        QueueHandler.addFunction((x) => console.log('5--->', x))
    }, 9 * 1000)

}

function start2(){
    QueueHandler2.init()
    QueueHandler2.addFunction((x) => console.log('1--->', x))
    QueueHandler2.addFunction((x) => console.log('2--->', x))

    setTimeout(() => {
        QueueHandler2.addFunction((x) => console.log('3--->', x))
    }, 3 * 1000)

    setTimeout(() => {
        QueueHandler2.addFunction((x) => console.log('4--->', x))
    }, 6 * 1000)

    setTimeout(() => {
        QueueHandler2.addFunction((x) => console.log('5--->', x))
    }, 9 * 1000)

}

function start3(){
    QueueHandler3.init()
    QueueHandler3.addFunction((x) => console.log('1--->', x))
    QueueHandler3.addFunction((x) => console.log('2--->', x))

    setTimeout(() => {
        QueueHandler3.addFunction((x) => console.log('3--->', x))
    }, 3 * 1000)

    setTimeout(() => {
        QueueHandler3.addFunction((x) => console.log('4--->', x))
    }, 6 * 1000)

    setTimeout(() => {
        QueueHandler3.addFunction((x) => console.log('5--->', x))
    }, 9 * 1000)

}



// startAsync()
// startAsync2()
start3()

