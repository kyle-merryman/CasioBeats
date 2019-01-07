    
    //array to hold key presses (in order)
    const pressed = [];
    //variable holding the code
    const secretCode = `BUNGY`;
    //listen for key
    window.addEventListener('keyup', (e) => {
        console.log(e.key);
        //append key press to 'pressed' array
        pressed.push(e.key);
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
        if(pressed.join('').toUpperCase().includes(secretCode)) {
            $('kbd').removeClass('bungy');
            $('html').addClass('backwav');
            $('kbd').removeClass('start');
            $('kbd').addClass('glitch');
            $('.sound').addClass('glitch');
            console.log('UNLIMITED KEY PRESSES UNLOCKED');
            myAudio = new Audio('sounds/chariots.wav'); 
            myAudio.addEventListener('ended', function() {
              this.currentTime = 0;
              this.play();
            }, false);
            myAudio.play();
        }
        if(pressed.join('').toUpperCase().includes('AFK')) {
            if (afk) {
                afk = false;
            } else if (!afk) {
                afk = true
                yinyang();
            }
        }
        console.log(pressed);
    })

    let afk = false

    function yinyang() {
        var elem = document.createElement("img");
        /*elem.src = 'yy.png';*/
        elem.setAttribute("id", "balance");
        elem.setAttribute("src", "yy.png");
        elem.setAttribute("height", "165");
        elem.setAttribute("width", "176");
        elem.setAttribute("alt", "balance");
                
        document.getElementById("here").appendChild(elem);

        setTimeout(delYang, 100);
    }

    function delYang() {
        $('#balance').remove();
    }