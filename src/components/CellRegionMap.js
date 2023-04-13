import React from "react";

function CellRegionMap(cell) {
  if (cell === "cellA") {
    return <span>(A&#8321;&minus;(A&#8322;&cup;A&#8323;))</span>;
  }
  if (cell === "cellB") {
    return <span>((A&#8321;&cap;A&#8322;)&minus;A&#8323;)</span>;
  }
  if (cell === "cellC") {
    return <span>(A&#8321;&cap;A&#8321;&cap;A&#8323;)</span>;
  }
  if (cell === "cellD") {
    return <span>((A&#8321;&cap;A&#8323;)&minus;A&#8322;)</span>;
  }
  if (cell === "cellE") {
    return <span>(A&#8322;&minus;(A&#8321;&cup;A&#8323;))</span>;
  }
  if (cell === "cellF") {
    return <span>((A&#8322;&cap;A&#8323;)&minus;A&#8321;)</span>;
  }
  if (cell === "cellG") {
    return <span>(A&#8323;&minus;(A&#8321;&cup;A&#8322;))</span>;
  }
  if (cell === "cellH") {
    return <span>((A&#8321;&cup;A&#8322;&cup;A&#8323;)&apos;)</span>;
  }
}

export default CellRegionMap;
