window.onload = function(){
    var myT = document.getElementById("tabH");  //选取头部列表
    var myL = myT.getElementsByTagName("li");   //头部列表的li元素
    var e = document.getElementById("tabB");    //选取内容框
    var u = e.getElementsByTagName("ul");   //内容的列表数组

    //增加索引
    for(var i = 0; i < myL.length; i++){
        myL[i].index = i;
        u[i].index = i;
        myL[i].onclick = function(){
            for(var j = 0; j < myL.length; j++){
                myL[j].setAttribute("class", "unsel");
                u[j].style.display = "none";
            }
            myL[this.index].setAttribute("class", "sel");
            u[this.index].style.display = "block";
        }
    }
}