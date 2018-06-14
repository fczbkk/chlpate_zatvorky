console.log('Starting param task...');

const [exec_path, task_path, ...args] = process.argv;

console.log('This task was called with:');
console.log(args.map(arg => ` - ${arg}`).join('\n'));

console.log('DONE');

process.exit(0);