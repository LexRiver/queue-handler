import { TypeFunction } from "./types/TypeFunction";
import * as readline from 'readline'

export module QueueHandler{
    const allFunctions:TypeFunction[] = []
    const allParams:string[] = []
    let userInput:readline.Interface 
    let isListening:boolean = false

    export function init(){
        userInput = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        userInput.on('pause', () => {
            console.log('event: pause')
        })
        userInput.on('resume', () => {
            console.log('event: resume')
        })
    }
    
    export function addFunction(fn:TypeFunction){
        if(!userInput) throw new Error('please init first')
        allFunctions.push(fn)
        console.log('(+1fn)')
        // void startListenToUserInputAsync()
        tryExecuteFirstFunction()
        void listenToParamAsync()
    }


    function getNextLineAsync():Promise<string>{
        return new Promise((resolve) => {
            userInput.question(`Total functions count = ${allFunctions.length}. Type next param: `, (param:string) => {
                console.log('on param: ', param)
                resolve(param)
            })
        })
    }

    async function listenToParamAsync(){
        if(isListening) {
            console.log(' (l) already listening, return')
            return
        }
        isListening = true
        console.log(' (l) start listening to param')
        userInput.resume()
        while(allFunctions.length>0){
            const param = await getNextLineAsync()
            allParams.push(param)
            tryExecuteFirstFunction()
        }
        userInput.pause()
        isListening = false
        console.log(' (l) stop listening to param', 'allFunctions.length=', allFunctions.length)
    }


    export function tryExecuteFirstFunction(){
        console.log(' (x) tryExecuteFirstFunction')
        if(allFunctions.length>0 && allParams.length>0){
            const fn = allFunctions.shift()
            const param = allParams.shift()
            if(!fn || !param) throw new Error('impossible')
            console.log(' (x) executing function!', fn(param))
        }
    }


}