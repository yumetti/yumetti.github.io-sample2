$(function(){
  $("nav").hide();
  $("header i").click(function(){
    $("nav").fadeIn();
  });
  $("nav").click(function(){
    $("nav").fadeOut();
  });
  $(window).scroll(function(){
    if($(window).scrollTop() > 600){
     $("header").css({"background-color":"#282F35"})
    }else{
     $("header").css({"background-color":"transparent"})
    }
  })
  $(".image:nth-child(2)").hover(function(){
    $(".image:nth-child(2) p").css({"color":"red"});
  },function(){
    $(".image:nth-child(2) p").css({"color":"white"});
  })
  $(".image:nth-child(3)").hover(function(){
    $(".image:nth-child(3) p").css({"color":"red"});
  },function(){
    $(".image:nth-child(3) p").css({"color":"white"});
  })
  $(".image:nth-child(1)").hover(function(){
    $(".image:nth-child(1) p").css({"color":"red"});
  },function(){
    $(".image:nth-child(1) p").css({"color":"white"});
  })
  $(function(){
    // 画像の枚数
    var count = $("#slide li").length;
  
    // 現在表示されている画像（最初は１番目の画像）
    var current = 1;
  
    // 次に表示する画像
    var next = 2;
  
    // フェードイン/アウトのインターバル（何秒ごとに画像を切り替えるか。3000ミリ秒に設定）
    var interval = 3000;
  
    // フェードイン/アウトのスピード（500ミリ秒に設定）
    var duration = 2500;
  
    // タイマー用の設定
    var timer;
  
    // １番目の写真以外は非表示
    $("#slide li:not(:first-child)").hide();
  
    // 3000ミリ秒（変数intervalの値）ごとにslideTimer()関数を実行
    timer = setInterval(slideTimer, interval);
  
    // slideTimer()関数
    function slideTimer(){
      // 現在の画像をフェードアウト
      $("#slide li:nth-child(" + current + ")").fadeOut(duration);
  
      // 次の画像をフェードイン
      $("#slide li:nth-child(" + next + ")").fadeIn(duration);
  
      // 変数currentの新しい値：変数nextの元の値
      current = next;
  
      // 変数nextの新しい値：変数currentの新しい値+1
      next = ++next;
  
      // 変数nextの値が3（画像の総数）を超える場合、1に戻す
      if(next > count){
        next = 1;
      }
  
    }
  
  });

    AOS.init()

  
});

