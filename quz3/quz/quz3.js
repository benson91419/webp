document.addEventListener('keydown', logkey);

function logkey(e)
{
    document.getElementById('in').innerHTML+=e.key;
} 