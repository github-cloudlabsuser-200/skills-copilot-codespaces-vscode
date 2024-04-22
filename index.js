 // take a sentence as input
  // reverse the input sentence
  // the start of the sentence must start with a capital
  // for javascript
const reverseSentence = (sentence) => {
    const reversed = sentence.split('').reverse().join('');
    const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);
    return capitalized;
};


const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];   

const names = data.flatMap(group => group.map(person => person.name));
console.log(names);
