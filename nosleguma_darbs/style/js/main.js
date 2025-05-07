document.getElementById('download-button').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'dictionary-translator-project-main.rar';
    link.download = 'dictionary-translator-project-main.rar';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('download-pdf').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'UserGuide.pdf';
    link.download = 'UserGuide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});