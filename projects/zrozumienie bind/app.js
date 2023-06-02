const button = document.getElementById('button');
const button1 = document.getElementById('button1')
const container = document.getElementById('container1')

const showalert = (e)=> {
  console.log(e)
}

let counter = 0;

const bindednum = (num)=> {
console.log(num)
}



button1.addEventListener('click', ()=> {
  counter += 1
  let newbutton = document.createElement('button')
  newbutton.id = `nowy`;
  newbutton.innerHTML = `przycisk ${counter}`
  newbutton.addEventListener('click', bindednum.bind(this, counter))
  container.append(newbutton)

  

})













