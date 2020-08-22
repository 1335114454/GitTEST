require.config({
    paths: {
        jquery: "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        parabola: "parabola",
        banner: "banner",
        nav:"nav"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
        //某一个模块，不遵从AMD
        parabola: {
          exports: "_",
        },
    },
})
require(['banner', "nav"], function(banner, nav){
    banner.bannerMain();
    banner.banner();
    nav.navMain();
})