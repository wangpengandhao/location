let tijiao=document.getElementById('tijiao');
let mima=document.getElementById('mima');
let zhanghu=document.getElementById('zhanghu');
tijiao.onclick=function(){
	if(zhanghu.value=='zhangsan' && mima.value=='123456'){
		alert('登陆成功')
	}else{
		location.assign('chucuo.html')
	}
}




