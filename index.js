document.querySelector('#titleInput').addEventListener('input', () => {
    document.querySelector('#contentTitle p').textContent = document.querySelector('#titleInput').value;
});

document.querySelector('#footerInput').addEventListener('input', () => {
    document.querySelector('#contentFooter').textContent = document.querySelector('#footerInput').value;
});

document.querySelector('#imageUpload').addEventListener('change', (event) => {
    var selectedFile = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function (event) {
        document.querySelector('#mainImage').src = event.target.result;
    };
    reader.readAsDataURL(selectedFile);
});

function saveimg() {
    var c = document.getElementById('content');
    var t = c.getContext('2d');
    window.location.href = image;

    window.open('', document.getElementById('content').toDataURL());
};

document.querySelector('#confirm').addEventListener('click', () => {
    saveimg();
});