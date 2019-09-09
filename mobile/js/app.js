document.addEventListener("deviceready", onDeviceReady, false);
var mAppManager = null;

function onDeviceReady() {
  mAppManager = new Appworks.AWAppManager(
    function(result){
      out(result);
    },
    function(error){
      out(error);
    });
}

function closeApp() {
  mAppManager.closeActiveApp();
}

function appName() {
  appManager = new Appworks.AWAppManager(
    function(result){
      out('App Name: ' + result);
    },
    function(error){
      out(error);
    });

    mAppManager.getAppName();
}

function appVersion() {
  mAppManager.getAppVersion(
    // Success function
    function(version) {
        out("Version: " + version);
    },
    // Error function
    function(err) {
        out("Error getting app version: " + err);
    });
}

function isFirstRun() {
  mAppManager.isFirstRun(
    // Success function
    function(isFirstRun) {
        out("Is First Run?... " + isFirstRun);
    },
    // Error function
    function(err) {
        out("Error getting isFirstRun: " + err);
    });
}

function setAppHasRun() {
  mAppManager.setAppHasRun(
    // Success function
    function() {
        out("Has has been mark as ran, isFirstRun will now be false");
    },
    // Error function
    function(err) {
        out("Error getting isFirstRun: " + err);
    });
}

function shouldClearCache() {
  // Identical to isFirstRun()
  mAppManager.shouldClearCache(
    // Success function
    function(isFirstRun) {
        out("Should Clear Cache?... " + isFirstRun);
    });
}

function resetShouldClearCache() {
  // Identical to setAppHasRun();
  mAppManager.shouldClearCache();
}

/********************
** Utility methods **
********************/

function out(message) {
  console.log(message);
  if(typeof(message) == "object") {
    getObject("result").innerHTML = JSON.stringify(message);
  } else {
    getObject("result").innerHTML = message;
  }
}

function getObject(name) {
  return document.getElementById(name);
}
