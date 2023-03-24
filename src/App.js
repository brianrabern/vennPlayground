import { useEffect, useState, useRef} from 'react';
import './App.css';
import CellRegionMap from './CellRegionMap'
import CellArrRegionMap from './CellArrRegionMap'

function App() {
  const [mousePos, setMousePos] = useState({});

  const [fillColors, setFillColors] = useState({
    cellA: 'white',
    cellB: 'white',
    cellC: 'white',
    cellD: 'white',
    cellE: 'white',
    cellF: 'white',
    cellG: 'white',
    cellH: 'white',
  })

  const [regions, setRegions] = useState([])
  const [diagram, setDiagram] = useState({base: ['A1', 'A2', 'A3'], destroy: [], save: []})
  const [index, setIndex] =useState(0)

let colorList=['#7FFFD4','#FF7F50','#87CEEB','#E6E6FA','#FFE5B4','#40E0D0','#DA70D6', '#32CD32']

function handleClick(event){

  if ((event.target.id === "cellA") &&
    (!(regions.includes("cellA")) &&
    (!(diagram.destroy.includes("cellA")) &&
    (!(diagram.save.includes("cellA")))))){
      setRegions([...regions, "cellA"])
      setFillColors(prevState => {
        return {
        ...prevState,
        cellA: '#FFFF66',
        };
        });

  }
  else if ((event.target.id === "cellB") &&
  (!(regions.includes("cellB")) &&
  (!(diagram.destroy.includes("cellB")) &&
  (!(diagram.save.includes("cellB")))))){
    setRegions([...regions, "cellB"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellB: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellC") &&
  (!(regions.includes("cellC")) &&
  (!(diagram.destroy.includes("cellC")) &&
  (!(diagram.save.includes("cellC")))))){
    setRegions([...regions, "cellC"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellC: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellD") &&
  (!(regions.includes("cellD")) &&
  (!(diagram.destroy.includes("cellD")) &&
  (!(diagram.save.includes("cellD")))))){
    setRegions([...regions, "cellD"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellD: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellE") &&
  (!(regions.includes("cellE")) &&
  (!(diagram.destroy.includes("cellE")) &&
  (!(diagram.save.includes("cellE")))))){
    setRegions([...regions, "cellE"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellE: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellF") &&
  (!(regions.includes("cellF")) &&
  (!(diagram.destroy.includes("cellF")) &&
  (!(diagram.save.includes("cellF")))))){
    setRegions([...regions, "cellF"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellF: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellG") &&
  (!(regions.includes("cellG")) &&
  (!(diagram.destroy.includes("cellG")) &&
  (!(diagram.save.includes("cellG")))))){
    setRegions([...regions, "cellG"])
    setFillColors(prevState => {
      return {
      ...prevState,
      cellG: 'yellow',
      };
      });
  }
  else if ((event.target.id === "cellH") &&
  (!(regions.includes("cellH")) &&
  (!(diagram.destroy.includes("cellH")) &&
  (!(diagram.save.includes("cellH")))))){
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
  let newRegions = []
  for (let region of regions){
    setFillColors(prevState => {
      return {
      ...prevState,
      [region]: colorList[index],
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

const handleMouseMove = event => {
    setMousePos({
        x: event.clientX,
        y: event.clientY
        })

  };


function refreshPage() {
    window.location.reload(false);
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
  //console.log(CellRegionMap('cellA').props.children)

  return (
  <div  className="App">
   <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-text">
      VENN PLAYGROUND
    </span>
  </div>
</nav>
    <div className="container">
    <div className="row align-items-start">
      <div  className="col">
          <svg id="cellH" onClick={handleClick} style={{ backgroundColor: fillColors.cellH }} className="border border-1 border-dark rounded"
            width="600" height="600"
          viewBox="40 30 600 600">

          <g id="layer1">
          <text style={{fontSize: "40px"}} x="330" y="135" fill="#00008B">A&#8321; </text>
          <text style={{fontSize: "40px"}} x="100" y="550" fill="#00008B">A&#8322; </text>
          <text style={{fontSize: "40px"}} x="540" y="550" fill="#00008B">A&#8323; </text>


            <path  onClick={handleClick}
              d="m 480,292.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
              id="cellA"
              fill={fillColors.cellA} fillOpacity="1" stroke="#000000" strokeWidth="2" />
            <path onClick={handleClick}
              d="m 406,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
              id="cellE"
              fill={fillColors.cellE} fillOpacity="1" stroke="#000000" strokeWidth="2" />
            <path onClick={handleClick}
              d="m 554,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
              id="cellG"
              fill={fillColors.cellG} fillOpacity="1" stroke="#000000" strokeWidth="2" />
            <path onClick={handleClick}
              d="m 340,292.36218 c -39.62859,24.72433 -66,68.7254 -66,118.875 0,1.1766 0.002,2.3303 0.0312,3.5 19.65735,10.5221 42.11343,16.5 65.96875,16.5 23.85532,0 46.3114,-5.9779 65.96875,-16.5 0.0289,-1.1697 0.0312,-2.3234 0.0312,-3.5 0,-50.1496 -26.37141,-94.15067 -66,-118.875 z"
              id="cellC"
              fill={fillColors.cellC} fillOpacity="1" stroke="#000000" strokeWidth="2" />
            <path onClick={handleClick}
              d="m 266.25003,271.46933 c -23.85532,0 -46.3114,5.94667 -65.96875,16.46875 -0.0289,1.16993 -0.0312,2.35437 -0.0312,3.53125 0,53.46323 29.97697,99.91736 74.03125,123.5 -0.0289,-1.16966 -0.0312,-2.32339 -0.0312,-3.5 0,-50.14004 26.35267,-94.14806 65.96875,-118.875 -21.46249,-13.38134 -46.81378,-21.125 -73.96875,-21.125 z"
              id="cellB"
              fill={fillColors.cellB} fillOpacity="1" stroke="#000000" strokeWidth="2" />
            <path onClick={handleClick}
              d="m 413.7005,271.90228 c 23.85532,0 46.3114,5.94667 65.96875,16.46875 0.0289,1.16993 0.0312,2.35437 0.0312,3.53125 0,53.46323 -29.97697,99.91736 -74.03125,123.5 0.0289,-1.16966 0.0312,-2.32339 0.0312,-3.5 0,-50.14004 -26.35267,-94.14806 -65.96875,-118.875 21.46249,-13.38134 46.81378,-21.125 73.96875,-21.125 z"
              id="cellD"
              fill={fillColors.cellD} fillOpacity="1" stroke="#000000" strokeWidth="2" />
            <path onClick={handleClick}
              d="m 274,415.28198 c 1.19491,48.69086 27.26477,91.19629 65.96875,115.34375 38.70398,-24.14746 64.77384,-66.65289 65.96875,-115.34375 -19.65735,10.52208 -42.11343,16.5 -65.96875,16.5 -23.85532,0 -46.3114,-5.97792 -65.96875,-16.5 z"
              id="cellF"
              fill={fillColors.cellF} fillOpacity="1" stroke="#000000" strokeWidth="2" />

            {/*cell A existential markers*/}

            <text id="cellAvar1" style={{fontSize: "20px"}} x="280" y="200" fill="black">1 </text>
            <text id="cellAvar2" style={{fontSize: "20px"}} x="280" y="230" fill="black">2 </text>
            <text id="cellAvar3" style={{fontSize: "20px"}} x="280" y="260" fill="black">3 </text>

            <text id="cellAvar4" style={{fontSize: "20px"}} x="335" y="200" fill="black">4 </text>
            <text id="cellAvar5" style={{fontSize: "20px"}} x="335" y="230" fill="black">5 </text>
            <text id="cellAvar6" style={{fontSize: "20px"}} x="335" y="260" fill="black">6 </text>

            <text id="cellAvar7" style={{fontSize: "20px"}} x="390" y="200" fill="black">7 </text>
            <text id="cellAvar8" style={{fontSize: "20px"}} x="390" y="230" fill="black">8 </text>
            <text id="cellAvar9" style={{fontSize: "20px"}} x="390" y="260" fill="black">9 </text>

            {/*cell B existential markers*/}

            <text id="cellBvar1" style={{fontSize: "20px"}} x="225" y="300" fill="black">g </text>
            <text id="cellBvar2" style={{fontSize: "20px"}} x="225" y="330" fill="black">2 </text>
            <text id="cellBvar3" style={{fontSize: "20px"}} x="225" y="360" fill="black">3 </text>

            <text id="cellBvar4" style={{fontSize: "20px"}} x="245" y="300" fill="black">1 </text>
            <text id="cellBvar5" style={{fontSize: "20px"}} x="245" y="330" fill="black">2 </text>
            <text id="cellBvar6" style={{fontSize: "20px"}} x="245" y="360" fill="black">3 </text>

            <text id="cellBvar7" style={{fontSize: "20px"}} x="265" y="300" fill="black">1 </text>
            <text id="cellBvar8" style={{fontSize: "20px"}} x="265" y="330" fill="black">2 </text>
            <text id="cellBvar9" style={{fontSize: "20px"}} x="265" y="360" fill="black">3 </text>


            {/*cell C existential markers*/}

            <text id="cellCvar1" style={{fontSize: "20px"}} x="335" y="340" fill="black">s </text>
            <text id="cellCvar2" style={{fontSize: "20px"}} x="335" y="370" fill="black">2 </text>
            <text id="cellCvar3" style={{fontSize: "20px"}} x="335" y="400" fill="black">3 </text>

            <text id="cellCvar4" style={{fontSize: "20px"}} x="310" y="340" fill="black">1 </text>
            <text id="cellCvar5" style={{fontSize: "20px"}} x="310" y="370" fill="black">2 </text>
            <text id="cellCvar6" style={{fontSize: "20px"}} x="310" y="400" fill="black">3 </text>

            <text id="cellCvar7" style={{fontSize: "20px"}} x="360" y="340" fill="black">a </text>
            <text id="cellCvar8" style={{fontSize: "20px"}} x="360" y="370" fill="black">2 </text>
            <text id="cellCvar9" style={{fontSize: "20px"}} x="360" y="400" fill="black">3 </text>


            {/*cell D existential markers*/}

            <text id="cellDvar1" style={{fontSize: "20px"}} x="405" y="300" fill="black">v </text>
            <text id="cellDvar2"  style={{fontSize: "20px"}} x="405" y="330" fill="black">2 </text>
            <text id="cellDvar3"  style={{fontSize: "20px"}} x="405" y="360" fill="black">3 </text>

            <text id="cellDvar4"  style={{fontSize: "20px"}} x="425" y="300" fill="black">1 </text>
            <text id="cellDvar5"  style={{fontSize: "20px"}} x="425" y="330" fill="black">2 </text>
            <text id="cellDvar6"  style={{fontSize: "20px"}} x="425" y="360" fill="black">3 </text>

            <text id="cellDvar7"  style={{fontSize: "20px"}} x="445" y="300" fill="black">1 </text>
            <text id="cellDvar8"  style={{fontSize: "20px"}} x="445" y="330" fill="black">2 </text>
            <text id="cellDvar9"  style={{fontSize: "20px"}} x="445" y="360" fill="black">3 </text>



          {/*cell E existential markers*/}

            <text id="cellEvar1"  style={{fontSize: "20px"}} x="150" y="380" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="150" y="420" fill="black">2 </text>
            <text id="var3" style={{fontSize: "20px"}} x="150" y="460" fill="black">3 </text>

            <text id="var1" style={{fontSize: "20px"}} x="190" y="400" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="190" y="440" fill="black">2 </text>
            <text id="var3" style={{fontSize: "20px"}} x="190" y="480" fill="black">3 </text>

            <text id="var1" style={{fontSize: "20px"}} x="230" y="420" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="230" y="460" fill="black">2 </text>
            <text id="var3" style={{fontSize: "20px"}} x="230" y="500" fill="black">3 </text>

          {/*cell F existential markers*/}

            <text id="var1" style={{fontSize: "20px"}} x="520" y="380" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="520" y="420" fill="black">2 </text>
            <text id="var3" style={{fontSize: "20px"}} x="520" y="460" fill="black">3 </text>

            <text id="var1" style={{fontSize: "20px"}} x="480" y="400" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="480" y="440" fill="black">2 </text>
            <text id="var3" style={{fontSize: "20px"}} x="480" y="480" fill="black">3 </text>

            <text id="var1" style={{fontSize: "20px"}} x="440" y="420" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="440" y="460" fill="black">2 </text>
            <text id="var3" style={{fontSize: "20px"}} x="440" y="500" fill="black">3 </text>

          {/*cell G existential markers*/}

            <text id="var1" style={{fontSize: "20px"}} x="335" y="455" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="335" y="485" fill="black">2 </text>
            <text id="var3" style={{fontSize: "20px"}} x="335" y="515" fill="black">3 </text>

            <text id="var1" style={{fontSize: "20px"}} x="295" y="450" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="305" y="475" fill="black">w </text>
            <text id="var3" style={{fontSize: "20px"}} x="315" y="505" fill="black">3 </text>

            <text id="var1" style={{fontSize: "20px"}} x="375" y="450" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="365" y="475" fill="black">r </text>
            <text id="var3" style={{fontSize: "20px"}} x="355" y="505" fill="black">3 </text>

          {/*cell H existential markers*/}

            <text id="var1" style={{fontSize: "20px"}} x="180" y="200" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="150" y="240" fill="black">2 </text>
            <text id="var3" style={{fontSize: "20px"}} x="120" y="280" fill="black">3 </text>

            <text id="var1" style={{fontSize: "20px"}} x="480" y="200" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="510" y="240" fill="black">w </text>
            <text id="var3" style={{fontSize: "20px"}} x="540" y="280" fill="black">3 </text>

            <text id="var1" style={{fontSize: "20px"}} x="335" y="600" fill="black">1 </text>
            <text id="var2" style={{fontSize: "20px"}} x="290" y="600" fill="black">r </text>
            <text id="var3" style={{fontSize: "20px"}} x="375" y="600" fill="black">3 </text>

          </g>
        </svg>


        <div>
        <br></br>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">

          <button type="button" className="btn btn-outline-danger mr-1" onClick={destroy}>Destroy region</button>
          <button type="button" className="btn btn-outline-success mr-5" onClick={save}>Save region</button>
          <button type="button" className="btn btn-outline-secondary mr-1" onClick={refreshPage}>Restart</button>

          </div>
      </div>
      </div>

    <div className="col border border-1 border-info rounded">
     <p> <samp>Diagram Specification</samp></p>
     <hr></hr>

    <p style={{fontSize: "15px", textAlign: "left"}}><samp>base: &#123; A&#8321;, A&#8322;, A&#8323; &#125; </samp> </p>

    <p style={{fontSize: "15px", textAlign: "left"}}><samp> destroy: &empty;{diagram.destroy.map(region => `${CellRegionMap(region).props.children}`)}</samp></p>

    <p style={{fontSize: "15px", textAlign: "left"}}><samp> save: &#123;{diagram.save.map(regionsArr => `${CellArrRegionMap(regionsArr)}, `)} &#125;</samp></p>


    <div >
    <br></br>
    <div style={{height: "5px", backgroundColor: "#EAEFF5"}}></div>



     <p> <samp>Syntactic Derivation</samp></p>
     <hr></hr>
    <p style={{fontSize: "15px", textAlign: "left"}}><samp>1. form(A&#8321;, A&#8322;, A&#8323;) </samp> </p>


    </div>

    <div >
    <br></br>
    <div style={{height: "5px", backgroundColor: "#EAEFF5"}}></div>



     <p> <samp>Semantic Evaluation</samp></p>
     <hr></hr>


    <form id="create-appointment-form">

<div className="form-floating mb-3">

  <input  placeholder="Domain" required type="text" name="domain" id="domain" className="form-control"/>
  <input  placeholder="A&#8321;" required type="text" name="a1" id="a1" className="form-control"/>
  <input  placeholder="A&#8322;" required type="text" name="a2" id="a2" className="form-control"/>
  <input  placeholder="A&#8323;" required type="text" name="a3" id="a3" className="form-control"/>

</div>
<button type="button" className="btn btn-outline-info" >Evaluate</button>

</form>
<br></br>


    </div>

    </div>





  </div>
</div>




    </div>

  );
}

export default App;
