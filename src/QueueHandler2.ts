import { TypeFunction } from "./types/TypeFunction";
import * as readline from 'readline'

export module QueueHandler2{

    let userInput:readline.Interface 
    const allFunctions:TypeFunction[] = []
    const allParams:string[] = []

    export function init(){
        userInput = readline.createInterface({
            input: process.stdin,
            // output: process.stdout
        })

        userInput.on('pause', () => {
            console.log('event: pause')
        })

        userInput.on('resume', () => {
            console.log('event: resume')
        })


        userInput.on('line', (line) => {
            console.log('event: line', line)
            allParams.push(line)
            tryExecuteFirstFunction()
            resumeOrPauseUserInput()
        })
    }

    export function addFunction(fn:TypeFunction){
        if(!userInput) throw new Error('please init first')
        allFunctions.push(fn)
        // console.log('adding new function. total count = ', allFunctions.length)
        console.log('(+1fn)')
        tryExecuteFirstFunction()
        resumeOrPauseUserInput()
        
    }

    function tryExecuteFirstFunction(){
        if(allFunctions.length>0 && allParams.length>0){
            const fn = allFunctions.shift()
            const param = allParams.shift()
            if(!fn || !param) throw new Error('impossible')
            console.log('executing function!', fn(param))
        }
        
    }

    function resumeOrPauseUserInput(){
        if(allFunctions.length>0){
            userInput.resume()
        } else {
            userInput.pause()
        }
    }

}