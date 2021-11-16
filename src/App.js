import './App.css';
import {useState} from "react";
import {formatTime, generateRandom} from "./helpers.js"

const PAINEL = ["start", "memorized", "check", "do again"];
const LETTERS = "ABCDEFGJKLMNOPQRSTUVWX";

function App() {
  const [level, setLevel] = useState(1);
  const [timeMemo, setTimeMemo] = useState(0);
  const [timeRecall, setTimeRecall] = useState(0);
  const [onMemo, setOnMemo] = useState(false);
  const [onRecall, setOnRecall] = useState(false);
  const [onCheck, setOnCheck] = useState(false);
  const [painel, setPainel] = useState(PAINEL[0]);
  const [letterPairs, setLetterPairs] = useState([]);
  const [pairsToCheck, setPairsToCheck] = useState("");
  const [answers, setAnswers] = useState([]);
  const [onRight, setOnRight] = useState(null);
  const [numberAttempts, setNumberAttempts] = useState(0);

  // CONTROL PAINEL
  const controlPainel = () => {
    switch (painel){
      case PAINEL[0]:
        setPainel(PAINEL[1]); // preparer next painel
        setOnMemo(true); // display cards to memo
        setTimeMemo(0); // make sure time memo is 0
        setTimeRecall(0); // make sure time recall is 0
        startPainelMemo(); // start the timer and the function going take the cards to display
        break;
      case PAINEL[1]:
        setPainel(PAINEL[2]); // preparer next painel
        setOnMemo(false); // turn off memo painel
        setOnRecall(true); // display recall painel
        memoTimer(); // stop memo timer
        recallTimer(); // start recall timer
        break;
      case PAINEL[2]:
        setPainel(PAINEL[3]); // preparer next painel
        setOnCheck(true); // display check painel
        setOnRecall(false); // turn off the recall painel
        startPainelCheck(); // function to check the answers from previous painel with the cards from memo painel
        break;
      case PAINEL[3]:
        setPainel(PAINEL[0]); // display the home painel
        setOnCheck(false); // turn off the check painel
        setAnswers([]); // make sure the array of aswers to next try is empty
        setPairsToCheck(""); // make sure the string with aswers is empty to next try
        break;
      default:
        setPainel(PAINEL[0]);
        setOnCheck(false);
        setOnMemo(false);
        setOnRecall(false);
    }
  }

  // START PAINEL
  // function to change the level/ number of cards to display in the memo painel
  const controlLevel = (amount) =>{
    if (level >= 1 && level <= 11){
      if (level === 1 && amount < 0){
        return
      } else if (level === 11 && amount > 0){
        return
      } else {
      setLevel(prev => prev + amount);
      }
    }
  }

  // MEMORIZATION PAINEL
  const startPainelMemo = () => {
    controlLetterPairs();
    memoTimer();
  }

  // function to generate ther cards to display
  const controlLetterPairs = () => {
    let amount = level * 2;
    let arrOfPairs = [];
    let randomIndex = generateRandom(amount, LETTERS.length);
    for (let i = 0; i < amount; i += 2){
      let pair = LETTERS[randomIndex[i]]+LETTERS[randomIndex[i+1]];
      arrOfPairs.push(pair)
    }
    setLetterPairs(arrOfPairs);
  }

  // function to start/stop and time the memorization
  const memoTimer = () => {
    let duration = timeMemo;
    if (!onMemo){
      let interval = setInterval(()=>{
        duration++;
        setTimeMemo(duration);
      }, 1000);
      localStorage.clear();
      localStorage.setItem("intervalId", interval);
    }
    if(onMemo){
      clearInterval(localStorage.getItem("intervalId"));
    }
  }
  
  // CHECK PAINEL
  const startPainelCheck = () => {
    startCheckMemo();
    recallTimer();
    increaseAttempts();
  }

  // check if the aswers stored in the paisToCheck it's right, doing a array with the string
  const startCheckMemo = () =>{
    let tempArrAwnsers = [];
    let tempPairsToCheck = pairsToCheck.replace(/\s+/g, "");
    let arrPairsToCheck = tempPairsToCheck.match(/.{1,2}/g);
    if (arrPairsToCheck === null){
      level > 1 ? setLevel(prev => prev - 1) : setLevel(level);
      return
    } else {
      for (let i in letterPairs){
        if (letterPairs[i] === arrPairsToCheck[i]){
          tempArrAwnsers.push(true);
        } else {
          tempArrAwnsers.push(false);
        }
      }
      setAnswers(tempArrAwnsers);
      setPairsToCheck(arrPairsToCheck.join(" "));
      if (arrPairsToCheck.length === letterPairs.length && tempArrAwnsers.every(item => item)){
        level < 11 ? setLevel(prev => prev + 1) : setLevel(level);
        setOnRight(true);
      } else {
        level > 1 ? setLevel(prev => prev - 1) : setLevel(level);
        setOnRight(false);
      }
    }
 }

 // function to start/stopn and time the memorization
 const recallTimer = () => {
  let duration = timeRecall;
  if (!onRecall){
    let interval2 = setInterval(()=>{
      duration++;
      setTimeRecall(duration);
    }, 1000);
    localStorage.clear();
    localStorage.setItem("intervalId2", interval2);
  }
  if(onRecall){
    clearInterval(localStorage.getItem("intervalId2"));
  }
 }

// count the number of try in this session, recall the page set this to 0
 const increaseAttempts = () =>{
   setNumberAttempts(prev => prev + 1);
 }

  return (
    <div className="painel center-align">
      <h4><u>LetterPair Memory Trainer</u></h4>
      {
      onMemo? <MemoPainel level={level} letterPairs={letterPairs}/> 
      : onRecall ? <RecallPainel pairsToCheck={pairsToCheck} setPairsToCheck={setPairsToCheck}/>
      : onCheck ? <CheckPainel answers={answers} pairsToCheck={pairsToCheck} letterPairs={letterPairs}/>
      : <StartPainel numberAttempts={numberAttempts} onRight={onRight} timeMemo={timeMemo} timeRecall={timeRecall} level={level} controlLevel={controlLevel}/> 
      }
      <br/>
      <button onClick={() => controlPainel()} className="btn-large">{painel}</button>
      {!onMemo && !onRecall && !onCheck ? <h6>by Willian Pessoa</h6> : <h6></h6>}
    </div>
  );
}

