let countnum=0

document.getElementById("add").onclick=function(){
    let count=0
  
    const display=document.getElementById('display')
    countnum=countnum+1
    
    const cot=document.createElement('div')
    cot.className='counter'
    cot.innerHTML = '<p contenteditable="true">カウンター' + countnum + '</p>' +
      '<button class="plus">+</button>' +
      '<p class="num">0</p>' +
      '<button class="minus">-</button>' +
      '<button class="delete">削除</button>';
    display.appendChild(cot)
    
    cot.querySelector('.plus').addEventListener('click',function () {
      count++
      
    this.closest('.counter').querySelector('.num').textContent=count
    })
    
    cot.querySelector('.minus').addEventListener('click', function() {
      count--
      
    this.closest('.counter').querySelector('.num').textContent=count
    })
    
    cot.querySelector('.delete').addEventListener('click', function() {
    this.closest('.counter').remove()
    })
}