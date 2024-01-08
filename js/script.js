// Dichiaro una Variabile contatore 
const {createApp } = Vue;

createApp({
    data() {
        return {
            currentSlide : 0,
            slides : [
                {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                        active : true,
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                        active : false,
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                        active : false,
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                        active : false,
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                        active : false,
                    }
                ]
        }
    },
    methods: {

        // Dichiaro una funzione che controlli l'evento del click sul bottone Avanti
        buttonForward() {
            /*
            this.slides[counter].show = false;
            this.slides[counter].active = false;

            if (counter < this.slides.length -1 ) {
                counter ++;
                this.slides[counter].show = true;
                this.slides[counter].active = true;
            } else {
                counter = 0;
                this.slides[counter].show = true;
                this.slides[counter].active = true;
            }
            */
            this.slides[this.currentSlide].active = false;

            if (this.currentSlide < this.slides.length -1 ) {
                this.currentSlide++;      
  
            } else {
                this.currentSlide = 0;
            }

            this.slides[this.currentSlide].active = true;

        },

        buttonBack() {
            this.slides[this.currentSlide].active = false;

            if ((this.currentSlide !== this.slides.length) && (this.currentSlide !== 0)) {
                this.currentSlide --;
            } else { 
               this.currentSlide = this.slides.length -1;
            }

            this.slides[this.currentSlide].active = true;
        },

        thumbShow(index) {
            this.currentSlide.active = false;

            this.currentSlide = index;

            this.currentSlide.active = true;
        }
    }

}).mount('#app')