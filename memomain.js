document.getElementById('set').onclick = function() {
  let usermemo = document.getElementById('memo').value
  let usertitle = document.getElementById('title').value
  localStorage.setItem('localmemo', usermemo);
  localStorage.setItem('localtitle',usertitle)
  alert('保存しました')
};

document.getElementById('get').onclick = function() {
  document.getElementById('memo').value=localStorage.getItem('localmemo')
  document.getElementById('title').value=localStorage.getItem('localtitle')
  
  alert('タイトル:'+localStorage.getItem('localtitle')+'\n内容:'+localStorage.getItem('localmemo'))
};

document.getElementById('clear').onclick=function(){
  document.getElementById('memo').value=''
  document.getElementById('title').value=''
  localStorage.removeItem('localmemo')
  localStorage.removeItem('localtitle')
  alert('削除出来ました')
}