let searchParams, map, areaName, areaPrice, areaOccupation, button;

document.addEventListener('DOMContentLoaded', () => {
    searchParams = new URLSearchParams(document.location.search);
    for (let value of searchParams.entries()) {
        if (value[0] == 'location' && value[1] == '1') {
            document.querySelector('.location-areas > :nth-child(2)').classList.add('hidden');
            document.querySelector('.location-areas > :nth-child(3)').classList.add('hidden');
        }
        else if (value[0] == 'location' && value[1] == '2') {
            document.querySelector('.location-areas > :nth-child(1)').classList.add('hidden');
            document.querySelector('.location-areas > :nth-child(3)').classList.add('hidden');
        }
        else if (value[0] == 'location' && value[1] == '3') {
            document.querySelector('.location-areas > :nth-child(1)').classList.add('hidden');
            document.querySelector('.location-areas > :nth-child(2)').classList.add('hidden');
        }
    }
    map = document.querySelector('.location-areas > div:not(.hidden) #map');
    areaName = document.querySelector('.location-areas > div:not(.hidden) #area-name');
    areaPrice = document.querySelector('.location-areas > div:not(.hidden) #area-price');
    areaOccupation = document.querySelector('.location-areas > div:not(.hidden) #area-occupation');
    button = document.querySelector('.location-areas > div:not(.hidden) #selectBtn');
    for (let area of map.children) {
        area.addEventListener('click', areaShowInfo);
    }
});

function areaShowInfo(e) {
    if (!button.onclick)
        button.onclick = transferToBookingPage;
    areaName.textContent = this.dataset.name;
    areaPrice.textContent = this.dataset.price;
    areaOccupation.textContent = this.dataset.availability;
    if (areaOccupation.textContent == 'занято')
        button.setAttribute('disabled', '');
    else
        button.removeAttribute('disabled');
    e.preventDefault();
}

function transferToBookingPage() {
    searchParams.append('area', areaName.textContent);
    searchParams.append('price', areaPrice.textContent);
    let url = document.location.origin + '/booking.html?' + searchParams.toString();
    document.location.assign(url);
}