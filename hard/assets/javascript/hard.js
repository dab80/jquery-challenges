/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

(function() {

  //jQuery equivelent to window.onload = function{}

  //code in here wont run until page loads
  $(function() {

    var panel_h1 = $('.large-12 .panel h1:contains("Feed Template")');
    let oddNums = /^[13579]+$/;

    panel_h1.click(function() {
      //  Any time someone clicks on the title at the top "feed template,"
      if ($('h1').css("color") !== "rgb(255, 0, 0)") {
        //  make the color of the "feed template" text change from black to red
        $('h1').css("color", "red");

        // The links on the side of the page – "your name," "section 1," "section 2," etc. –
        // hide every odd-numbered link in the menu.
        for (j = 1; j <= 9; j++) {
          let a_string = ".section h5:contains(" + j.toString() + ")";
          $(a_string).hide();
          // $(".section h5:contains('1')").hide();
          j++;
        }

        // Change every instance of the word "bacon" on the page to be "LASER VISION"
        $("p:contains('Bacon')").each(function() {
          var text = $(this).text();
          $(this).text(text.replace('Bacon', 'LASER VISION'));
        });
        // Delete the last two posts in the middle section (they have a CSS class "post"
        $('.post').slice(-2).hide();

        // Remove the images in the right column
        $('.hide-for-small p').slice(-2).hide();

        // BONUS: add a special surprise inside!
        //change left panel image
        $('.large-3 .panel a img').attr('src', 'assets/images/eric_kenobi.jpg');
        //change You Name
        $(".large-3 .panel h5 a:contains('Your Name')").html('Eric Kenobi');
        //change person imagesa to no images
        $('.post .large-2 img').attr('src', 'assets/images/no_image.jpg');
        //change background
        $('body').css('background-color', 'LimeGreen');



      } else {
        //  and then from red to black when clicked again.
        $('h1').css("color", "black");
        // The links on the side of the page – "your name," "section 1," "section 2," etc. –
        // show every odd-numbered link in the menu.
        for (j = 1; j <= 9; j++) {
          let a_string = ".section h5:contains(" + j.toString() + ")";
          $(a_string).show();
          // $(".section h5:contains('1')").hide();
          j++;
        }

        // Change every instance of the word "LASER VISION" on the page to be "Bacon"
        $("p:contains('LASER VISION')").each(function() {
          var text = $(this).text();
          $(this).text(text.replace('LASER VISION', 'Bacon'));
        });

        // Delete the last two posts in the middle section (they have a CSS class "post"
        $('.post').slice(-2).show();

        // Remove the images in the right column
        $('.hide-for-small p').slice(-2).show();

        // BONUS: add a special surprise inside!
        $('.large-3 .panel a img').attr('src', 'http://placehold.it/300x240&text=[img]');
        $(".large-3 .panel h5 a:contains('Eric Kenobi')").html('Your Name');
        //change person images back
        $('.post .large-2 img').attr('src', 'http://placehold.it/80x80&text=[img]');
        //change background
        $('body').css('background-color', 'white');
      }
    })

  })

  function showTable() {
    $('#tableDiv').show();
  }



})();
