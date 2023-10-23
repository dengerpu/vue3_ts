function compiler (template: string) {
  const ast = tokenizer(template)
  // transform(ast)
  // const code = generate(ast)
  return ast
}

function parse (template: string) {
  return template
}

function tokenizer (input: string) {
  const tokens: any = []
  let type = ''
  let val = ''
  // 暴力循环
  for (let i = 0; i < input.length; i++) {
    const ch = input[i]
    if (ch === '<') {
      push()
      if (input[i + 1] === '/') {
        type = 'tagend' // 结束标签
      } else {
        type = 'tagstart' // 开始标签
      }
    } else if (ch === '>') {
      if (input[i - 1] === '=') {
        // 箭头函数
      } else {
        push()
        type = 'text'
        continue
      }
    } else if (/[\s]/.test(ch)) { // 空格的情况
      push()
      type = 'props'
      continue
    }
    val += ch
  }

  return tokens

  function push () {
    if (val) {
      if (type === 'tagstart') val = val.slice(1) // <div => div
      if (type === 'tagend') val = val.slice(2) // </div  => div
      tokens.push({
        type,
        val
      })
      val = ''
    }
  }
}

const template = `<div id="app">
  <div @click="()=>console.log(xx)" :id="name">{{name}}</div>
  <h1 :name="title">玩转vue3</h1>
  <p >编译原理</p>
</div>
`

const renderFunction = compiler(template)
console.log(renderFunction)
