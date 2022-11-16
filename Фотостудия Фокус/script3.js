let searchParams, region, address, areas, dateTime, count, price, finalPrice;

document.addEventListener('DOMContentLoaded', () => {
    searchParams = new URLSearchParams(document.location.search);
    region = document.getElementById('region');
    address = document.getElementById('address');
    areas = document.getElementById('areas');
    dateTime = document.getElementById('date-time');
    count = document.getElementById('count');
    price = document.getElementById('price');
    finalPrice = document.getElementById('final-price');
    region.textContent = searchParams.get('region');
    address.textContent = searchParams.get('address');
    areas.textContent = searchParams.get('area');
    dateTime.textContent = searchParams.get('dateAndTime').replace('T', ' ');
    count.textContent = searchParams.get('count');
    price.textContent = searchParams.get('price');
    finalPrice.textContent = price.textContent;
});

let photographerServices, usingRequisite, printingPhotos, taxiServices;

photographerServices = document.getElementById('photographer-services');
usingRequisite = document.getElementById('requisite-services');
printingPhotos = document.getElementById('print-photos-services');
taxiServices = document.getElementById('taxi-services');

let servicesArray = [photographerServices, usingRequisite, printingPhotos, taxiServices];

for (let service of servicesArray) {
    service.addEventListener('click', () => {
        if (service.checked) {
            finalPrice.textContent = +finalPrice.textContent + +service.dataset.price;
        }
        else {
            finalPrice.textContent = +finalPrice.textContent - +service.dataset.price;
        }
    });
}