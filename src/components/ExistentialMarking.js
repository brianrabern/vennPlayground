import React from "react";

const props = {
  premise1: {
    fillColors: {},
    cellVars: {},
  },
  

  handleClick: () => {},

};

const ExistentialMarking = (props) => {
  const { fillColors, cellVars, handleClick} = props;

  return (
    <>
        
            <svg
              id="premise1cellH"
              style={{ backgroundColor: "#f2f2f2"}}
              className="border border-1 border-dark rounded"
              width="480"
              height="480"
              viewBox="40 30 600 600"
            >
              <g id="layer1">
                <text
                  style={{ fontSize: "40px" }}
                  x="330"
                  y="135"
                  fill="#00008B"
                >
                  A&#8321;{" "}
                </text>
                <text
                  style={{ fontSize: "40px" }}
                  x="100"
                  y="550"
                  fill="#00008B"
                >
                  A&#8322;{" "}
                </text>
                <text
                  style={{ fontSize: "40px" }}
                  x="540"
                  y="550"
                  fill="#00008B"
                >
                  A&#8323;{" "}
                </text>

                <path
                  d="m 480,292.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
                  id="premise1cellA"
                  fill={"gray"}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 406,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
                  id="premise1cellE"
                  fill={"#f2f2f2"}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 554,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
                  id="premise1cellG"
                  fill={"#f2f2f2"}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 340,292.36218 c -39.62859,24.72433 -66,68.7254 -66,118.875 0,1.1766 0.002,2.3303 0.0312,3.5 19.65735,10.5221 42.11343,16.5 65.96875,16.5 23.85532,0 46.3114,-5.9779 65.96875,-16.5 0.0289,-1.1697 0.0312,-2.3234 0.0312,-3.5 0,-50.1496 -26.37141,-94.15067 -66,-118.875 z"
                  id="premise1cellC"
                  fill={"#f2f2f2"}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 266.25003,271.46933 c -23.85532,0 -46.3114,5.94667 -65.96875,16.46875 -0.0289,1.16993 -0.0312,2.35437 -0.0312,3.53125 0,53.46323 29.97697,99.91736 74.03125,123.5 -0.0289,-1.16966 -0.0312,-2.32339 -0.0312,-3.5 0,-50.14004 26.35267,-94.14806 65.96875,-118.875 -21.46249,-13.38134 -46.81378,-21.125 -73.96875,-21.125 z"
                  id="premise1cellB"
                  fill={"#f2f2f2"}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 413.7005,271.90228 c 23.85532,0 46.3114,5.94667 65.96875,16.46875 0.0289,1.16993 0.0312,2.35437 0.0312,3.53125 0,53.46323 -29.97697,99.91736 -74.03125,123.5 0.0289,-1.16966 0.0312,-2.32339 0.0312,-3.5 0,-50.14004 -26.35267,-94.14806 -65.96875,-118.875 21.46249,-13.38134 46.81378,-21.125 73.96875,-21.125 z"
                  id="premise1cellD"
                  fill={"#f2f2f2"}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 274,415.28198 c 1.19491,48.69086 27.26477,91.19629 65.96875,115.34375 38.70398,-24.14746 64.77384,-66.65289 65.96875,-115.34375 -19.65735,10.52208 -42.11343,16.5 -65.96875,16.5 -23.85532,0 -46.3114,-5.97792 -65.96875,-16.5 z"
                  id="premise1cellF"
                  fill={"#f2f2f2"}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />

                {/*cell A existential markers*/}

                <text
                  id="premise1cellAvar1"
                  style={{ fontSize: "20px" }}
                  x="280"
                  y="200"
                  fill="black"
                >
                  {" "}
                  {cellVars.cellA[7]}{" "}
                </text>
                <text
                  id="premise1cellAvar2"
                  style={{ fontSize: "20px" }}
                  x="280"
                  y="230"
                  fill="black"
                >
                  {cellVars.cellA[1]}{" "}
                </text>
                <text
                  id="premise1cellAvar3"
                  style={{ fontSize: "20px" }}
                  x="280"
                  y="260"
                  fill="black"
                >
                  {cellVars.cellA[3]}{" "}
                </text>

                <text
                  id="premise1cellAvar4"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="200"
                  fill="black"
                >
                  {cellVars.cellA[5]}{" "}
                </text>
                <text
                  id="premise1cellAvar5"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="230"
                  fill="black"
                >
                  {cellVars.cellA[0]}{" "}
                </text>
                <text
                  id="premise1cellAvar6"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="260"
                  fill="black"
                >
                  {cellVars.cellA[6]}{" "}
                </text>

                <text
                  id="premise1cellAvar7"
                  style={{ fontSize: "20px" }}
                  x="390"
                  y="200"
                  fill="black"
                >
                  {cellVars.cellA[4]}{" "}
                </text>
                <text
                  id="premise1cellAvar8"
                  style={{ fontSize: "20px" }}
                  x="390"
                  y="230"
                  fill="black"
                >
                  {cellVars.cellA[2]}{" "}
                </text>
                <text
                  id="premise1cellAvar9"
                  style={{ fontSize: "20px" }}
                  x="390"
                  y="260"
                  fill="black"
                >
                  {cellVars.cellA[8]}{" "}
                </text>

                {/*cell B existential markers*/}

                <text
                  id="premise1cellBvar1"
                  style={{ fontSize: "20px" }}
                  x="225"
                  y="300"
                  fill="black"
                >
                  {cellVars.cellB[7]}{" "}
                </text>
                <text
                  id="premise1cellBvar2"
                  style={{ fontSize: "20px" }}
                  x="225"
                  y="330"
                  fill="black"
                >
                  {cellVars.cellB[5]}{" "}
                </text>
                <text
                  id="premise1cellBvar3"
                  style={{ fontSize: "20px" }}
                  x="225"
                  y="360"
                  fill="black"
                >
                  {cellVars.cellB[3]}{" "}
                </text>

                <text
                  id="premise1cellBvar4"
                  style={{ fontSize: "20px" }}
                  x="245"
                  y="300"
                  fill="black"
                >
                  {cellVars.cellB[1]}{" "}
                </text>
                <text
                  id="premise1cellBvar5"
                  style={{ fontSize: "20px" }}
                  x="245"
                  y="330"
                  fill="black"
                >
                  {cellVars.cellB[0]}{" "}
                </text>
                <text
                  id="premise1cellBvar6"
                  style={{ fontSize: "20px" }}
                  x="245"
                  y="360"
                  fill="black"
                >
                  {cellVars.cellB[2]}{" "}
                </text>

                <text
                  id="premise1cellBvar7"
                  style={{ fontSize: "20px" }}
                  x="265"
                  y="300"
                  fill="black"
                >
                  {cellVars.cellB[4]}{" "}
                </text>
                <text
                  id="premise1cellBvar8"
                  style={{ fontSize: "20px" }}
                  x="265"
                  y="330"
                  fill="black"
                >
                  {cellVars.cellB[6]}{" "}
                </text>
                <text
                  id="premise1cellBvar9"
                  style={{ fontSize: "20px" }}
                  x="265"
                  y="360"
                  fill="black"
                >
                  {cellVars.cellB[8]}{" "}
                </text>

                {/*cell C existential markers*/}

                <text
                  id="premise1cellCvar1"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="340"
                  fill="black"
                >
                  {cellVars.cellC[7]}{" "}
                </text>
                <text
                  id="premise1cellCvar2"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="370"
                  fill="#800080"
                >
                  1
                </text>
                <text
                  id="premise1cellCvar3"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="400"
                  fill="black"
                >
                  {cellVars.cellC[3]}{" "}
                </text>

                <text
                  id="premise1cellCvar4"
                  style={{ fontSize: "20px" }}
                  x="310"
                  y="340"
                  fill="black"
                >
                  {cellVars.cellC[1]}{" "}
                </text>
                <text
                  id="premise1cellCvar5"
                  style={{ fontSize: "20px" }}
                  x="310"
                  y="370"
                  fill="black"
                >
                  {cellVars.cellC[5]}{" "}
                </text>
                <text
                  id="premise1cellCvar6"
                  style={{ fontSize: "20px" }}
                  x="310"
                  y="400"
                  fill="black"
                >
                  {cellVars.cellC[2]}{" "}
                </text>

                <text
                  id="premise1cellCvar7"
                  style={{ fontSize: "20px" }}
                  x="360"
                  y="340"
                  fill="black"
                >
                  {cellVars.cellC[4]}{" "}
                </text>
                <text
                  id="premise1cellCvar8"
                  style={{ fontSize: "20px" }}
                  x="360"
                  y="370"
                  fill="black"
                >
                  {cellVars.cellC[6]}{" "}
                </text>
                <text
                  id="premise1cellCvar9"
                  style={{ fontSize: "20px" }}
                  x="360"
                  y="400"
                  fill="black"
                >
                  {cellVars.cellC[8]}{" "}
                </text>

                {/*cell D existential markers*/}

                <text
                  id="premise1cellDvar1"
                  style={{ fontSize: "20px" }}
                  x="405"
                  y="300"
                  fill="black"
                >
                  {cellVars.cellD[7]}{" "}
                </text>
                <text
                  id="premise1cellDvar2"
                  style={{ fontSize: "20px" }}
                  x="405"
                  y="330"
                  fill="black"
                >
                  {cellVars.cellD[5]}{" "}
                </text>
                <text
                  id="premise1cellDvar3"
                  style={{ fontSize: "20px" }}
                  x="405"
                  y="360"
                  fill="black"
                >
                  {cellVars.cellD[3]}{" "}
                </text>
                <text
                  id="premise1cellDvar4"
                  style={{ fontSize: "20px" }}
                  x="425"
                  y="300"
                  fill="black"
                >
                  {cellVars.cellD[1]}{" "}
                </text>
                <text
                  id="premise1cellDvar5"
                  style={{ fontSize: "20px" }}
                  x="425"
                  y="330"
                  fill="#800080"
                >
                 1
                </text>
                <text
                  id="premise1cellDvar6"
                  style={{ fontSize: "20px" }}
                  x="425"
                  y="360"
                  fill="black"
                >
                  {cellVars.cellD[2]}{" "}
                </text>
                <text
                  id="premise1cellDvar7"
                  style={{ fontSize: "20px" }}
                  x="445"
                  y="300"
                  fill="black"
                >
                  {cellVars.cellD[4]}{" "}
                </text>
                <text
                  id="premise1cellDvar8"
                  style={{ fontSize: "20px" }}
                  x="445"
                  y="330"
                  fill="black"
                >
                  {cellVars.cellD[6]}{" "}
                </text>
                <text
                  id="premise1cellDvar9"
                  style={{ fontSize: "20px" }}
                  x="445"
                  y="360"
                  fill="black"
                >
                  {cellVars.cellD[8]}{" "}
                </text>

                {/*cell E existential markers*/}

                <text
                  id="premise1cellEvar1"
                  style={{ fontSize: "20px" }}
                  x="150"
                  y="380"
                  fill="black"
                >
                  {cellVars.cellE[7]}{" "}
                </text>
                <text
                  id="premise1cellEvar2"
                  style={{ fontSize: "20px" }}
                  x="150"
                  y="420"
                  fill="black"
                >
                  {cellVars.cellE[5]}{" "}
                </text>
                <text
                  id="premise1cellEvar3"
                  style={{ fontSize: "20px" }}
                  x="150"
                  y="460"
                  fill="black"
                >
                  {cellVars.cellE[3]}{" "}
                </text>

                <text
                  id="premise1cellEvar4"
                  style={{ fontSize: "20px" }}
                  x="190"
                  y="400"
                  fill="black"
                >
                  {cellVars.cellE[1]}{" "}
                </text>
                <text
                  id="premise1cellEvar5"
                  style={{ fontSize: "20px" }}
                  x="190"
                  y="440"
                  fill="black"
                >
                 
                </text>
                <text
                  id="premise1cellEvar6"
                  style={{ fontSize: "20px" }}
                  x="190"
                  y="480"
                  fill="black"
                >
                  
                </text>

                <text
                  id="premise1cellEvar7"
                  style={{ fontSize: "20px" }}
                  x="230"
                  y="420"
                  fill="black"
                >
                  
                </text>
                <text
                  id="premise1cellEvar8"
                  style={{ fontSize: "20px" }}
                  x="230"
                  y="460"
                  fill="black"
                >
                  {cellVars.cellE[6]}{" "}
                </text>
                <text
                  id="premise1cellEvar9"
                  style={{ fontSize: "20px" }}
                  x="230"
                  y="500"
                  fill="#008080"
                >
                  2
                </text>

                {/*cell F existential markers*/}
                <text
                  id="premise1cellFvar1"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="455"
                  fill="black"
                >
                  {cellVars.cellF[1]}{" "}
                </text>
                <text
                  id="premise1cellFvar2"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="485"
                  fill="#008080"
                >
                  2
                </text>
                <text
                  id="premise1cellFvar3"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="515"
                  fill="black"
                >
                  
                </text>

                <text
                  id="premise1cellFvar4"
                  style={{ fontSize: "20px" }}
                  x="295"
                  y="450"
                  fill="black"
                >
                  {cellVars.cellF[7]}{" "}
                </text>
                <text
                  id="premise1cellFvar5"
                  style={{ fontSize: "20px" }}
                  x="305"
                  y="475"
                  fill="black"
                >
                  {cellVars.cellF[5]}{" "}
                </text>
                <text
                  id="premise1cellFvar6"
                  style={{ fontSize: "20px" }}
                  x="315"
                  y="505"
                  fill="black"
                >
                  {cellVars.cellF[3]}{" "}
                </text>

                <text
                  id="premise1cellFvar7"
                  style={{ fontSize: "20px" }}
                  x="375"
                  y="450"
                  fill="black"
                >
                  {cellVars.cellF[4]}{" "}
                </text>
                <text
                  id="premise1cellFvar8"
                  style={{ fontSize: "20px" }}
                  x="365"
                  y="475"
                  fill="black"
                >
                  {cellVars.cellF[6]}{" "}
                </text>
                <text
                  id="premise1cellFvar9"
                  style={{ fontSize: "20px" }}
                  x="355"
                  y="505"
                  fill="black"
                >
                  {cellVars.cellF[8]}{" "}
                </text>

                {/*cell G existential markers*/}

                <text
                  id="premise1cellGvar1"
                  style={{ fontSize: "20px" }}
                  x="520"
                  y="380"
                  fill="black"
                >
                  {cellVars.cellG[7]}{" "}
                </text>
                <text
                  id="premise1cellGvar2"
                  style={{ fontSize: "20px" }}
                  x="520"
                  y="420"
                  fill="black"
                >
                  {cellVars.cellG[5]}{" "}
                </text>
                <text
                  id="premise1cellGvar3"
                  style={{ fontSize: "20px" }}
                  x="520"
                  y="460"
                  fill="black"
                >
                  {cellVars.cellG[3]}{" "}
                </text>

                <text
                  id="premise1cellGvar4"
                  style={{ fontSize: "20px" }}
                  x="480"
                  y="400"
                  fill="black"
                >
                  {cellVars.cellG[1]}{" "}
                </text>
                <text
                  id="premise1cellGvar5"
                  style={{ fontSize: "20px" }}
                  x="480"
                  y="440"
                  fill="black"
                >
                  {cellVars.cellG[0]}{" "}
                </text>
                <text
                  id="premise1cellGvar6"
                  style={{ fontSize: "20px" }}
                  x="480"
                  y="480"
                  fill="#008080"
                >
                  2
                </text>

                <text
                  id="premise1cellGvar7"
                  style={{ fontSize: "20px" }}
                  x="440"
                  y="420"
                  fill="black"
                >
                  {cellVars.cellG[4]}{" "}
                </text>
                <text
                  id="premise1cellGvar8"
                  style={{ fontSize: "20px" }}
                  x="440"
                  y="460"
                  fill="black"
                >
                  {cellVars.cellG[6]}{" "}
                </text>
                <text
                  id="premise1cellGvar9"
                  style={{ fontSize: "20px" }}
                  x="440"
                  y="500"
                  fill="black"
                >
                  {cellVars.cellG[8]}{" "}
                </text>

                {/*cell H existential markers*/}

                <text
                  id="premise1cellHvar1"
                  style={{ fontSize: "20px" }}
                  x="180"
                  y="200"
                  fill="black"
                >
                  {cellVars.cellH[7]}{" "}
                </text>
                <text
                  id="premise1cellHvar2"
                  style={{ fontSize: "20px" }}
                  x="150"
                  y="240"
                  fill="black"
                >
                  {cellVars.cellH[5]}{" "}
                </text>
                <text
                  id="premise1cellHvar3"
                  style={{ fontSize: "20px" }}
                  x="120"
                  y="280"
                  fill="black"
                >
                  {cellVars.cellH[3]}{" "}
                </text>

                <text
                  id="premise1cellHvar4"
                  style={{ fontSize: "20px" }}
                  x="480"
                  y="200"
                  fill="black"
                >
                  {cellVars.cellH[1]}{" "}
                </text>
                <text
                  id="premise1cellHvar5"
                  style={{ fontSize: "20px" }}
                  x="510"
                  y="240"
                  fill="black"
                >
                  {cellVars.cellH[0]}{" "}
                </text>
                <text
                  id="premise1cellHvar6"
                  style={{ fontSize: "20px" }}
                  x="540"
                  y="280"
                  fill="black"
                >
                  {cellVars.cellH[2]}{" "}
                </text>

                <text
                  id="premise1cellHvar7"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="600"
                  fill="black"
                >
                  {cellVars.cellH[4]}{" "}
                </text>
                <text
                  id="premise1cellHvar8"
                  style={{ fontSize: "20px" }}
                  x="290"
                  y="600"
                  fill="black"
                >
                  {cellVars.cellH[6]}{" "}
                </text>
                <text
                  id="premise1cellHvar9"
                  style={{ fontSize: "20px" }}
                  x="375"
                  y="600"
                  fill="black"
                >
                  {cellVars.cellH[8]}{" "}
                </text>
              </g>
            </svg>
          
    </>
  );
};

export default ExistentialMarking;
