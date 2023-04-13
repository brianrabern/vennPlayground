import SemanticEval from "./SemanticEval";

//check validity of an argument

function CheckValidity(argument, setCheckedModels) {
  // get power set of domain
  function powerSet(set) {
    if (set.length === 0) {
      return [[]];
    }
    const [first, ...rest] = set;
    const withoutFirst = powerSet(rest);
    const withFirst = withoutFirst.map((subset) => [first, ...subset]);
    return [...withoutFirst, ...withFirst];
  }

  // get all models for a given domain size
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

  // check whether a given model is a countermodel for the argument
  function checkArgument(argument, model) {
    const premisesTrue = argument.premises.every((premise) =>
      SemanticEval(premise, model)
    );

    const conclusionFalse = !SemanticEval(argument.conclusion, model);

    return premisesTrue && conclusionFalse;
  }

  function findCountermodel(argument) {
    const checkedModels = [];
    for (let i = 0; i <= 8; i++) {
      const models = getModels(i);
      for (let j = 0; j < models.length; j++) {
        const model = models[j];
        if (checkArgument(argument, model)) {
          checkedModels.push(model);
          setCheckedModels([...checkedModels]);
          return { model: model, checkedModels: checkedModels, valid: false }; // countermodel found, here it is
        } else {
          checkedModels.push(model);
          setCheckedModels([...checkedModels]);
        }
      }
    }
    return { model: null, checkedModels: checkedModels, valid: true }; // no countermodel found
  }

  return findCountermodel(argument); // return the results
}

export default CheckValidity;
