import React from 'react';




function CellRegionMap(cell) {
 let result = ''
    if (cell === 'cellA'){
        return <span>&cup;(A&#8321;&minus;(A&#8322;&cup;A&#8323;))</span>
    }
    if (cell === 'cellB'){
        return <span>&cup;((A&#8321;&cap;A&#8322;)&minus;A&#8323;)</span>
    }
    if (cell === 'cellC'){
        return <span>&cup;(A&#8321;&cap;A&#8321;&cap;A&#8323;)</span>
    }
    if (cell === 'cellD'){
        return <span>&cup;((A&#8321;&cap;A&#8323;)&minus;A&#8322;)</span>
    }
    if (cell === 'cellE'){
        return <span>&cup;(A&#8322;&minus;(A&#8321;&cup;A&#8323;))</span>
    }
    if (cell === 'cellF'){
        return <span>&cup;((A&#8322;&cap;A&#8323;)&minus;A&#8321;)</span>
    }
    if (cell === 'cellG'){
        return <span>&cup;(A&#8323;&minus;(A&#8321;&cup;A&#8322;))</span>
    }
    if (cell === 'cellH'){
        return <span>&cup;((A&#8321;&cup;A&#8322;&cup;A&#8323;)&apos;)</span>
    }


}

export default CellRegionMap;
