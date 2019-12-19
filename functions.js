function getNowDate() {
    //return a string of the yyyymmdd
    var returnDate = "";
    //get datetime now
    var today = new Date();
    //split
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //because January is 0! 
    var yyyy = today.getFullYear();

    var ddS = "";
    var mmS = "";
    var yyyyS = "";
    
    //Interpolation date
    if (dd < 10) {
        ddS = "0".concat(String(dd));
    } else {
        ddS = String(dd);
    }

    if (mm < 10) {
        mmS = "0".concat(String(mm));
    } else {
        mmS = String(mm);
    }

    yyyyS = String(yyyy);

    return yyyyS.concat(mmS).concat(ddS);
}