var Links={
    setColor:function(color){
        /*
        alist=document.querySelectorAll('a');
        var i=0;
        while(i<alist.length){
            alist[i].style.color=color;
            i=i+1;
        }
        아래에서 jQuery로 구현
        */
       $('a').css('color',color);//$라는 이름의 함수, $('a')는 이 웹페이지에 있는 모든 a tag를 jQuery로 제어하겠다는 뜻
    }
}
var Body={
    setColor:function(color){
        //document.querySelector('body').style.color = color;
        //아래에서 jQuery로 구현
        $('body').css('color',color);

    },
    setBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor=color;
        //아래에서 jQuery로 구현
        $('body').css('backgroundColor',color);

    },
}

function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor=color;
}
function NightDayHandler(self){
    var target=document.querySelector('body');
    if(self.value=='Night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='Day';

        Links.setColor('powderblue');
        
    }
    else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='Night';

        Links.setColor('black');
    }
}