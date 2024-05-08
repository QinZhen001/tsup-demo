interface Item {
  aaa: string
  bbb: number
  ccc: any[]
}

export interface Response {
  data: Item[]
  code: number
}

function one() {
  console.log('one')
}
function two() {
  console.log('two')
}
one()

async function three() {
  return "asdasd"
}


three()


export {
  one,
  two,
  three
}
