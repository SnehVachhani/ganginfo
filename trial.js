function mybabyboss() {
  const  x = document.getElementById('mylinks');
  const nv = document.getElementById("nav");
  const l1 =document.getElementById("l1");
  const l2 =document.getElementById("l2");
  if (x.style.opacity === '1') {
    l1.style.display="none";
    l2.style.display="none";
    x.style.opacity = '0';
    nv.style.backgroundColor='';
    nv.style.borderRadius='';
    nv.style.padding='';
    nv.style.width='237px';
    l1.style.cursor="default";
    l2.style.cursor="default";
  } else {
    x.style.opacity = '1';
    l1.style.display="inline-block";
    l2.style.display="inline-block";
    nv.style.backgroundColor='#66FCF1';
    nv.style.borderRadius='10px';
    nv.style.padding='1px';
    nv.style.width="100%";
    l1.style.cursor="pointer";
    l2.style.cursor="pointer";
  }
}
function home(){
	if (document.getElementById("Meh").style.display==="none") {
		document.getElementById("Meh").style.display="block";
		document.getElementById("sbtn").style.display="none";
	}		
	for(let i=0;i<=13;i++){
		document.getElementById('myUL').getElementsByTagName('li')[i].style.display = 'none';
	}
}

function Search(){{
	if (document.getElementById("Meh").style.display==="block") {
		document.getElementById("Meh").style.display="none";
	}		
	}
	if (document.getElementById("sbtn").style.display==="none") {
		document.getElementById("sbtn").style.display="block";
	}
}
function myfunction() {
  let filter; let ul; let li; let a; let i; let txtValue;
  filter = document.getElementById('myInput').value.toUpperCase();
  ul = document.getElementById('myUL');
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
	    a = li[i].getElementsByTagName('a')[0];
	    txtValue = a.textContent || a.innerText;
	    if (txtValue.toUpperCase().indexOf(filter) > -1) {
	      li[i].style.display = 'block';
	    } else {
	      li[i].style.display = 'none';
	    }
	}
}