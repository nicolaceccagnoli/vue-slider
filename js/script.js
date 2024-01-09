// Dichiaro una Variabile contatore 
const {createApp } = Vue;

createApp({
    data() {
        return {

            // Definisco la Variabile contatore delle Slide che gestirà l'indice dell' "Array-slides"
            currentSlide : 0,
            carouselForward : true,
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
            } else {
                counter = 0;
            }

            this.slides[counter].show = true;
            this.slides[counter].active = true;
            */

            //Tolgo la classe active all'immagine della thumb attualmente attiva prima del cick
            this.slides[this.currentSlide].active = false;

            // Creo una condizione per cui il Contatore delle Slide debba corrispondere alla lunghezza dell' "Array-slides"
            if (this.currentSlide < this.slides.length -1 ) {
                this.currentSlide++;      
  
            } else {
                this.currentSlide = 0;
            }
            // Assegno la classe active all'immagine della thumb cliccata
            this.slides[this.currentSlide].active = true;

        },

        // Dichiaro una funzione che controlli l'evento del click sul bottone Indietro
        buttonBack() {
            //Tolgo la classe active all'immagine della thumb attualmente attiva prima del cick
            this.slides[this.currentSlide].active = false;

            // Creo una condizione per cui il Contatore delle Slide debba corrispondere alla lunghezza dell' "Array-slides"
            if (this.currentSlide > 0) {
                this.currentSlide --;
            } else { 
               this.currentSlide = this.slides.length -1;
            }
            // Assegno la classe active all'immagine della thumb cliccata
            this.slides[this.currentSlide].active = true;
        },

        // Dichiaro una Funzione per cui al click su un'immagine della thumb poi compare sullo slider
        thumbShow(index) {

            //Tolgo la classe active all'immagine della thumb attualmente attiva prima del cick
            this.slides[this.currentSlide].active = false;

            // Faccio corrispondere il contatore delle Slide all'indice dell' "array" delle slide (usate per la  Thumbnails)
            this.currentSlide = index;

            // Assegno la classe active all'immagine della thumb cliccata
            this.slides[this.currentSlide].active = true;
        }, 

    }, mounted() {
        setInterval(this.buttonForward, 3000)
    }

}).mount('#app')