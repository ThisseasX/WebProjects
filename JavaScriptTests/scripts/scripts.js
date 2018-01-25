var hidden = false;

function toggleVisibility() {
  if (hidden) {
    document.getElementById("myheader").style.visibility = "visible";
  } else {
    document.getElementById("myheader").style.visibility = "hidden";
  }
  hidden = !hidden;
}

function createParagraph(value) {
  let text = document.createTextNode(value);
  let paragraph = document.createElement("p");
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
}

function case1() {
  var myvar = 'myvalue';
  (function () {
    createParagraph(myvar);
    var myvar = 'local value';
  })();
}

function case2() {
  var myothervar = 'my value';
  (function () {
    var myothervar;
    createParagraph(myothervar);
    myothervar = 'local value';
  })();
}

function booleanTest() {
  var b = new Boolean(false);
  if (b == true) {
    createParagraph("TRUE");
  } else {
    createParagraph("FALSE");
  }
}

function assignmentTest() {
  var x = 1;
  var y = 4;
  if ((x = y)) {
    createParagraph('TRUE');
  } else {
    createParagraph('FALSE');
  }
  createParagraph("x = " + x + " and y = " + y);
}