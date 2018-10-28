//create window for new link
/*function openNewModalWindow() {
    window.open('https://www.youtube.com/');
}*/
function createredirectWindow(){
        $('.redirectLink')[0].click();
    }

//function for new video
var x = document.getElementById("myVideo");

function playVid() {
    x.play();
}

function pauseVid() {
    x.pause();
}

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else {
        myVideo.pause();
        setTimeout(createredirectWindow, 1000);
    }
}

$('.pauseVideo').on('click', function () {
    playPause();
    /*setTimeout(createredirectWindow, 1000);*/
});

/*$('.playVideo').on('click', function () {
    playVid();
    /!*setTimeout(createredirectWindow, 1000);*!/
});*/



/*
var reflink = document.createElement("a");
    reflink.classList.add("redirectLink");
    $('.redirectLink').attr("href",'target');
    var parrent = document.getElementsByClassName('videoblock');
    parrent.appendChild(reflink);
*/


//api google for video
/*var play;
function onYouTubePlayerAPIReady() {
    play = new YT.Player('play', {
        width: '100%',
        height: '315',
        videoId: 'xbxb4Uzqbkk', //in video
    });
    document.getElementById('playYoutube1').onclick = function() {play.playVideo();};
    //document.getElementById('pauseYoutube1').onclick = function() {play.pauseVideo();};
}


//hide play button
function hidenlement(){
    var tmpelem= document.getElementById('playYoutube1');
    tmpelem.classList.add('invisibility-animation');
}

//action to button without playing video
$('.playYoutube1').on('click', function() {
    hidenlement();
    openNewModalWindow();
    $('.videoblockWrapper').addClass("invisibility-animation");
});*/


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

window.onload = function () {

    if (window.history && window.history.pushState) {

        window.onpopstate = function () {
            var hashLocation = location.hash;
            var hashSplit = hashLocation.split("#!/");
            var hashName = hashSplit[1];
            if (hashName !== '') {
                var hash = window.location.hash;
                if (hash === '') {
                    //  alert('Back button was pressed.');
                    window.location = 'http://t.tchnl.com/c84578c7-3522-4bc3-b979-29450119b3c5?account=&campaign=&adset=&ad=&lander=&offername=';
                    return false;
                }
            }
        };
        window.history.pushState('forward', null, '#forward');
    }
    else {
        var ignoreHashChange = true;
        window.onhashchange = function () {
            if (!ignoreHashChange) {
                ignoreHashChange = true;
                var hashLocation = location.hash;
                var hashSplit = hashLocation.split("#!/");
                var hashName = hashSplit[1];

                if (hashName !== '') {
                    var hash = window.location.hash;
                    if (hash === '') {
                        //  alert('Back button was pressed.');
                        window.location = 'http://t.tchnl.com/c84578c7-3522-4bc3-b979-29450119b3c5?account=&campaign=&adset=&ad=&lander=&offername=';
                        return false;
                    }
                }
            }
            else {
                ignoreHashChange = false;
            }
        };
        window.history.pushState('forward', null, '#forward');
    }
};
var minutesleft = 5;
var secondsleft = 23;
var millisecondsleft = 10;
var finishedtext = "Last Chance!" // text that appears when the countdown reaches 0
end = new Date();
//end.setHours(end.getHours()+hoursleft);
end.setMinutes(end.getMinutes() + minutesleft);
end.setSeconds(end.getSeconds() + secondsleft);
end.setMilliseconds(end.getMilliseconds() + millisecondsleft);

function cd() {
    now = new Date();
    diff = end - now;
    diff = new Date(diff);
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    //var hr = diff.getHours();
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (msec < 10) {
        msec = "00" + msec;
    }
    else if (msec < 100) {
        msec = "0" + msec;
    }
    if (now >= end) {
        clearTimeout(timerID);
        document.getElementById("cdtime").innerHTML = finishedtext;
    }
    else {
        document.getElementById("cdtime").innerHTML = "00:" + min + ":" + sec + ":" + msec;
    }
    // you can leave out the + ":" + msec if you want...
    // If you do so, you should also change setTimeout to setTimeout("cd()",1000)
    timerID = setTimeout(cd, 45);
}

cd();
var pop_names = ["Barbara", "Rachel", "Christina", "Teresa", "Fiona", "Margaret", "Bridie", "Lynda", "Rosaleen", "Karen", "Theresa", "Brenda", "Ursula", "Geraldine", "Deirdre", "Eilish", "Mary", "Lucy"];

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function checkZero(a) {
    return a < 10 ? "0" + a : a;
}

$(document).ready(function () {

    ion.sound({
        sounds: [
            {name: "alert"}
        ],

        path: "audio/",
        preload: false,
        multiplay: false,
        volume: 1
    });

    setTimeout(
        function () {
            ion.sound.play("alert");
            $(".overlay-modal").fadeIn(250);
        },
        30000);

    $(document).on('click', '.yes_btn', function () {
        $(this).parent().parent().parent().fadeOut(250, function () {
            $(".intro-modal").hide();
        });
    });

    $(document).on('click', '.no_btn', function () {
        $(this).parent().parent().parent().fadeOut(250, function () {
            $(".intro-modal").hide();
            $(".banner").fadeIn(250);
            $(".pops").toggleClass('move-up');
        });
    });

    $(document).on('click', '.cta', function () {
        $(".overlay-modal").fadeIn(250);
    });

    var out, pops = {
        init: function () {
            setTimeout(function () {
                var rand_name = pop_names[random(0, pop_names.length - 1)];
                var text = rand_name + " just cashed $" + random(18, 163) + "." + checkZero(random(0, 99)) + " on our website!";
                $(".pops p").html(text);
                $(".pops").fadeIn(300);
                out = setTimeout(function () {
                    $(".pops").fadeOut(800);
                    pops.init();
                }, 6000);
            }, random(4000, 12000));
        }
    };

    pops.init();

});
