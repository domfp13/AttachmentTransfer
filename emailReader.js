
// These are the labels for Project Phoenix
var fileMap = [
    {label: 'vendor_loads/DBI_LOAD_0001', fileName: 'DBI_LOAD_0001.xls',  bucket_name: 'app-script-data-extraction'},
    {label: 'vendor_loads/DBI_LOAD_0002', fileName: 'DBI_LOAD_0002.xls',  bucket_name: 'app-script-data-extraction'},
    {label: 'vendor_loads/DBI_LOAD_0003', fileName: 'DBI_LOAD_0003.xlsx', bucket_name: 'app-script-data-extraction'},
    {label: 'vendor_loads/DBI_LOAD_0004', fileName: 'DBI_LOAD_0004.xls',  bucket_name: 'app-script-data-extraction'},
    {label: 'vendor_loads/DBI_LOAD_0005', fileName: 'DBI_LOAD_0005.xlsx', bucket_name: 'app-script-data-extraction'},
    {label: 'vendor_loads/DBI_LOAD_0007', fileName: 'DBI_LOAD_0007.xlsx', bucket_name: 'app-script-data-extraction'},
    {label: 'vendor_loads/DBI_LOAD_0008', fileName: 'DBI_LOAD_0008.xls',  bucket_name: 'app-script-data-extraction'},
    {label: 'AppusmaReports/UPSAllocation', fileName: new String("UPS_ALLOCATION/CMCC_Weekly_Carrier_Report_").concat(getNowDate()).concat(".xlsx"), bucket_name: 'appusma206_apps'}
];

/*
* Gets all threads with the specified label.
* Iterates through all the messages, and attachements, and then copies into object storage.
* Removes the label from the thread. 
* Adds processed file label to thread.
*/
function parseAttachments (labelIn, nameIn, bucketIn) {
  var label = GmailApp.getUserLabelByName(labelIn);
  var threads = label.getThreads(); 
  threads.forEach(function(thread) {
    thread.getMessages().forEach(function(messages) {
      messages.getAttachments().forEach(function(attachment) {
          cloudStore(bucketIn).put(nameIn, attachment.copyBlob());
      })
    })
    var processedLabel = GmailApp.getUserLabelByName("processed_files");
    thread.removeLabel(label); 
    thread.addLabel(processedLabel);
  });
}

function main() {
  for (var arrIndex = 0; arrIndex < fileMap.length; arrIndex++) {
    var fileObj = fileMap[arrIndex];
    parseAttachments(fileObj.label, fileObj.fileName, fileObj.bucket_name);
  }
}