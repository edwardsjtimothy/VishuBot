$(() => {

    //vishu wisdom
    const theBookOfVishu = ["#devlyfe", "That's a div.", "All of you look into my eyes: you can do it.", "Duuuuuude", "Are you debugging? You should be debugging.", "Have a cookie!", "Take a break and breathe for 20 seconds...", "Stand up and stretch!", "Claps!"];

    //party variable
    let vishuParty = 1

    //miliseconds before vishu time
    let vishuTime = 600000;

    //random wisdom function
    const vishuSpeaketh = () => {
        let verseOfVishu = Math.floor(Math.random() * theBookOfVishu.length);
        let vishuSays = theBookOfVishu[verseOfVishu];
        $("#the-word-of-vishu").html(vishuSays);
    }

    //click on vishu for new wisdom
    $("#real-vishu").click(() => {
        vishuSpeaketh();
    });

    //give vishu one of three exciting background colors
    $(".vishu-color").click(function () {
        let vishuColor = $(this).data("color")
        $("body, html").css("background-color", vishuColor)
    });

    const claps = () => {
        $("#the-word-of-vishu").html("Ok...this is going to blow your mind!");
        $("#real-vishu").attr("src", "assets/images/vishu-so-fly.png")
        let party = setInterval(duuude, 200)
        setTimeout(() => {
            clearInterval(party);
            $("#real-vishu").attr("src", "assets/images/vishu.PNG")
            vishuSpeaketh();
        }, 20000)
    }

    const duuude = () => {
        let color = "purple";
        if (vishuParty === 1) {
            vishuParty = 2;
        } else if (vishuParty === 2) {
            color = "green";
            vishuParty = 3;
        } else {
            color = "lightskyblue";
            vishuParty = 1;
        }
        $("body, html").css("background-color", color);
    };


    //vishu time
    const itsADiv = () => setInterval(() => {
        claps();
    }, vishuTime);

    //deal with it
    itsADiv()

    //fresh wisdom on page load
    vishuSpeaketh();
});