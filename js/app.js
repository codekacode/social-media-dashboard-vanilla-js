const checkbox = document.querySelector('#checkbox');


if (window.matchMedia('(prefers-color-scheme: dark)')) {
  console.log()
  checkbox.setAttribute('checked', true)
}
// document.body.style.setProperty('--cardGray', 'blue')
checkbox.addEventListener('change', function(e){
  if(this.checked){
    document.body.classList.remove('is-light-mode');
    document.body.classList.add('is-dark-mode');
  } else {
    document.body.classList.remove('is-dark-mode');
    document.body.classList.add('is-light-mode');
  }
  
})