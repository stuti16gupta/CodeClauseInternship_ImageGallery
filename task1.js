const buttonSection = document.querySelectorAll('.filter-button button');
const filterable_cards = document.querySelectorAll('.filterable_cards .card');

const filtercards = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    filterable_cards.forEach((card) => {
        card.classList.add('hide');

        if (
            card.dataset.name === e.target.dataset.name ||
            e.target.dataset.name === 'all'
        ) {
            card.classList.remove('hide');
        }
    });
};

buttonSection.forEach((button) =>
    button.addEventListener('click', filtercards )
);