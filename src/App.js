import './App.css';
import {useState} from "react";
import {formatTime, generateRandom} from "./helpers.js"

const PAINEL = ["start", "memorized", "check", "try again"];
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
  const [onRight, setOnRight] = useState(true);

  // Control Painels
  const controlPainel = () => {
    switch (painel){
      case PAINEL[0]:
        setPainel(PAINEL[1]);
        setOnMemo(true);
        startPainelMemo();
        break;
      case PAINEL[1]:
        setPainel(PAINEL[2]);
        setOnMemo(false);
        setOnRecall(true);
        break;
      case PAINEL[2]:
        setPainel(PAINEL[3]);
        setOnCheck(true);
        setOnRecall(false);
        startCheckMemo();
        break;
      case PAINEL[3]:
        setPainel(PAINEL[0]);
        setOnCheck(false);
        setAnswers([]);
        setPairsToCheck("");
        break;
      default:
        setPainel(PAINEL[0]);
        setOnCheck(false);
        setOnMemo(false);
        setOnRecall(false);
    }
  }

  // start painel
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

  // memorization painel
  const startPainelMemo = () => {
    controlLetterPairs();
    memoTimer();
  }

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

  const memoTimer = () => {

  }
  // check painel
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
      } else {
        level > 1 ? setLevel(prev => prev - 1) : setLevel(level);
      }
    }
 }

  return (
    <div className="painel center-align">
      <h3><u>LetterPair Memory Trainer</u></h3>
      <br/>
      {
      onMemo? <MemoPainel level={level} letterPairs={letterPairs}/> 
      : onRecall ? <RecallPainel pairsToCheck={pairsToCheck} setPairsToCheck={setPairsToCheck}/>
      : onCheck ? <CheckPainel answers={answers} pairsToCheck={pairsToCheck} letterPairs={letterPairs}/>
      : <StartPainel timeMemo={timeMemo} timeRecall={timeRecall} level={level} controlLevel={controlLevel}/> 
      }
      <br/>
      <button onClick={() => controlPainel()} className="btn-large">{painel}</button>
    </div>
  );
}

function StartPainel({level, controlLevel, timeMemo, timeRecall}) {
  return(
    <div className="painel-start">
      <h4>Put Your Desire Level (Max 11)</h4>
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
        <h5>Last Result: Unknow</h5>
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
  const greenStyle = {borderColor: "green", color: "green"};

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
