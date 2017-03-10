$( document ).ready(function() {
    console.log( "ready!" );



    $.ajax({
    url: "https://www.random.org/integers/?num=10000&min=0&max=255&col=128&base=10&format=plain&rnd=new",
    success: success,
    error: error
    });

});


var bmp = new Bitmap(128, 128);
    

function success(data){
    data = data.split(/\s/);
    console.log(data);
    for(var i = 0; i < 128; i++){
        for(var j = 0; j < 128; j++){
            bmp.pixel[i][j] = [];
        }
    }

    console.log(data);
}

function error(err){
    console.log(err)
}