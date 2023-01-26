
const acordeonItens = document.querySelectorAll('.acordeon')

acordeonItens.forEach(item => {
    const btn = item.querySelector('button');
    btn.addEventListener('click', () => {
        item.classList.toggle('open')
    })
})




