let kiroku = []
let kirokunum = -1

document.getElementById('button').onclick = function(){
  
let isnum = document.getElementById('nummode').checked;
let islist = document.getElementById('listmode').checked;
let isketa = document.getElementById('ketamode').checked;

if (isnum) {
  let max=parseInt(document.getElementById('usernum').value)
 if (!isNaN(max)) {
let random =  Math.floor(Math.random()*max)+1;
kirokunum=kirokunum+1
kiroku[kirokunum]=random

document.getElementById('text').innerHTML= random

document.getElementById('memo').innerHTML=kiroku.join('<br>')
}} else if (islist) {

let ruret = document.getElementById('ruretlist').value

  const lines = ruret.split(/\n/);
  
  let rand = Math.floor(Math.random()*lines.length)
  
  let randlist = lines[rand]
  
  kirokunum = kirokunum + 1
  kiroku[kirokunum] = randlist
 
  document.getElementById('text').innerHTML= randlist
  
  document.getElementById('memo').innerHTML=kiroku.join('<br>')
  
  }else if (isketa) {
    let max=parseInt(document.getElementById('usernum').value-1)
    
    let ketamin = 1+'0'.repeat(max)
    let ketamax = 9+'9'.repeat(max)
    let randnum = Math.floor(Math.random()*(parseInt(ketamax)-parseInt(ketamin)+1))+parseInt(ketamax);
    let randketa = randnum.toString().slice(1);
    
    kirokunum = kirokunum + 1
    kiroku[kirokunum] = randketa
    
    document.getElementById('text').innerHTML= randketa
    
    document.getElementById('memo').innerHTML=kiroku.join('<br>')
  }
};

document.getElementById('reset').onclick = function(){
  kiroku=[]
  kirokunum=-1
  document.getElementById('memo').innerHTML=kiroku.join('<br>')
}