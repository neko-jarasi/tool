const display = document.getElementById("display")
const settime = document.getElementById('settime')

function kosin() {
  let h = Math.floor(settime.value / 3600)
  let m = Math.floor(settime.value / 60 - h * 60)
  let s = settime.value - (m * 60 + h * 3600)
  display.textContent = '' + h + ':' + String(m).padStart(2,"0") + ':' + String(s).padStart(2,"0")
}

settime.addEventListener('input', function() {
  kosin()
});

  const userh=document.getElementById('userh')
  const userm=document.getElementById('userm')
  const users=document.getElementById('users')

  function inputtime() {
    settime.value=(parseInt(userh.value)||0)*3600+(parseInt(userm.value)||0)*60+(parseInt(users.value)||0)
  }

userh.addEventListener('input', function() {
  inputtime()
  kosin()
});
userm.addEventListener('input', function() {
  inputtime()
  kosin()
});
users.addEventListener('input', function() {
  inputtime()
  kosin()
});

let count

document.getElementById('start').onclick=function(){
  if (count) clearInterval(count)
  if (settime.value==0) {
  count = setInterval(function() {
    settime.value++
    if (settime.value == 43200) {
      clearInterval(count);
    }
    kosin()
  }, 1000);
}else{
  count = setInterval(function() {
    settime.value--
    if (settime.value == 0) {
      clearInterval(count);
      alert('終わったよ')
    }
    kosin()
  }, 1000);
}
}