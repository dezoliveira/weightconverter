document.getElementById('output').style.visibility = 'hidden'

document.getElementById('lbsInput').addEventListener('input', function(e){
  let peso = e.target.value

  if(document.getElementById('lbsInput').value.length === 0){

    document.getElementById('output').style.visibility = 'hidden';

  }else{
    document.getElementById('output').style.visibility = 'visible'
  }

  document.getElementById('gramasOutput').textContent = (peso/0.0022046).toFixed(2)

  document.getElementById('kilosOutput').textContent = (peso/2.2046).toFixed(2)

  document.getElementById('toneladasOutput').textContent = (peso*16).toFixed(2)
})


