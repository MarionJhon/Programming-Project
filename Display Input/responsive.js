responsive = () => {
    const submitBtn = document.getElementById('submitBtn');
    const closeBtn = document.getElementById('closeBtn');
    const hiddenBox = document.getElementById('hiddenBox');

    //show the hidden div or box
    submitBtn.addEventListener('click', () => {

        hiddenBox.style.display = 'block';
        setTimeout(() => {
            hiddenBox.classList.add('show');
        },50);
    })

    //close the hidden div or box
    closeBtn.addEventListener('click', () => {

        hiddenBox.style.display = 'none';
    })



}

responsive();