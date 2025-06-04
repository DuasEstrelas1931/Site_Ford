let carouselArr = [];

class Carousel {
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._items = arr;
            Carousel._createCarousel();
            Carousel._updateCarousel(); // Mostra o primeiro item
            Carousel._interval = setInterval(Carousel.Next, 2000);
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }

    static _createCarousel() {
        const carousel = document.getElementById("carousel");
        const title = document.getElementById("carousel-title");

        // Monta a estrutura
               
        const carouselLink = document.createElement('a');
        carouselLink.id = 'carousel-link';
        carouselLink.href = '#';

        const carouselImage = document.createElement('img');
        carouselImage.id = 'carousel-image';
        carouselImage.src = '';
        carouselImage.alt = '';
        
        const prevButton = document.createElement('button');
        prevButton.id = 'carousel-prev';
        prevButton.textContent = '‹';
        
        const nextButton = document.createElement('button');
        nextButton.id = 'carousel-next';
        nextButton.textContent = '›';           


        const carouselText = document.createElement('h2');
        carouselText.id = 'carousel-text'
        
         // Adiciona ao carousel principal
        carouselLink.appendChild(carouselImage);
        carousel.appendChild(carouselLink);        
        carousel.appendChild(prevButton);
        carousel.appendChild(nextButton);
        title.appendChild(carouselText);
        
               
                
        //Adicionar evento nos botões
        document.getElementById('carousel-prev').addEventListener('click', Carousel.Prev);
        document.getElementById('carousel-next').addEventListener('click', Carousel.Next);
    }

    static _updateCarousel() {
        const current = Carousel._items[Carousel._sequence];
        const carouselImage = document.getElementById("carousel-image");
        const titleText = document.getElementById("carousel-text");
        const carouselLink = document.getElementById("carousel-link");

        carouselImage.src = current.image;
        carouselImage.alt = current.title;
        titleText.textContent = current.title;
        carouselLink.href = current.link;
    }


    static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel._updateCarousel();
        Carousel._resetInterval();
    }

    static Prev() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel._updateCarousel();
        Carousel._resetInterval();
    }

    static _resetInterval() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(Carousel.Next, 2000);
    }

    static Stop() {
        clearInterval(Carousel._interval);
    }
}


//inserir as imagens, texto e link
carouselArr.push(new Carousel("img/imagem_1.jpg", "Esta é a nova Ranger Ford 2022. Verifique novidades.", "lancamento.html"));
carouselArr.push(new Carousel("img/imagem_2.jpg", "Ford a nossa história", "lancamento.html"));
carouselArr.push(new Carousel("img/imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html"));

Carousel.Start(carouselArr);

