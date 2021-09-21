const html_code = CodeMirror(document.querySelector('#html-code'), {
    lineNumbers: true,
    tabSize: 2,
    value:"<!-- write html here--!>",
    mode: 'xml',
    theme: 'monokai'
  });
const css_code = CodeMirror(document.querySelector('#css-code'), {
    lineNumbers: true,
    tabSize: 2,
    mode: 'css',
    value:"/* write css here */",
    theme: 'monokai'
  });
const js_code = CodeMirror(document.querySelector('#js-code'), {
    lineNumbers: true,
    tabSize: 2,
    value:"//write javascript here",
    mode:"javascript",
    theme: 'monokai'
  });


const btn = document.querySelector("#run-btn").addEventListener("click",function(){
    let htmlCode = html_code.getValue();
    let cssCode = "<style>" + css_code.getValue() + "</style>";
    let jsCode = "<script>"+js_code.getValue() + "</script>";
    let previewWindow = document.querySelector("#preview-window").contentWindow.document;

    previewWindow.open();
    previewWindow.write(htmlCode+cssCode+jsCode)
    previewWindow.close();
})


  

  
