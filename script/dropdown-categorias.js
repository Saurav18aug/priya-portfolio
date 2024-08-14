const btnCategorias = document.querySelector('.principal__dropdown__container');
const listaDropdown = document.querySelector('.principal__dropdown-lista');
listaDropdown.classList.add('displayNone');

btnCategorias.addEventListener('click', () => {
    btnCategorias.classList.toggle('dropdown-active');
    btnCategorias.style.backgroundImage = '(../img/dropdown-aberto.svg)';

    listaDropdown.classList.toggle('displayNone');
})

function categoriasAparelhosMaiores(){
    if(window.innerWidth > 830){
        listaDropdown.classList.remove('displayNone');
        btnCategorias.classList.add('displayNone')
    } 
}

categoriasAparelhosMaiores();

window.addEventListener('resize', () => {
    if(window.innerWidth > 830){
        categoriasAparelhosMaiores();
    } else {
        btnCategorias.classList.remove('displayNone')
        listaDropdown.classList.add('displayNone');
    }
})
