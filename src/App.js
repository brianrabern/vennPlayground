import { useEffect, useState, useRef} from 'react';
import './App.css';
import CellRegionMap from './components/CellRegionMap'
import CellArrRegionMap from './components/CellArrRegionMap'
import ErrorNotification from './components/ErrorNotification';
import SemanticEval from './components/SemanticEval';
import VennConstructor from './components/VennConstructor';
import PremiseOne from './components/PremiseOne';
import PremiseTwo from './components/PremiseTwo';
import PremiseThree from './components/PremiseThree';
import Conclusion from './components/Conclusion';
import EvalDisplay from './components/EvalDisplay';


function App() {
  const[premiseCount, setPremiseCount] = useState(1)
  const[conclusionCount, setConclusionCount] = useState(0)
  const [evaluation, setEvaluation] = useState('');
  const [evaluationP1, setEvaluationP1] = useState('');
  const [evaluationP2, setEvaluationP2] = useState('');
  const [evaluationP3, setEvaluationP3] = useState('');
  const [evaluationC, setEvaluationC] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [mousePos, setMousePos] = useState({});

  const [model, setModel] = useState({
    I: {
      1: [],
      2: [],
      3: [],
    },
    D: [],
  });

  const [diagram, setDiagram] = useState({base: ['A1', 'A2', 'A3'], destroy: [], save: []})

  const [fillColors, setFillColors] = useState({
    cellA: '#f2f2f2',
    cellB: '#f2f2f2',
    cellC: '#f2f2f2',
    cellD: '#f2f2f2',
    cellE: '#f2f2f2',
    cellF: '#f2f2f2',
    cellG: '#f2f2f2',
    cellH: '#f2f2f2',
  })

  const [cellVars, setCellVars] = useState({
    cellA: [],
    cellB: [],
    cellC: [],
    cellD: [],
    cellE: [],
    cellF: [],
    cellG: [],
    cellH: [],
  })

  const [diagramP1, setDiagramP1] = useState({base: ['A1', 'A2', 'A3'], destroy: [], save: []})
  const [diagramP2, setDiagramP2] = useState({base: ['A1', 'A2', 'A3'], destroy: [], save: []})
  const [diagramP3, setDiagramP3] = useState({base: ['A1', 'A2', 'A3'], destroy: [], save: []})
  const [diagramC, setDiagramC] = useState({base: ['A1', 'A2', 'A3'], destroy: [], save: []})

  const [premise1, setPremise1] = useState({'fillColors': fillColors, 'cellVars': cellVars,'show': false})
  const [premise2, setPremise2] = useState({'fillColors': fillColors, 'cellVars': cellVars,'show': false})
  const [premise3, setPremise3] = useState({'fillColors': fillColors, 'cellVars': cellVars,'show': false})
  const [conclusion, setConclusion] = useState({'fillColors': fillColors, 'cellVars': cellVars,'show': false})


  const [regions, setRegions] = useState([])
  const [index, setIndex] =useState(1)


  const [domain, setDomain] = useState([]);
  const [a1, setA1] = useState([]);
  const [a2, setA2] = useState([]);
  const [a3, setA3] = useState([]);


function handleClick(event){
  setError(false)
  if ((event.target.id === "cellA") &&
    (!(regions.includes("cellA")))){
      setRegions([...regions, "cellA"])
      setFillColors(prevState => {
        return {
        ...prevState,
        cellA: 'yellow',
        };
        });

  }
  else if ((event.target.id === "cellB") &&
  (!(regions.includes("cellB")))){
    setRegions([...regions, "cellB"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellB: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellC") &&
  (!(regions.includes("cellC")))){
    setRegions([...regions, "cellC"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellC: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellD") &&
  (!(regions.includes("cellD")))){
    setRegions([...regions, "cellD"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellD: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellE") &&
  (!(regions.includes("cellE")))){
    setRegions([...regions, "cellE"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellE: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellF") &&
  (!(regions.includes("cellF")))){
    setRegions([...regions, "cellF"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellF: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellG") &&
  (!(regions.includes("cellG")))){
    setRegions([...regions, "cellG"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellG: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellH") &&
  (!(regions.includes("cellH")))){
    setRegions([...regions, "cellH"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellH: 'yellow',
      };
      });
  }

};

function destroy(){
  if (regions.length === 0) {
    setError(true)
    setErrorText("Please select a region to destroy")
    return
  }
  let newRegions = []
  for (let region of regions){
    setFillColors(prevState => {
      return {
      ...prevState,
      [region]: 'grey',
      };
      });
    newRegions.push(region)
    };


  setDiagram(prevDiagram => {
      return {
      ...prevDiagram,
      'destroy': [...diagram.destroy, ...newRegions],
      };
      });


  setRegions([])


}


function save(){
  if (regions.length === 0) {
    setError(true)
    setErrorText("Please select a region to save")
    return
  }
  let newRegions = []
  for (let region of regions){
    setCellVars(prevState => {
      return {
      ...prevState,
      [region]: [...prevState[region], index],
      };
      });
      setFillColors(prevState => {
        if (diagram.destroy.includes(region)) {
          return {
            ...prevState,
            [region]: 'grey',
          };
        }
        return {
          ...prevState,
          [region]: '#f2f2f2',
        };
      });
      newRegions.push(region)
      }

  setDiagram(prevDiagram => {
    return {
    ...prevDiagram,
    'save': [...diagram.save, newRegions ],
    };
    });

  let newIndex = index+1;
  setIndex(newIndex);
  setRegions([])
}

function handleEvalClick() {

  let truthVal = SemanticEval(diagram, model);
  if (truthVal === true) {
    setEvaluation("True")
  }
  else if (truthVal === false){
    setEvaluation("False")
  }
  else {
    setEvaluation("Undefined")
  }

}

function handleEvalP1() {

  let truthVal = SemanticEval(diagramP1, model);
  if (truthVal === true) {
    setEvaluationP1("True")
  }
  else if (truthVal === false){
    setEvaluationP1("False")
  }
  else {
    setEvaluationP1("Undefined")
  }

}

function handleEvalP2() {

  let truthVal = SemanticEval(diagramP2, model);
  if (truthVal === true) {
    setEvaluationP2("True")
  }
  else if (truthVal === false){
    setEvaluationP2("False")
  }
  else {
    setEvaluationP2("Undefined")
  }

}

function handleEvalP3() {

  let truthVal = SemanticEval(diagramP3, model);
  if (truthVal === true) {
    setEvaluationP3("True")
  }
  else if (truthVal === false){
    setEvaluationP3("False")
  }
  else {
    setEvaluationP3("Undefined")
  }

}

function handleEvalC() {

  let truthVal = SemanticEval(diagramC, model);
  if (truthVal === true) {
    setEvaluationC("True")
  }
  else if (truthVal === false){
    setEvaluationC("False")
  }
  else {
    setEvaluationC("Undefined")
  }

}


const handleRandomClick = event => {

  function generateRandomArrays() {
    const length = Math.floor(Math.random() * 6) + 1;
    const randD = [];
    while (randD.length < length) {
      const num = Math.floor(Math.random() * 7);
      const numStr = num.toString();
      if (!randD.includes(numStr)) {
        randD.push(numStr);
      }
    }
    const randSubsets = [
      randD.slice(0, 3),
      randD.slice(2, 5),
      randD.slice(4, 7),
    ];
    return { randD, randSubsets };
  };

  const { randD, randSubsets } = generateRandomArrays();
  const [randA1, randA2, randA3] = randSubsets;

  setDomain([...randD])
  setA1([...randA1])
  setA2([...randA2])
  setA3([...randA3])
};

const handleDomainChange = (event) => {
  let strDomain = event.target.value;
  let newDomain = strDomain.split(",").map(str => str.trim());
  setDomain(newDomain);
};

const handleA1Change = (event) => {
  let strA1 = event.target.value;
  let newA1 = strA1.split(",").map(str => str.trim());
  setA1(newA1);
};

const handleA2Change = (event) => {
  let strA2 = event.target.value;
  let newA2 = strA2.split(",").map(str => str.trim());
  setA2(newA2);
};

const handleA3Change = (event) => {
  let strA3 = event.target.value;
  let newA3 = strA3.split(",").map(str => str.trim());
  setA3(newA3);
};

const handleLoadClick = event => {
  setModel({
      I: {
        1: [...a1],
        2: [...a2],
        3: [...a3],
      },
      D: [...domain],

  });

}

const handleMouseMove = event => {

    setMousePos({
        x: event.clientX,
        y: event.clientY
        })

  };

function isReady(){
  let hasYellow = false;
  for (const key in fillColors) {
      if (fillColors[key] === 'yellow') {
        hasYellow = true;
        break;

    }
  }
  return !hasYellow
}

function addPremise() {
  if (!isReady()) {
    console.log("Not ready")
    return
  }

  if (premiseCount === 1) {
  setPremise1({'fillColors': fillColors, 'cellVars': cellVars,'show': true})
  setDiagramP1(diagram)
  }
  else if (premiseCount === 2) {
  setPremise2({'fillColors': fillColors, 'cellVars': cellVars,'show': true})
  setDiagramP2(diagram)
  }
  else if (premiseCount === 3) {
  setPremise3({'fillColors': fillColors, 'cellVars': cellVars,'show': true})
  setDiagramP3(diagram)
  }
  else if (premiseCount > 3){
    console.log("Too many premises")
  }
  setPremiseCount(premiseCount+1)
  resetConstruction()
  }

function addConclusion() {
if (!isReady()) {
  console.log("Not ready")
    return
  }
  if (conclusionCount <1 ) {
    setConclusion({'fillColors': fillColors, 'cellVars': cellVars,'show': true})
    setDiagramC(diagram)
  }
  else {
    console.log("Conclusion already set")
  }
  setConclusionCount(conclusionCount+1)
  }




function resetConstruction() {
  setDiagram({base: ['A1', 'A2', 'A3'], destroy: [], save: []})
  setFillColors({
    cellA: '#f2f2f2',
    cellB: '#f2f2f2',
    cellC: '#f2f2f2',
    cellD: '#f2f2f2',
    cellE: '#f2f2f2',
    cellF: '#f2f2f2',
    cellG: '#f2f2f2',
    cellH: '#f2f2f2',
  })
  setCellVars({
    cellA: [],
    cellB: [],
    cellC: [],
    cellD: [],
    cellE: [],
    cellF: [],
    cellG: [],
    cellH: [],
  })
  setRegions([])
  setIndex(1)
  }




  useEffect(() => {

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };

  }, []);

  function removeTags(inputStr) {
    if (inputStr.startsWith("<>") && inputStr.endsWith("</>")) {
      return inputStr.substring(2, inputStr.length - 3);
    } else {
      return inputStr;
    }
  }


const formattedDomain = `{${model.D.join(',')}}`;
const formattedA1 = `{${model.I[1].join(',')}}`;
const formattedA2 = `{${model.I[2].join(',')}}`;
const formattedA3 = `{${model.I[3].join(',')}}`;
let domainDisplay = `${formattedDomain} `;
let a1Display = `${formattedA1}`;
let a2Display = `${formattedA2}`;
let a3Display = `${formattedA3}`;

return (
  <div>

  <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/3-set_Venn_diagram.svg/1920px-3-set_Venn_diagram.svg.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
    vennPlayground </a>

  </div>

  </nav>
  <br></br>
  <div id="cuadricula">

      <div className="item" style={{'--color': '#3E989B'}}>
      <h4>argumentStack</h4>
        <p><small>Add diagrams as premises and conclusion</small></p>
      </div>
      <div className="item" style={{'--color': '#6DB465'}}>
      <h4>diagramConstructor</h4>
        <p><small>Construct a Venn diagram</small></p>
      </div>
      <div className="item" style={{'--color': '#F2C14E'}}>
        <h4>semanticEvaluator</h4>
        <p><small>Evaluate the truth-value of your diagram</small></p>

      </div>
      <div className="item grid" style={{'--color': '#F2C14E'}}>

      <PremiseOne premise1={premise1} handleClick={handleClick} handleEvalP1={handleEvalP1} evaluationP1={evaluationP1}></PremiseOne>
      <PremiseTwo premise2={premise2} handleClick={handleClick} handleEvalP2={handleEvalP2} evaluationP2={evaluationP2}></PremiseTwo>
      <PremiseThree premise3={premise3} handleClick={handleClick} handleEvalP3={handleEvalP3} evaluationP3={evaluationP3}></PremiseThree>
      <Conclusion conclusion={conclusion} handleClick={handleClick} handleEvalC={handleEvalC} evaluationC={evaluationC}></Conclusion>


      </div>
      <div className="item" style={{'--color': '#C87694'}}>
      <div className="d-grid gap-2 d-md-flex">
      <button type="button" className="btn btn-danger mr-1" onClick={destroy}>Destroy region</button>
      <button type="button" className="btn btn-success mr-5" onClick={save}>Save region</button>
      </div>
      <VennConstructor cellVars={cellVars} fillColors={fillColors} handleClick={handleClick}></VennConstructor>
      <div>
          <hr></hr>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end"></div>
          <button type="button" className="btn btn-warning mr-1" onClick={addPremise}>Set as premise</button>
          <button type="button" className="btn btn-warning mr-2" onClick={addConclusion}>Set as conclusion</button>
          <button type="button" className="btn btn-secondary mr-3" onClick={resetConstruction}>Reset constructor</button>
      </div>
      <br></br>
          <div>{error && <ErrorNotification>{errorText}</ErrorNotification>}</div>
          <br></br>
          <hr></hr>
          <div>
          <div className="col border border-1 border-dark rounded" style={{ backgroundColor: "#f2f2f2" }}>

  <br></br>
  <h5>Diagram Specification</h5>
    <hr></hr>
    <p style={{fontSize: "12px", textAlign: "left"}}>base: <samp>[ A&#8321;, A&#8322;, A&#8323; ] </samp> </p>
    <p style={{fontSize: "12px", textAlign: "left"}}>destroy: <samp> [{diagram.destroy.map(region => `${CellRegionMap(region).props.children}`).join(", ")}]</samp></p>
    <p style={{fontSize: "12px", textAlign: "left"}}>save: <samp> [{diagram.save.map(regionsArr => `${CellArrRegionMap(regionsArr)}`).join(", ")}]</samp></p>


    <hr></hr>

    </div>
    </div>
    </div>


      <div className="item" style={{'--color': '#3E989B'}}>
<EvalDisplay
          handleLoadClick={handleLoadClick}
          handleRandomClick={handleRandomClick}
          handleA1Change={handleA1Change}
          handleA2Change={handleA2Change}
          handleA3Change={handleA3Change}
          handleDomainChange={handleDomainChange}
          handleEvalClick={handleEvalClick}
          domain={domain}
          a1={a1}
          a2={a2}
          a3={a3}
          domainDisplay={domainDisplay}
          a1Display={a1Display}
          a2Display={a2Display}
          a3Display={a3Display}
          evaluation={evaluation}
 ></EvalDisplay>

      </div>
    </div>
    </div>

  );
}

export default App;
