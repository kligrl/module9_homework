const jsonString = `
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
}
`;

const data = JSON.parse(jsonString);
const result = { list: [] };

for (let i = 0; i < data.list.length; i++) {
  const listEntry = new Object();
  const listName = data.list[i].name;
  const listAge = data.list[i].age;
  const listProf = data.list[i].prof;
  listEntry.name = listName;
  listEntry.age = listAge;
  listEntry.prof = listProf;
  result.list.push(listEntry);
}

console.log(result);