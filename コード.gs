function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('体組成入力フォーム');
}

function registerSSByFormData(data) {

  Logger.log("data = %s", data);

  var datasheet = SpreadsheetApp.openById('13x4WA5MlnL6kz9ikg7QIguA_9h58q3sb5IXdU4ID80Q').getSheetByName('データ');
  var now = new Date();

  var i = datasheet.getLastRow() + 1;
  datasheet.getRange(i,  1).setValue(Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd'));
  datasheet.getRange(i, 2).setValue(data[12]);
  datasheet.getRange(i, 3).setValue(data[15]);
  datasheet.getRange(i, 4).setValue(data[14]);
  datasheet.getRange(i, 5).setValue(data[12] * data[13] / 100);
  datasheet.getRange(i, 6).setValue(data[13] / 100);
  datasheet.getRange(i,  7).setValue(data[12] * data[1] / 100);
  datasheet.getRange(i,  8).setValue(data[ 1] / 100);
  datasheet.getRange(i,  9).setValue(data[ 2] / 100);
  datasheet.getRange(i,  10).setValue(data[ 3] / 100);
  datasheet.getRange(i,  11).setValue(data[ 4] / 100);
  datasheet.getRange(i,  12).setValue(data[ 5] / 100);
  datasheet.getRange(i,  13).setValue(data[ 6] / 100);
  datasheet.getRange(i,  14).setValue(Number(data[ 7]) + Number(data[ 8]) + Number(data[ 9]) + Number(data[ 10]) + Number(data[ 11]));
  datasheet.getRange(i,  15).setValue(data[ 7]);
  datasheet.getRange(i,  16).setValue(data[ 8]);
  datasheet.getRange(i,  17).setValue(data[ 9]);
  datasheet.getRange(i, 18).setValue(data[10]);
  datasheet.getRange(i, 19).setValue(data[11]);
  result = true;

  return {data: true};
}
