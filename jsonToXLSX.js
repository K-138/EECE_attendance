const XLSX = require('xlsx');

function jsonToXLSX(json, sheetName) {
    let workbook = XLSX.utils.book_new();
    let worksheet = XLSX.utils.json_to_sheet(json)
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    let data = XLSX.write(workbook, {type: 'array'});
    
    return new Uint8Array(data);
}

module.exports = jsonToXLSX;