/**
* returns an instance of an object that can put and get files from object storage.
*/
function cloudStore(bucket) {
    //  var bucket = 'app-script-data-extraction'; //storage bucket name.
      var packageName = 'GS'; //name of oauth 
      
      var goa = cGoa.make (packageName,PropertiesService.getScriptProperties());
      var accessToken = goa.getToken();
      var gcs = new cGcsStore.GcsStore()
      .setAccessToken (accessToken);
      gcs.setBucket(bucket);
      return gcs;
    }