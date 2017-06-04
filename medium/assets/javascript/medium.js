/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function() {
  $(function() {
    //graphical items
    let reset_button = $("#reset");
    let teamone_shoot_button = $("#teamone_shoot");
    let teamtwo_shoot_button = $("#teamtwo_shoot");

    //storage items
    let num_resets = $("#num_resets");
    let teamone_numshots = $("#teamone_numshots");
    let teamone_numhits = $("#teamone_numhits");
    let teamtwo_numshots = $("#teamtwo_numshots");
    let teamtwo_numhits = $("#teamtwo_numhits");

    let body = $("body");
    let main_heading = $("#main_heading");
    let sub_heading = $("#sub_heading");
    // let myAudio = $("#myAudio");
    //jQuery equivelent to window.onload = function{}
    reset_button.click(function() {
      console.log("clicked reset button");

      //reset team 1 & 2 shots taken
      teamone_numshots.html(0);
      teamtwo_numshots.html(0);

      //reset team 1 & team 2 goals
      teamone_numhits.html(0);
      teamtwo_numhits.html(0);

      //increament number of resets
      num_resets.html(parseInt(num_resets.html()) + 1);

    })

    teamone_shoot_button.click(function() {
      console.log("clicked teamone_shoot button");

      let random_num = Math.floor(Math.random() * 10) % 2;

      if (random_num === 0) {
        //this will only happen when random number is even
        teamone_numhits.html(parseInt(teamone_numhits.html()) + 1);
        // console.log("team 1 scored");
        startCount(1);
      }

      //increament number of teamone_shoots
      teamone_numshots.html(parseInt(teamone_numshots.html()) + 1);

    })

    teamtwo_shoot_button.click(function() {
      console.log("clicked teamtwo_shoot button");

      let random_num = Math.floor(Math.random() * 10) % 2;

      if (random_num === 0) {
        //this will only happen when random number is even
        teamtwo_numhits.html(parseInt(teamtwo_numhits.html()) + 1);
        startCount(2);
      }

      //increament number of teamtwo_shoots
      teamtwo_numshots.html(parseInt(teamtwo_numshots.html()) + 1);

    })

    let counter = 0;
    var t;
    var timer_is_on = 0;
    // var audio_cheer = document.getElementById("myAudio");
    // let audio_cheer = $("#myAudio");
    let audio_cheer = new Audio("assets/audio/Vanc2.mp3");

    function startCount(team) {
      // document.getElementById("main_heading").style.color = "yellow";
      main_heading.css('color', "yellow");
      sub_heading.html("");

      //play cheering crowd
      audio_cheer.load();
      audio_cheer.play();
      //change the background
      if (team === 1) {
        // document.body.style.backgroundImage = "url('assets/images/hawks_celebrate.jpg')";
        // $('body').css('background-image', "url('assets/images/hawks_celebrate.jpg')";
        body.css('background-image', "url('assets/images/hawks_celebrate.jpg')");

      } else {
        // document.body.style.backgroundImage = "url('assets/images/team_2.jpg')";
        // $('body').css('background-image', "url('assets/images/team_2.jpg')";
        body.css('background-image', "url('assets/images/team_2.jpg')");
      }
      if (!timer_is_on) {
        timer_is_on = 1;
        celebrate(team);
      }
    }

    function stopCount() {
      clearTimeout(t);
      timer_is_on = 0;
      counter = 0;
      audio_cheer.pause();

      //reset the display
      // document.getElementById("main_heading").style.color = "white";
      main_heading.css('color', "white");
      // document.body.style.backgroundImage = "url('assets/images/hockey_game.jpg')";
      body.css('background-image', "url('assets/images/hockey_game.jpg')");
      main_heading.html("Hockey, JavaScript, and jQuery oh My!");
      sub_heading.html("...the game");
      // console.log("Leaving celebrate");
    }

    function celebrate(team_num) {
      // console.log("within celebrate");

      let scored_str = 'TEAM  ' + team_num + '  SCORED!!!';
      //if counter is odd, change text
      if ((counter % 2) !== 0) {
        main_heading.html("WOW!!!");
      } else {
        // main_heading.html() = "'TEAM ' + team_num + ' SCORED!!!'";
        main_heading.html(scored_str);
      }

      counter = counter + 1;

      //wait 1 second
      t = setTimeout(function() {
        celebrate(team_num)
      }, 1000);

      //breakout
      if (counter === 4) {
        stopCount();
      }

    }

    // document.body.style.backgroundImage = linear-gradient(to bottom left, DeepSkyBlue, Cyan, DodgeBlue);
    // document.body.style.backgroundImage = "'linear-gradient(' + 'to bottom left' + ', ' + DeepSkyBlue + ', ' + Cyan + ')'";
  })
})();
