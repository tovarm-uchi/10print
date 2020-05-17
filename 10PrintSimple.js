let sw = process.stdout.columns
if (sw % 2 == 0) sw = sw - 2
else sw = sw - 3
console.log(sw)

const pipes = ['═','║','╔', '╗', '╚', '╝', '╠', '╣','╦','╩','╬']
const curves = ['╭','╮','╯','╰',]

let d = 2; //delta aka how many new characters to print per line
let j = 2;

function draw () {
  setTimeout(draw, 1000/10)
  let output = ''
  if (j > sw || j < 2) d = -d
  j += d
  for(let i = 0; i < sw ; i++){
      leftside = (sw-j)/2
      rightside = leftside + j
      if(i > leftside && i < rightside){
          output += pipes[Math.floor(Math.random()* pipes.length)]
      } else {
          output += curves[Math.floor(Math.random() * curves.length)]
      }
  }
  console.log(output)
}

draw ()
