import { TypeFunction } from "./types/TypeFunction";
import * as readline from 'readline'

export module QueueHandler{

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const allFunctions:TypeFunction[] = []
    const allParams:string[] = []
    export function addFunction(fn:TypeFunction){
        allFunctions.push(fn)
        // console.log('adding new function. total count = ', allFunctions.length)
        console.log('(+1fn)')

    }

    function tryReadNextLineAsync(){
        return new Promise((resolve) => {
            userInput.question(`Total functions count = ${allFunctions.length}. Type next param: `, (param:string) => {
                if(param) {
                    allParams.push(param)
                    resolve(param)
                } else {
                    console.log('bad parameter, try again')
                    // tryReadNextLine()
                }
            })
    
        })
    }

    export async function startListenToUserInputAsync(){
        while(allFunctions.length>0){
            await tryReadNextLineAsync()
            tryExecuteFirstFunction()
        }
        console.warn('No functions in list, so quit')
        userInput.close()
        
    }

    function tryExecuteFirstFunction(){
        if(allFunctions.length>0 && allParams.length>0){
            const fn = allFunctions.shift()
            const param = allParams.shift()
            if(!fn || !param) throw new Error('impossible')
            console.log('executing function!', fn(param))
        }
    }
}