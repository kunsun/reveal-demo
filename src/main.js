import Reveal from 'reveal.js';

import marked from 'marked';
import hljs from 'highlight.js';


import 'lib/reveal.js/css/reveal.css';
import 'lib/reveal.js/css/theme/wx.css';
import './index.css';

function codeEditor() {
  var nodes = document.querySelectorAll("code");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].setAttribute("contenteditable", '');
  }
}

window.codeEditor = codeEditor;
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    codeEditor();
  }, 1000)
});

// hljs.initHighlightingOnLoad();


[].forEach.call(document.querySelectorAll('[data-markdown]'), function fn(elem) {
  var text = elem.innerHTML.replace(/\n\s*\n/g, '\n'),
    leadingws = text.match(/^\n?(\s*)/)[1].length,
    regex = new RegExp('\\n?\\s{' + leadingws + '}', 'g'),
    md = text.replace(regex, '\n');

  marked.setOptions({
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value;
    }
  });
  var html = marked(md);
  elem.innerHTML = html;
});

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'linear', // none/fade/slide/convex/concave/zoom
  // transforms3d: false
});