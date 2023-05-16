const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const studentNodes = xmlDOM.querySelectorAll('student');
const result = { list: [] };

studentNodes.forEach((element) => {
    const studentEntry = new Object();
    const firstName = element.querySelector('first');
    const secondName = element.querySelector('second');
    const age = element.querySelector('age');
    const prof = element.querySelector('prof');
    const nameNode = element.querySelector('name');
    const lang = nameNode.getAttribute('lang');
    studentEntry.name = firstName.textContent + ' ' + secondName.textContent;
    studentEntry.age = age.textContent;
    studentEntry.prof = prof.textContent;
    studentEntry.lang = lang;
    result.list.push(studentEntry);
});

console.log(result);