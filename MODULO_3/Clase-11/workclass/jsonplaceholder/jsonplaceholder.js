fetch('https://jsonplaceholder.typicode.com/photos/100')
    .then(resp => resp.json())
    .then(resp => {
        const albumId = document.getElementById('albumIdTxt');
        albumId.textContent = resp.albumId;
        const id = document.getElementById('idTxt');
        id.textContent = resp.id;
        const title = document.getElementById('titleTxt');
        title.textContent = resp.title;
        const img = document.getElementById('imagen');
        img.src = resp.url;
    })
    .catch(err => console.log('Error: ', err));