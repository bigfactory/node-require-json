
var fs = require('fs');
var vm = require('vm');


module.exports = function (filePath) {
    var content = fs.readFileSync(filePath).toString(),
        script = '(function(){ return ' + content + '; })()';

    try {
        return vm.runInThisContext(script, filePath);
    } catch (ex) {
        ex.code = 'MODULE_PARSE_FAILED';
        throw ex;
    }
}