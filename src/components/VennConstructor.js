import React from "react";

const VennConstructorProps = {
  cellVars: {
    cellA: [],
    cellB: [],
    cellC: [],
    cellD: [],
    cellE: [],
    cellF: [],
    cellG: [],
    cellH: [],
  },
  fillColors: {
    cellA: "",
    cellB: "",
    cellC: "",
    cellD: "",
    cellE: "",
    cellF: "",
    cellG: "",
    cellH: "",
  },
  handleClick: () => {},
};

const VennConstructor = (VennConsProps) => {
  const { cellVars, fillColors, handleClick } = VennConsProps;

  return (
    <svg
      id="cellH"
      onClick={handleClick}
      style={{ backgroundColor: fillColors.cellH }}
      className="border border-1 border-dark rounded"
      width="480"
      height="480"
      viewBox="40 30 600 600"
    >
      <g id="layer1">
        <text style={{ fontSize: "40px" }} x="330" y="135" fill="black">
          A&#8321;{" "}
        </text>
        <text style={{ fontSize: "40px" }} x="100" y="550" fill="black">
          A&#8322;{" "}
        </text>
        <text style={{ fontSize: "40px" }} x="540" y="550" fill="black">
          A&#8323;{" "}
        </text>

        <path
          onClick={handleClick}
          d="m 480,292.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
          id="cellA"
          fill={fillColors.cellA}
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
        />
        <path
          onClick={handleClick}
          d="m 406,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
          id="cellE"
          fill={fillColors.cellE}
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
        />
        <path
          onClick={handleClick}
          d="m 554,412.36218 c 0,77.31987 -62.68014,140 -140,140 -77.31986,0 -140,-62.68013 -140,-140 0,-77.31986 62.68014,-140 140,-140 77.31986,0 140,62.68014 140,140 z"
          id="cellG"
          fill={fillColors.cellG}
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
        />
        <path
          onClick={handleClick}
          d="m 340,292.36218 c -39.62859,24.72433 -66,68.7254 -66,118.875 0,1.1766 0.002,2.3303 0.0312,3.5 19.65735,10.5221 42.11343,16.5 65.96875,16.5 23.85532,0 46.3114,-5.9779 65.96875,-16.5 0.0289,-1.1697 0.0312,-2.3234 0.0312,-3.5 0,-50.1496 -26.37141,-94.15067 -66,-118.875 z"
          id="cellC"
          fill={fillColors.cellC}
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
        />
        <path
          onClick={handleClick}
          d="m 266.25003,271.46933 c -23.85532,0 -46.3114,5.94667 -65.96875,16.46875 -0.0289,1.16993 -0.0312,2.35437 -0.0312,3.53125 0,53.46323 29.97697,99.91736 74.03125,123.5 -0.0289,-1.16966 -0.0312,-2.32339 -0.0312,-3.5 0,-50.14004 26.35267,-94.14806 65.96875,-118.875 -21.46249,-13.38134 -46.81378,-21.125 -73.96875,-21.125 z"
          id="cellB"
          fill={fillColors.cellB}
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
        />
        <path
          onClick={handleClick}
          d="m 413.7005,271.90228 c 23.85532,0 46.3114,5.94667 65.96875,16.46875 0.0289,1.16993 0.0312,2.35437 0.0312,3.53125 0,53.46323 -29.97697,99.91736 -74.03125,123.5 0.0289,-1.16966 0.0312,-2.32339 0.0312,-3.5 0,-50.14004 -26.35267,-94.14806 -65.96875,-118.875 21.46249,-13.38134 46.81378,-21.125 73.96875,-21.125 z"
          id="cellD"
          fill={fillColors.cellD}
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
        />
        <path
          onClick={handleClick}
          d="m 274,415.28198 c 1.19491,48.69086 27.26477,91.19629 65.96875,115.34375 38.70398,-24.14746 64.77384,-66.65289 65.96875,-115.34375 -19.65735,10.52208 -42.11343,16.5 -65.96875,16.5 -23.85532,0 -46.3114,-5.97792 -65.96875,-16.5 z"
          id="cellF"
          fill={fillColors.cellF}
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
        />

        {/*cell A existential markers*/}

        <text
          id="cellAvar1"
          style={{ fontSize: "20px" }}
          x="280"
          y="200"
          fill="black"
        >
          {" "}
          {cellVars.cellA[7]}{" "}
        </text>
        <text
          id="cellAvar2"
          style={{ fontSize: "20px" }}
          x="280"
          y="230"
          fill="black"
        >
          {cellVars.cellA[1]}{" "}
        </text>
        <text
          id="cellAvar3"
          style={{ fontSize: "20px" }}
          x="280"
          y="260"
          fill="black"
        >
          {cellVars.cellA[3]}{" "}
        </text>

        <text
          id="cellAvar4"
          style={{ fontSize: "20px" }}
          x="335"
          y="200"
          fill="black"
        >
          {cellVars.cellA[5]}{" "}
        </text>
        <text
          id="cellAvar5"
          style={{ fontSize: "20px" }}
          x="335"
          y="230"
          fill="black"
        >
          {cellVars.cellA[0]}{" "}
        </text>
        <text
          id="cellAvar6"
          style={{ fontSize: "20px" }}
          x="335"
          y="260"
          fill="black"
        >
          {cellVars.cellA[6]}{" "}
        </text>

        <text
          id="cellAvar7"
          style={{ fontSize: "20px" }}
          x="390"
          y="200"
          fill="black"
        >
          {cellVars.cellA[4]}{" "}
        </text>
        <text
          id="cellAvar8"
          style={{ fontSize: "20px" }}
          x="390"
          y="230"
          fill="black"
        >
          {cellVars.cellA[2]}{" "}
        </text>
        <text
          id="cellAvar9"
          style={{ fontSize: "20px" }}
          x="390"
          y="260"
          fill="black"
        >
          {cellVars.cellA[8]}{" "}
        </text>

        {/*cell B existential markers*/}

        <text
          id="cellBvar1"
          style={{ fontSize: "20px" }}
          x="225"
          y="300"
          fill="black"
        >
          {cellVars.cellB[7]}{" "}
        </text>
        <text
          id="cellBvar2"
          style={{ fontSize: "20px" }}
          x="225"
          y="330"
          fill="black"
        >
          {cellVars.cellB[5]}{" "}
        </text>
        <text
          id="cellBvar3"
          style={{ fontSize: "20px" }}
          x="225"
          y="360"
          fill="black"
        >
          {cellVars.cellB[3]}{" "}
        </text>

        <text
          id="cellBvar4"
          style={{ fontSize: "20px" }}
          x="245"
          y="300"
          fill="black"
        >
          {cellVars.cellB[1]}{" "}
        </text>
        <text
          id="cellBvar5"
          style={{ fontSize: "20px" }}
          x="245"
          y="330"
          fill="black"
        >
          {cellVars.cellB[0]}{" "}
        </text>
        <text
          id="cellBvar6"
          style={{ fontSize: "20px" }}
          x="245"
          y="360"
          fill="black"
        >
          {cellVars.cellB[2]}{" "}
        </text>

        <text
          id="cellBvar7"
          style={{ fontSize: "20px" }}
          x="265"
          y="300"
          fill="black"
        >
          {cellVars.cellB[4]}{" "}
        </text>
        <text
          id="cellBvar8"
          style={{ fontSize: "20px" }}
          x="265"
          y="330"
          fill="black"
        >
          {cellVars.cellB[6]}{" "}
        </text>
        <text
          id="cellBvar9"
          style={{ fontSize: "20px" }}
          x="265"
          y="360"
          fill="black"
        >
          {cellVars.cellB[8]}{" "}
        </text>

        {/*cell C existential markers*/}

        <text
          id="cellCvar1"
          style={{ fontSize: "20px" }}
          x="335"
          y="340"
          fill="black"
        >
          {cellVars.cellC[7]}{" "}
        </text>
        <text
          id="cellCvar2"
          style={{ fontSize: "20px" }}
          x="335"
          y="370"
          fill="black"
        >
          {cellVars.cellC[0]}{" "}
        </text>
        <text
          id="cellCvar3"
          style={{ fontSize: "20px" }}
          x="335"
          y="400"
          fill="black"
        >
          {cellVars.cellC[3]}{" "}
        </text>

        <text
          id="cellCvar4"
          style={{ fontSize: "20px" }}
          x="310"
          y="340"
          fill="black"
        >
          {cellVars.cellC[1]}{" "}
        </text>
        <text
          id="cellCvar5"
          style={{ fontSize: "20px" }}
          x="310"
          y="370"
          fill="black"
        >
          {cellVars.cellC[5]}{" "}
        </text>
        <text
          id="cellCvar6"
          style={{ fontSize: "20px" }}
          x="310"
          y="400"
          fill="black"
        >
          {cellVars.cellC[2]}{" "}
        </text>

        <text
          id="cellCvar7"
          style={{ fontSize: "20px" }}
          x="360"
          y="340"
          fill="black"
        >
          {cellVars.cellC[4]}{" "}
        </text>
        <text
          id="cellCvar8"
          style={{ fontSize: "20px" }}
          x="360"
          y="370"
          fill="black"
        >
          {cellVars.cellC[6]}{" "}
        </text>
        <text
          id="cellCvar9"
          style={{ fontSize: "20px" }}
          x="360"
          y="400"
          fill="black"
        >
          {cellVars.cellC[8]}{" "}
        </text>

        {/*cell D existential markers*/}

        <text
          id="cellDvar1"
          style={{ fontSize: "20px" }}
          x="405"
          y="300"
          fill="black"
        >
          {cellVars.cellD[7]}{" "}
        </text>
        <text
          id="cellDvar2"
          style={{ fontSize: "20px" }}
          x="405"
          y="330"
          fill="black"
        >
          {cellVars.cellD[5]}{" "}
        </text>
        <text
          id="cellDvar3"
          style={{ fontSize: "20px" }}
          x="405"
          y="360"
          fill="black"
        >
          {cellVars.cellD[3]}{" "}
        </text>
        <text
          id="cellDvar4"
          style={{ fontSize: "20px" }}
          x="425"
          y="300"
          fill="black"
        >
          {cellVars.cellD[1]}{" "}
        </text>
        <text
          id="cellDvar5"
          style={{ fontSize: "20px" }}
          x="425"
          y="330"
          fill="black"
        >
          {cellVars.cellD[0]}{" "}
        </text>
        <text
          id="cellDvar6"
          style={{ fontSize: "20px" }}
          x="425"
          y="360"
          fill="black"
        >
          {cellVars.cellD[2]}{" "}
        </text>
        <text
          id="cellDvar7"
          style={{ fontSize: "20px" }}
          x="445"
          y="300"
          fill="black"
        >
          {cellVars.cellD[4]}{" "}
        </text>
        <text
          id="cellDvar8"
          style={{ fontSize: "20px" }}
          x="445"
          y="330"
          fill="black"
        >
          {cellVars.cellD[6]}{" "}
        </text>
        <text
          id="cellDvar9"
          style={{ fontSize: "20px" }}
          x="445"
          y="360"
          fill="black"
        >
          {cellVars.cellD[8]}{" "}
        </text>

        {/*cell E existential markers*/}

        <text
          id="cellEvar1"
          style={{ fontSize: "20px" }}
          x="150"
          y="380"
          fill="black"
        >
          {cellVars.cellE[7]}{" "}
        </text>
        <text
          id="cellEvar2"
          style={{ fontSize: "20px" }}
          x="150"
          y="420"
          fill="black"
        >
          {cellVars.cellE[5]}{" "}
        </text>
        <text
          id="cellEvar3"
          style={{ fontSize: "20px" }}
          x="150"
          y="460"
          fill="black"
        >
          {cellVars.cellE[3]}{" "}
        </text>

        <text
          id="cellEvar4"
          style={{ fontSize: "20px" }}
          x="190"
          y="400"
          fill="black"
        >
          {cellVars.cellE[1]}{" "}
        </text>
        <text
          id="cellEvar5"
          style={{ fontSize: "20px" }}
          x="190"
          y="440"
          fill="black"
        >
          {cellVars.cellE[0]}{" "}
        </text>
        <text
          id="cellEvar6"
          style={{ fontSize: "20px" }}
          x="190"
          y="480"
          fill="black"
        >
          {cellVars.cellE[2]}{" "}
        </text>

        <text
          id="cellEvar7"
          style={{ fontSize: "20px" }}
          x="230"
          y="420"
          fill="black"
        >
          {cellVars.cellE[4]}{" "}
        </text>
        <text
          id="cellEvar8"
          style={{ fontSize: "20px" }}
          x="230"
          y="460"
          fill="black"
        >
          {cellVars.cellE[6]}{" "}
        </text>
        <text
          id="cellEvar9"
          style={{ fontSize: "20px" }}
          x="230"
          y="500"
          fill="black"
        >
          {cellVars.cellE[8]}{" "}
        </text>

        {/*cell F existential markers*/}
        <text
          id="cellFvar1"
          style={{ fontSize: "20px" }}
          x="335"
          y="455"
          fill="black"
        >
          {cellVars.cellF[1]}{" "}
        </text>
        <text
          id="cellFvar2"
          style={{ fontSize: "20px" }}
          x="335"
          y="485"
          fill="black"
        >
          {cellVars.cellF[0]}{" "}
        </text>
        <text
          id="cellFvar3"
          style={{ fontSize: "20px" }}
          x="335"
          y="515"
          fill="black"
        >
          {cellVars.cellF[2]}{" "}
        </text>

        <text
          id="cellFvar4"
          style={{ fontSize: "20px" }}
          x="295"
          y="450"
          fill="black"
        >
          {cellVars.cellF[7]}{" "}
        </text>
        <text
          id="cellFvar5"
          style={{ fontSize: "20px" }}
          x="305"
          y="475"
          fill="black"
        >
          {cellVars.cellF[5]}{" "}
        </text>
        <text
          id="cellFvar6"
          style={{ fontSize: "20px" }}
          x="315"
          y="505"
          fill="black"
        >
          {cellVars.cellF[3]}{" "}
        </text>

        <text
          id="cellFvar7"
          style={{ fontSize: "20px" }}
          x="375"
          y="450"
          fill="black"
        >
          {cellVars.cellF[4]}{" "}
        </text>
        <text
          id="cellFvar8"
          style={{ fontSize: "20px" }}
          x="365"
          y="475"
          fill="black"
        >
          {cellVars.cellF[6]}{" "}
        </text>
        <text
          id="cellFvar9"
          style={{ fontSize: "20px" }}
          x="355"
          y="505"
          fill="black"
        >
          {cellVars.cellF[8]}{" "}
        </text>

        {/*cell G existential markers*/}

        <text
          id="cellGvar1"
          style={{ fontSize: "20px" }}
          x="520"
          y="380"
          fill="black"
        >
          {cellVars.cellG[7]}{" "}
        </text>
        <text
          id="cellGvar2"
          style={{ fontSize: "20px" }}
          x="520"
          y="420"
          fill="black"
        >
          {cellVars.cellG[5]}{" "}
        </text>
        <text
          id="cellGvar3"
          style={{ fontSize: "20px" }}
          x="520"
          y="460"
          fill="black"
        >
          {cellVars.cellG[3]}{" "}
        </text>

        <text
          id="cellGvar4"
          style={{ fontSize: "20px" }}
          x="480"
          y="400"
          fill="black"
        >
          {cellVars.cellG[1]}{" "}
        </text>
        <text
          id="cellGvar5"
          style={{ fontSize: "20px" }}
          x="480"
          y="440"
          fill="black"
        >
          {cellVars.cellG[0]}{" "}
        </text>
        <text
          id="cellGvar6"
          style={{ fontSize: "20px" }}
          x="480"
          y="480"
          fill="black"
        >
          {cellVars.cellG[2]}{" "}
        </text>

        <text
          id="cellGvar7"
          style={{ fontSize: "20px" }}
          x="440"
          y="420"
          fill="black"
        >
          {cellVars.cellG[4]}{" "}
        </text>
        <text
          id="cellGvar8"
          style={{ fontSize: "20px" }}
          x="440"
          y="460"
          fill="black"
        >
          {cellVars.cellG[6]}{" "}
        </text>
        <text
          id="cellGvar9"
          style={{ fontSize: "20px" }}
          x="440"
          y="500"
          fill="black"
        >
          {cellVars.cellG[8]}{" "}
        </text>

        {/*cell H existential markers*/}

        <text
          id="cellHvar1"
          style={{ fontSize: "20px" }}
          x="180"
          y="200"
          fill="black"
        >
          {cellVars.cellH[7]}{" "}
        </text>
        <text
          id="cellHvar2"
          style={{ fontSize: "20px" }}
          x="150"
          y="240"
          fill="black"
        >
          {cellVars.cellH[5]}{" "}
        </text>
        <text
          id="cellHvar3"
          style={{ fontSize: "20px" }}
          x="120"
          y="280"
          fill="black"
        >
          {cellVars.cellH[3]}{" "}
        </text>

        <text
          id="cellHvar4"
          style={{ fontSize: "20px" }}
          x="480"
          y="200"
          fill="black"
        >
          {cellVars.cellH[1]}{" "}
        </text>
        <text
          id="cellHvar5"
          style={{ fontSize: "20px" }}
          x="510"
          y="240"
          fill="black"
        >
          {cellVars.cellH[0]}{" "}
        </text>
        <text
          id="cellHvar6"
          style={{ fontSize: "20px" }}
          x="540"
          y="280"
          fill="black"
        >
          {cellVars.cellH[2]}{" "}
        </text>

        <text
          id="cellHvar7"
          style={{ fontSize: "20px" }}
          x="335"
          y="600"
          fill="black"
        >
          {cellVars.cellH[4]}{" "}
        </text>
        <text
          id="cellHvar8"
          style={{ fontSize: "20px" }}
          x="290"
          y="600"
          fill="black"
        >
          {cellVars.cellH[6]}{" "}
        </text>
        <text
          id="cellHvar9"
          style={{ fontSize: "20px" }}
          x="375"
          y="600"
          fill="black"
        >
          {cellVars.cellH[8]}{" "}
        </text>
      </g>
    </svg>
  );
};

export default VennConstructor;
