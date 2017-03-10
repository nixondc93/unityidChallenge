$( document ).ready(function() {
    console.log( "ready!" );
    $.ajax({
    url: "https://www.random.org/integers/?num=10000&min=0&max=255&col=128&base=10&format=plain&rnd=new",
    success: success,
    error: error
    });

});

function success(data){
    data = data + " " + data;
    data = data + " " + data;
    data = data + " " + data;
    data = data + " " + data;

    data = data.split(/\s/);

    var canvas = document.createElement('canvas');
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerWidth/2;
    $('body').append(canvas);
    var ctx = canvas.getContext("2d");
    var imgData = ctx.createImageData(128, 128);
    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i+0] = parseInt(data[i]);
        imgData.data[i+1] = parseInt(data[i+1]);
        imgData.data[i+2] = parseInt(data[i+2]);
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}

function error(err){
    console.log(err)
}