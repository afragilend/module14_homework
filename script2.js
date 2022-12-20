const jsonString =  `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`

const data = JSON.parse(jsonString);
const list = data.list;

const result = {
  name: data.list[0]["name"],
  prof: data.list[0]["prof"],
  age: Number(data.list[0]['age'])
};

const result2 = {
  name: data.list[1]["name"],
  prof: data.list[1]["prof"],
  age: Number(data.list[1]['age'])
};

console.log('result', result, result);