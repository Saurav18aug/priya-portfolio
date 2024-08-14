const btnAbrirInserir = document.querySelector('.principal__btn-inserir');
const modalInserindo = document.querySelector('.modal-inserindo');
const fecharModal2 = document.querySelector('.modal__inserindo-container-img .modal-fechar');


const galeria = document.querySelector('.principal__galeria');
const inputTitulo = document.querySelector('.modal__input-titulo');
const inputCategorias = document.querySelector('.modal__input-categoria');
const containerPicture = document.querySelector('.modal__picture-container');
const inputPicture = document.querySelector('.modal__picture-input');
const imgPicture = document.querySelector('.modal__picture-img');
const imgPictureTexto = "Clique para Inserir uma Imagem";
const btnInserir = document.querySelector('.modal__btn-inserir button');

modalInserindo.classList.add('displayNone');

btnAbrirInserir.addEventListener('click', () => {
    modalInserindo.showModal();
    modalInserindo.classList.remove('displayNone');
})

function fechandoModal(){
    modalInserindo.close();
    modalInserindo.classList.add('displayNone');

    imgPicture.innerHTML = imgPictureTexto;
    imgPicture.style.padding = '5%';
    imgPicture.style.paddingBottom = '25%';
    imgPicture.style.fontSize = '32px';
    containerPicture.style.height = '350px';
    inputTitulo.value = '';
    inputCategorias.value = '';
}

fecharModal2.addEventListener('click', () => {fechandoModal()})

imgPicture.innerHTML = imgPictureTexto;
let imgInserida;
inserindoImagem = inputPicture.onchange = (event) => {
    const inputTarget = event.target;
    const file = inputTarget.files[0];

    if (file) {
        const leitor = new FileReader();

        leitor.addEventListener('load', (event) => {
            const leitorTarget = event.target;
            const img = document.createElement('img');

            imgPicture.innerHTML = '';
            imgPicture.style.padding = '0';
            imgPicture.style.fontSize = '0';
            containerPicture.style.height = 'auto';
            img.src = leitorTarget.result;
            imgPicture.appendChild(img);
            imgInserida = img;

        })
        leitor.readAsDataURL(file);
    } else {
        imgPicture.innerHTML = imgPictureTexto;
    }    
}

btnInserir.addEventListener('click', () => {
    if (inputTitulo.value && inputCategorias.value && imgInserida) {
        
        galeria.appendChild(imgInserida);
        fechandoModal();

    } else {
        alert('work inserted Thanks buddy!');
    }
})