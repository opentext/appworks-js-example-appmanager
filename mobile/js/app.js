function closeApp() {
  var appManager = new Appworks.AWAppManager(
    function(result){
      out(result);
    },
    function(error){
      out(error);
    });

  appManager.closeActiveApp();
}

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
