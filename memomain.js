document.getElementById('memo').addEventListener("input",function(){
    let usermemo = document.getElementById('memo').value
    localStorage.setItem('localmemo', usermemo);
  })
  window.onload = function() {
    document.getElementById('memo').value=localStorage.getItem('localmemo')
  };
