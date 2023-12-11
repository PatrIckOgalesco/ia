// Toggle info display
const infoToggle = document.querySelector('.info-toggle');
const infoMLWrapper = document.querySelector('.info-ml-wrapper');

infoToggle.addEventListener('click', function () {
    infoMLWrapper.classList.toggle('show');
});
