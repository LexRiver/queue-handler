import { QueueHandler } from "./QueueHandler"

console.log('hi!')


async function startAsync(){

    const text1 = await QueueHandler.readLineAsync()
    console.log('read text1 = ', text1)

    const text2 = await QueueHandler.readLineAsync()
    console.log('read text2 = ', text2)

    QueueHandler.addFunction((x) => console.log('1--->', x))
    QueueHandler.addFunction((x) => console.log('2--->', x))

    QueueHandler.tryExecuteFirstFunction()
    QueueHandler.tryExecuteFirstFunction()
    


    
}

startAsync()

