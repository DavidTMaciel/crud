
function checkNumberEmpty(e: number): boolean {
    return e === undefined || e === null || Number.isNaN(e)
}

function checkStringEmpty(e: string): boolean {
    return e === undefined || e === null || e.trim() === ''
}

function checkLengthPassword(e: string):boolean{
    if(e.length < 6){
        return true
    }
    return false;
}

export {
    checkNumberEmpty,
    checkStringEmpty, 
    checkLengthPassword
};
