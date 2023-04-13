import React from "react";

const props = {
  conclusion: {
    fillColors: {},
    cellVars: {},
    show: false,
  },
  evaluationC: "",

  handleClick: () => {},
  handleEvalC: () => {},
};

const Conclusion = (props) => {
  const { conclusion, handleClick, handleEvalC, evaluationC } = props;

  return (
    <div>
      {conclusion.show ? (
        <div className="subitem">
          <br></br>

          <p className="px-3 ">
            <strong>Conclusion:</strong> <strong>{evaluationC}</strong>
          </p>
          <hr></hr>
          <div id="conclusion" className="col">
            <svg
              id="conclusioncellH"
              style={{ backgroundColor: conclusion.fillColors.cellH }}
              className="border border-1 border-dark rounded"
              width="360"
              height="360"
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
                  id="conclusioncellA"
                  fill={conclusion.fillColors.cellA}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 406,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
                  id="conclusioncellE"
                  fill={conclusion.fillColors.cellE}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 554,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
                  id="conclusioncellG"
                  fill={conclusion.fillColors.cellG}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 340,292.36218 c -39.62859,24.72433 -66,68.7254 -66,118.875 0,1.1766 0.002,2.3303 0.0312,3.5 19.65735,10.5221 42.11343,16.5 65.96875,16.5 23.85532,0 46.3114,-5.9779 65.96875,-16.5 0.0289,-1.1697 0.0312,-2.3234 0.0312,-3.5 0,-50.1496 -26.37141,-94.15067 -66,-118.875 z"
                  id="conclusioncellC"
                  fill={conclusion.fillColors.cellC}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 266.25003,271.46933 c -23.85532,0 -46.3114,5.94667 -65.96875,16.46875 -0.0289,1.16993 -0.0312,2.35437 -0.0312,3.53125 0,53.46323 29.97697,99.91736 74.03125,123.5 -0.0289,-1.16966 -0.0312,-2.32339 -0.0312,-3.5 0,-50.14004 26.35267,-94.14806 65.96875,-118.875 -21.46249,-13.38134 -46.81378,-21.125 -73.96875,-21.125 z"
                  id="conclusioncellB"
                  fill={conclusion.fillColors.cellB}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 413.7005,271.90228 c 23.85532,0 46.3114,5.94667 65.96875,16.46875 0.0289,1.16993 0.0312,2.35437 0.0312,3.53125 0,53.46323 -29.97697,99.91736 -74.03125,123.5 0.0289,-1.16966 0.0312,-2.32339 0.0312,-3.5 0,-50.14004 -26.35267,-94.14806 -65.96875,-118.875 21.46249,-13.38134 46.81378,-21.125 73.96875,-21.125 z"
                  id="conclusioncellD"
                  fill={conclusion.fillColors.cellD}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <path
                  d="m 274,415.28198 c 1.19491,48.69086 27.26477,91.19629 65.96875,115.34375 38.70398,-24.14746 64.77384,-66.65289 65.96875,-115.34375 -19.65735,10.52208 -42.11343,16.5 -65.96875,16.5 -23.85532,0 -46.3114,-5.97792 -65.96875,-16.5 z"
                  id="conclusioncellF"
                  fill={conclusion.fillColors.cellF}
                  fillOpacity="1"
                  stroke="#000000"
                  strokeWidth="2"
                />

                {/*cell A existential markers*/}

                <text
                  id="conclusioncellAvar1"
                  style={{ fontSize: "20px" }}
                  x="280"
                  y="200"
                  fill="black"
                >
                  {" "}
                  {conclusion.cellVars.cellA[7]}{" "}
                </text>
                <text
                  id="conclusioncellAvar2"
                  style={{ fontSize: "20px" }}
                  x="280"
                  y="230"
                  fill="black"
                >
                  {conclusion.cellVars.cellA[1]}{" "}
                </text>
                <text
                  id="conclusioncellAvar3"
                  style={{ fontSize: "20px" }}
                  x="280"
                  y="260"
                  fill="black"
                >
                  {conclusion.cellVars.cellA[3]}{" "}
                </text>

                <text
                  id="conclusioncellAvar4"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="200"
                  fill="black"
                >
                  {conclusion.cellVars.cellA[5]}{" "}
                </text>
                <text
                  id="conclusioncellAvar5"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="230"
                  fill="black"
                >
                  {conclusion.cellVars.cellA[0]}{" "}
                </text>
                <text
                  id="conclusioncellAvar6"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="260"
                  fill="black"
                >
                  {conclusion.cellVars.cellA[6]}{" "}
                </text>

                <text
                  id="conclusioncellAvar7"
                  style={{ fontSize: "20px" }}
                  x="390"
                  y="200"
                  fill="black"
                >
                  {conclusion.cellVars.cellA[4]}{" "}
                </text>
                <text
                  id="conclusioncellAvar8"
                  style={{ fontSize: "20px" }}
                  x="390"
                  y="230"
                  fill="black"
                >
                  {conclusion.cellVars.cellA[2]}{" "}
                </text>
                <text
                  id="conclusioncellAvar9"
                  style={{ fontSize: "20px" }}
                  x="390"
                  y="260"
                  fill="black"
                >
                  {conclusion.cellVars.cellA[8]}{" "}
                </text>

                {/*cell B existential markers*/}

                <text
                  id="conclusioncellBvar1"
                  style={{ fontSize: "20px" }}
                  x="225"
                  y="300"
                  fill="black"
                >
                  {conclusion.cellVars.cellB[7]}{" "}
                </text>
                <text
                  id="conclusioncellBvar2"
                  style={{ fontSize: "20px" }}
                  x="225"
                  y="330"
                  fill="black"
                >
                  {conclusion.cellVars.cellB[5]}{" "}
                </text>
                <text
                  id="conclusioncellBvar3"
                  style={{ fontSize: "20px" }}
                  x="225"
                  y="360"
                  fill="black"
                >
                  {conclusion.cellVars.cellB[3]}{" "}
                </text>

                <text
                  id="conclusioncellBvar4"
                  style={{ fontSize: "20px" }}
                  x="245"
                  y="300"
                  fill="black"
                >
                  {conclusion.cellVars.cellB[1]}{" "}
                </text>
                <text
                  id="conclusioncellBvar5"
                  style={{ fontSize: "20px" }}
                  x="245"
                  y="330"
                  fill="black"
                >
                  {conclusion.cellVars.cellB[0]}{" "}
                </text>
                <text
                  id="conclusioncellBvar6"
                  style={{ fontSize: "20px" }}
                  x="245"
                  y="360"
                  fill="black"
                >
                  {conclusion.cellVars.cellB[2]}{" "}
                </text>

                <text
                  id="conclusioncellBvar7"
                  style={{ fontSize: "20px" }}
                  x="265"
                  y="300"
                  fill="black"
                >
                  {conclusion.cellVars.cellB[4]}{" "}
                </text>
                <text
                  id="conclusioncellBvar8"
                  style={{ fontSize: "20px" }}
                  x="265"
                  y="330"
                  fill="black"
                >
                  {conclusion.cellVars.cellB[6]}{" "}
                </text>
                <text
                  id="conclusioncellBvar9"
                  style={{ fontSize: "20px" }}
                  x="265"
                  y="360"
                  fill="black"
                >
                  {conclusion.cellVars.cellB[8]}{" "}
                </text>

                {/*cell C existential markers*/}

                <text
                  id="conclusioncellCvar1"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="340"
                  fill="black"
                >
                  {conclusion.cellVars.cellC[7]}{" "}
                </text>
                <text
                  id="conclusioncellCvar2"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="370"
                  fill="black"
                >
                  {conclusion.cellVars.cellC[0]}{" "}
                </text>
                <text
                  id="conclusioncellCvar3"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="400"
                  fill="black"
                >
                  {conclusion.cellVars.cellC[3]}{" "}
                </text>

                <text
                  id="conclusioncellCvar4"
                  style={{ fontSize: "20px" }}
                  x="310"
                  y="340"
                  fill="black"
                >
                  {conclusion.cellVars.cellC[1]}{" "}
                </text>
                <text
                  id="conclusioncellCvar5"
                  style={{ fontSize: "20px" }}
                  x="310"
                  y="370"
                  fill="black"
                >
                  {conclusion.cellVars.cellC[5]}{" "}
                </text>
                <text
                  id="conclusioncellCvar6"
                  style={{ fontSize: "20px" }}
                  x="310"
                  y="400"
                  fill="black"
                >
                  {conclusion.cellVars.cellC[2]}{" "}
                </text>

                <text
                  id="conclusioncellCvar7"
                  style={{ fontSize: "20px" }}
                  x="360"
                  y="340"
                  fill="black"
                >
                  {conclusion.cellVars.cellC[4]}{" "}
                </text>
                <text
                  id="conclusioncellCvar8"
                  style={{ fontSize: "20px" }}
                  x="360"
                  y="370"
                  fill="black"
                >
                  {conclusion.cellVars.cellC[6]}{" "}
                </text>
                <text
                  id="conclusioncellCvar9"
                  style={{ fontSize: "20px" }}
                  x="360"
                  y="400"
                  fill="black"
                >
                  {conclusion.cellVars.cellC[8]}{" "}
                </text>

                {/*cell D existential markers*/}

                <text
                  id="conclusioncellDvar1"
                  style={{ fontSize: "20px" }}
                  x="405"
                  y="300"
                  fill="black"
                >
                  {conclusion.cellVars.cellD[7]}{" "}
                </text>
                <text
                  id="conclusioncellDvar2"
                  style={{ fontSize: "20px" }}
                  x="405"
                  y="330"
                  fill="black"
                >
                  {conclusion.cellVars.cellD[5]}{" "}
                </text>
                <text
                  id="conclusioncellDvar3"
                  style={{ fontSize: "20px" }}
                  x="405"
                  y="360"
                  fill="black"
                >
                  {conclusion.cellVars.cellD[3]}{" "}
                </text>
                <text
                  id="conclusioncellDvar4"
                  style={{ fontSize: "20px" }}
                  x="425"
                  y="300"
                  fill="black"
                >
                  {conclusion.cellVars.cellD[1]}{" "}
                </text>
                <text
                  id="conclusioncellDvar5"
                  style={{ fontSize: "20px" }}
                  x="425"
                  y="330"
                  fill="black"
                >
                  {conclusion.cellVars.cellD[0]}{" "}
                </text>
                <text
                  id="conclusioncellDvar6"
                  style={{ fontSize: "20px" }}
                  x="425"
                  y="360"
                  fill="black"
                >
                  {conclusion.cellVars.cellD[2]}{" "}
                </text>
                <text
                  id="conclusioncellDvar7"
                  style={{ fontSize: "20px" }}
                  x="445"
                  y="300"
                  fill="black"
                >
                  {conclusion.cellVars.cellD[4]}{" "}
                </text>
                <text
                  id="conclusioncellDvar8"
                  style={{ fontSize: "20px" }}
                  x="445"
                  y="330"
                  fill="black"
                >
                  {conclusion.cellVars.cellD[6]}{" "}
                </text>
                <text
                  id="conclusioncellDvar9"
                  style={{ fontSize: "20px" }}
                  x="445"
                  y="360"
                  fill="black"
                >
                  {conclusion.cellVars.cellD[8]}{" "}
                </text>

                {/*cell E existential markers*/}

                <text
                  id="conclusioncellEvar1"
                  style={{ fontSize: "20px" }}
                  x="150"
                  y="380"
                  fill="black"
                >
                  {conclusion.cellVars.cellE[7]}{" "}
                </text>
                <text
                  id="conclusioncellEvar2"
                  style={{ fontSize: "20px" }}
                  x="150"
                  y="420"
                  fill="black"
                >
                  {conclusion.cellVars.cellE[5]}{" "}
                </text>
                <text
                  id="conclusioncellEvar3"
                  style={{ fontSize: "20px" }}
                  x="150"
                  y="460"
                  fill="black"
                >
                  {conclusion.cellVars.cellE[3]}{" "}
                </text>

                <text
                  id="conclusioncellEvar4"
                  style={{ fontSize: "20px" }}
                  x="190"
                  y="400"
                  fill="black"
                >
                  {conclusion.cellVars.cellE[1]}{" "}
                </text>
                <text
                  id="conclusioncellEvar5"
                  style={{ fontSize: "20px" }}
                  x="190"
                  y="440"
                  fill="black"
                >
                  {conclusion.cellVars.cellE[0]}{" "}
                </text>
                <text
                  id="conclusioncellEvar6"
                  style={{ fontSize: "20px" }}
                  x="190"
                  y="480"
                  fill="black"
                >
                  {conclusion.cellVars.cellE[2]}{" "}
                </text>

                <text
                  id="conclusioncellEvar7"
                  style={{ fontSize: "20px" }}
                  x="230"
                  y="420"
                  fill="black"
                >
                  {conclusion.cellVars.cellE[4]}{" "}
                </text>
                <text
                  id="conclusioncellEvar8"
                  style={{ fontSize: "20px" }}
                  x="230"
                  y="460"
                  fill="black"
                >
                  {conclusion.cellVars.cellE[6]}{" "}
                </text>
                <text
                  id="conclusioncellEvar9"
                  style={{ fontSize: "20px" }}
                  x="230"
                  y="500"
                  fill="black"
                >
                  {conclusion.cellVars.cellE[8]}{" "}
                </text>

                {/*cell F existential markers*/}
                <text
                  id="conclusioncellFvar1"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="455"
                  fill="black"
                >
                  {conclusion.cellVars.cellF[1]}{" "}
                </text>
                <text
                  id="conclusioncellFvar2"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="485"
                  fill="black"
                >
                  {conclusion.cellVars.cellF[0]}{" "}
                </text>
                <text
                  id="conclusioncellFvar3"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="515"
                  fill="black"
                >
                  {conclusion.cellVars.cellF[2]}{" "}
                </text>

                <text
                  id="conclusioncellFvar4"
                  style={{ fontSize: "20px" }}
                  x="295"
                  y="450"
                  fill="black"
                >
                  {conclusion.cellVars.cellF[7]}{" "}
                </text>
                <text
                  id="conclusioncellFvar5"
                  style={{ fontSize: "20px" }}
                  x="305"
                  y="475"
                  fill="black"
                >
                  {conclusion.cellVars.cellF[5]}{" "}
                </text>
                <text
                  id="conclusioncellFvar6"
                  style={{ fontSize: "20px" }}
                  x="315"
                  y="505"
                  fill="black"
                >
                  {conclusion.cellVars.cellF[3]}{" "}
                </text>

                <text
                  id="conclusioncellFvar7"
                  style={{ fontSize: "20px" }}
                  x="375"
                  y="450"
                  fill="black"
                >
                  {conclusion.cellVars.cellF[4]}{" "}
                </text>
                <text
                  id="conclusioncellFvar8"
                  style={{ fontSize: "20px" }}
                  x="365"
                  y="475"
                  fill="black"
                >
                  {conclusion.cellVars.cellF[6]}{" "}
                </text>
                <text
                  id="conclusioncellFvar9"
                  style={{ fontSize: "20px" }}
                  x="355"
                  y="505"
                  fill="black"
                >
                  {conclusion.cellVars.cellF[8]}{" "}
                </text>

                {/*cell G existential markers*/}

                <text
                  id="conclusioncellGvar1"
                  style={{ fontSize: "20px" }}
                  x="520"
                  y="380"
                  fill="black"
                >
                  {conclusion.cellVars.cellG[7]}{" "}
                </text>
                <text
                  id="conclusioncellGvar2"
                  style={{ fontSize: "20px" }}
                  x="520"
                  y="420"
                  fill="black"
                >
                  {conclusion.cellVars.cellG[5]}{" "}
                </text>
                <text
                  id="conclusioncellGvar3"
                  style={{ fontSize: "20px" }}
                  x="520"
                  y="460"
                  fill="black"
                >
                  {conclusion.cellVars.cellG[3]}{" "}
                </text>

                <text
                  id="conclusioncellGvar4"
                  style={{ fontSize: "20px" }}
                  x="480"
                  y="400"
                  fill="black"
                >
                  {conclusion.cellVars.cellG[1]}{" "}
                </text>
                <text
                  id="conclusioncellGvar5"
                  style={{ fontSize: "20px" }}
                  x="480"
                  y="440"
                  fill="black"
                >
                  {conclusion.cellVars.cellG[0]}{" "}
                </text>
                <text
                  id="conclusioncellGvar6"
                  style={{ fontSize: "20px" }}
                  x="480"
                  y="480"
                  fill="black"
                >
                  {conclusion.cellVars.cellG[2]}{" "}
                </text>

                <text
                  id="conclusioncellGvar7"
                  style={{ fontSize: "20px" }}
                  x="440"
                  y="420"
                  fill="black"
                >
                  {conclusion.cellVars.cellG[4]}{" "}
                </text>
                <text
                  id="conclusioncellGvar8"
                  style={{ fontSize: "20px" }}
                  x="440"
                  y="460"
                  fill="black"
                >
                  {conclusion.cellVars.cellG[6]}{" "}
                </text>
                <text
                  id="conclusioncellGvar9"
                  style={{ fontSize: "20px" }}
                  x="440"
                  y="500"
                  fill="black"
                >
                  {conclusion.cellVars.cellG[8]}{" "}
                </text>

                {/*cell H existential markers*/}

                <text
                  id="conclusioncellHvar1"
                  style={{ fontSize: "20px" }}
                  x="180"
                  y="200"
                  fill="black"
                >
                  {conclusion.cellVars.cellH[7]}{" "}
                </text>
                <text
                  id="conclusioncellHvar2"
                  style={{ fontSize: "20px" }}
                  x="150"
                  y="240"
                  fill="black"
                >
                  {conclusion.cellVars.cellH[5]}{" "}
                </text>
                <text
                  id="conclusioncellHvar3"
                  style={{ fontSize: "20px" }}
                  x="120"
                  y="280"
                  fill="black"
                >
                  {conclusion.cellVars.cellH[3]}{" "}
                </text>

                <text
                  id="conclusioncellHvar4"
                  style={{ fontSize: "20px" }}
                  x="480"
                  y="200"
                  fill="black"
                >
                  {conclusion.cellVars.cellH[1]}{" "}
                </text>
                <text
                  id="conclusioncellHvar5"
                  style={{ fontSize: "20px" }}
                  x="510"
                  y="240"
                  fill="black"
                >
                  {conclusion.cellVars.cellH[0]}{" "}
                </text>
                <text
                  id="conclusioncellHvar6"
                  style={{ fontSize: "20px" }}
                  x="540"
                  y="280"
                  fill="black"
                >
                  {conclusion.cellVars.cellH[2]}{" "}
                </text>

                <text
                  id="conclusioncellHvar7"
                  style={{ fontSize: "20px" }}
                  x="335"
                  y="600"
                  fill="black"
                >
                  {conclusion.cellVars.cellH[4]}{" "}
                </text>
                <text
                  id="conclusioncellHvar8"
                  style={{ fontSize: "20px" }}
                  x="290"
                  y="600"
                  fill="black"
                >
                  {conclusion.cellVars.cellH[6]}{" "}
                </text>
                <text
                  id="conclusioncellHvar9"
                  style={{ fontSize: "20px" }}
                  x="375"
                  y="600"
                  fill="black"
                >
                  {conclusion.cellVars.cellH[8]}{" "}
                </text>
              </g>
            </svg>
          </div>
          <br></br>

          <button
            type="button"
            className="btn btn-outline-primary btn-sm btn-block"
            onClick={handleEvalC}
          >
            Evaluate Premise
          </button>
        </div>
      ) : (
        <div id="conclusion" className="col"></div>
      )}
    </div>
  );
};

export default Conclusion;
