function SemanticEval(diagram, model){

    function inter(set1, set2) {
        return new Set([...set1].filter(x => set2.has(x)));
    }

    function union(set1, set2) {
        return new Set([...set1, ...set2]);
    }

    function diff(set1, set2) {
        return new Set([...set1].filter(x => !set2.has(x)));
    }


    let A1 = new Set(model.I[1])
    let A2 = new Set(model.I[2])
    let A3 = new Set(model.I[3])
    let D = new Set(model.D)

    const unionBase = new Set([...A1, ...A2, ...A3]);
    const isSubset = [...unionBase].every(x => D.has(x));

        if (isSubset) {
        console.log("The union of A1, A2, and A3 is a subset of D.");
        } else {
        console.log("The union of A1, A2, and A3 is not a subset of D.");
        }

    // first map every cell to its semantic value
    function cellSemanticVal(cell){
        let semanticVal = new Set()
        if (cell === 'cellA'){
            semanticVal = diff(A1, union(A2, A3))
        }
        if (cell === 'cellB'){
            semanticVal = diff(inter(A1, A2), A3)
        }
        if (cell === 'cellC'){
            semanticVal = inter(A1, A2, A3)
        }
        if (cell === 'cellD'){
            semanticVal = diff(inter(A1, A3), A2)
        }
        if (cell === 'cellE'){
            semanticVal = diff(A2, union(A1, A3))
        }
        if (cell === 'cellF'){
            semanticVal = diff(inter(A2, A3), A1)
        }
        if (cell === 'cellG'){
            semanticVal = diff(A3, union(A1, A2))
        }
        if (cell === 'cellH'){
            semanticVal = diff(D, union(A1, A2, A3))
        }
        return semanticVal
    }



    //take an array of cells and get the union of thier semantic values
    function unionOfCells(cellArr){
        let bigUnion = new Set()
        for (let cell of cellArr){
            bigUnion = union(bigUnion, cellSemanticVal(cell))
        }
        return bigUnion
    }

    //check whether bigUnion is empty or not
    function isEmpty(bigUnion){
        if (bigUnion.size === 0){
            return true
        }
        else{
            return false
        }
    }

    // check whether every array in an array has a  non-empty bigUnion
    function isNonEmptyArr(arr){
        if (arr.length < 1){
            return true
        }
        else{
        for (let cellArr of arr){
            if (!isEmpty(unionOfCells(cellArr))){
                return true
            }
        }
        return false
        }
    }

    if (isEmpty(unionOfCells(diagram.destroy)) && isNonEmptyArr(diagram.save)){

        console.log("destroy empty?", isEmpty(unionOfCells(diagram.destroy)))
        console.log("save non-empty?", isNonEmptyArr(diagram.save))
        return true

    }
    else{

        console.log("destroy empty?", isEmpty(unionOfCells(diagram.destroy)))
        console.log("save non-empty?", isNonEmptyArr(diagram.save))
        return false
    }


}


export default SemanticEval;
