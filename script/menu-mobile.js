let cabecalho = document.querySelector('.cabecalho');
let menuLateralMobile = document.querySelector('.cabecalho__nav');
let conteudoPag = document.querySelector('.principal');
let showMenuMobile = false;

function abrindoMenu() {
    showMenuMobile = !showMenuMobile;

    if(showMenuMobile){
        menuLateralMobile.style.marginRight = '0';
        menuLateralMobile.style.animationName = 'showMenuMobile';
        conteudoPag.style.filter = 'opacity(50%)';
    }
    else{
        menuLateralMobile.style.marginRight = '-100vw';
        menuLateralMobile.style.animationName = 'closedMenuMobile';
        conteudoPag.style.filter = '';
    }
}

function closedMenuMobile() {
    if(showMenuMobile){
        abrindoMenu();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 900 && showMenuMobile){
        abrindoMenu();
    }
})