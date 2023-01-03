function changeView(index) {
    var personalData = document.getElementById('personal-data');
    var contact = document.getElementById('contact');
    var experiencia = document.getElementById('experiencia');
    var calendary = document.getElementById('calendary');

    switch (index) {
        case 0:
            personalData.style.display = 'block';
            contact.style.display = 'none';
            experiencia.style.display = 'none';
            break;
        case 1:
            personalData.style.display = 'none';
            contact.style.display = 'block';
            experiencia.style.display = 'none';
            break;
        case 2:
            personalData.style.display = 'none';
            contact.style.display = 'none';
            experiencia.style.display = 'none';
            calendary.style.display = 'block';
            break;
        case 3:
            personalData.style.display = 'none';
            contact.style.display = 'none';
            experiencia.style.display = 'block';
            calendary.style.display = 'none';
            break;
    }
}