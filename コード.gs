function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('gas入力フォームサンプル');
}

function registerSSByFormData(data) {

  Logger.log("data = %s", data);

  var datasheet = SpreadsheetApp.openById('13x4WA5MlnL6kz9ikg7QIguA_9h58q3sb5IXdU4ID80Q').getSheetByName('test');
  var now = new Date();

  var i = datasheet.getLastRow() + 1;
  datasheet.getRange(i,  1).setValue(data[ 1]);
  datasheet.getRange(i,  2).setValue(data[ 2]);
  datasheet.getRange(i,  3).setValue(data[ 3]);
  datasheet.getRange(i,  4).setValue(data[ 4]);
  datasheet.getRange(i,  5).setValue(data[ 5]);
  datasheet.getRange(i,  6).setValue(data[ 6]);
  datasheet.getRange(i,  7).setValue(data[ 7]);
  datasheet.getRange(i,  8).setValue(data[ 8]);
  datasheet.getRange(i,  9).setValue(data[ 9]);
  datasheet.getRange(i, 10).setValue(data[10]);
  datasheet.getRange(i, 11).setValue(data[11]);
  datasheet.getRange(i,  12).setValue(Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss'));
  result = true;

  return {data: true};
}
