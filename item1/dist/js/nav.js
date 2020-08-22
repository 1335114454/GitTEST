define(['jquery'], function($){
    function navMain (){
        var nav = $("#headerbox .headerbox1 .header .nav");
        var oAs = $("#headerbox .headerbox1 .header .nav").find("a");
        var logo = $("#headerbox .headerbox1 .header .logo a");
        oAs.on("mouseenter", function(){
            if($(this).index() == 0){
                $.ajax({
                    url: "../data/data.json",
                    success:function(arr){
                        var arrary = arr[1];
                        console.log(arrary);
                        let str = ``;
                        for(var i = 0; i < arrary.length;i++){
                            str += `<li><a href=""><img src="${arrary[i].img}" alt=""><span>${arrary[i].span}</span><span>${arrary[i].price}</span></a></li>`;
                        }
                        $("#headerbox #hover1").html(str)
                        tab();
                    },
                    error:function(error){
                        console.log(error);
                    }
                })
            }
            if($(this).index() == 1){
                $.ajax({
                    url: "../data/data.json",
                    success:function(arr){
                        var arrary = arr[2];
                        console.log(arrary);
                        let str = ``;
                        for(var i = 0; i < arrary.length;i++){
                            str += `<li><a href=""><img src="${arrary[i].img}" alt=""><span>${arrary[i].span}</span><span>${arrary[i].price}</span></a></li>`;
                        }
                        $("#headerbox #hover1").html(str)
                        tab();
                    },
                    error:function(error){
                        console.log(error);
                    }
                })
            }
            if($(this).index() == 2){
                $.ajax({
                    url: "../data/data.json",
                    success:function(arr){
                        var arrary = arr[3];
                        console.log(arrary);
                        let str = ``;
                        for(var i = 0; i < arrary.length;i++){
                            str += `<li><a href=""><img src="${arrary[i].img}" alt=""><span>${arrary[i].span}</span><span>${arrary[i].price}</span></a></li>`;
                        }
                        $("#headerbox #hover1").html(str)
                        tab();
                    },
                    error:function(error){
                        console.log(error);
                    }
                })
            }
            if($(this).index() == 3){
                $.ajax({
                    url: "../data/data.json",
                    success:function(arr){
                        var arrary = arr[4];
                        console.log(arrary);
                        let str = ``;
                        for(var i = 0; i < arrary.length;i++){
                            str += `<li><a href=""><img src="${arrary[i].img}" alt=""><span>${arrary[i].span}</span><span>${arrary[i].price}</span></a></li>`;
                        }
                        $("#headerbox #hover1").html(str)
                        tab();
                    },
                    error:function(error){
                        console.log(error);
                    }
                })
            }
            
                    
        })
        oAs.on("mouseleave", function(){
            tab1();
        })
        function tab(){
            $("#headerbox #hover1").css("display", 'flex');
            $("#headerbox .headerbox1").css("backgroundColor", "#fff");
            logo.css("color", "skyblue");
            $("#headerbox .headerbox1 .header").css("color", "#3C3C3C");
            oAs.css("color", "#3C3C3C");
            $("#headerbox .headerbox1 .header .search a").css("color", "#3C3C3C");
        }
        function tab1(){
            $("#headerbox #hover1").css("display", 'none');
            oAs.css("color", "white");
            $("#headerbox .headerbox1").css("backgroundColor", "rgba(0,0,0,0)");
            $("#headerbox .headerbox1 .header .logo a").css("color", "white");
            $("#headerbox .headerbox1 .header .search a").css("color", "white")
        }
       
    }
    return {
        navMain: navMain
    }
})