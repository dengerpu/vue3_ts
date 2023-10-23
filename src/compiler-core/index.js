function compiler(template) {
    var ast = tokenizer(template);
    // transform(ast)
    // const code = generate(ast)
    return ast;
}
function parse(template) {
    return template;
}
function tokenizer(input) {
    var tokens = [];
    var type = '';
    var val = '';
    // 暴力循环
    for (var i = 0; i < input.length; i++) {
        var ch = input[i];
        if (ch === '<') {
            push();
            if (input[i + 1] === '/') {
                type = 'tagend'; // 结束标签
            }
            else {
                type = 'tagstart'; // 开始标签
            }
        }
        else if (ch === '>') {
            if (input[i - 1] === '=') {
                // 箭头函数
            }
            else {
                push();
                type = 'text';
                continue;
            }
        }
        else if (/[\s]/.test(ch)) { // 空格的情况
            push();
            type = 'props';
            continue;
        }
        val += ch;
    }
    return tokens;
    function push() {
        if (val) {
            if (type === 'tagstart')
                val = val.slice(1); // <div => div
            if (type === 'tagend')
                val = val.slice(2); // </div  => div
            tokens.push({
                type: type,
                val: val
            });
            val = '';
        }
    }
}
var template = "<div id=\"app\">\n  <div @click=\"()=>console.log(xx)\" :id=\"name\">{{name}}</div>\n  <h1 :name=\"title\">\u73A9\u8F6Cvue3</h1>\n  <p >\u7F16\u8BD1\u539F\u7406</p>\n</div>\n";
var renderFunction = compiler(template);
console.log(renderFunction);
