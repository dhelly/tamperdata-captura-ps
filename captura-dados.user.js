// ==UserScript==
// @name         Captura Dados
// @namespace    http://jaqueline.dev
// @version      0.1
// @description  tente dominar o mundo!
// @author       Jaqueline Fernandes
// @match        https://*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js
// @grant        GM.setClipboard
// ==/UserScript==

//Avoid conflicts7
this.$ = this.jQuery = jQuery.noConflict(true);

(function () {
var css = [
    '#savePNG {',
    '    position: fixed;',
    '    padding: 7px;',
    '    background-color: #e2e0e0;',
    '    border: 2px solid #333;',
    '    border-radius: 6px;',
    '    z-index: 9999;',
    '    font-size: 18px;',
    '    right: 30px;',
    '    bottom: 20px;',
    '    color: #000;',
    '    width: 250px;',
    '    text-align: center;',
    '    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.3);',
    '}',
    '#savePNG button {',
    '    font-size: 18px;',
    '    border: none;',
    '    background-color: #008CBA;',
    '    color: white;',
    '    width: 100px;',
    '    cursor: pointer;',
    '}'
  ].join('\n');
  if (typeof GM_addStyle != 'undefined') {
    GM_addStyle(css);
  } else if (typeof PRO_addStyle != 'undefined') {
    PRO_addStyle(css);
  } else if (typeof addStyle != 'undefined') {
    addStyle(css);
  } else {
    var node = document.createElement('style');
    node.type = 'text/css';
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName('head');
    if (heads.length > 0) {
      heads[0].appendChild(node);
    } else {
      // no head yet, stick it whereever
      document.documentElement.appendChild(node);
    }
  }
}) ();

var html = '<div id="savePNG">' +
    '<button>Capturar</button>' +
    '<div style="float:right;font-size: 10px;" >Inútil</div>' +
    '</div>';

$('body').prepend(html);

$('#savePNG button').click(function(){
  salvar();
});

function salvar(){
    //var name = document.getElementById("txtfld__nome-input").value;
    var name = "Inútil";

    var response = `
	<table>
	  <tr>
		<th>NOME</th>
		<th>CARGO</th>
		<th>JORNADA</th>
		<th>SETOR LOTAÇÃO</th>
		<th>HORÁRIO</th>
	  </tr>
	  <tr>
		<td>${name}</td>
		<td>${name}</td>
		<td>${name}</td>
		<td>${name}</td>
		<td>${name}</td>
	  </tr>
	</table>
   `;

    var info = "{ type: 'text', mimetype: 'text/plain'}";
    GM.setClipboard(response, 'text/plain');
    alert(response);
}























