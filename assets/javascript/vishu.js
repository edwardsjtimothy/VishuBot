$(()=> {

    //vishu wisdom
    const theBookOfVishu = ["#devlyfe", "That's a div.", "All of you look into my eyes: you can do it.", "Duuuuuude", "Are you debugging? You should be debugging.", "Have a cookie!", "Take a break and breathe for 20 seconds...", "Stand up and stretch!", "Claps!" ];

    
    //wisdom on page load
    let verseOfVishu = Math.floor(Math.random() * theBookOfVishu.length);
    let vishuSays = theBookOfVishu[verseOfVishu];

    $("#the-word-of-vishu").html(vishuSays);
    
    //click on vishu for new wisdom
    $("#real-vishu").click(()=> {
        let verseOfVishu = Math.floor(Math.random() * theBookOfVishu.length);
        let vishuSays = theBookOfVishu[verseOfVishu];
        $("#the-word-of-vishu").html("").html(vishuSays);
    });

    //give vishu one of three exciting background colors
    $(".vishu-color").click(function(){
        let vishuColor = $(this).data("color")
        $("body, html").css("background-color", vishuColor)
    })










});