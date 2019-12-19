//this starts oauth - it only runs once. 
function myFunction() {
    var propertyStore = PropertiesService.getScriptProperties();
  
  // service account for cloud vision
  cGoa.GoaApp.setPackage (
    propertyStore , 
    cGoa.GoaApp.createServiceAccount (DriveApp , {
      packageName: 'GS',
      fileId:'1vHJsrTzwi2JzmYU5LMu3VIV4-M7tZRGz',
      scopes : cGoa.GoaApp.scopesGoogleExpand (['cloud-platform']),
      service:'google_service'
    }));
}
