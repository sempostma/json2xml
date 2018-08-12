
var jsonOutput = $('#json-output');
var xmlOutput = $('#xml-output');
var jsonInput = $('#json-input');
var xmlInput = $('#xml-input');

var json2xmlGo = $('#json2xmlgo');
var xml2jsonGo = $('#xml2jsongo');

var indentation = 4;
var generateDoctype = false;
var useAttributes = true;
var declaration = false;


json2xmlGo.on('click', function (e) {
    try {
        var obj = JSON.parse(jsonInput.val());
    } catch (err) {
        console.error(err);
        alert('Error while converting JSON to XML. Malformed JSON');
    }
    try {
        xmlOutput.val(obj2xml(obj, { 
            declaration: declaration ? 'auto' : false, 
            attributes: useAttributes,
            indentation: indentation, 
            doctype: generateDoctype ? 'auto' : false }))
    } catch (err) {
        console.error(err);
        alert('Error while converting JSON to XML. Check the console for more information');
    }
});

xml2jsonGo.on('click', function (e) {
    try {
        jsonOutput.val(JSON.stringify(xml2obj(xmlInput.val())));
    } catch (err) {
        console.error(err);
        alert('Error while converting JSON to XML. Check the console for more information');
    }
});

jsonInput.on('keydown', keyHandler);
xmlInput.on('keydown', keyHandler);

function keyHandler(e) {
    if (e.keyCode == 9 || e.which == 9) {
        e.preventDefault();
        var s = this.selectionStart;
        this.value = this.value.substring(0, this.selectionStart) + "    " + this.value.substring(this.selectionEnd);
        this.selectionEnd = s + 4;
    }
}