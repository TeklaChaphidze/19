let keys = (a,b) =>a[b];
//igebs a obieqts da b values da abrunebs a-s im key-s romelsac aqvs b value

let evens = (a) => a.array.forEach(element => {
    if (element%2==0){
        return element;
    } 
}); //yvela elements sheamowmebs da daareturnebs tu 2ze gayofisas nashti nulia anu luwia

let sum = (a)=> {return a.reduce((acc,cv)=>acc+cv,0)}; // aigebs nuls(es iqneba acc anu accumulator) da daamatebs yvela elments satitaod

const user = {
    name: "Tekla",
    age: 25
  };
  
let output = `User: ${user.name}, Age: ${user.age}`;
console.log(output);


function addPropertyToObjects(array, key, value) {
    return array.map(obj => {
      obj[key] = value;
      return obj;
    });
}
  