let searchParams, region, address, areas, dateTime, count, price;

document.addEventListener('DOMContentLoaded', () => {
    searchParams = new URLSearchParams(document.location.search);
    region = document.getElementById('region');
    address = document.getElementById('address');
    areas = document.getElementById('areas');
    dateTime = document.getElementById('date-time');
    count = document.getElementById('count');
    price = document.getElementById('price');
    region.textContent = searchParams.get('region');
    address.textContent = searchParams.get('address');
    areas.textContent = searchParams.get('area');
    dateTime.textContent = searchParams.get('dateAndTime').replace('T', ' ');
    count.textContent = searchParams.get('count');
    price.textContent = searchParams.get('price');
});