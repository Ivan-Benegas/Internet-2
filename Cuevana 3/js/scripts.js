$("#Enviar").on("click", function(event){
    event.preventDefault();
    var movTitle = $("#movTitle").val();
    var movDesc = $("#movDesc").val();
    var movCast = $("#movCast").val();
    var movGender = $("#movGender").val();
    var movImage = $("#movImage").val();
    var movScore = $("#movScore").val();

    //if(movTitle != "" && movDesc != "" && movCast != "" && movGender != "" && movImage != "" && movScore != ""){
        sendData({
            title: movTitle,
            description:movDesc,
            score:movScore,
            poster:movImage,
            cast:movCast,
            gender:movGender,
        }).then(postSuccess, postError);
        function postSuccess(response){
                $("#Hide").html("<p>" + response.msg + "</p>");
                $("#Hide").show();
                $("#Hide").addClass("Success").removeClass("Error");
            }
        function postError(err){
                $("#Hide").html("<p>Necesitas llenar los campos</p>");
                $("#Hide").show();
                $("#Hide").addClass("Error").removeClass("Success");
        }
    //}
    return false;
})


function getAllFilms(){
    $.ajax({
        url:"http://192.168.1.170:3000/peliculas",
        method:"GET"
    }).then(getSuccess, getError);
    function getSuccess(response){
            Pelis.setPeliculas(response);
            Pelis.listAll();
        }
    function getError(err){
            console.log("Error")
            $("#Mensaje1").html("<p>" + response.msg + "</p>");
            $("#Mensaje1").show();
            $("#Mensaje1").addClass("Error").removeClass("Success");
    }
}

$("#back").on("click", function(){
    Pelis.clear();
    Pelis.clearFocus();
})


var Pelis = {
    peliculas:[],

    setPeliculas:function(peliculas){
        this.peliculas = peliculas;
    },

    clear:function(){
        $("#Contenido").html("");
    },

    clearFocus:function(){
        $("#ContenidoFocus").html("").addClass("FocusOff").removeClass("FocusOn");;
        this.listAll();
    },

    listAll:function(){
        for(var i = 0; i < this.peliculas.length; i++){
            $("#Contenido").append(this.assamble(this.peliculas[i]));
        }
        $(".Peli").on("click", function () {
            var id = $(this).data('id');
            console.log(id);
            for(var i = 0; i < Pelis.peliculas.length; i++){
                if(Pelis.peliculas[i]._id == id){
                    Pelis.clear();
                    $("#ContenidoFocus").html(Pelis.assambleFocus(Pelis.peliculas[i]));
                    $("#ContenidoFocus").addClass("FocusOn").removeClass("FocusOff");
                }
            }
        })
    },

    assamble:function(peli){
        return '<li class="Peli" data-id="' + peli._id + '">' +
            '<div class="ItemPelicula">' +
                '<img class="Cartelera" src="' + peli.poster + '"/>' +
                '<p>' + peli.title + '</p>' +
                '<p>' + peli.cast + '</p>' +
                '<p>' + peli.gender + '</p>' +
                '<p>' + peli.score + '</p>' +
            '</div>' +
        '</li>'
    },

    assambleFocus:function(focus){
        return '<div id="PosterFocus">' +
                    '<img src="' + focus.poster + '"/>' +
                '</div>' +
                '<div id="InteriorFocus">' +
                    '<h3 id="TituloFocus">' + focus.title + '</h3>' +
                    '<p>' + focus.description + '</p>' +
                    '<p> <b>Actores:</b> ' + focus.cast + '</p>' +
                    '<p> <b>Genero:</b> ' + focus.gender + '</p>' +
                    '<p> <b>Puntaje:</b> <span id="PuntajeFocus"> ' + focus.score + '/10</span></p>' +
                    '<button id="back" onClick=Pelis.clearFocus()>Volver</input>'+
                '</div>'
    },
}

function sendData(params){
    return $.ajax({
           method:"POST",
           url:"http://192.168.1.170:3000/peliculas",
           data: params
     });
}
