import fs from 'fs';
import csv from 'csvtojson';

const inputFilePath = './guests.csv';
const outputFilePath = './src/guests.json';

csv({ delimiter: ';', checkType: true })
  .fromFile(inputFilePath)
  .then((jsonObj) => {
    const prettyJson = JSON.stringify(jsonObj, null, 2);
    fs.writeFileSync(outputFilePath, prettyJson, 'utf8');
    console.log(`✅ JSON saved to ${outputFilePath}`);
  })
  .catch((err) => {
    console.error('❌ Error converting CSV to JSON:', err);
  });