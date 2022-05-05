// code your solution here
function superbowlWin(array){
  const win = array.find(e => e.result === 'W')
    return win? win.year : undefined;
}
