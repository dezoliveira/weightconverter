let output = document.getElementById('output')
output.style.visibility = 'hidden'

let lbsInput = document.getElementById('lbsInput')
let gramasOutput = document.getElementById('gramasOutput')
let kilosOutput = document.getElementById('kilosOutput')
let toneladasOutput = document.getElementById('toneladasOutput')

function weightConverter(e) {
  let peso = e.target.value

  if(lbsInput.value.length === 0){
    output.style.visibility = 'hidden';

  }else{
    output.style.visibility = 'visible'
  }

  weightCalculator(peso)
}

function weightCalculator(peso) {
  gramasOutput.textContent = (peso/0.0022046).toFixed(2)
  kilosOutput.textContent = (peso/2.2046).toFixed(2)
  toneladasOutput.textContent = (peso*16).toFixed(2)
}

lbsInput.addEventListener('input', weightConverter)

