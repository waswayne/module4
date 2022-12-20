// Write a message to the console.
const names = ['John', 'Jane', 'James', 'Julie', 'Jack', 'Jill'];

for (const name of names) {
  if (name[0] === 'J' || name[0] === 'j') {
    console.log(`Hello, ${name}!`);
  } else {
    console.log(`Goodbye, ${name}!`);
  }
}
