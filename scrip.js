document.addEventListener('DOMContentLoaded', function() {

    // ==================== MENÚ MÓVIL ====================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Cambiar icono de hamburguesa a X y viceversa
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                menuToggle.setAttribute('aria-label', 'Cerrar menú');
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-label', 'Abrir menú');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Cerrar menú al hacer clic en un enlace (opcional, para SPA-like feeling)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                    menuToggle.setAttribute('aria-label', 'Abrir menú');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }


    // ==================== Placeholder para Botones "Comprar" ====================
    // En Shopify, esto se manejaría con Liquid y el sistema de carrito de Shopify.
    // Esto es solo un ejemplo de cómo podrías capturar clics.
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            console.log(`Producto ${productId} - acción de comprar (placeholder)`);
            // Aquí iría la lógica para añadir al carrito en Shopify,
            // o redirigir a la página del producto.
            // Por ejemplo: window.location.href = `/products/id-${productId}`;
            alert(`Simulación: Añadiendo producto ${productId} al carrito.`);
        });
    });

    // ==================== Placeholder para Búsqueda ====================
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            // En Shopify, esto podría abrir un modal de búsqueda o redirigir a /search
            alert("Funcionalidad de búsqueda (placeholder).\nEn Shopify se integraría con el sistema de búsqueda.");
            // Ejemplo: window.location.href = '/search';
        });
    }
    
    // ==================== Smooth Scroll para anclas (opcional) ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Asegúrate de que no es solo un # vacío o un enlace del menú móvil que ya se maneja
            if (href.length > 1 && document.querySelector(href)) { 
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerOffset = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // ==================== Actualizar contador del carrito (Placeholder) ====================
    // En Shopify, esto se haría con Liquid o JS obteniendo la info del carrito.
    // function updateCartCount(count) {
    //     const cartCountElement = document.querySelector('.cart-count');
    //     if (cartCountElement) {
    //         cartCountElement.textContent = count;
    //         cartCountElement.style.display = count > 0 ? 'flex' : 'none';
    //     }
    // }
    // Ejemplo: updateCartCount(0); // Inicia en 0 o el valor real del carrito


    console.log("Lionatic Store Front-End listo! (Modo Oscuro Profesional)");
});