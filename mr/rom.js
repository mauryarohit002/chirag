$(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
    $("div.bhoechie-tab-menu1>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab1>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab1>div.bhoechie-tab-content").eq(index).addClass("active");
    });
    $("div.bhoechie-tab-menu2>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab2>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab2>div.bhoechie-tab-content").eq(index).addClass("active");
    });
    $("div.bhoechie-tab-menu3>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab3>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab3>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});