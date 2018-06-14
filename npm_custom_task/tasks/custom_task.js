/*
  It is good idea to mark start and end of the task execution in the console.
  If anything goes wrong, it makes finding and solving the problem much easier.
  Another good idea is to add a timer, to quickly catch performance issues.
 */

console.time('custom_task');
console.log('Starting custom task...');

// insert your code here

console.log('DONE');
console.timeEnd('custom_task');

process.exit(0);