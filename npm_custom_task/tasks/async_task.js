const path = require('path');
const fs = require('fs');

console.log('Starting async task...');

const dir_path = path.resolve(__dirname);
// const dir_path = path.resolve(__dirname, 'xxx');

fs.readdir(dir_path, function (error, files_list) {
  if (error) {
    console.log('FAIL', error);
    process.exit(1);
  } else {
    console.log('List of files in', dir_path);
    console.log(files_list.map(file_name => ` - ${file_name}`).join('\n'));

    console.log('DONE');
    process.exit(0);
  }
});