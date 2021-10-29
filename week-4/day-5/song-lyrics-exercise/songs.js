function handleSubmit(e) {
    e.preventDefault();

    const artistName = document.getElementById('artistName')
    const songName = document.getElementById('songName')
    
    if (artistName.value.length === 0 || songName.value.length === 0) {
        alert('Please fill out both fields before submitting')
    } else {
        fetch(`https://api.lyrics.ovh/v1/${artistName.value}/${songName.value}`)
        .then(res => res.json())
        .then(res => {
            document.getElementById('lyrics').innerText = res.lyrics
        })
    }
}