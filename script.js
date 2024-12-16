function showOptions(product){
    const opti= document.querySelectorAll('.options');
    opti.forEach(opt=>opt.style.display='none');
    const selected= document.getElementById('options-'+ product);
    const radio = document.getElementById(product);
    radio.checked = true;
    selected.style.display='inline-block';
}

