// Pegar URL atual
const currentLocation = window.location.href;
const menuItems = document.querySelectorAll('.header_right a');

menuItems.forEach(item => {
    if(item.href === currentLocation) {
        item.classList.add('active');
    }
    
    // Adicionar evento de clique
    item.addEventListener('click', function() {
        menuItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});