function StartPainel({level, controlLevel, timeMemo, timeRecall, onRight, numberAttempts}) {
  return(
    <div className="painel-start">
      <h5>Put Your Desire Level (Max 11)</h5>
      <div className="painel-level">
        <button onClick={()=>controlLevel(-1)} className="waves-effect waves-light btn-large">
          <i className="material-icons">arrow_downward</i>
        </button>
        <div className="level-display"><h1>{level}</h1></div>
        <button onClick={()=>controlLevel(1)} className="waves-effect waves-light btn-large">
          <i className="material-icons">arrow_upward</i>
        </button>
      </div>
      <div>
        <h5>Number Attempts: {numberAttempts}</h5>
        <h5>Last Result: {onRight === null ? "Unkown" : onRight ? "Right" : "Wrong"}</h5>
        <h5>Last Time Memo: {formatTime(timeMemo)}</h5>
        <h5>Last Time Recall: {formatTime(timeRecall)}</h5>
      </div>
    </div>
  );
}

function MemoPainel({letterPairs}){
  return(
    <div className="grid-pairs">
      {letterPairs.map(item => {
        return <div className="letter-pair">{item}</div>;
      })}
    </div>
  );
}

function RecallPainel({pairsToCheck, setPairsToCheck}){
  return(
    <div>
    <h5>{"Put the pairs in the right order using space between them:"}</h5>
    <br/>
    <input type="text" value={pairsToCheck} onChange={e => setPairsToCheck(e.target.value.toUpperCase())} autoFocus></input>
    </div>
  );
}

function CheckPainel({letterPairs, answers, pairsToCheck}){

  let arrPairsToCheck = pairsToCheck.split(" ");
  let counter = -1;
  const redStyle = {borderColor: "red", color: "red"};
  const greenStyle = {borderColor: "#64dd17", color: "#64dd17"};

  return(
    <div>
    <div className="grid-pairs">
      {letterPairs.map(item => {
        return <div className="letter-pair">{item}</div>;
      })}
    </div>
    <div className="grid-pairs">
    {arrPairsToCheck.map(item => {
        counter++;
        return <div style={answers[counter] ? greenStyle : redStyle} className="letter-pair">{item}</div>;
      })}
    </div>
    </div>
  );
}

export default App;
