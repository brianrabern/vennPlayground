import React from 'react';
import CellRegionMap from './CellRegionMap'

function CellArrRegionMap(regionsArr) {
    let str =''
        for (let cell of regionsArr){
            str += CellRegionMap(cell).props.children
        }

    return '{'+'∅'+ str +'}';

}


export default CellArrRegionMap;
