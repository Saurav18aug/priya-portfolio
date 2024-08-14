window.addEventListener('scroll', () => {
    let btnScroll = document.querySelector('.principal__btn-topo');

    btnScroll.classList.toggle('displayNone', window.scrollY < 550)

})