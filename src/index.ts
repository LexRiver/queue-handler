import { QueueHandler } from "./QueueHandler"

console.log('hi!')


async function startAsync(){
    QueueHandler.addFunction((param) => { console.log(`Executing function 1 with param: ${param}`) })
    QueueHandler.addFunction((param) => { console.log(`Executing function 2 with param: ${param}`) })
    QueueHandler.addFunction((param) => { console.log(`Executing function 3 with param: ${param}`) })
    
    void QueueHandler.startListenToUserInputAsync()
    

    setTimeout(() => {
        QueueHandler.addFunction((param) => { console.log(`Executing function 4 with param: ${param}`)})
    }, 5*1000)

    setTimeout(() => {
        QueueHandler.addFunction((param) => { console.log(`Executing function 5 with param: ${param}`)})
    }, 10*1000)

    
}

startAsync()

