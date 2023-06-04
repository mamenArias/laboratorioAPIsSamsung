if (window.File && window.FileReader && window.FileList) {
    const fileVideo = document.getElementById('fileVideo');

    fileVideo.addEventListener ("change", () => {
        const file = fileVideo.files[0];
        const ext = /(.mp4)$/i;
        if (!ext.exec(file)){
            console.log("Es correcto");
        } else {
            alert("Por favor, seleccione un tipo de archivo válido.");
            file.value='';
            return false;
        }
    } )
} else {
    alert('La API de FILE no es soportada en este navegador.');
}