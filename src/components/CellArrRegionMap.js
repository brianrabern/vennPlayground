import React from 'react';
import CellRegionMap from './CellRegionMap'

function CellArrRegionMap(regionsArr) {
    let str = '';
    for (let i = 0; i < regionsArr.length; i++) {
      str += CellRegionMap(regionsArr[i]).props.children;
      if (i < regionsArr.length - 1) {
        str += ', '; // Add a comma separator after each item except for the last one
      }
    }
    return '[' + str + ']';
  }


export default CellArrRegionMap;
