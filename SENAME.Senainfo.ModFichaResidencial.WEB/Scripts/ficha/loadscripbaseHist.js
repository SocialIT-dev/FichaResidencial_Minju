function importarScript(nombre) {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
$(document).ready(function () {
    var d = new Date();
    importarScript("../Scripts/ficha/antecedentes_generales.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_poblacion_capacidad.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_dotacion_personal.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_infraestructura.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_seguridad.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_salud.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_educacion.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_alimentacion.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_gestion_residencia.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_comparativas.js?" + d.getTime());
    importarScript("../Scripts/ficha/respuesta_observaciones.js?" + d.getTime());
    importarScript("../Scripts/ficha/residencia1historial.js?" + d.getTime());

});

/*
NOTA: cuando se integra en SENAINFO la ruta de las librería javascript deben comenzar con:

scripts/ficha/

Y no como se utilizan en el ambiente de desarrolo local => ../Scripts/ficha/:

//DESARROLLO
    importarScript("../Scripts/ficha/antecedentes_generales.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_poblacion_capacidad.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_dotacion_personal.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_infraestructura.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_seguridad.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_salud.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_educacion.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_alimentacion.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_gestion_residencia.js?" + d.getTime());
    importarScript("../Scripts/ficha/antecedentes_comparativas.js?" + d.getTime());
    importarScript("../Scripts/ficha/residencia1historial.js?" + d.getTime());

//PRODUCCION
    importarScript("scripts/ficha/antecedentes_generales.js?" + d.getTime());
    importarScript("scripts/ficha/antecedentes_poblacion_capacidad.js?" + d.getTime());
    importarScript("scripts/ficha/antecedentes_dotacion_personal.js?" + d.getTime());
    importarScript("scripts/ficha/antecedentes_infraestructura.js?" + d.getTime());
    importarScript("scripts/ficha/antecedentes_seguridad.js?" + d.getTime());
    importarScript("scripts/ficha/antecedentes_salud.js?" + d.getTime());
    importarScript("scripts/ficha/antecedentes_educacion.js?" + d.getTime());
    importarScript("scripts/ficha/antecedentes_alimentacion.js?" + d.getTime());
    importarScript("scripts/ficha/antecedentes_gestion_residencia.js?" + d.getTime());
    importarScript("scripts/ficha/antecedentes_comparativas.js?" + d.getTime());
    importarScript("scripts/ficha/residencia1historial.js?" + d.getTime());
*/