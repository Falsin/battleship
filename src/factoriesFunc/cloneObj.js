function cloneObj(item) {
  let cloneElem;

  if (Array.isArray(item)) {
    cloneElem = [];

    for (const iterator of item) {
      cloneElem.push(cloneObj(iterator));
    }

  } else if (typeof item === 'object' && item) {
    let prototype = cloneObj(Object.getPrototypeOf(item));
    cloneElem = Object.create(prototype);

    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        //const element = object[key];
        cloneElem[key] = cloneObj(item[key]);
      }
    }

    /* cloneElem = Object.create(Object.getPrototypeOf(item));

    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        //const element = object[key];
        cloneElem[key] = cloneObj(item[key]);
      } else {
        console.log(Object.getPrototypeOf(item))
      }
    } */
    /* for (const key in item) {
      cloneElem[key] = cloneObj(item[key]);
    } */
  } else {
    cloneElem = item;
  }

  return cloneElem;
}

export default cloneObj;