const XLSX = require('xlsx');
const workbook = XLSX.readFile('C:/Automacao/PHOENIX_AutomationTst/cypress/files/inpt_TC_data.xlsx');
const sheet_name_list = workbook.SheetNames;
const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
const fs = require('fs');
fs.writeFileSync('cypress/fixtures/INPUTdata.json', JSON.stringify(jsonData, null, 2));
