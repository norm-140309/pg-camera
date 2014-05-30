/*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    takePicture: function() {
        navigator.camera.getPicture(function(imageURI) {
            alert(imageURI);
        },
                function(message) {
                    alert(message);
                },
                {
                    quality: 80,
                    destinationType: Camera.DestinationType.FILE_URI
                })
    }
};
 * 
 */
document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap is ready
function onDeviceReady() {
    var win = function(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    var fail = function(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var fileURL = "/sdcard/DCIM/Camera/1399744340217.jpg";
    //var fileURL = "/storage/emulated/0/Android/data/com.PhoneGapCameraApp/cache/1401420349647.jpg";

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(FileEntry.toURL(fileURL), encodeURI("http://pg-camera.net/api/upload.php"), win, fail, options);
    alert("uploading: "+fileURL);
}

