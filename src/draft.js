import { useEffect, useState, useRef} from 'react';
import './App.css';


function App() {

  const circleARef = useRef(null);
  const svgRef = useRef(null);

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

  const [venn, setVenn] = useState({})



//const diagram ={base: {'A1': circleA1, 'A2': circleA2, 'A3':circleA3}, destroy: {}, save: {}}

// const cells = {
//               'a': {'in': [venn.circleA1], 'out': [venn.circleA2, venn.circleA3]},
//               'b': {'in': [venn.circleA1,venn.circleA2], 'out': [venn.circleA3]},
//               'c': {'in': [venn.circleA1, venn.circleA2, venn.circleA3], 'out': []},
//               'd': {'in': [venn.circleA1, venn.circleA3], 'out': [venn.circleA2]},
//               'e': {'in': [venn.circleA2], 'out': [venn.circleA1, venn.circleA3]},
//               'f': {'in': [venn.circleA2,venn.circleA3], 'out': [venn.circleA1]},
//               'g': {'in': [venn.circleA3], 'out': [venn.circleA1, venn.circleA2]},
//               'h': {'in': [], 'out': [venn.circleA1, venn.circleA2, venn.circleA3]},

//             }

// function isPointInsideCell(cell, point){
//   let result = true;

//   for (let circle of cell.in){
//     if (!isPointInsideCircle(circle, point)){
//       result = false;
//     }
//   }

//   for (let circle of cell.out){
//     if (isPointInsideCircle(circle, point)){
//       result = false;
//     }
//   }
//   return result

// }

// function isPointInsideCircle(circle, point){
//     var distance = Math.sqrt((point.x+-circle.xpos) * (point.x - circle.xpos) + (point.y - circle.ypos) * (point.y - circle.ypos));
//     return distance <= circle.radius;
//   }

function colorA(){
  setFillColors(prevState => {
        return {
          ...prevState,
          cellA: 'yellow',
          };
        });}

function colorE(){
      setFillColors(prevState => {
            return {
              ...prevState,
              cellE: 'yellow',
            };
          });}

function colorG(){
      setFillColors(prevState => {
            return {
              ...prevState,
              cellG: 'yellow',
            };
          });}

function colorC(){
      setFillColors(prevState => {
            return {
              ...prevState,
              cellC: 'yellow',
            };
          });}

          function colorB(){
            setFillColors(prevState => {
                  return {
                    ...prevState,
                    cellB: 'yellow',
                  };
                });}

function colorD(){
      setFillColors(prevState => {
            return {
              ...prevState,
              cellD: 'yellow',
            };
          });}

          function colorF(){
            setFillColors(prevState => {
                  return {
                    ...prevState,
                    cellF: 'yellow',
                  };
                });}

                function colorH(){
                  setFillColors(prevState => {
                        return {
                          ...prevState,
                          cellH: 'yellow',
                        };
                      });}

const handleMouseClick = (mousePos) => {



  // if (isPointInsideCell(cells.b, mousePos)){
  //   setFillColors(prevState => {
  //     return {
  //       ...prevState,
  //       cellB: 'yellow',
  //     };
  //   });
  // }

  // if (isPointInsideCell(cells.c, mousePos)){
  //   setFillColors(prevState => {
  //     return {
  //       ...prevState,
  //       cellC: 'yellow',
  //     };
  //   });
  // }

  // if (isPointInsideCell(cells.d, mousePos)){
  //   setFillColors(prevState => {
  //     return {
  //       ...prevState,
  //       cellD: 'yellow',
  //     };
  //   });
  // }

  // if (isPointInsideCell(cells.e, mousePos)){
  //   setFillColors(prevState => {
  //     return {
  //       ...prevState,
  //       cellE: 'yellow',
  //     };
  //   });
  // }

  // if (isPointInsideCell(cells.f, mousePos)){
  //   setFillColors(prevState => {
  //     return {
  //       ...prevState,
  //       cellF: 'yellow',
  //     };
  //   });
  // }

  // if (isPointInsideCell(cells.g, mousePos)){
  //   setFillColors(prevState => {
  //     return {
  //       ...prevState,
  //       cellG: 'yellow',
  //     };
  //   });
  // }

  // if (isPointInsideCell(cells.h, mousePos)){
  //   setFillColors(prevState => {
  //     return {
  //       ...prevState,
  //       cellH: 'yellow',
  //     };
  //   });
  // }


  };


  const handleMouseMove = event => {
      setMousePos({
          x: event.clientX,
          y: event.clientY
         });



      //    let bodyRect = document.body.getBoundingClientRect();
      //    let svgRect = svgRef.current.getBoundingClientRect();

      //    setVenn({

      //        circleA1: {
      //            xpos: ((svgRect.top - bodyRect.top)+340),
      //            ypos: (svgRect.left - bodyRect.left)+292,
      //            radius: 140
      //        },

      //        circleA2: {
      //            xpos: ((svgRect.top - bodyRect.top)+340)-74,
      //            ypos: ((svgRect.left - bodyRect.left))+120,
      //            radius: 140
      //        },

      //        circleA3:{
      //            xpos:  ((svgRect.top - bodyRect.top)+340)+74,
      //            ypos: ((svgRect.left - bodyRect.left))+120,
      //            radius: 140
      //        },
      //  })



  };



  useEffect(() => {
    window.addEventListener('click', handleMouseClick);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };

  }, []);


  return (
    <div className="App">


<svg ref={svgRef} onClick={colorH}
    width="600" height="600"
   id="venn" viewBox="0 0 600 600">

  <g id="layer1">

    <path ref={circleARef} onClick={colorA}
       d="m 480,292.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
       id="cellA"
       fill={fillColors.cellA} fillOpacity="1" stroke="#000000" strokeWidth="2" />
    <path onClick={colorE}
       d="m 406,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
       id="cellE"
       fill={fillColors.cellE} fillOpacity="1" stroke="#000000" strokeWidth="2" />
     <path onClick={colorG}
       d="m 554,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
       id="cellG"
       fill={fillColors.cellG} fillOpacity="1" stroke="#000000" strokeWidth="2" />
    <path onClick={colorC}
       d="m 340,292.36218 c -39.62859,24.72433 -66,68.7254 -66,118.875 0,1.1766 0.002,2.3303 0.0312,3.5 19.65735,10.5221 42.11343,16.5 65.96875,16.5 23.85532,0 46.3114,-5.9779 65.96875,-16.5 0.0289,-1.1697 0.0312,-2.3234 0.0312,-3.5 0,-50.1496 -26.37141,-94.15067 -66,-118.875 z"
       id="cellC"
       fill={fillColors.cellC} fillOpacity="1" stroke="#000000" strokeWidth="2" />
    <path onClick={colorB}
       d="m 266.25003,271.46933 c -23.85532,0 -46.3114,5.94667 -65.96875,16.46875 -0.0289,1.16993 -0.0312,2.35437 -0.0312,3.53125 0,53.46323 29.97697,99.91736 74.03125,123.5 -0.0289,-1.16966 -0.0312,-2.32339 -0.0312,-3.5 0,-50.14004 26.35267,-94.14806 65.96875,-118.875 -21.46249,-13.38134 -46.81378,-21.125 -73.96875,-21.125 z"
       id="cellB"
       fill={fillColors.cellB} fillOpacity="1" stroke="#000000" strokeWidth="2" />
    <path onClick={colorD}
       d="m 413.7005,271.90228 c 23.85532,0 46.3114,5.94667 65.96875,16.46875 0.0289,1.16993 0.0312,2.35437 0.0312,3.53125 0,53.46323 -29.97697,99.91736 -74.03125,123.5 0.0289,-1.16966 0.0312,-2.32339 0.0312,-3.5 0,-50.14004 -26.35267,-94.14806 -65.96875,-118.875 21.46249,-13.38134 46.81378,-21.125 73.96875,-21.125 z"
       id="cellD"
       fill={fillColors.cellD} fillOpacity="1" stroke="#000000" strokeWidth="2" />
    <path onClick={colorF}
       d="m 274,415.28198 c 1.19491,48.69086 27.26477,91.19629 65.96875,115.34375 38.70398,-24.14746 64.77384,-66.65289 65.96875,-115.34375 -19.65735,10.52208 -42.11343,16.5 -65.96875,16.5 -23.85532,0 -46.3114,-5.97792 -65.96875,-16.5 z"
       id="cellF"
       fill={fillColors.cellF} fillOpacity="1" stroke="#000000" strokeWidth="2" />
        {/* <circle id="A1-stroke"  cx={circleA1.xpos} cy={circleA1.ypos}   r={circleA1.radius} stroke="pink" strokeWidth="3px"  fill="none" ></circle>
        <circle id="A2-stroke"  cx={circleA2.xpos} cy={circleA2.ypos}  r={circleA2.radius}  stroke="blue" strokeWidth="3px" fill="none"> </circle>
        <circle id="A3-stroke" cx={circleA3.xpos} cy={circleA3.ypos}  r={circleA3.radius}  stroke="orange" strokeWidth="3px"  fill="none"></circle> */}
  </g>
</svg>


    <div>
      The mouse is at position{' '}
      <b>
        ({mousePos.x}, {mousePos.y})
      </b>
    </div>

    </div>

  );
}

export default App;
