export const formatTime = (time) => {
    let min = Math.trunc(time / 60);
    let sec = time % 60;
    return(
      (min < 10 ? "0" + min : min) + ":" + 
      (sec < 10 ? "0" + sec : sec)
    );
  }

export const generateRandom = (amount, max) => {
  let arrRandoms = [];
  while (arrRandoms.length < amount){
    let random = Math.floor(Math.random() * max);
    if (!arrRandoms.some(item => item === random)){
      arrRandoms.push(random);
    }
  }
  return arrRandoms;
} 
