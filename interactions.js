

const slides = document.querySelectorAll('.slide')
const linkicons = document.querySelectorAll('.linkicon')

let touchMove = false; // flag to track if touchmove is happening


// lookout for touchmove    
document.addEventListener('touchmove', function() {
    touchMove = true;
});


// prevent click-and-drag on touch devices
document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
});

// prevent click-and-drag on mouse devices
document.addEventListener('mousedown', function(event) {
    event.preventDefault();
});


// on hover

    // only if touchmove is not happening
    if (!touchMove) {

        slides.forEach(slide => { 

            slide.addEventListener('mouseover', function(event) {
                this.classList.add('hovered')
            });

            slide.addEventListener('mouseout', function(event) {
                this.classList.remove('hovered')
            });


            // on click or tap

            slide.addEventListener('mousedown', function() {
                this.classList.add('clicked')
            });

            slide.addEventListener('mouseup', function() {
                this.classList.remove('clicked')
            });

        });
        
    };


    linkicons.forEach(link => { 

        link.addEventListener('mouseover', function(event) {
            this.classList.add('hovered')
        });

        link.addEventListener('mouseout', function(event) {
            this.classList.remove('hovered')
        });


        // on click or tap

        link.addEventListener('mousedown', function() {
            this.classList.add('clicked')
        });

        link.addEventListener('mouseup', function() {
            this.classList.remove('clicked')
            this.classList.remove('hovered')
        });

        link.addEventListener('mouseleave', function() {
            this.classList.remove('clicked')
            this.classList.remove('hovered')
        });

        link.addEventListener('touchstart', function() {
            this.classList.add('clicked')
        });

        link.addEventListener('touchend', function() {
            this.classList.remove('clicked')
            this.classList.remove('hovered')
        });

    });
