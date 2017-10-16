import marked from 'marked';
import {markdown} from 'markdown';
[].forEach.call( document.querySelectorAll('[data-markdown]'), function  fn(elem){

    // // strip leading whitespace so it isn't evaluated as code
    // var text = elem.innerHTML.replace(/\n\s*\n/g, '\n'),
    //     // set indentation level so your markdown can be indented within your HTML
    //     leadingws = text.match(/^\n?(\s*)/)[1].length,
    //     regex = new RegExp('\\n?\\s{' + leadingws + '}', 'g'),
    //     md = text.replace(regex, '\n'),
    //     html = (new marked.Converter()).makeHtml(md);

    // // here, have sum HTML
    // elem.innerHTML = html;
    var text = markdown.toHTML(elem.innerHTML);
    elem.innerHTML = marked(text);

});