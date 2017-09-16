let shijian=document.getElementById('shijian');

let sj=setInterval(function(){
		if(shijian.innerText<=0){
			clearInterval(sj);
			location.replace('location.html');
		}
		shijian.innerText-=1;
	},1000)

