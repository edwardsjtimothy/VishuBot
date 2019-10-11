$(()=> {
    const theBookOfVishu = ["#devlyfe", "That's a div.", "All of you look into my eyes: you can do it.", "Duuuuuude", "Are you debugging? You should be debugging.", "Have a cookie!", "Take a break and breathe for 20 seconds...", "Stand up and stretch!", "Claps!" ];

    
    let verseOfVishu = Math.floor(Math.random() * theBookOfVishu.length);
    let vishuSays = theBookOfVishu[verseOfVishu];
    
    $("#the-word-of-vishu").html(vishuSays);
    
    
    $("#real-vishu").click(()=> {
        let verseOfVishu = Math.floor(Math.random() * theBookOfVishu.length);
        let vishuSays = theBookOfVishu[verseOfVishu];
        $("#the-word-of-vishu").html("").html(vishuSays);
    });













});