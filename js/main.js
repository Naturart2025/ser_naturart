(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    let images = ["img/6.png", "img/2.png", "img/3.png", "img/4.png " , "img/5.png " , "img/1.png "];
let currentIndex = 0;

function changeImage(index) {
    currentIndex = index;
    document.getElementById("productImage").src = images[currentIndex];
    updateDots();
}

function updateDots() {
    let dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Para cambiar la imagen automáticamente cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
}, 3000);

function scrollLeft() {
    const container = document.querySelector('.product-container');
    container.scrollBy({ left: -300, behavior: 'smooth' }); // Ajusta la cantidad de scroll según sea necesario
}

function scrollRight() {
    const container = document.querySelector('.product-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}
    


    // Countdown Timer
    function countDownTimer() {	
        var endTime = new Date("10 February 2025 07:59:50 GMT+00:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var dias = Math.floor(timeLeft / 86400);
        var horas = Math.floor((timeLeft - (dias * 86400)) / 3600);
        var minutos = Math.floor((timeLeft - (dias * 86400) - (horas * 3600)) / 60);
        var segundos = Math.floor((timeLeft - (dias * 86400) - (horas * 3600) - (minutos * 60)));

        if (dias < "10") {
            dias = "0" + dias;
        }
        if (horas < "10") {
            horas = "0" + horas;
        }
        if (minutos < "10") {
            minutos = "0" + minutos;
        }
        if (segundos < "10") {
            segundos = "0" + segundos;
        }

        $("#cdt-days").html(dias + "<span>Dias</span>");
        $("#cdt-hours").html(horas + "<span>Horas</span>");
        $("#cdt-minutes").html(minutos + "<span>Min</span>");
        $("#cdt-seconds").html(segundos + "<span>Seg </span>");

    }

    setInterval(function () {
        countDownTimer();
    }, 1000);


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    
    
    document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartCount = document.getElementById('cart-count');
    const sendWhatsAppButton = document.getElementById('send-whatsapp');

    // Función para agregar productos al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-name');
            const productPrice = parseInt(this.getAttribute('data-price'));

            // Agregar producto al carrito
            cart.push({ name: productName, price: productPrice });

            // Actualizar la vista del carrito
            updateCart();
        });
    });

    // Función para actualizar el carrito
    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = `$${total}`;
        cartCount.textContent = cart.length; // Actualizar el contador del carrito
    }

    // Mostrar/ocultar el carrito desplegable
    cartIcon.addEventListener('click', function (e) {
        e.preventDefault(); // Evitar que el enlace redirija
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Cerrar el carrito si se hace clic fuera de él
    document.addEventListener('click', function (e) {
        if (!cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
            cartDropdown.style.display = 'none';
        }
    });

    // Enviar mensaje a WhatsApp
    sendWhatsAppButton.addEventListener('click', function () {
        if (cart.length === 0) {
            alert('El carrito está vacío.');
            return;
        }

        let message = '¡Hola! Estoy interesado en los siguientes productos:\n';
        cart.forEach(item => {
            message += `- ${item.name}: $${item.price}\n`;
        });
        message += `Total: $${cartTotal.textContent.replace('$', '')}`;

        const url = `https://wa.me/573247779375?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});
    
})(jQuery);

