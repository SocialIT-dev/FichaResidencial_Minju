// botonform
$(document).ready(function () {
    $("#boton").click(function (event) {
        $("#FichaIndividualResultadosBusqueda").load('FichaIndividualResultadosBusqueda.aspx');
    });
});

// botonaction1

$(document).ready(function () {
    $("#botoninst").mouseover(function (event) {
        $("#botoninst").click();
    });
});


$(document).ready(function () {
    $("#botoninst").mouseout(function (event) {
        $("#botoninst").click();
    });
});


// botonaction1

$(document).ready(function () {
    $("#botoninst2").mouseover(function (event) {
        $("#botoninst2").click();
    });
});


$(document).ready(function () {
    $("#botoninst2").mouseout(function (event) {
        $("#botoninst2").click();
    });
});

// botonimprimir

$(document).ready(function () {
    $("#botonimprimir").mouseover(function (event) {
        $("#botonimprimir").click();
    });
});

// prueba
$('#divcaso1').click(function (e) {
    e.preventDefault();
    $("#formu").submit();
});

$(document).ready(function () {
    $("#formu").submit(function (event) {
        event.preventDefault();

        var actionFile = $(this).attr("action");

        var formValues = $(this).serialize();

        $.post(actionFile, formValues, function (data) {
            $("#agresor").html(data);
        });
    });
});
