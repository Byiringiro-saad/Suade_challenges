export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key) {
    // TODO: implement logic here
    const values = [];
    const keys = {};
    let total = 0;

    array.forEach(element => {
      values.push(element[key]);
    });

    values.forEach(element => {
      if (!Object.keys(keys).includes(element)) {
        keys[element] = 1;
      } else {
        keys[element] = keys[element] + 1;
      }
      total++;
    })

    for (let element in keys) {
      keys[element] = keys[element] / total;
    }

    return keys
  },

  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123

  getValueAtPath(obj, path, defaultValue = 'none') {
    // TODO: implement logic here

    const pathArray = path.split('.');
    let value = obj;

    pathArray.forEach(element => {
      value = value[element];
    });

    return value;
  },
};
