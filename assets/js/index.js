const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav-container');
    nav.classList.toggle('active');

}

btnMobile.addEventListener('click', toggleMenu);


//---------- |download_CV |----------
document.getElementById('cv-btn').addEventListener('click', function () {
    window.open('./assets/download/alonsoCV.pdf');
})