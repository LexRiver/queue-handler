import { TypeFunction } from "./types/TypeFunction"

export module QueueHandler3{

    const allParams:string[] = []
    const allFunctions:TypeFunction[] = []

    export function init(){
        let line = ''
        // process.stdin.setRawMode(true);
        process.stdin.on('data', data => {
            let lines:string[] = []
            let i = 0

            lines = (line+data).split("\n")
            for(i = 0; i < lines.length - 1; i++) {
                // console.log("line: " + lines[i])
                onNextParam(lines[i])
            }
            line = lines[i]
        })
        
        process.stdin.resume();
        // process.stdin.pause()      // will cause process to exit
    }

    function onNextParam(param:string){
        allParams.push(param)
        tryExecuteFirstFunction()
        resumeOrPauseUserInput()
    }

    export function addFunction(fn:TypeFunction){
        allFunctions.push(fn)
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
            process.stdin.resume()
        } else {
            process.stdin.pause()
        }
    }



}