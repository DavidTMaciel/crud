
function checkNumberEmpty(e: number): boolean {
    return e === undefined || e === null || Number.isNaN(e)
}

function checkStringEmpty(e: string): boolean {
    return e === undefined || e === null || e.trim() === ''
}


export {
    checkNumberEmpty,
    checkStringEmpty, 
};
