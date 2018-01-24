var a = false;

function toggleVisibility() {
  if (a) {
    document.getElementById("myheader").style.visibility = "visible";
  } else {
    document.getElementById("myheader").style.visibility = "hidden";
  }
  a = !a;
}

function case1() {
  var myvar = 'myvalue';
  (function () {
    document.write(myvar);
    var myvar = 'local value';
  })();
}

function case2() {
  var myothervar = 'my value';
  (function () {
    var myothervar;
    document.write(myothervar);
    myothervar = 'local value';
  })();
}