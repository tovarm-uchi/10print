/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

let sw = process.stdout.columns - 1
if ( sw % 2 != 0) sw = sw - 1

const p = ['═','║','╔', '╗', '╚', '╝', '╠', '╣','╦','╩','╬']
const c = ['╭','╮','╯','╰',]

const rn = max => Math.floor(Math.random()*max)

const bright = [100, 40, 30, 90]
const v = rn(8)
const b = Math.round(Math.random())
const pc = `\x1b[${bright[b] + v}m\x1b[${bright[b + 2] + v}m`
const cc = `\x1b[${bright[(b+3) % 4] + v}m\x1b[${bright[(b+5) % 4]  + v}m`

let d = 2; //delta aka how many new characters to print per line
let j = 2;

function draw () {
  setTimeout(draw, 1000)
  let out = ''
  if (j > sw || j < 2) d = -d
  j += d

  for(let i = 0; i < sw ; i++){
      if(i > (sw-j)/2 && i < ((sw-j)/2 + j)) out += pc + p[rn(p.length)]
      else out += cc + c[rn(c.length)]
  }
  console.log(out)
}

draw()
