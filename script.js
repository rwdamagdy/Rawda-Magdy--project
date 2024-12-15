document.addEventListener('DOMContentLoaded', () => {
    let search = document.querySelector('.search-box');
    let searchIcon = document.querySelector('#Search-icon');

    if (search && searchIcon) {
        searchIcon.onclick = () => {
            search.classList.toggle('active');
        }
    } else {
        console.error('Element not found!');
    }
});
