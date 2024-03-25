// code your solution here
function superbowlWin(record){
    const found = record.find(({result})=> result === "W");
    return found ? found.year : undefined;
}