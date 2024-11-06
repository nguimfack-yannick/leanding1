
document.getElementById('articles').addEventListener('change', function() {
    const url = this.value; 
    if (url) {
        window.location.href = url; 
    }
});
