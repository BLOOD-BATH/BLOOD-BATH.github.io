highlightDocument(); //is this the rihgt place?

document
  .getElementsByTagName("textarea")[0]
  .addEventListener("input", highlightDocument);

document
  .getElementsByTagName("textarea")[0]
  .addEventListener("scroll", scrollDocument);

function highlightDocument() {
  document.getElementsByTagName("div")[0].innerHTML = document
    .getElementsByTagName("textarea")[0]
    .value.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/\n$/g, "\n\n")
    .replace(/\\\/\//g, "&#92;&#47;&#47;")
    .replace(/\/\/.*|\/\*([\s\S]*?)\*\//g, "<mark>$&</mark>");
  //TODO check for other injection methods
  //TODO further test wrapping and scrollign on differrent browsers
}

function scrollDocument() {
  document.getElementsByTagName("div")[0].scrollTop = document
    .getElementsByTagName("textarea")[0].scrollTop;
}

/* 
  i think that i will
  need many mroe test cases
  for this whole project
*/
