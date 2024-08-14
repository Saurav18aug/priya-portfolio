const modalExibindo = document.querySelector('.modal-exibindo');
const imagens = document.querySelectorAll('.principal__galeria img');
const fecharModal = document.querySelector('.modal__exibindo-container-img .modal-fechar');
const areaImg = document.querySelector('.modal__exibindo-img');
const areaTitulo = document.querySelector('.item-titulo p');
const areaCategoria = document.querySelector('.categoria');

modalExibindo.classList.add('displayNone');

imagens.forEach((imagem) => {
    let imgSelecionada = imagem.src;
    let imgTitulo = imagem.title;
    let imgCategoria = imagem.classList;

    imagem.addEventListener('click', () => {
        modalExibindo.showModal();
        modalExibindo.classList.remove('displayNone');
        areaImg.setAttribute('src', `${imgSelecionada}`);
        areaTitulo.textContent = imgTitulo;

        areaCategoria.innerHTML = "";
        imgCategoria.forEach((categoria) => {
            const categoriaEstilizado = categoria.charAt(0).toUpperCase() + categoria.slice(1);
            
            const tag = document.createElement('div');
            tag.textContent = categoriaEstilizado;
            tag.classList.add('categoria-tag');
            areaCategoria.appendChild(tag);
        })
    })
})

fecharModal.addEventListener('click', () => {
    modalExibindo.close();
    modalExibindo.classList.add('displayNone');
})

