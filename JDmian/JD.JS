//页面加载完成之后执行
window.conload=function(){
    //搜索区块的颜色变化
    search();
};
//搜索区块的颜色变化
function search(){
    // 1、颜色随着页面的滚动逐渐加深
    //2、当我们超过轮播图的时候颜色保持不变
    //获取搜索盒子
    var searchBox=document.querySelector('.header_box');
    //获取banner盒子
    var bannerBox=document.querySelector(',banner');
    //获取高度
    var h=bannerBox.offsetHeight;
    //监听window的滚动事件
    window.onscroll=function(){
        //不断的获取离顶部的距离
        var top=document.body.scrollTop;
        var opacity=0;
        if(top<h){
            //1、颜色随着页面的滚动逐渐加深
            opacity=top/h*0.85
        }
        else{
            //2、当超过轮播图的时，颜色保持不变
            opacity=0.85
        }
        //把透明度设置上去
        searchBox.style.background="reba(201,21,35,"+opacity+")";
    }
}

var imagesA=document.getElementById("images").children;

console.log(imagesA);


//----------利用计时器间隔1s,显示1张图像，其余图像隐藏。
var currentNo=0;
function changImg(){
    //排他原理，去掉同类，突出自己。
    for(var i=0; i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
    }
     //再突出自己
    imagesA[currentNo].className="displayImg";
    //换个元素，为下一次计时器调用做准备
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    // console.log(currentNo);
}

var timer=window.setInterval(changImg,1000);

//为按钮添加鼠标移入移出暂停事件
function stopChange(){
    window.clearInterval(timer);
}
function starChange(){
     timer=window.setInterval(changImg,1000)
}

var imagesdiv=document.getElementById("images");
console.log(imagesdiv);
imagesdiv.addEventListener('mouseover',stopChange);
imagesdiv.addEventListener('mouseout',starChange);

