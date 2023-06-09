import SemanticEval from "./SemanticEval";


async function CheckValidity(argument, updateCountCallback) {
 
  let numModelsChecked = 0;
  let expectedNumModels = 0;
  for (let i = 0; i <= 8; i++) {
    const models = getModels(i);
    expectedNumModels += models.length;
    for (let j = 0; j < models.length; j++) {
      const model = models[j];
      numModelsChecked++;
      console.log(`getModels(${i}).length: ${models.length}, numModelsChecked: ${numModelsChecked}`);

     
      if (checkArgument(argument, model)) {
        return {
          model: model,
          valid: false,
          numModelsChecked: numModelsChecked,
        }; // countermodel found, here it is
      }

      await new Promise((resolve) => setTimeout(resolve, 0));
      updateCountCallback(numModelsChecked);
      
    
      
      
    }
    console.log(
      `Generated ${models.length} models for domain size ${i}. Expected number of models: ${expectedNumModels}, actual number of models: ${numModelsChecked}`
    );
   
  }

  return { model: null, valid: true, numModelsChecked: numModelsChecked };

  function powerSet(set) {
    const n = set.length;
    const powerSet = [];

    for (let i = 0; i < 1 << n; i++) {
      const subset = [];
      for (let j = 0; j < n; j++) {
        if (i & (1 << j)) {
          subset.push(set[j]);
        }
      }
      powerSet.push(subset);
    }
    
    return powerSet;
  }

  function getModels(num) {
    const domain = [];
    for (let i = 0; i < num; i++) {
      domain.push(i);
    }
    const subsets = powerSet(domain);
    const models = [];
    for (let subset1 of subsets) {
      for (let subset2 of subsets) {
        for (let subset3 of subsets) {
          const model = {
            I: { 1: subset1, 2: subset2, 3: subset3 },
            D: domain,
          };
          models.push(model);
        }
      }
    }
  
    return models;
  }


  function checkArgument(argument, model) {
    const premisesTrue = argument.premises.every((premise) =>
      SemanticEval(premise, model)
    );

    const conclusionFalse = !SemanticEval(argument.conclusion, model);

    return premisesTrue && conclusionFalse;
  }
}

export default CheckValidity;

// import SemanticEval from "./SemanticEval";

// //check validity of an argument

// function CheckValidity(argument) {
//   let numModelsChecked = 0;

//   for (let i = 0; i <= 8; i++) {
//     const models = getModels(i);
//     for (let j = 0; j < models.length; j++) {
//       const model = models[j];

//       numModelsChecked++;

//       if (checkArgument(argument, model)) {
//         return {
//           model: model,
//           valid: false,
//           numModelsChecked: numModelsChecked,
//         }; // countermodel found, here it is
//       }
//     }
//   }

//   return { model: null, valid: true, numModelsChecked: numModelsChecked }; // no countermodel found

//   // helper: get power set of domain
//   function powerSet(set) {
//     const n = set.length;
//     const powerSet = [];

//     for (let i = 0; i < 1 << n; i++) {
//       const subset = [];
//       for (let j = 0; j < n; j++) {
//         if (i & (1 << j)) {
//           subset.push(set[j]);
//         }
//       }
//       powerSet.push(subset);
//     }

//     return powerSet;
//   }

//   // helper: get all models for a given domain size
//   function getModels(num) {
//     const domain = [];
//     for (let i = 0; i < num; i++) {
//       domain.push(i);
//     }
//     const subsets = powerSet(domain);
//     const models = [];
//     for (let subset1 of subsets) {
//       for (let subset2 of subsets) {
//         for (let subset3 of subsets) {
//           const model = {
//             I: { 1: subset1, 2: subset2, 3: subset3 },
//             D: domain,
//           };
//           models.push(model);
//         }
//       }
//     }
//     return models;
//   }

//   // helper: check whether a given model is a countermodel for the argument
//   function checkArgument(argument, model) {
//     const premisesTrue = argument.premises.every((premise) =>
//       SemanticEval(premise, model)
//     );

//     const conclusionFalse = !SemanticEval(argument.conclusion, model);

//     return premisesTrue && conclusionFalse;
//   }
// }

// export default CheckValidity;
