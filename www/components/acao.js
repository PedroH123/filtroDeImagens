$(document).on("click","#camera",function(){

  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('foto');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

})

