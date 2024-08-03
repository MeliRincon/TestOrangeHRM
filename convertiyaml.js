const xlsx = require('xlsx');
const yaml = require('js-yaml');
const fs = require('fs');

// Leer el archivo Excel
const workbook = xlsx.readFile('/Orange_test.xlsx');

// Supongamos que queremos convertir la primera hoja
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convertir la hoja a JSON
const jsonData = xlsx.utils.sheet_to_json(worksheet);

// Convertir JSON a YAML
const yamlData = yaml.dump(jsonData);

// Guardar el YAML en un archivo
fs.writeFileSync('/Orange_test.yaml', yamlData, 'utf8');

console.log('Conversión completada con éxito');
