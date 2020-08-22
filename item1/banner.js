define(['jquery'], function($){
    function bannerMain(){
        var timer = null;
        var iNow = 0;
        $.ajax({
            url: "../data/data.json",
            success: function(arr){
                var arrary = arr[0];
                for (var i = 0; i< arrary.length; i++){
                    $(`<li><a href=""><img src="${arrary[i].img}" alt=""></a></li>`)
                    .appendTo("#banner .imagebox");
                }
                for (var i = 0; i< arrary.length-1; i++){
                    var node = $(`<li></li>`);
                    if(i==0){
                        node.addClass("active");
                    }
                    node.appendTo("#banner .pointbox");
                }
                
            },
            error: function(error){
                console.log(error);
            }
        })
    }
    function banner(){
        var timer = null;
        var iNow = 0;
        var oPoints = null;
        var imgs = null;
        var oUl =  $("#banner").find("ul");
        function tab(){
            if(!imgs){
                imgs = $("#banner .imagebox").find("li");
            }
            if(!oPoints){
                oPoints = $("#banner .pointbox").find('li');
            }
           
            oPoints.removeClass("active").eq(iNow).addClass("active");
            if(iNow == 8){
                oPoints.eq(0).addClass("active");
            }
            oUl.animate({left:-1440*iNow},500,function(){
                if(iNow == 8){
                    iNow = 0;
                    oUl.css("left", 0);
                }
            })
        }
        $("#banner")
            .mouseenter(function(){
                clearInterval(timer);
            })
            .mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                }, 3000)
            })
        timer = setInterval(function(){
            iNow++;
            tab();
        }, 3000);
        $("#banner .pointbox").on("click", "li", function(){
            iNow = $(this).index();
            tab();
        })
        $(".left,.right").click(function(){
            if(this.className == "left"){
                iNow--;
                if(iNow == -1){
                    iNow = 7;
                }
            }else{
                iNow++;
            }
            tab();
            return false;
        })
    }
    return {
        bannerMain: bannerMain,
        banner:banner
    }
})