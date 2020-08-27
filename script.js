var index = 0;
chaneImage = function () {
    var imgs = ["img/lo1.jpg","img/lo2.jpg","img/lo3.jpg"];
    document.getElementById('img').src=imgs[index];
    index++;
    if(index==3){
        index=0;
    }
}
setInterval(chaneImage,1000);