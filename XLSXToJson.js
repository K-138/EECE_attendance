const XLSX = require('xlsx');

function XLSXToJson(xlsx, sheetName) {
    let workbook = XLSX.read(xlsx);
    let worksheet = workbook.Sheets[sheetName]
    return XLSX.utils.sheet_to_json(worksheet);
}

module.exports = XLSXToJson;