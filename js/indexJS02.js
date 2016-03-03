// JavaScript Document
//左右轮播箭头的显示与隐藏
$(document).ready(function(e) {		
	//头图背景数组
	var bannerBg = new Array();
	bannerBg[0] = '.topBanerFloat01';
	bannerBg[1] = '.topBanerFloat02';
	bannerBg[2] = '.topBanerFloat03';
	bannerBg[3] = '.topBanerFloat04';
	bannerBg[4] = '.topBanerFloat05';
	//轮播Box默认显示第一个作品
	$(".slideBoxPic li").eq(0).show();
	//默认导航点的效果
	$(".hd ul li").eq(0).css({width:"30px",background:"#a7d8f6"});
	//轮播效果实现
	var indexNum=0;
	var setinter = setInterval(autoSlide,10000);
	$(".nextArr").click(function(e){
		if(indexNum==(bannerBg.length-1)){
			indexNum=0;	
		}else{
			indexNum++;	
		}
		slideBoxChange_next();
		autoStopStart();
	});
	$(".prevArr").click(function(e) {
        if(indexNum==0){
			indexNum=(bannerBg.length-1);	
		}else{
			indexNum--;	
		}
		slideBoxChange_prev();
		autoStopStart();
    });
	$(".hd ul li").click(function(e) {
        indexNum=$(this).index();
		slideBoxChange_hd();
		autoStopStart();
    });
	//头图轮播-hd
	function slideBoxChange_hd(){
		$(".slideBoxPic li").fadeOut(200);
		$(".hd ul li").css({width:"20px",background:"#fff"}).eq(indexNum).css({width:"30px",background:"#a7d8f6"});
		$(".slideBoxPic li").eq(indexNum).fadeIn(400);
		bannerBgShift();
	}
	//头图轮播-next
	function slideBoxChange_next(){
		$(".slideBoxPic li").fadeOut(200);
		$(".hd ul li").css({width:"20px",background:"#fff"}).eq(indexNum).css({width:"30px",background:"#a7d8f6"});
		$(".slideBoxPic li").eq(indexNum).show().animate({left:"900px",opacity:"0"},0).animate({left:"50px",opacity:"1"},1000);
		bannerBgShift();
	}
	//头图轮播-prev
	function slideBoxChange_prev(){
		$(".slideBoxPic li").fadeOut(200);
		$(".hd ul li").css({width:"20px",background:"#fff"}).eq(indexNum).css({width:"30px",background:"#a7d8f6"});
		$(".slideBoxPic li").eq(indexNum).show().animate({left:"-800px",opacity:"0"},0).animate({left:"50px",opacity:"1"},1000);
		bannerBgShift();
	}
	//定时自动轮播
	function autoSlide(){
		if(indexNum==bannerBg.length-1){
			indexNum=0;	
		}else{
			indexNum++;	
		}
		slideBoxChange_next();
	}
	//设置停止自动轮播与重新开始轮播
	function autoStopStart(){
		clearInterval(setinter);
		setinter = setInterval(autoSlide,10000);
	}
	//轮播箭头显示与隐藏
	$(".slideBox").hover(function(e) {
		$(".allArr").fadeIn(400);
	},function(e){
		$(".allArr").stop().fadeOut(400);
	});

	//箭头hover放大
	$(".allArr").hover(function(){
		$(this).css({width:"22px",height:"58px",top:"187px"});
		$(this).find("img").css({width:"22px",height:"58px",top:"187px"});	
	},function(){
		$(this).css({width:"20px",height:"53px",top:"190px"});
		$(this).find("img").stop().css({width:"20px",height:"53px",top:"190px"});	
	})
	
	//头图背景切换
	function bannerBgShift(){
		for(var i=0;i<bannerBg.length;i++){
			$(bannerBg[i]).stop().animate({opacity:0},2000);	
		}
		$(bannerBg[indexNum]).stop().stop().animate({opacity:1},2000);	
	}
	
	//头像效果
	$(".myPhoto").hover(function(e) {
        $(this).stop().css({top:"125px",left:"45px",width:"160px",height:"160px",borderRadius:"80px"})
    },function(e) {
        $(this).stop().css({top:"130px",left:"50px",width:"150px",height:"150px",borderRadius:"75px"})
    }).click(function(e) {
        $(".myPhoto").stop().animate({left:"41px"},100).animate({left:"47px"},100).animate({left:"43px"},50).animate({left:"46px"},40).animate({left:"45px"},30);	
    });;
	//其他作品hover效果
	$(".works ul li").hover(function(e){
		$(this).find("span").stop().fadeOut(500);
	},function(e){
		$(this).find("span").fadeIn(500);
	})
	
	$(".bottomWorksText").hover(function(e){
		$(this).stop().animate({width:"660px"},700);	
	},function(e){
		$(this).stop().animate({width:"320px"},700);	
	})
	
	$(".bottomWorksText2").hover(function(e){
		$(this).stop().animate({left:"-360px"},700);	
	},function(e){
		$(this).stop().animate({left:"0px"},700);	
	})
	
	$(".bottomWorksPic").hover(function(e){
		$(this).stop().animate({opacity:0},700);	
	},function(e){
		$(this).stop().animate({opacity:1},700);	
	})
	
	$(".bottomWorksPic2").hover(function(e){
		$(this).stop().animate({opacity:0},700);	
	},function(e){
		$(this).stop().animate({opacity:1},700);	
	})
});


	
	
	