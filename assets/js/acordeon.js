
const acordeonConteudo = document.querySelectorAll('.acordeon')

acordeonConteudo.forEach(item => {
    const btn = item.querySelector('button');
    btn.addEventListener('click', () => {
        item.classList.toggle('open')
    })
})




