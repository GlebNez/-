let searchParams;

document.addEventListener('DOMContentLoaded', () => {
    searchParams = new URLSearchParams(document.location.search);
    for (let value of searchParams.values()) {
        if (value == "Алтайский край")
            document.querySelector('.locations-section > :nth-child(2)').classList.add('hidden-rel');
        else if (value == "Красноярский край")
            document.querySelector('.locations-section > :nth-child(1)').classList.add('hidden-rel');
    }
    document.querySelector('.locations-section > div:nth-child(1) > .location-list > div:nth-child(1) button').addEventListener('click', () => transferToSeatPage('1', 'Косихинский район, с. Озеро-Красилово, ул. Пушкина д.1'));
    document.querySelector('.locations-section > div:nth-child(1) > .location-list > div:nth-child(2) button').addEventListener('click', () => transferToSeatPage('2', 'г. Барнаул, Правобережный тракт 45'));
    document.querySelector('.locations-section > div:nth-child(2) button').addEventListener('click', () => transferToSeatPage('3', 'Ачинский район, с. Ключи, Пионерская долина, 5'));
});

function transferToSeatPage(location, address) {
    searchParams.append('location', location);
    searchParams.append('address', address);
    let url = document.location.origin + '/seat.html?' + searchParams.toString();
    document.location.assign(url);
}