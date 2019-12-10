////++++++++++++++++++++++
//FUNCIONES ACCESO BACKEND
function GrabarAntecedentesDotacionPersonal() {
    var CodEstadoFicha = 1;

    var HorasSemDirector = $("#dotacion_004_sel_director_horas_semanales").val();
    var HorasSemAsistenteSocial = $("#dotacion_008_sel_asistente_horas_semanales").val();
    var HorasSemPsicologo = $("#dotacion_012_sel_psicologo_horas_semanales").val();
    var HorasSemEnfermero = $("#dotacion_016_sel_enfermero_horas_semanales").val();
    var HorasSemAuxiliarEnfermeria = $("#dotacion_020_sel_auxenfermero_horas_semanales").val();
    var HorasSemMedico = $("#dotacion_024_sel_medico_horas_semanales").val();
    var HorasSemPsiquiatra = $("#dotacion_028_sel_psiquiatra_horas_semanales").val();
    var HorasSemTerapeutaOcupacional = $("#dotacion_032_sel_terapeuta_ocup_horas_semanales").val();
    var HorasSemKinesiologo = $("#dotacion_036_sel_kinesiologo_horas_semanales").val();
    var HorasSemNutricionista = $("#dotacion_040_sel_nutricionista_horas_semanales").val();
    var HorasSemFonoaudiolgo = $("#dotacion_044_sel_fonoaudiologo_horas_semanales").val();
    var HorasSemProfEducFisica = $("#dotacion_048_sel_profesorEducaFisica_horas_semanales").val();
    var HorasSemPsicopedagogo = $("#dotacion_052_sel_psicopedagogo_horas_semanales").val();
    var HorasSemEducadoraParvulos = $("#dotacion_056_sel_educadoraParvulos_horas_semanales").val();
    var HorasSemEducadorTratoDirecto = $("#dotacion_060_sel_educadoraTratoDirecto_horas_semanales").val();
    var HorasSemManipuladorAlimentos = $("#dotacion_064_sel_manipuladorAlimentos_horas_semanales").val();
    var HorasSemApoyoAdm = $("#dotacion_068_sel_apoyoAdministrativo_horas_semanales").val();
    var HorasSemPersonalAseo = $("#dotacion_072_sel_personalAseo_horas_semanales").val();
    var HorasSemPersonalLavanderia = $("#dotacion_076_sel_personalLavandería_horas_semanales").val();
    var HorasSemMonitoresTalleristas = $("#dotacion_080_sel_monitoresTalleristas_horas_semanales").val();

    var HorasSemAlumnosPractica = $("#dotacion_084_sel_alumnosPractica_horas_semanales").val();
    var HorasSemApoyoVoluntario = $("#dotacion_088_sel_apoyoVoluntario_horas_semanales").val();
    var HorasSemOtros = $("#dotacion_092_sel_Otros_horas_semanales").val();

    var HorasSemLicencia = $("#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales").val();
    var HorasSemSuplenteLicencia = $("#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales").val();

    if (HorasSemDirector == "") HorasSemDirector = "0";
    if (HorasSemAsistenteSocial == "") HorasSemAsistenteSocial = "0";
    if (HorasSemPsicologo == "") HorasSemPsicologo = "0";
    if (HorasSemEnfermero == "") HorasSemEnfermero = "0";
    if (HorasSemAuxiliarEnfermeria == "") HorasSemAuxiliarEnfermeria = "0";
    if (HorasSemMedico == "") HorasSemMedico = "0";
    if (HorasSemPsiquiatra == "") HorasSemPsiquiatra = "0";
    if (HorasSemTerapeutaOcupacional == "") HorasSemTerapeutaOcupacional = "0";
    if (HorasSemKinesiologo == "") HorasSemKinesiologo = "0";
    if (HorasSemNutricionista == "") HorasSemNutricionista = "0";
    if (HorasSemFonoaudiolgo == "") HorasSemFonoaudiolgo = "0";
    if (HorasSemProfEducFisica == "") HorasSemProfEducFisica = "0";
    if (HorasSemPsicopedagogo == "") HorasSemPsicopedagogo = "0";
    if (HorasSemEducadoraParvulos == "") HorasSemEducadoraParvulos = "0";
    if (HorasSemEducadorTratoDirecto == "") HorasSemEducadorTratoDirecto = "0";
    if (HorasSemManipuladorAlimentos == "") HorasSemManipuladorAlimentos = "0";
    if (HorasSemApoyoAdm == "") HorasSemApoyoAdm = "0";
    if (HorasSemPersonalAseo == "") HorasSemPersonalAseo = "0";
    if (HorasSemPersonalLavanderia == "") HorasSemPersonalLavanderia = "0";
    if (HorasSemMonitoresTalleristas == "") HorasSemMonitoresTalleristas = "0";
    if (HorasSemAlumnosPractica == "") HorasSemAlumnosPractica = "0";
    if (HorasSemApoyoVoluntario == "") HorasSemApoyoVoluntario = "0";
    if (HorasSemOtros == "") HorasSemOtros = "0";
    if (HorasSemLicencia == "") HorasSemLicencia = "0";
    if (HorasSemSuplenteLicencia == "") HorasSemSuplenteLicencia = "0";

    var CodProyecto = $("#general_001_sel_proyecto").val();
    var CodFicha_ = CodFicha;
    var observacionesDotacion = replaceAll(EliminaEspacios(document.getElementById("dotacion_101_Observaciones").value), "'", "");
    var glsEspecificaciones = "";

    if (($("#dotacion_082_sel_alumnosPractica_cantidad").val() != "0" || $("#dotacion_086_sel_apoyoVoluntario_cantidad").val() != "0" || $("#dotacion_090_sel_Otros_cantidad").val() != "0") && observacionesDotacion == "") {
        if ($("#dotacion_082_sel_alumnosPractica_cantidad").val() != "0") glsEspecificaciones = "alumnos en práctica";

        if ($("#dotacion_086_sel_apoyoVoluntario_cantidad").val() != "0") {
            if (glsEspecificaciones != "" && $("#dotacion_090_sel_Otros_cantidad").val() != "0") glsEspecificaciones = glsEspecificaciones + ", ";
            if (glsEspecificaciones != "" && $("#dotacion_090_sel_Otros_cantidad").val() == "0") glsEspecificaciones = glsEspecificaciones + " y ";
            glsEspecificaciones = glsEspecificaciones + "apoyo voluntario";
        }
        if ($("#dotacion_090_sel_Otros_cantidad").val() != "0") {
            if (glsEspecificaciones != "") glsEspecificaciones = glsEspecificaciones + " y ";
            glsEspecificaciones = glsEspecificaciones + "otros";
        }
               
        MensajeINFO("<p style='font-size:12px;'>Ha indicado dotación del tipo: " + glsEspecificaciones + ", por lo tanto, debe incorporar las especificaciones correspondientes en las observaciones de esta sección.</p>");
        ActivarDesactivarBotonesGrabar(3, false);
        return;
    }

    var dotacion_002_sel_director_cantidad_ = "0";
    var dotacion_006_sel_asistente_cantidad_ = "0";
    var dotacion_010_sel_psicologo_cantidad_ = "0";
    var dotacion_014_sel_enfermero_cantidad_ = "0";
    var dotacion_018_sel_auxenfermero_cantidad_ = "0";
    var dotacion_022_sel_medico_cantidad_ = "0";
    var dotacion_026_sel_psiquiatra_cantidad_ = "0";
    var dotacion_030_sel_terapeuta_ocup_cantidad_ = "0";
    var dotacion_034_sel_kinesiologo_cantidad_ = "0";
    var dotacion_038_sel_nutricionista_cantidad_ = "0";
    var dotacion_042_sel_fonoaudiologo_cantidad_ = "0";
    var dotacion_046_sel_profesorEducaFisica_cantidad_ = "0";
    var dotacion_050_sel_psicopedagogo_cantidad_ = "0";
    var dotacion_054_sel_educadoraParvulos_cantidad_ = "0";
    var dotacion_058_sel_educadoraTratoDirecto_cantidad_ = "0";
    var dotacion_062_sel_manipuladorAlimentos_cantidad_ = "0";
    var dotacion_066_sel_apoyoAdministrativo_cantidad_ = "0";
    var dotacion_070_sel_personalAseo_cantidad_ = "0";
    var dotacion_074_sel_personalLavandería_cantidad_ = "0";
    var dotacion_078_sel_monitoresTalleristas_cantidad_ = "0";
    var dotacion_082_sel_alumnosPractica_cantidad_ = "0";
    var dotacion_086_sel_apoyoVoluntario_cantidad_ = "0";
    var dotacion_090_sel_Otros_cantidad_ = "0";
    var dotacion_094_sel_PersonalLicenciaMedica_cantidad_ = "0";
    var dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_ = "0"; 


    if( $("#dotacion_002_sel_director_cantidad").val() != "") dotacion_002_sel_director_cantidad_=$("#dotacion_002_sel_director_cantidad").val();
    if ($("#dotacion_006_sel_asistente_cantidad").val() != "") dotacion_006_sel_asistente_cantidad_=$("#dotacion_006_sel_asistente_cantidad").val();
    if ($("#dotacion_010_sel_psicologo_cantidad").val() != "") dotacion_010_sel_psicologo_cantidad_=$("#dotacion_010_sel_psicologo_cantidad").val();
    if ($("#dotacion_014_sel_enfermero_cantidad").val() != "") dotacion_014_sel_enfermero_cantidad_=$("#dotacion_014_sel_enfermero_cantidad").val()
    if ($("#dotacion_018_sel_auxenfermero_cantidad").val() != "") dotacion_018_sel_auxenfermero_cantidad_=$("#dotacion_018_sel_auxenfermero_cantidad").val();
    if ($("#dotacion_022_sel_medico_cantidad").val() != "") dotacion_022_sel_medico_cantidad_=$("#dotacion_022_sel_medico_cantidad").val();
    if ($("#dotacion_026_sel_psiquiatra_cantidad").val() != "") dotacion_026_sel_psiquiatra_cantidad_=$("#dotacion_026_sel_psiquiatra_cantidad").val();
    if ($("#dotacion_030_sel_terapeuta_ocup_cantidad").val() != "") dotacion_030_sel_terapeuta_ocup_cantidad_=$("#dotacion_030_sel_terapeuta_ocup_cantidad").val();
    if ($("#dotacion_034_sel_kinesiologo_cantidad").val() != "") dotacion_034_sel_kinesiologo_cantidad_=$("#dotacion_034_sel_kinesiologo_cantidad").val();
    if ($("#dotacion_038_sel_nutricionista_cantidad").val() != "") dotacion_038_sel_nutricionista_cantidad_=$("#dotacion_038_sel_nutricionista_cantidad").val();
    if ($("#dotacion_042_sel_fonoaudiologo_cantidad").val() != "") dotacion_042_sel_fonoaudiologo_cantidad_=$("#dotacion_042_sel_fonoaudiologo_cantidad").val();
    if ($("#dotacion_046_sel_profesorEducaFisica_cantidad").val() != "") dotacion_046_sel_profesorEducaFisica_cantidad_=$("#dotacion_046_sel_profesorEducaFisica_cantidad").val();
    if ($("#dotacion_050_sel_psicopedagogo_cantidad").val() != "") dotacion_050_sel_psicopedagogo_cantidad_=$("#dotacion_050_sel_psicopedagogo_cantidad").val();
    if ($("#dotacion_054_sel_educadoraParvulos_cantidad").val() != "") dotacion_054_sel_educadoraParvulos_cantidad_=$("#dotacion_054_sel_educadoraParvulos_cantidad").val();
    if ($("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val() != "") dotacion_058_sel_educadoraTratoDirecto_cantidad_ = $("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val();
    if( $("#dotacion_062_sel_manipuladorAlimentos_cantidad").val() != "") dotacion_062_sel_manipuladorAlimentos_cantidad_=$("#dotacion_062_sel_manipuladorAlimentos_cantidad").val();
    if( $("#dotacion_066_sel_apoyoAdministrativo_cantidad").val() != "") dotacion_066_sel_apoyoAdministrativo_cantidad_=$("#dotacion_066_sel_apoyoAdministrativo_cantidad").val();
    if( $("#dotacion_070_sel_personalAseo_cantidad").val() != "") dotacion_070_sel_personalAseo_cantidad_=$("#dotacion_070_sel_personalAseo_cantidad").val();
    if( $("#dotacion_074_sel_personalLavandería_cantidad").val() != "") dotacion_074_sel_personalLavandería_cantidad_=$("#dotacion_074_sel_personalLavandería_cantidad").val();
    if( $("#dotacion_078_sel_monitoresTalleristas_cantidad").val() != "") dotacion_078_sel_monitoresTalleristas_cantidad_=$("#dotacion_078_sel_monitoresTalleristas_cantidad").val();
    if( $("#dotacion_082_sel_alumnosPractica_cantidad").val() != "") dotacion_082_sel_alumnosPractica_cantidad_=$("#dotacion_082_sel_alumnosPractica_cantidad").val();
    if( $("#dotacion_086_sel_apoyoVoluntario_cantidad").val() != "") dotacion_086_sel_apoyoVoluntario_cantidad_=$("#dotacion_086_sel_apoyoVoluntario_cantidad").val();
    if( $("#dotacion_090_sel_Otros_cantidad").val() != "") dotacion_090_sel_Otros_cantidad_=$("#dotacion_090_sel_Otros_cantidad").val();
    if( $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val() != "") dotacion_094_sel_PersonalLicenciaMedica_cantidad_=$("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val();
    if( $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val() != "") dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_=$("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val();


    var dataParametros =
        "{" +
        "'CodProyecto': '" + CodProyecto + "'," +
        "'CodFicha': '" + CodFicha_ + "'," +
        "'IdUsuarioActualizacion': '" + IdUsuarioActualizacion + "'," +
        "'CodEstadoFicha': '" + CodEstadoFicha + "'," +

        "'CantidadDirector': '" + dotacion_002_sel_director_cantidad_ + "'," +
        "'CodJornadaDirector': '" + $("#dotacion_003_sel_director_tipo_jornada").val() + "'," +
        "'HorasSemDirector': '" + HorasSemDirector + "'," +

        "'CantidadAsistenteSocial': '" + dotacion_006_sel_asistente_cantidad_ + "'," +
        "'CodJornadaAsistenteSocial': '" + $("#dotacion_007_sel_asistente_tipo_jornada").val() + "'," +
        "'HorasSemAsistenteSocial': '" + HorasSemAsistenteSocial + "'," +

        "'CantidadPsicologo': '" + dotacion_010_sel_psicologo_cantidad_ + "'," +
        "'CodJornadaPsicologo': '" + $("#dotacion_011_sel_psicologo_tipo_jornada").val() + "'," +
        "'HorasSemPsicologo': '" + HorasSemPsicologo + "'," +

        "'CantidadEnfermero': '" + dotacion_014_sel_enfermero_cantidad_ + "'," +
        "'CodJornadaEnfermero': '" + $("#dotacion_015_sel_enfermero_tipo_jornada").val() + "'," +
        "'HorasSemEnfermero': '" + HorasSemEnfermero + "'," +

        "'CantidadAuxiliarEnfermeria': '" + dotacion_018_sel_auxenfermero_cantidad_ + "'," +
        "'CodJornadaAuxiliarEnfermeria': '" + $("#dotacion_019_sel_auxenfermero_tipo_jornada").val() + "'," +
        "'HorasSemAuxiliarEnfermeria': '" + HorasSemAuxiliarEnfermeria + "'," +

        "'CantidadMedico': '" + dotacion_022_sel_medico_cantidad_ + "'," +
        "'CodJornadaMedico': '" + $("#dotacion_023_sel_medico_tipo_jornada").val() + "'," +
        "'HorasSemMedico': '" + HorasSemMedico + "'," +

        "'CantidadPsiquiatra': '" + dotacion_026_sel_psiquiatra_cantidad_ + "'," +
        "'CodJornadaPsiquiatra': '" + $("#dotacion_027_sel_psiquiatra_tipo_jornada").val() + "'," +
        "'HorasSemPsiquiatra': '" + HorasSemPsiquiatra + "'," +

        "'CantidadTerapeutaOcupacional': '" + dotacion_030_sel_terapeuta_ocup_cantidad_ + "'," +
        "'CodJornadaTerapeutaOcupacional': '" + $("#dotacion_031_sel_terapeuta_ocup_tipo_jornada").val() + "'," +
        "'HorasSemTerapeutaOcupacional': '" + HorasSemTerapeutaOcupacional + "'," +

        "'CantidadKinesiolgo': '" + dotacion_034_sel_kinesiologo_cantidad_ + "'," +
        "'CodJornadaKinesiologo': '" + $("#dotacion_035_sel_kinesiologo_tipo_jornada").val() + "'," +
        "'HorasSemKinesiologo': '" + HorasSemKinesiologo + "'," +

        "'CantidadNutricionista': '" + dotacion_038_sel_nutricionista_cantidad_ + "'," +
        "'CodJornadaNutricionista': '" + $("#dotacion_039_sel_nutricionista_tipo_jornada").val() + "'," +
        "'HorasSemNutricionista': '" + HorasSemNutricionista + "'," +

        "'CantidadFonoaudiologo': '" + dotacion_042_sel_fonoaudiologo_cantidad_ + "'," +
        "'CodJornadaFonoaudiologo': '" + $("#dotacion_043_sel_fonoaudiologo_tipo_jornada").val() + "'," +
        "'HorasSemFonoaudiolgo': '" + HorasSemFonoaudiolgo + "'," +

        "'CantidadProfEducFisica': '" + dotacion_046_sel_profesorEducaFisica_cantidad_ + "'," +
        "'CodJornadaProfEducFisica': '" + $("#dotacion_047_sel_profesorEducaFisica_tipo_jornada").val() + "'," +
        "'HorasSemProfEducFisica': '" + HorasSemProfEducFisica + "'," +

        "'CantidadPsicopedagogo': '" + dotacion_050_sel_psicopedagogo_cantidad_ + "'," +
        "'CodJornadaPsicopedagogo': '" + $("#dotacion_051_sel_psicopedagogo_tipo_jornada").val() + "'," +
        "'HorasSemPsicopedagogo': '" + HorasSemPsicopedagogo + "'," +

        "'CantidadEducadoraParvulos': '" + dotacion_054_sel_educadoraParvulos_cantidad_ + "'," +
        "'CodJornadaEducadoraParvulos': '" + $("#dotacion_055_sel_educadoraParvulos_tipo_jornada").val() + "'," +
        "'HorasSemEducadoraParvulos': '" + HorasSemEducadoraParvulos + "'," +

        "'CantidadEducadorTratoDirecto': '" + dotacion_058_sel_educadoraTratoDirecto_cantidad_ + "'," +
        "'CodJornadaEducadorTratoDirecto': '" + $("#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada").val() + "'," +
        "'HorasSemEducadorTratoDirecto': '" + HorasSemEducadorTratoDirecto + "'," +

        "'CantidadManipuladorAlimentos': '" + dotacion_062_sel_manipuladorAlimentos_cantidad_ + "'," +
        "'CodJornadaManipuladorAlimentos': '" + $("#dotacion_063_sel_manipuladorAlimentos_tipo_jornada").val() + "'," +
        "'HorasSemManipuladorAlimentos': '" + HorasSemManipuladorAlimentos + "'," +

        "'CantidadApoyoAdm': '" + dotacion_066_sel_apoyoAdministrativo_cantidad_ + "'," +
        "'CodJornadaApoyoAdm': '" + $("#dotacion_067_sel_apoyoAdministrativo_tipo_jornada").val() + "'," +
        "'HorasSemApoyoAdm': '" + HorasSemApoyoAdm + "'," +

        "'CantidadPersonalAseo': '" + dotacion_070_sel_personalAseo_cantidad_ + "'," +
        "'CodJornadaPersonalAseo': '" + $("#dotacion_071_sel_personalAseo_tipo_jornada").val() + "'," +
        "'HorasSemPersonalAseo': '" + HorasSemPersonalAseo + "'," +

        "'CantidadPersonalLavanderia': '" + dotacion_074_sel_personalLavandería_cantidad_ + "'," +
        "'CodJornadaPersonalLavanderia': '" + $("#dotacion_075_sel_personalLavandería_tipo_joranada").val() + "'," +
        "'HorasSemPersonalLavanderia': '" + HorasSemPersonalLavanderia + "'," +

        "'CantidadMonitoresTalleristas': '" + dotacion_078_sel_monitoresTalleristas_cantidad_ + "'," +
        "'CodJornadaMonitoresTalleristas': '" + $("#dotacion_079_sel_monitoresTalleristas_tipo_jornada").val() + "'," +
        "'HorasSemMonitoresTalleristas': '" + HorasSemMonitoresTalleristas + "'," +

        "'CantidadAlumnosPractica': '" + dotacion_082_sel_alumnosPractica_cantidad_ + "'," +
        "'CodJornadaAlumnosPractica': '" + $("#dotacion_083_sel_alumnosPractica_tipo_jornada").val() + "'," +
        "'HorasSemAlumnosPractica': '" + HorasSemAlumnosPractica + "'," +

        "'CantidadApoyoVoluntario': '" + dotacion_086_sel_apoyoVoluntario_cantidad_ + "'," +
        "'CodJornadaApoyoVoluntario': '" + $("#dotacion_087_sel_apoyoVoluntario_tipo_jornada").val() + "'," +
        "'HorasSemApoyoVoluntario': '" + HorasSemApoyoVoluntario + "'," +

        "'CantidadOtros': '" + dotacion_090_sel_Otros_cantidad_ + "'," +
        "'CodJornadaOtros': '" + $("#dotacion_091_sel_Otros_tipo_jornada").val() + "'," +
        "'HorasSemOtros': '" + HorasSemOtros + "'," +

        "'CantidadLicencia': '" + dotacion_094_sel_PersonalLicenciaMedica_cantidad_ + "'," +
        "'CodJornadaLicencia': '" + $("#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada").val() + "'," +
        "'HorasSemLicencia': '" + HorasSemLicencia + "'," +

        "'CantidadSuplenteLicencia': '" + dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_ + "'," +
        "'CodJornadaSuplenteLicencia': '" + $("#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada").val() + "'," +
        "'HorasSemSuplenteLicencia': '" + HorasSemSuplenteLicencia + "'," +

        "'Observaciones': '" + observacionesDotacion + "'"+
        "}";

    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/GrabarAntecedentesDotacionPersonal",
        data: dataParametros,
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {

        $.each(r.d,
            function () {
                var strError = "";
                if (this.REGISTRO_ACTUALIZADO != -1 && this.REGISTRO_ACTUALIZADO != null) {
                    //alert(this.REGISTRO_ACTUALIZADO + "-->" + this.ETAPAS_PROCESADAS);

                    MessageSucess("Se ha registrado exitosamente los datos de Antecedentes de Dotacion de Personal.");
                    CodFicha = this.REGISTRO_ACTUALIZADO;
                    document.getElementById("folio_pendiente").innerHTML = "FOLIO FICHA PENDIENTE: " + CodFicha;

                    GrabarFechaAplicacionFicha();
                }
                else {
                    if (this.ERROR_MESSAGE_ != null) {
                        strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.ERROR_MESSAGE_ + "</td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>PROCEDIMIENTO ALMACENADO: </b>" + this.ERROR_PROCEDURE_ + "</td></tr>" +
                                    "</table>";
                        strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");
                        MensajeERROR_App_Critico(strError);
                    }
                    else {
                        strError = "<table style='width:600px;'>" +
                                    "<tr><td style='text-align:left;font-size:14px;'>Ha sucedido un error:<br /></td></tr>" +
                                    "<tr><td class='ajustar' style='text-align:left;font-size:14px;width: 555px;'><br /><b>MENSAJE: </b>" + this.error + "</td></tr>" +
                                    "</table>";
                        strError = replaceAll(replaceAll(strError, "\n", ""), "\r", "");
                        MensajeERROR_App_Critico2(strError);
                    }
                }
                ActivarDesactivarBotonesGrabar(3, false);
            }
        );

    });
}
function ObtenerAntecedentesDotacionPersonal(CodFicha) {
    $("#labelCaracteres_ObsDotacion").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesDotacionPersonal",
        data: "{'CodFicha': '" + CodFicha + "'}",
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        $.each(r.d,
            function () {
                //cantidad dotacion: 25
                $("#dotacion_002_sel_director_cantidad").val(this.CantidadDirector);
                $("#dotacion_006_sel_asistente_cantidad").val(this.CantidadAsistenteSocial);
                $("#dotacion_010_sel_psicologo_cantidad").val(this.CantidadPsicologo);
                $("#dotacion_014_sel_enfermero_cantidad").val(this.CantidadEnfermero);
                $("#dotacion_018_sel_auxenfermero_cantidad").val(this.CantidadAuxiliarEnfermeria);
                $("#dotacion_022_sel_medico_cantidad").val(this.CantidadMedico);
                $("#dotacion_026_sel_psiquiatra_cantidad").val(this.CantidadPsiquiatra);
                $("#dotacion_030_sel_terapeuta_ocup_cantidad").val(this.CantidadTerapeutaOcupacional);
                $("#dotacion_034_sel_kinesiologo_cantidad").val(this.CantidadKinesiolgo);
                $("#dotacion_038_sel_nutricionista_cantidad").val(this.CantidadNutricionista);
                $("#dotacion_042_sel_fonoaudiologo_cantidad").val(this.CantidadFonoaudiologo);
                $("#dotacion_046_sel_profesorEducaFisica_cantidad").val(this.CantidadProfEducFisica);
                $("#dotacion_050_sel_psicopedagogo_cantidad").val(this.CantidadPsicopedagogo);
                $("#dotacion_054_sel_educadoraParvulos_cantidad").val(this.CantidadEducadoraParvulos);
                $("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val(this.CantidadEducadorTratoDirecto);
                $("#dotacion_062_sel_manipuladorAlimentos_cantidad").val(this.CantidadManipuladorAlimentos);
                $("#dotacion_066_sel_apoyoAdministrativo_cantidad").val(this.CantidadApoyoAdm);
                $("#dotacion_070_sel_personalAseo_cantidad").val(this.CantidadPersonalAseo);
                $("#dotacion_074_sel_personalLavandería_cantidad").val(this.CantidadPersonalLavanderia);
                $("#dotacion_078_sel_monitoresTalleristas_cantidad").val(this.CantidadMonitoresTalleristas);
                $("#dotacion_082_sel_alumnosPractica_cantidad").val(this.CantidadAlumnosPractica);
                $("#dotacion_086_sel_apoyoVoluntario_cantidad").val(this.CantidadApoyoVoluntario);
                $("#dotacion_090_sel_Otros_cantidad").val(this.CantidadOtros);
                $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val(this.CantidadLicencia);
                $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val(this.CantidadSuplenteLicencia);

                //horas_semanales: 25
                $("#dotacion_004_sel_director_horas_semanales").val(this.HorasSemDirector);
                $("#dotacion_008_sel_asistente_horas_semanales").val(this.HorasSemAsistenteSocial);
                $("#dotacion_012_sel_psicologo_horas_semanales").val(this.HorasSemPsicologo);
                $("#dotacion_016_sel_enfermero_horas_semanales").val(this.HorasSemEnfermero);
                $("#dotacion_020_sel_auxenfermero_horas_semanales").val(this.HorasSemAuxiliarEnfermeria);
                $("#dotacion_024_sel_medico_horas_semanales").val(this.HorasSemMedico);
                $("#dotacion_028_sel_psiquiatra_horas_semanales").val(this.HorasSemPsiquiatra);
                $("#dotacion_032_sel_terapeuta_ocup_horas_semanales").val(this.HorasSemTerapeutaOcupacional);
                $("#dotacion_036_sel_kinesiologo_horas_semanales").val(this.HorasSemKinesiologo);
                $("#dotacion_040_sel_nutricionista_horas_semanales").val(this.HorasSemNutricionista);
                $("#dotacion_044_sel_fonoaudiologo_horas_semanales").val(this.HorasSemFonoaudiolgo);
                $("#dotacion_048_sel_profesorEducaFisica_horas_semanales").val(this.HorasSemProfEducFisica);
                $("#dotacion_052_sel_psicopedagogo_horas_semanales").val(this.HorasSemPsicopedagogo);
                $("#dotacion_056_sel_educadoraParvulos_horas_semanales").val(this.HorasSemEducadoraParvulos);
                $("#dotacion_060_sel_educadoraTratoDirecto_horas_semanales").val(this.HorasSemEducadorTratoDirecto);
                $("#dotacion_064_sel_manipuladorAlimentos_horas_semanales").val(this.HorasSemManipuladorAlimentos);
                $("#dotacion_068_sel_apoyoAdministrativo_horas_semanales").val(this.HorasSemApoyoAdm);
                $("#dotacion_072_sel_personalAseo_horas_semanales").val(this.HorasSemPersonalAseo);
                $("#dotacion_076_sel_personalLavandería_horas_semanales").val(this.HorasSemPersonalLavanderia);
                $("#dotacion_080_sel_monitoresTalleristas_horas_semanales").val(this.HorasSemMonitoresTalleristas);
                $("#dotacion_084_sel_alumnosPractica_horas_semanales").val(this.HorasSemAlumnosPractica);
                $("#dotacion_088_sel_apoyoVoluntario_horas_semanales").val(this.HorasSemApoyoVoluntario);
                $("#dotacion_092_sel_Otros_horas_semanales").val(this.HorasSemOtros);
                $("#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales").val(this.HorasSemLicencia);
                $("#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales").val(this.HorasSemSuplenteLicencia);

                //dotacion existe (si o no): 25 -- dependera sis existe o no cantidad
                if ($("#dotacion_002_sel_director_cantidad").val() != "" && $("#dotacion_002_sel_director_cantidad").val() != "0") {
                    $("#dotacion_001_sel_director_existe").val(1);

                    $("#dotacion_003_sel_director_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_004_sel_director_horas_semanales').removeAttr('disabled');
                    $("#dotacion_003_sel_director_tipo_jornada").val(parseInt(this.CodJornadaDirector,10));
                }
                if ($("#dotacion_006_sel_asistente_cantidad").val() != "" && $("#dotacion_006_sel_asistente_cantidad").val() != "0"){
                    $("#dotacion_005_sel_asistente_existe").val(1);

                    $("#dotacion_007_sel_asistente_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_008_sel_asistente_horas_semanales').removeAttr('disabled');
                    $("#dotacion_007_sel_asistente_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_010_sel_psicologo_cantidad").val() != "" && $("#dotacion_010_sel_psicologo_cantidad").val() != "0"){
                    $("#dotacion_009_sel_psicologo_existe").val(1);

                    $("#dotacion_011_sel_psicologo_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_012_sel_psicologo_horas_semanales').removeAttr('disabled');
                    $("#dotacion_011_sel_psicologo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_014_sel_enfermero_cantidad").val() != "" && $("#dotacion_014_sel_enfermero_cantidad").val() != "0"){
                    $("#dotacion_013_sel_enfermero_existe").val(1);

                    $("#dotacion_015_sel_enfermero_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_016_sel_enfermero_horas_semanales').removeAttr('disabled');
                    $("#dotacion_015_sel_enfermero_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_018_sel_auxenfermero_cantidad").val() != "" && $("#dotacion_018_sel_auxenfermero_cantidad").val() != "0"){
                    $("#dotacion_017_sel_auxenfermero_existe").val(1);

                    $("#dotacion_019_sel_auxenfermero_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_020_sel_auxenfermero_horas_semanales').removeAttr('disabled');
                    $("#dotacion_019_sel_auxenfermero_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_022_sel_medico_cantidad").val() != "" && $("#dotacion_022_sel_medico_cantidad").val() != "0"){
                    $("#dotacion_021_sel_medico_existe").val(1);

                    $("#dotacion_023_sel_medico_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_024_sel_medico_horas_semanales').removeAttr('disabled');
                    $("#dotacion_023_sel_medico_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_026_sel_psiquiatra_cantidad").val() != "" && $("#dotacion_026_sel_psiquiatra_cantidad").val() != "0"){
                    $("#dotacion_025_sel_psiquiatra_existe").val(1);

                    $("#dotacion_027_sel_psiquiatra_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_028_sel_psiquiatra_horas_semanales').removeAttr('disabled');
                    $("#dotacion_027_sel_psiquiatra_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_030_sel_terapeuta_ocup_cantidad").val() != "" && $("#dotacion_030_sel_terapeuta_ocup_cantidad").val() != "0"){
                    $("#dotacion_029_sel_terapeuta_ocup_existe").val(1);

                    $("#dotacion_031_sel_terapeuta_ocup_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_032_sel_terapeuta_ocup_horas_semanales').removeAttr('disabled');
                    $("#dotacion_031_sel_terapeuta_ocup_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_034_sel_kinesiologo_cantidad").val() != "" && $("#dotacion_034_sel_kinesiologo_cantidad").val() != "0"){
                    $("#dotacion_033_sel_kinesiologo_existe").val(1);

                    $("#dotacion_035_sel_kinesiologo_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_036_sel_kinesiologo_horas_semanales').removeAttr('disabled');
                    $("#dotacion_035_sel_kinesiologo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_038_sel_nutricionista_cantidad").val() != "" && $("#dotacion_038_sel_nutricionista_cantidad").val() != "0"){
                    $("#dotacion_037_sel_nutricionista_existe").val(1);

                    $("#dotacion_039_sel_nutricionista_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_040_sel_nutricionista_horas_semanales').removeAttr('disabled');
                    $("#dotacion_039_sel_nutricionista_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_042_sel_fonoaudiologo_cantidad").val() != "" && $("#dotacion_042_sel_fonoaudiologo_cantidad").val() != "0"){
                    $("#dotacion_041_sel_fonoaudiologo_existe").val(1);

                    $("#dotacion_043_sel_fonoaudiologo_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_044_sel_fonoaudiologo_horas_semanales').removeAttr('disabled');
                    $("#dotacion_043_sel_fonoaudiologo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_046_sel_profesorEducaFisica_cantidad").val() != "" && $("#dotacion_046_sel_profesorEducaFisica_cantidad").val() != "0"){
                    $("#dotacion_045_sel_profesorEducaFisica_existe").val(1);

                    $("#dotacion_047_sel_profesorEducaFisica_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_048_sel_profesorEducaFisica_horas_semanales').removeAttr('disabled');
                    $("#dotacion_047_sel_profesorEducaFisica_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_050_sel_psicopedagogo_cantidad").val() != "" && $("#dotacion_050_sel_psicopedagogo_cantidad").val() != "0"){
                    $("#dotacion_049_sel_psicopedagogo_existe").val(1);

                    $("#dotacion_051_sel_psicopedagogo_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_052_sel_psicopedagogo_horas_semanales').removeAttr('disabled');
                    $("#dotacion_051_sel_psicopedagogo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_054_sel_educadoraParvulos_cantidad").val() != "" && $("#dotacion_054_sel_educadoraParvulos_cantidad").val() != "0"){
                    $("#dotacion_053_sel_educadoraParvulos_existe").val(1);

                    $("#dotacion_055_sel_educadoraParvulos_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_056_sel_educadoraParvulos_horas_semanales').removeAttr('disabled');
                    $("#dotacion_055_sel_educadoraParvulos_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val() != "" && $("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val() != "0"){
                    $("#dotacion_057_sel_educadoraTratoDirecto_existe").val(1);

                    $("#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_060_sel_educadoraTratoDirecto_horas_semanales').removeAttr('disabled');
                    $("#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_062_sel_manipuladorAlimentos_cantidad").val() != "" && $("#dotacion_062_sel_manipuladorAlimentos_cantidad").val() != "0"){
                    $("#dotacion_061_sel_manipuladorAlimentos_existe").val(1);

                    $("#dotacion_063_sel_manipuladorAlimentos_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_064_sel_manipuladorAlimentos_horas_semanales').removeAttr('disabled');
                    $("#dotacion_063_sel_manipuladorAlimentos_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_066_sel_apoyoAdministrativo_cantidad").val() != "" && $("#dotacion_066_sel_apoyoAdministrativo_cantidad").val() != "0"){
                    $("#dotacion_065_sel_apoyoAdministrativo_existe").val(1);

                    $("#dotacion_067_sel_apoyoAdministrativo_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_068_sel_apoyoAdministrativo_horas_semanales').removeAttr('disabled');
                    $("#dotacion_067_sel_apoyoAdministrativo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_070_sel_personalAseo_cantidad").val() != "" && $("#dotacion_070_sel_personalAseo_cantidad").val() != "0"){
                    $("#dotacion_069_sel_personalAseo_existe").val(1);

                    $("#dotacion_071_sel_personalAseo_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_072_sel_personalAseo_horas_semanales').removeAttr('disabled');
                    $("#dotacion_071_sel_personalAseo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_074_sel_personalLavandería_cantidad").val() != "" && $("#dotacion_074_sel_personalLavandería_cantidad").val() != "0"){
                    $("#dotacion_073_sel_personalLavanderia_existe").val(1);

                    $("#dotacion_075_sel_personalLavandería_tipo_joranada").removeAttr('disabled');
                    $('#dotacion_076_sel_personalLavandería_horas_semanales').removeAttr('disabled');
                    $("#dotacion_075_sel_personalLavandería_tipo_joranada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_078_sel_monitoresTalleristas_cantidad").val() != "" && $("#dotacion_078_sel_monitoresTalleristas_cantidad").val() != "0"){
                    $("#dotacion_077_sel_monitoresTalleristas_existe").val(1);

                    $("#dotacion_079_sel_monitoresTalleristas_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_080_sel_monitoresTalleristas_horas_semanales').removeAttr('disabled');
                    $("#dotacion_079_sel_monitoresTalleristas_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_082_sel_alumnosPractica_cantidad").val() != "" && $("#dotacion_082_sel_alumnosPractica_cantidad").val() != "0") {
                    $("#dotacion_081_sel_alumnosPractica_existe").val(1);

                    $("#dotacion_083_sel_alumnosPractica_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_084_sel_alumnosPractica_horas_semanales').removeAttr('disabled');
                    $("#dotacion_083_sel_alumnosPractica_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_086_sel_apoyoVoluntario_cantidad").val() != "" && $("#dotacion_086_sel_apoyoVoluntario_cantidad").val() != "0"){
                    $("#dotacion_085_sel_apoyoVoluntario_existe").val(1);

                    $("#dotacion_087_sel_apoyoVoluntario_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_088_sel_apoyoVoluntario_horas_semanales').removeAttr('disabled');
                    $("#dotacion_087_sel_apoyoVoluntario_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_090_sel_Otros_cantidad").val() != "" && $("#dotacion_090_sel_Otros_cantidad").val() != "0"){
                    $("#dotacion_089_sel_Otros_existe").val(1);

                    $("#dotacion_091_sel_Otros_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_092_sel_Otros_horas_semanales').removeAttr('disabled');
                    $("#dotacion_091_sel_Otros_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val() != "" && $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val() != "0"){
                    $("#dotacion_093_sel_PersonalLicenciaMedica_existe").val(1);

                    $("#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales').removeAttr('disabled');
                    $("#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val() != "" && $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val() != "0"){
                    $("#dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe").val(1);

                    $("#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada").removeAttr('disabled');
                    $('#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales').removeAttr('disabled');
                    $("#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                document.getElementById("dotacion_101_Observaciones").value = this.Observaciones;
                ContadorCaracter(document.getElementById("dotacion_101_Observaciones"), "labelCaracteres_ObsDotacion");
            }
        );
    });
}
function ObtenerAntecedentesDotacionPersonal_Visualizacion(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesDotacionPersonal",
        data: "{'CodFicha': '" + CodFicha + "'}",
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        $.each(r.d,
            function () {
                //cantidad dotacion: 25
                $("#dotacion_002_sel_director_cantidad").val(this.CantidadDirector);
                $("#dotacion_006_sel_asistente_cantidad").val(this.CantidadAsistenteSocial);
                $("#dotacion_010_sel_psicologo_cantidad").val(this.CantidadPsicologo);
                $("#dotacion_014_sel_enfermero_cantidad").val(this.CantidadEnfermero);
                $("#dotacion_018_sel_auxenfermero_cantidad").val(this.CantidadAuxiliarEnfermeria);
                $("#dotacion_022_sel_medico_cantidad").val(this.CantidadMedico);
                $("#dotacion_026_sel_psiquiatra_cantidad").val(this.CantidadPsiquiatra);
                $("#dotacion_030_sel_terapeuta_ocup_cantidad").val(this.CantidadTerapeutaOcupacional);
                $("#dotacion_034_sel_kinesiologo_cantidad").val(this.CantidadKinesiolgo);
                $("#dotacion_038_sel_nutricionista_cantidad").val(this.CantidadNutricionista);
                $("#dotacion_042_sel_fonoaudiologo_cantidad").val(this.CantidadFonoaudiologo);
                $("#dotacion_046_sel_profesorEducaFisica_cantidad").val(this.CantidadProfEducFisica);
                $("#dotacion_050_sel_psicopedagogo_cantidad").val(this.CantidadPsicopedagogo);
                $("#dotacion_054_sel_educadoraParvulos_cantidad").val(this.CantidadEducadoraParvulos);
                $("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val(this.CantidadEducadorTratoDirecto);
                $("#dotacion_062_sel_manipuladorAlimentos_cantidad").val(this.CantidadManipuladorAlimentos);
                $("#dotacion_066_sel_apoyoAdministrativo_cantidad").val(this.CantidadApoyoAdm);
                $("#dotacion_070_sel_personalAseo_cantidad").val(this.CantidadPersonalAseo);
                $("#dotacion_074_sel_personalLavandería_cantidad").val(this.CantidadPersonalLavanderia);
                $("#dotacion_078_sel_monitoresTalleristas_cantidad").val(this.CantidadMonitoresTalleristas);
                $("#dotacion_082_sel_alumnosPractica_cantidad").val(this.CantidadAlumnosPractica);
                $("#dotacion_086_sel_apoyoVoluntario_cantidad").val(this.CantidadApoyoVoluntario);
                $("#dotacion_090_sel_Otros_cantidad").val(this.CantidadOtros);
                $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val(this.CantidadLicencia);
                $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val(this.CantidadSuplenteLicencia);

                //horas_semanales: 25
                $("#dotacion_004_sel_director_horas_semanales").val(this.HorasSemDirector);
                $("#dotacion_008_sel_asistente_horas_semanales").val(this.HorasSemAsistenteSocial);
                $("#dotacion_012_sel_psicologo_horas_semanales").val(this.HorasSemPsicologo);
                $("#dotacion_016_sel_enfermero_horas_semanales").val(this.HorasSemEnfermero);
                $("#dotacion_020_sel_auxenfermero_horas_semanales").val(this.HorasSemAuxiliarEnfermeria);
                $("#dotacion_024_sel_medico_horas_semanales").val(this.HorasSemMedico);
                $("#dotacion_028_sel_psiquiatra_horas_semanales").val(this.HorasSemPsiquiatra);
                $("#dotacion_032_sel_terapeuta_ocup_horas_semanales").val(this.HorasSemTerapeutaOcupacional);
                $("#dotacion_036_sel_kinesiologo_horas_semanales").val(this.HorasSemKinesiologo);
                $("#dotacion_040_sel_nutricionista_horas_semanales").val(this.HorasSemNutricionista);
                $("#dotacion_044_sel_fonoaudiologo_horas_semanales").val(this.HorasSemFonoaudiolgo);
                $("#dotacion_048_sel_profesorEducaFisica_horas_semanales").val(this.HorasSemProfEducFisica);
                $("#dotacion_052_sel_psicopedagogo_horas_semanales").val(this.HorasSemPsicopedagogo);
                $("#dotacion_056_sel_educadoraParvulos_horas_semanales").val(this.HorasSemEducadoraParvulos);
                $("#dotacion_060_sel_educadoraTratoDirecto_horas_semanales").val(this.HorasSemEducadorTratoDirecto);
                $("#dotacion_064_sel_manipuladorAlimentos_horas_semanales").val(this.HorasSemManipuladorAlimentos);
                $("#dotacion_068_sel_apoyoAdministrativo_horas_semanales").val(this.HorasSemApoyoAdm);
                $("#dotacion_072_sel_personalAseo_horas_semanales").val(this.HorasSemPersonalAseo);
                $("#dotacion_076_sel_personalLavandería_horas_semanales").val(this.HorasSemPersonalLavanderia);
                $("#dotacion_080_sel_monitoresTalleristas_horas_semanales").val(this.HorasSemMonitoresTalleristas);
                $("#dotacion_084_sel_alumnosPractica_horas_semanales").val(this.HorasSemAlumnosPractica);
                $("#dotacion_088_sel_apoyoVoluntario_horas_semanales").val(this.HorasSemApoyoVoluntario);
                $("#dotacion_092_sel_Otros_horas_semanales").val(this.HorasSemOtros);
                $("#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales").val(this.HorasSemLicencia);
                $("#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales").val(this.HorasSemSuplenteLicencia);

                //dotacion existe (si o no): 25 -- dependera sis existe o no cantidad
                if ($("#dotacion_002_sel_director_cantidad").val() != "" && $("#dotacion_002_sel_director_cantidad").val() != "0") {
                    $("#dotacion_001_sel_director_existe").val(1);
                    $("#dotacion_003_sel_director_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_006_sel_asistente_cantidad").val() != "" && $("#dotacion_006_sel_asistente_cantidad").val() != "0") {
                    $("#dotacion_005_sel_asistente_existe").val(1);
                    $("#dotacion_007_sel_asistente_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_010_sel_psicologo_cantidad").val() != "" && $("#dotacion_010_sel_psicologo_cantidad").val() != "0") {
                    $("#dotacion_009_sel_psicologo_existe").val(1);
                    $("#dotacion_011_sel_psicologo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_014_sel_enfermero_cantidad").val() != "" && $("#dotacion_014_sel_enfermero_cantidad").val() != "0") {
                    $("#dotacion_013_sel_enfermero_existe").val(1);
                    $("#dotacion_015_sel_enfermero_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_018_sel_auxenfermero_cantidad").val() != "" && $("#dotacion_018_sel_auxenfermero_cantidad").val() != "0") {
                    $("#dotacion_017_sel_auxenfermero_existe").val(1);
                    $("#dotacion_019_sel_auxenfermero_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_022_sel_medico_cantidad").val() != "" && $("#dotacion_022_sel_medico_cantidad").val() != "0") {
                    $("#dotacion_021_sel_medico_existe").val(1);
                    $("#dotacion_023_sel_medico_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_026_sel_psiquiatra_cantidad").val() != "" && $("#dotacion_026_sel_psiquiatra_cantidad").val() != "0") {
                    $("#dotacion_025_sel_psiquiatra_existe").val(1);
                    $("#dotacion_027_sel_psiquiatra_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_030_sel_terapeuta_ocup_cantidad").val() != "" && $("#dotacion_030_sel_terapeuta_ocup_cantidad").val() != "0") {
                    $("#dotacion_029_sel_terapeuta_ocup_existe").val(1);
                    $("#dotacion_031_sel_terapeuta_ocup_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_034_sel_kinesiologo_cantidad").val() != "" && $("#dotacion_034_sel_kinesiologo_cantidad").val() != "0") {
                    $("#dotacion_033_sel_kinesiologo_existe").val(1);
                    $("#dotacion_035_sel_kinesiologo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_038_sel_nutricionista_cantidad").val() != "" && $("#dotacion_038_sel_nutricionista_cantidad").val() != "0") {
                    $("#dotacion_037_sel_nutricionista_existe").val(1);
                    $("#dotacion_039_sel_nutricionista_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_042_sel_fonoaudiologo_cantidad").val() != "" && $("#dotacion_042_sel_fonoaudiologo_cantidad").val() != "0") {
                    $("#dotacion_041_sel_fonoaudiologo_existe").val(1);
                    $("#dotacion_043_sel_fonoaudiologo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_046_sel_profesorEducaFisica_cantidad").val() != "" && $("#dotacion_046_sel_profesorEducaFisica_cantidad").val() != "0") {
                    $("#dotacion_045_sel_profesorEducaFisica_existe").val(1);
                    $("#dotacion_047_sel_profesorEducaFisica_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_050_sel_psicopedagogo_cantidad").val() != "" && $("#dotacion_050_sel_psicopedagogo_cantidad").val() != "0") {
                    $("#dotacion_049_sel_psicopedagogo_existe").val(1);
                    $("#dotacion_051_sel_psicopedagogo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_054_sel_educadoraParvulos_cantidad").val() != "" && $("#dotacion_054_sel_educadoraParvulos_cantidad").val() != "0") {
                    $("#dotacion_053_sel_educadoraParvulos_existe").val(1);
                    $("#dotacion_055_sel_educadoraParvulos_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val() != "" && $("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val() != "0") {
                    $("#dotacion_057_sel_educadoraTratoDirecto_existe").val(1);
                    $("#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_062_sel_manipuladorAlimentos_cantidad").val() != "" && $("#dotacion_062_sel_manipuladorAlimentos_cantidad").val() != "0") {
                    $("#dotacion_061_sel_manipuladorAlimentos_existe").val(1);
                    $("#dotacion_063_sel_manipuladorAlimentos_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_066_sel_apoyoAdministrativo_cantidad").val() != "" && $("#dotacion_066_sel_apoyoAdministrativo_cantidad").val() != "0") {
                    $("#dotacion_065_sel_apoyoAdministrativo_existe").val(1);
                    $("#dotacion_067_sel_apoyoAdministrativo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_070_sel_personalAseo_cantidad").val() != "" && $("#dotacion_070_sel_personalAseo_cantidad").val() != "0") {
                    $("#dotacion_069_sel_personalAseo_existe").val(1);
                    $("#dotacion_071_sel_personalAseo_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_074_sel_personalLavandería_cantidad").val() != "" && $("#dotacion_074_sel_personalLavandería_cantidad").val() != "0") {
                    $("#dotacion_073_sel_personalLavanderia_existe").val(1);
                    $("#dotacion_075_sel_personalLavandería_tipo_joranada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_078_sel_monitoresTalleristas_cantidad").val() != "" && $("#dotacion_078_sel_monitoresTalleristas_cantidad").val() != "0") {
                    $("#dotacion_077_sel_monitoresTalleristas_existe").val(1);
                    $("#dotacion_079_sel_monitoresTalleristas_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_082_sel_alumnosPractica_cantidad").val() != "" && $("#dotacion_082_sel_alumnosPractica_cantidad").val() != "0") {
                    $("#dotacion_081_sel_alumnosPractica_existe").val(1);
                    $("#dotacion_083_sel_alumnosPractica_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_086_sel_apoyoVoluntario_cantidad").val() != "" && $("#dotacion_086_sel_apoyoVoluntario_cantidad").val() != "0") {
                    $("#dotacion_085_sel_apoyoVoluntario_existe").val(1);
                    $("#dotacion_087_sel_apoyoVoluntario_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_090_sel_Otros_cantidad").val() != "" && $("#dotacion_090_sel_Otros_cantidad").val() != "0") {
                    $("#dotacion_089_sel_Otros_existe").val(1);
                    $("#dotacion_091_sel_Otros_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val() != "" && $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val() != "0") {
                    $("#dotacion_093_sel_PersonalLicenciaMedica_existe").val(1);
                    $("#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val() != "" && $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val() != "0") {
                    $("#dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe").val(1);
                    $("#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada").val(parseInt(this.CodJornadaDirector, 10));
                }
                document.getElementById("dotacion_101_Observaciones").value = this.Observaciones;
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "FICHA_PADRE");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        dotacionpersonal_residencia = true;
        CargaCamposComparativa3();
    });
}

function ObtenerAntecedentesDotacionPersonal_Visualizacion_PJUD(CodFicha) {
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesDotacionPersonal",
        data: "{'CodFicha': '" + CodFicha + "'}",
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        $.each(r.d,
            function () {
                //cantidad dotacion: 25
                $("#dotacion_002_sel_director_cantidad_pjud").val(this.CantidadDirector);
                $("#dotacion_006_sel_asistente_cantidad_pjud").val(this.CantidadAsistenteSocial);
                $("#dotacion_010_sel_psicologo_cantidad_pjud").val(this.CantidadPsicologo);
                $("#dotacion_014_sel_enfermero_cantidad_pjud").val(this.CantidadEnfermero);
                $("#dotacion_018_sel_auxenfermero_cantidad_pjud").val(this.CantidadAuxiliarEnfermeria);
                $("#dotacion_022_sel_medico_cantidad_pjud").val(this.CantidadMedico);
                $("#dotacion_026_sel_psiquiatra_cantidad_pjud").val(this.CantidadPsiquiatra);
                $("#dotacion_030_sel_terapeuta_ocup_cantidad_pjud").val(this.CantidadTerapeutaOcupacional);
                $("#dotacion_034_sel_kinesiologo_cantidad_pjud").val(this.CantidadKinesiolgo);
                $("#dotacion_038_sel_nutricionista_cantidad_pjud").val(this.CantidadNutricionista);
                $("#dotacion_042_sel_fonoaudiologo_cantidad_pjud").val(this.CantidadFonoaudiologo);
                $("#dotacion_046_sel_profesorEducaFisica_cantidad_pjud").val(this.CantidadProfEducFisica);
                $("#dotacion_050_sel_psicopedagogo_cantidad_pjud").val(this.CantidadPsicopedagogo);
                $("#dotacion_054_sel_educadoraParvulos_cantidad_pjud").val(this.CantidadEducadoraParvulos);
                $("#dotacion_058_sel_educadoraTratoDirecto_cantidad_pjud").val(this.CantidadEducadorTratoDirecto);
                $("#dotacion_062_sel_manipuladorAlimentos_cantidad_pjud").val(this.CantidadManipuladorAlimentos);
                $("#dotacion_066_sel_apoyoAdministrativo_cantidad_pjud").val(this.CantidadApoyoAdm);
                $("#dotacion_070_sel_personalAseo_cantidad_pjud").val(this.CantidadPersonalAseo);
                $("#dotacion_074_sel_personalLavandería_cantidad_pjud").val(this.CantidadPersonalLavanderia);
                $("#dotacion_078_sel_monitoresTalleristas_cantidad_pjud").val(this.CantidadMonitoresTalleristas);
                $("#dotacion_082_sel_alumnosPractica_cantidad_pjud").val(this.CantidadAlumnosPractica);
                $("#dotacion_086_sel_apoyoVoluntario_cantidad_pjud").val(this.CantidadApoyoVoluntario);
                $("#dotacion_090_sel_Otros_cantidad_pjud").val(this.CantidadOtros);
                $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad_pjud").val(this.CantidadLicencia);
                $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_pjud").val(this.CantidadSuplenteLicencia);

                //horas_semanales: 25
                $("#dotacion_004_sel_director_horas_semanales_pjud").val(this.HorasSemDirector);
                $("#dotacion_008_sel_asistente_horas_semanales_pjud").val(this.HorasSemAsistenteSocial);
                $("#dotacion_012_sel_psicologo_horas_semanales_pjud").val(this.HorasSemPsicologo);
                $("#dotacion_016_sel_enfermero_horas_semanales_pjud").val(this.HorasSemEnfermero);
                $("#dotacion_020_sel_auxenfermero_horas_semanales_pjud").val(this.HorasSemAuxiliarEnfermeria);
                $("#dotacion_024_sel_medico_horas_semanales_pjud").val(this.HorasSemMedico);
                $("#dotacion_028_sel_psiquiatra_horas_semanales_pjud").val(this.HorasSemPsiquiatra);
                $("#dotacion_032_sel_terapeuta_ocup_horas_semanales_pjud").val(this.HorasSemTerapeutaOcupacional);
                $("#dotacion_036_sel_kinesiologo_horas_semanales_pjud").val(this.HorasSemKinesiologo);
                $("#dotacion_040_sel_nutricionista_horas_semanales_pjud").val(this.HorasSemNutricionista);
                $("#dotacion_044_sel_fonoaudiologo_horas_semanales_pjud").val(this.HorasSemFonoaudiolgo);
                $("#dotacion_048_sel_profesorEducaFisica_horas_semanales_pjud").val(this.HorasSemProfEducFisica);
                $("#dotacion_052_sel_psicopedagogo_horas_semanales_pjud").val(this.HorasSemPsicopedagogo);
                $("#dotacion_056_sel_educadoraParvulos_horas_semanales_pjud").val(this.HorasSemEducadoraParvulos);
                $("#dotacion_060_sel_educadoraTratoDirecto_horas_semanales_pjud").val(this.HorasSemEducadorTratoDirecto);
                $("#dotacion_064_sel_manipuladorAlimentos_horas_semanales_pjud").val(this.HorasSemManipuladorAlimentos);
                $("#dotacion_068_sel_apoyoAdministrativo_horas_semanales_pjud").val(this.HorasSemApoyoAdm);
                $("#dotacion_072_sel_personalAseo_horas_semanales_pjud").val(this.HorasSemPersonalAseo);
                $("#dotacion_076_sel_personalLavandería_horas_semanales_pjud").val(this.HorasSemPersonalLavanderia);
                $("#dotacion_080_sel_monitoresTalleristas_horas_semanales_pjud").val(this.HorasSemMonitoresTalleristas);
                $("#dotacion_084_sel_alumnosPractica_horas_semanales_pjud").val(this.HorasSemAlumnosPractica);
                $("#dotacion_088_sel_apoyoVoluntario_horas_semanales_pjud").val(this.HorasSemApoyoVoluntario);
                $("#dotacion_092_sel_Otros_horas_semanales_pjud").val(this.HorasSemOtros);
                $("#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales_pjud").val(this.HorasSemLicencia);
                $("#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales_pjud").val(this.HorasSemSuplenteLicencia);

                //dotacion existe (si o no): 25 -- dependera sis existe o no cantidad
                if ($("#dotacion_002_sel_director_cantidad_pjud").val() != "" && $("#dotacion_002_sel_director_cantidad_pjud").val() != "0") {
                    $("#dotacion_001_sel_director_existe_pjud").val(1);
                    $("#dotacion_003_sel_director_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_006_sel_asistente_cantidad_pjud").val() != "" && $("#dotacion_006_sel_asistente_cantidad_pjud").val() != "0") {
                    $("#dotacion_005_sel_asistente_existe_pjud").val(1);
                    $("#dotacion_007_sel_asistente_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_010_sel_psicologo_cantidad_pjud").val() != "" && $("#dotacion_010_sel_psicologo_cantidad_pjud").val() != "0") {
                    $("#dotacion_009_sel_psicologo_existe_pjud").val(1);
                    $("#dotacion_011_sel_psicologo_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_014_sel_enfermero_cantidad_pjud").val() != "" && $("#dotacion_014_sel_enfermero_cantidad_pjud").val() != "0") {
                    $("#dotacion_013_sel_enfermero_existe_pjud").val(1);
                    $("#dotacion_015_sel_enfermero_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_018_sel_auxenfermero_cantidad_pjud").val() != "" && $("#dotacion_018_sel_auxenfermero_cantidad_pjud").val() != "0") {
                    $("#dotacion_017_sel_auxenfermero_existe_pjud").val(1);
                    $("#dotacion_019_sel_auxenfermero_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_022_sel_medico_cantidad_pjud").val() != "" && $("#dotacion_022_sel_medico_cantidad_pjud").val() != "0") {
                    $("#dotacion_021_sel_medico_existe_pjud").val(1);
                    $("#dotacion_023_sel_medico_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_026_sel_psiquiatra_cantidad_pjud").val() != "" && $("#dotacion_026_sel_psiquiatra_cantidad_pjud").val() != "0") {
                    $("#dotacion_025_sel_psiquiatra_existe_pjud").val(1);
                    $("#dotacion_027_sel_psiquiatra_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_030_sel_terapeuta_ocup_cantidad_pjud").val() != "" && $("#dotacion_030_sel_terapeuta_ocup_cantidad_pjud").val() != "0") {
                    $("#dotacion_029_sel_terapeuta_ocup_existe_pjud").val(1);
                    $("#dotacion_031_sel_terapeuta_ocup_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_034_sel_kinesiologo_cantidad_pjud").val() != "" && $("#dotacion_034_sel_kinesiologo_cantidad_pjud").val() != "0") {
                    $("#dotacion_033_sel_kinesiologo_existe_pjud").val(1);
                    $("#dotacion_035_sel_kinesiologo_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_038_sel_nutricionista_cantidad_pjud").val() != "" && $("#dotacion_038_sel_nutricionista_cantidad_pjud").val() != "0") {
                    $("#dotacion_037_sel_nutricionista_existe_pjud").val(1);
                    $("#dotacion_039_sel_nutricionista_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_042_sel_fonoaudiologo_cantidad_pjud").val() != "" && $("#dotacion_042_sel_fonoaudiologo_cantidad_pjud").val() != "0") {
                    $("#dotacion_041_sel_fonoaudiologo_existe_pjud").val(1);
                    $("#dotacion_043_sel_fonoaudiologo_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_046_sel_profesorEducaFisica_cantidad_pjud").val() != "" && $("#dotacion_046_sel_profesorEducaFisica_cantidad_pjud").val() != "0") {
                    $("#dotacion_045_sel_profesorEducaFisica_existe_pjud").val(1);
                    $("#dotacion_047_sel_profesorEducaFisica_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_050_sel_psicopedagogo_cantidad_pjud").val() != "" && $("#dotacion_050_sel_psicopedagogo_cantidad_pjud").val() != "0") {
                    $("#dotacion_049_sel_psicopedagogo_existe_pjud").val(1);
                    $("#dotacion_051_sel_psicopedagogo_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_054_sel_educadoraParvulos_cantidad_pjud").val() != "" && $("#dotacion_054_sel_educadoraParvulos_cantidad_pjud").val() != "0") {
                    $("#dotacion_053_sel_educadoraParvulos_existe_pjud").val(1);
                    $("#dotacion_055_sel_educadoraParvulos_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_058_sel_educadoraTratoDirecto_cantidad_pjud").val() != "" && $("#dotacion_058_sel_educadoraTratoDirecto_cantidad_pjud").val() != "0") {
                    $("#dotacion_057_sel_educadoraTratoDirecto_existe_pjud").val(1);
                    $("#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_062_sel_manipuladorAlimentos_cantidad_pjud").val() != "" && $("#dotacion_062_sel_manipuladorAlimentos_cantidad_pjud").val() != "0") {
                    $("#dotacion_061_sel_manipuladorAlimentos_existe_pjud").val(1);
                    $("#dotacion_063_sel_manipuladorAlimentos_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_066_sel_apoyoAdministrativo_cantidad_pjud").val() != "" && $("#dotacion_066_sel_apoyoAdministrativo_cantidad_pjud").val() != "0") {
                    $("#dotacion_065_sel_apoyoAdministrativo_existe_pjud").val(1);
                    $("#dotacion_067_sel_apoyoAdministrativo_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_070_sel_personalAseo_cantidad_pjud").val() != "" && $("#dotacion_070_sel_personalAseo_cantidad_pjud").val() != "0") {
                    $("#dotacion_069_sel_personalAseo_existe_pjud").val(1);
                    $("#dotacion_071_sel_personalAseo_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_074_sel_personalLavandería_cantidad_pjud").val() != "" && $("#dotacion_074_sel_personalLavandería_cantidad_pjud").val() != "0") {
                    $("#dotacion_073_sel_personalLavanderia_existe_pjud").val(1);
                    $("#dotacion_075_sel_personalLavandería_tipo_joranada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_078_sel_monitoresTalleristas_cantidad_pjud").val() != "" && $("#dotacion_078_sel_monitoresTalleristas_cantidad_pjud").val() != "0") {
                    $("#dotacion_077_sel_monitoresTalleristas_existe_pjud").val(1);
                    $("#dotacion_079_sel_monitoresTalleristas_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_082_sel_alumnosPractica_cantidad_pjud").val() != "" && $("#dotacion_082_sel_alumnosPractica_cantidad_pjud").val() != "0") {
                    $("#dotacion_081_sel_alumnosPractica_existe_pjud").val(1);
                    $("#dotacion_083_sel_alumnosPractica_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_086_sel_apoyoVoluntario_cantidad_pjud").val() != "" && $("#dotacion_086_sel_apoyoVoluntario_cantidad_pjud").val() != "0") {
                    $("#dotacion_085_sel_apoyoVoluntario_existe_pjud").val(1);
                    $("#dotacion_087_sel_apoyoVoluntario_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_090_sel_Otros_cantidad_pjud").val() != "" && $("#dotacion_090_sel_Otros_cantidad_pjud").val() != "0") {
                    $("#dotacion_089_sel_Otros_existe_pjud").val(1);
                    $("#dotacion_091_sel_Otros_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_094_sel_PersonalLicenciaMedica_cantidad_pjud").val() != "" && $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad_pjud").val() != "0") {
                    $("#dotacion_093_sel_PersonalLicenciaMedica_existe_pjud").val(1);
                    $("#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_pjud").val() != "" && $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad_pjud").val() != "0") {
                    $("#dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe_pjud").val(1);
                    $("#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada_pjud").val(parseInt(this.CodJornadaDirector, 10));
                }
                document.getElementById("dotacion_101_Observaciones_pjud").value = this.Observaciones;
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        ctrl_ObtenerAntecedentesDotacionPersonal_Visualizacion_PJUD = true;
        AdminitrarAccesoASeccionesOBS("desbloqueo", "INFORME_VISITA");

        //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
        dotacionpersonal_pjud = true;
        CargaCamposComparativa3();
    });
}

function ObtenerAntecedentesDotacionPersonal_Compare(CodFichaCompare, bloqueDatos) {
    var sufijo = "_comp001";
    if (bloqueDatos == "BLOQUE002") sufijo = "_comp002";

    $("#labelCaracteres_ObsDotacion").html("");
    $.ajax({
        type: "POST",
        url: "FichaResidencial.aspx/ObtenerAntecedentesDotacionPersonal",
        data: "{'CodFicha': '" + CodFichaCompare + "'}",
        //data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // Ajax OK !                   
        },
        error: function (r) {
            DesplegarExcepcionCriticaApp(r.responseText);
        }
    }).then(function (r) {
        $.each(r.d,
            function () {
                //cantidad dotacion: 25
                $("#dotacion_002_sel_director_cantidad" + sufijo).val(this.CantidadDirector);
                $("#dotacion_006_sel_asistente_cantidad" + sufijo).val(this.CantidadAsistenteSocial);
                $("#dotacion_010_sel_psicologo_cantidad" + sufijo).val(this.CantidadPsicologo);
                $("#dotacion_014_sel_enfermero_cantidad" + sufijo).val(this.CantidadEnfermero);
                $("#dotacion_018_sel_auxenfermero_cantidad" + sufijo).val(this.CantidadAuxiliarEnfermeria);
                $("#dotacion_022_sel_medico_cantidad" + sufijo).val(this.CantidadMedico);
                $("#dotacion_026_sel_psiquiatra_cantidad" + sufijo).val(this.CantidadPsiquiatra);
                $("#dotacion_030_sel_terapeuta_ocup_cantidad" + sufijo).val(this.CantidadTerapeutaOcupacional);
                $("#dotacion_034_sel_kinesiologo_cantidad" + sufijo).val(this.CantidadKinesiolgo);
                $("#dotacion_038_sel_nutricionista_cantidad" + sufijo).val(this.CantidadNutricionista);
                $("#dotacion_042_sel_fonoaudiologo_cantidad" + sufijo).val(this.CantidadFonoaudiologo);
                $("#dotacion_046_sel_profesorEducaFisica_cantidad" + sufijo).val(this.CantidadProfEducFisica);
                $("#dotacion_050_sel_psicopedagogo_cantidad" + sufijo).val(this.CantidadPsicopedagogo);
                $("#dotacion_054_sel_educadoraParvulos_cantidad" + sufijo).val(this.CantidadEducadoraParvulos);
                $("#dotacion_058_sel_educadoraTratoDirecto_cantidad" + sufijo).val(this.CantidadEducadorTratoDirecto);
                $("#dotacion_062_sel_manipuladorAlimentos_cantidad" + sufijo).val(this.CantidadManipuladorAlimentos);
                $("#dotacion_066_sel_apoyoAdministrativo_cantidad" + sufijo).val(this.CantidadApoyoAdm);
                $("#dotacion_070_sel_personalAseo_cantidad" + sufijo).val(this.CantidadPersonalAseo);
                $("#dotacion_074_sel_personalLavandería_cantidad" + sufijo).val(this.CantidadPersonalLavanderia);
                $("#dotacion_078_sel_monitoresTalleristas_cantidad" + sufijo).val(this.CantidadMonitoresTalleristas);
                $("#dotacion_082_sel_alumnosPractica_cantidad" + sufijo).val(this.CantidadAlumnosPractica);
                $("#dotacion_086_sel_apoyoVoluntario_cantidad" + sufijo).val(this.CantidadApoyoVoluntario);
                $("#dotacion_090_sel_Otros_cantidad" + sufijo).val(this.CantidadOtros);
                $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad" + sufijo).val(this.CantidadLicencia);
                $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad" + sufijo).val(this.CantidadSuplenteLicencia);

                //horas_semanales: 25
                $("#dotacion_004_sel_director_horas_semanales" + sufijo).val(this.HorasSemDirector);
                $("#dotacion_008_sel_asistente_horas_semanales" + sufijo).val(this.HorasSemAsistenteSocial);
                $("#dotacion_012_sel_psicologo_horas_semanales" + sufijo).val(this.HorasSemPsicologo);
                $("#dotacion_016_sel_enfermero_horas_semanales" + sufijo).val(this.HorasSemEnfermero);
                $("#dotacion_020_sel_auxenfermero_horas_semanales" + sufijo).val(this.HorasSemAuxiliarEnfermeria);
                $("#dotacion_024_sel_medico_horas_semanales" + sufijo).val(this.HorasSemMedico);
                $("#dotacion_028_sel_psiquiatra_horas_semanales" + sufijo).val(this.HorasSemPsiquiatra);
                $("#dotacion_032_sel_terapeuta_ocup_horas_semanales" + sufijo).val(this.HorasSemTerapeutaOcupacional);
                $("#dotacion_036_sel_kinesiologo_horas_semanales" + sufijo).val(this.HorasSemKinesiologo);
                $("#dotacion_040_sel_nutricionista_horas_semanales" + sufijo).val(this.HorasSemNutricionista);
                $("#dotacion_044_sel_fonoaudiologo_horas_semanales" + sufijo).val(this.HorasSemFonoaudiolgo);
                $("#dotacion_048_sel_profesorEducaFisica_horas_semanales" + sufijo).val(this.HorasSemProfEducFisica);
                $("#dotacion_052_sel_psicopedagogo_horas_semanales" + sufijo).val(this.HorasSemPsicopedagogo);
                $("#dotacion_056_sel_educadoraParvulos_horas_semanales" + sufijo).val(this.HorasSemEducadoraParvulos);
                $("#dotacion_060_sel_educadoraTratoDirecto_horas_semanales" + sufijo).val(this.HorasSemEducadorTratoDirecto);
                $("#dotacion_064_sel_manipuladorAlimentos_horas_semanales" + sufijo).val(this.HorasSemManipuladorAlimentos);
                $("#dotacion_068_sel_apoyoAdministrativo_horas_semanales" + sufijo).val(this.HorasSemApoyoAdm);
                $("#dotacion_072_sel_personalAseo_horas_semanales" + sufijo).val(this.HorasSemPersonalAseo);
                $("#dotacion_076_sel_personalLavandería_horas_semanales" + sufijo).val(this.HorasSemPersonalLavanderia);
                $("#dotacion_080_sel_monitoresTalleristas_horas_semanales" + sufijo).val(this.HorasSemMonitoresTalleristas);
                $("#dotacion_084_sel_alumnosPractica_horas_semanales" + sufijo).val(this.HorasSemAlumnosPractica);
                $("#dotacion_088_sel_apoyoVoluntario_horas_semanales" + sufijo).val(this.HorasSemApoyoVoluntario);
                $("#dotacion_092_sel_Otros_horas_semanales" + sufijo).val(this.HorasSemOtros);
                $("#dotacion_096_sel_PersonalLicenciaMedica_horas_semanales" + sufijo).val(this.HorasSemLicencia);
                $("#dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales" + sufijo).val(this.HorasSemSuplenteLicencia);

                //dotacion existe (si o no): 25 -- dependera sis existe o no cantidad
                if ($("#dotacion_002_sel_director_cantidad" + sufijo).val() != "" && $("#dotacion_002_sel_director_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_001_sel_director_existe" + sufijo).val(1);
                    $("#dotacion_003_sel_director_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_006_sel_asistente_cantidad" + sufijo).val() != "" && $("#dotacion_006_sel_asistente_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_005_sel_asistente_existe" + sufijo).val(1);
                    $("#dotacion_007_sel_asistente_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_010_sel_psicologo_cantidad" + sufijo).val() != "" && $("#dotacion_010_sel_psicologo_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_009_sel_psicologo_existe" + sufijo).val(1);
                    $("#dotacion_011_sel_psicologo_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_014_sel_enfermero_cantidad" + sufijo).val() != "" && $("#dotacion_014_sel_enfermero_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_013_sel_enfermero_existe" + sufijo).val(1);
                    $("#dotacion_015_sel_enfermero_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_018_sel_auxenfermero_cantidad" + sufijo).val() != "" && $("#dotacion_018_sel_auxenfermero_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_017_sel_auxenfermero_existe" + sufijo).val(1);
                    $("#dotacion_019_sel_auxenfermero_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_022_sel_medico_cantidad" + sufijo).val() != "" && $("#dotacion_022_sel_medico_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_021_sel_medico_existe" + sufijo).val(1);
                    $("#dotacion_023_sel_medico_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_026_sel_psiquiatra_cantidad" + sufijo).val() != "" && $("#dotacion_026_sel_psiquiatra_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_025_sel_psiquiatra_existe" + sufijo).val(1);
                    $("#dotacion_027_sel_psiquiatra_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_030_sel_terapeuta_ocup_cantidad" + sufijo).val() != "" && $("#dotacion_030_sel_terapeuta_ocup_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_029_sel_terapeuta_ocup_existe" + sufijo).val(1);
                    $("#dotacion_031_sel_terapeuta_ocup_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_034_sel_kinesiologo_cantidad" + sufijo).val() != "" && $("#dotacion_034_sel_kinesiologo_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_033_sel_kinesiologo_existe" + sufijo).val(1);
                    $("#dotacion_035_sel_kinesiologo_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_038_sel_nutricionista_cantidad" + sufijo).val() != "" && $("#dotacion_038_sel_nutricionista_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_037_sel_nutricionista_existe" + sufijo).val(1);
                    $("#dotacion_039_sel_nutricionista_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_042_sel_fonoaudiologo_cantidad" + sufijo).val() != "" && $("#dotacion_042_sel_fonoaudiologo_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_041_sel_fonoaudiologo_existe" + sufijo).val(1);
                    $("#dotacion_043_sel_fonoaudiologo_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_046_sel_profesorEducaFisica_cantidad" + sufijo).val() != "" && $("#dotacion_046_sel_profesorEducaFisica_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_045_sel_profesorEducaFisica_existe" + sufijo).val(1);
                    $("#dotacion_047_sel_profesorEducaFisica_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_050_sel_psicopedagogo_cantidad" + sufijo).val() != "" && $("#dotacion_050_sel_psicopedagogo_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_049_sel_psicopedagogo_existe" + sufijo).val(1);
                    $("#dotacion_051_sel_psicopedagogo_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_054_sel_educadoraParvulos_cantidad" + sufijo).val() != "" && $("#dotacion_054_sel_educadoraParvulos_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_053_sel_educadoraParvulos_existe" + sufijo).val(1);
                    $("#dotacion_055_sel_educadoraParvulos_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_058_sel_educadoraTratoDirecto_cantidad" + sufijo).val() != "" && $("#dotacion_058_sel_educadoraTratoDirecto_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_057_sel_educadoraTratoDirecto_existe" + sufijo).val(1);
                    $("#dotacion_059_sel_educadoraTratoDirecto_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_062_sel_manipuladorAlimentos_cantidad" + sufijo).val() != "" && $("#dotacion_062_sel_manipuladorAlimentos_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_061_sel_manipuladorAlimentos_existe" + sufijo).val(1);
                    $("#dotacion_063_sel_manipuladorAlimentos_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_066_sel_apoyoAdministrativo_cantidad" + sufijo).val() != "" && $("#dotacion_066_sel_apoyoAdministrativo_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_065_sel_apoyoAdministrativo_existe" + sufijo).val(1);
                    $("#dotacion_067_sel_apoyoAdministrativo_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_070_sel_personalAseo_cantidad" + sufijo).val() != "" && $("#dotacion_070_sel_personalAseo_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_069_sel_personalAseo_existe" + sufijo).val(1);
                    $("#dotacion_071_sel_personalAseo_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_074_sel_personalLavandería_cantidad" + sufijo).val() != "" && $("#dotacion_074_sel_personalLavandería_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_073_sel_personalLavanderia_existe" + sufijo).val(1);
                    $("#dotacion_075_sel_personalLavandería_tipo_joranada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_078_sel_monitoresTalleristas_cantidad" + sufijo).val() != "" && $("#dotacion_078_sel_monitoresTalleristas_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_077_sel_monitoresTalleristas_existe" + sufijo).val(1);
                    $("#dotacion_079_sel_monitoresTalleristas_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_082_sel_alumnosPractica_cantidad" + sufijo).val() != "" && $("#dotacion_082_sel_alumnosPractica_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_081_sel_alumnosPractica_existe" + sufijo).val(1);
                    $("#dotacion_083_sel_alumnosPractica_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_086_sel_apoyoVoluntario_cantidad" + sufijo).val() != "" && $("#dotacion_086_sel_apoyoVoluntario_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_085_sel_apoyoVoluntario_existe" + sufijo).val(1);
                    $("#dotacion_087_sel_apoyoVoluntario_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_090_sel_Otros_cantidad" + sufijo).val() != "" && $("#dotacion_090_sel_Otros_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_089_sel_Otros_existe" + sufijo).val(1);
                    $("#dotacion_091_sel_Otros_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_094_sel_PersonalLicenciaMedica_cantidad" + sufijo).val() != "" && $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_093_sel_PersonalLicenciaMedica_existe" + sufijo).val(1);
                    $("#dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                if ($("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad" + sufijo).val() != "" && $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad" + sufijo).val() != "0") {
                    $("#dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe" + sufijo).val(1);
                    $("#dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada" + sufijo).val(parseInt(this.CodJornadaDirector, 10));
                }
                document.getElementById("dotacion_101_Observaciones" + sufijo).value = this.Observaciones;
            }
        );
        //CONTROL DESBLOQUEO ZONA CARGA
        if (bloqueDatos == "BLOQUE001") {
            ctrl_ObtenerAntecedentesDotacionPersonal_comp001 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_001");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            dotacion_residencia_comp001 = true;
        }
        if (bloqueDatos == "BLOQUE002") {
            ctrl_ObtenerAntecedentesDotacionPersonal_comp002 = true;
            AdminitrarAccesoASeccionesCompare("desbloqueo", "FICHA_002");
            //CONTROL CARGA DE COMPARATIVA DEPENDIENTES
            dotacion_residencia_comp002 = true;
        }
        CargaCamposComparativa3_();
    });
}

////++++++++++++++++++++++
//FUNCIONES FRONTEND
function HabilitaDotacionPersonal(opc) {
    switch (opc) {
        case 1://director
            var director_ = $("#dotacion_002_sel_director_cantidad").val();
            if (director_ != "0" && director_ != "") {
                document.getElementById("dotacion_003_sel_director_tipo_jornada").disabled = false; document.getElementById("dotacion_004_sel_director_horas_semanales").disabled = false; document.getElementById("dotacion_001_sel_director_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_003_sel_director_tipo_jornada").disabled = true; document.getElementById("dotacion_003_sel_director_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_004_sel_director_horas_semanales").disabled = true; document.getElementById("dotacion_004_sel_director_horas_semanales").value = "0";
                document.getElementById("dotacion_001_sel_director_existe").selectedIndex = 2;
            }
            break;
        case 2://asistente
            var asistente_ = $("#dotacion_006_sel_asistente_cantidad").val();
            if (asistente_ != "0" && asistente_ != "") {
                document.getElementById("dotacion_007_sel_asistente_tipo_jornada").disabled = false; document.getElementById("dotacion_008_sel_asistente_horas_semanales").disabled = false; document.getElementById("dotacion_005_sel_asistente_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_007_sel_asistente_tipo_jornada").disabled = true; document.getElementById("dotacion_007_sel_asistente_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_008_sel_asistente_horas_semanales").disabled = true; document.getElementById("dotacion_008_sel_asistente_horas_semanales").value = "0";
                document.getElementById("dotacion_005_sel_asistente_existe").selectedIndex = 2;
            }
            break;
        case 3://psicologo
            var psicologo_ = $("#dotacion_010_sel_psicologo_cantidad").val();
            if (psicologo_ != "0" && psicologo_ != "") {
                document.getElementById("dotacion_011_sel_psicologo_tipo_jornada").disabled = false; document.getElementById("dotacion_012_sel_psicologo_horas_semanales").disabled = false; document.getElementById("dotacion_009_sel_psicologo_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_011_sel_psicologo_tipo_jornada").disabled = true; document.getElementById("dotacion_011_sel_psicologo_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_012_sel_psicologo_horas_semanales").disabled = true; document.getElementById("dotacion_012_sel_psicologo_horas_semanales").value = "0";
                document.getElementById("dotacion_009_sel_psicologo_existe").selectedIndex = 2;
            }
            break;
        case 4://enfermero
            var enfermero_ = $("#dotacion_014_sel_enfermero_cantidad").val();
            if (enfermero_ != "0" && enfermero_ != "") {
                document.getElementById("dotacion_015_sel_enfermero_tipo_jornada").disabled = false; document.getElementById("dotacion_016_sel_enfermero_horas_semanales").disabled = false; document.getElementById("dotacion_013_sel_enfermero_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_015_sel_enfermero_tipo_jornada").disabled = true; document.getElementById("dotacion_015_sel_enfermero_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_016_sel_enfermero_horas_semanales").disabled = true; document.getElementById("dotacion_016_sel_enfermero_horas_semanales").value = "0";
                document.getElementById("dotacion_013_sel_enfermero_existe").selectedIndex = 2;
            }
            break;
        case 5://auxenfermero
            var auxenfermero_ = $("#dotacion_018_sel_auxenfermero_cantidad").val();
            if (auxenfermero_ != "0" && auxenfermero_ != "") {
                document.getElementById("dotacion_019_sel_auxenfermero_tipo_jornada").disabled = false; document.getElementById("dotacion_020_sel_auxenfermero_horas_semanales").disabled = false; document.getElementById("dotacion_017_sel_auxenfermero_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_019_sel_auxenfermero_tipo_jornada").disabled = true; document.getElementById("dotacion_019_sel_auxenfermero_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_020_sel_auxenfermero_horas_semanales").disabled = true; document.getElementById("dotacion_020_sel_auxenfermero_horas_semanales").value = "0";
                document.getElementById("dotacion_017_sel_auxenfermero_existe").selectedIndex = 2;
            }
            break;
        case 6://medico
            var medico_ = $("#dotacion_022_sel_medico_cantidad").val();
            if (medico_ != "0" && medico_ != "") {
                document.getElementById("dotacion_023_sel_medico_tipo_jornada").disabled = false; document.getElementById("dotacion_024_sel_medico_horas_semanales").disabled = false; document.getElementById("dotacion_021_sel_medico_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_023_sel_medico_tipo_jornada").disabled = true; document.getElementById("dotacion_023_sel_medico_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_024_sel_medico_horas_semanales").disabled = true; document.getElementById("dotacion_024_sel_medico_horas_semanales").value = "0";
                document.getElementById("dotacion_021_sel_medico_existe").selectedIndex = 2;
            }
            break;
        case 7://psiquiatra
            var psiquiatra_ = $("#dotacion_026_sel_psiquiatra_cantidad").val();
            if (psiquiatra_ != "0" && psiquiatra_ != "") {
                document.getElementById("dotacion_027_sel_psiquiatra_tipo_jornada").disabled = false; document.getElementById("dotacion_028_sel_psiquiatra_horas_semanales").disabled = false; document.getElementById("dotacion_025_sel_psiquiatra_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_027_sel_psiquiatra_tipo_jornada").disabled = true; document.getElementById("dotacion_027_sel_psiquiatra_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_028_sel_psiquiatra_horas_semanales").disabled = true; document.getElementById("dotacion_028_sel_psiquiatra_horas_semanales").value = "0";
                document.getElementById("dotacion_025_sel_psiquiatra_existe").selectedIndex = 2;
            }
            break;
        case 8://terapeuta_ocup
            var terapeuta_ocup_ = $("#dotacion_030_sel_terapeuta_ocup_cantidad").val();
            if (terapeuta_ocup_ != "0" && terapeuta_ocup_ != "") {
                document.getElementById("dotacion_031_sel_terapeuta_ocup_tipo_jornada").disabled = false; document.getElementById("dotacion_032_sel_terapeuta_ocup_horas_semanales").disabled = false; document.getElementById("dotacion_029_sel_terapeuta_ocup_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_031_sel_terapeuta_ocup_tipo_jornada").disabled = true; document.getElementById("dotacion_031_sel_terapeuta_ocup_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_032_sel_terapeuta_ocup_horas_semanales").disabled = true; document.getElementById("dotacion_032_sel_terapeuta_ocup_horas_semanales").value = "0";
                document.getElementById("dotacion_029_sel_terapeuta_ocup_existe").selectedIndex = 2;
            }
            break;
        case 9://kinesiologo
            var kinesiologo_ = $("#dotacion_034_sel_kinesiologo_cantidad").val();
            if (kinesiologo_ != "0" && kinesiologo_ != "") {
                document.getElementById("dotacion_035_sel_kinesiologo_tipo_jornada").disabled = false; document.getElementById("dotacion_036_sel_kinesiologo_horas_semanales").disabled = false; document.getElementById("dotacion_033_sel_kinesiologo_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_035_sel_kinesiologo_tipo_jornada").disabled = true; document.getElementById("dotacion_035_sel_kinesiologo_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_036_sel_kinesiologo_horas_semanales").disabled = true; document.getElementById("dotacion_036_sel_kinesiologo_horas_semanales").value = "0";
                document.getElementById("dotacion_033_sel_kinesiologo_existe").selectedIndex = 2;
            }
            break;
        case 10://nutricionista
            var nutricionista_ = $("#dotacion_038_sel_nutricionista_cantidad").val();
            if (nutricionista_ != "0" && nutricionista_ != "") {
                document.getElementById("dotacion_039_sel_nutricionista_tipo_jornada").disabled = false; document.getElementById("dotacion_040_sel_nutricionista_horas_semanales").disabled = false; document.getElementById("dotacion_037_sel_nutricionista_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_039_sel_nutricionista_tipo_jornada").disabled = true; document.getElementById("dotacion_039_sel_nutricionista_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_040_sel_nutricionista_horas_semanales").disabled = true; document.getElementById("dotacion_040_sel_nutricionista_horas_semanales").value = "0";
                document.getElementById("dotacion_037_sel_nutricionista_existe").selectedIndex = 2;
            }
            break;
        case 11://fonoaudiologo
            var fonoaudiologo_ = $("#dotacion_042_sel_fonoaudiologo_cantidad").val();
            if (fonoaudiologo_ != "0" && fonoaudiologo_ != "") {
                document.getElementById("dotacion_043_sel_fonoaudiologo_tipo_jornada").disabled = false; document.getElementById("dotacion_044_sel_fonoaudiologo_horas_semanales").disabled = false; document.getElementById("dotacion_041_sel_fonoaudiologo_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_043_sel_fonoaudiologo_tipo_jornada").disabled = true; document.getElementById("dotacion_043_sel_fonoaudiologo_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_044_sel_fonoaudiologo_horas_semanales").disabled = true; document.getElementById("dotacion_044_sel_fonoaudiologo_horas_semanales").value = "0";
                document.getElementById("dotacion_041_sel_fonoaudiologo_existe").selectedIndex = 2;
            }
            break;
        case 12://profesorEducaFisica
            var profesorEducaFisica_ = $("#dotacion_046_sel_profesorEducaFisica_cantidad").val();
            if (profesorEducaFisica_ != "0" && profesorEducaFisica_ != "") {
                document.getElementById("dotacion_047_sel_profesorEducaFisica_tipo_jornada").disabled = false; document.getElementById("dotacion_048_sel_profesorEducaFisica_horas_semanales").disabled = false; document.getElementById("dotacion_045_sel_profesorEducaFisica_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_047_sel_profesorEducaFisica_tipo_jornada").disabled = true; document.getElementById("dotacion_047_sel_profesorEducaFisica_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_048_sel_profesorEducaFisica_horas_semanales").disabled = true; document.getElementById("dotacion_048_sel_profesorEducaFisica_horas_semanales").value = "0";
                document.getElementById("dotacion_045_sel_profesorEducaFisica_existe").selectedIndex = 2;
            }
            break;
        case 13://psicopedagog
            var psicopedagogo_ = $("#dotacion_050_sel_psicopedagogo_cantidad").val();
            if (psicopedagogo_ != "0" && psicopedagogo_ != "") {
                document.getElementById("dotacion_051_sel_psicopedagogo_tipo_jornada").disabled = false; document.getElementById("dotacion_052_sel_psicopedagogo_horas_semanales").disabled = false; document.getElementById("dotacion_049_sel_psicopedagogo_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_051_sel_psicopedagogo_tipo_jornada").disabled = true; document.getElementById("dotacion_051_sel_psicopedagogo_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_052_sel_psicopedagogo_horas_semanales").disabled = true; document.getElementById("dotacion_052_sel_psicopedagogo_horas_semanales").value = "0";
                document.getElementById("dotacion_049_sel_psicopedagogo_existe").selectedIndex = 2;
            }
            break;
        case 14://educadoraParvulos
            var educadoraParvulos_ = $("#dotacion_054_sel_educadoraParvulos_cantidad").val();
            if (educadoraParvulos_ != "0" && educadoraParvulos_ != "") {
                document.getElementById("dotacion_055_sel_educadoraParvulos_tipo_jornada").disabled = false; document.getElementById("dotacion_056_sel_educadoraParvulos_horas_semanales").disabled = false; document.getElementById("dotacion_053_sel_educadoraParvulos_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_055_sel_educadoraParvulos_tipo_jornada").disabled = true; document.getElementById("dotacion_055_sel_educadoraParvulos_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_056_sel_educadoraParvulos_horas_semanales").disabled = true; document.getElementById("dotacion_056_sel_educadoraParvulos_horas_semanales").value = "0";
                document.getElementById("dotacion_053_sel_educadoraParvulos_existe").selectedIndex = 2;
            }
            break;
        case 15://educadoraTratoDirecto
            var educadoraTratoDirecto_ = $("#dotacion_058_sel_educadoraTratoDirecto_cantidad").val();
            if (educadoraTratoDirecto_ != "0" && educadoraTratoDirecto_ != "") {
                document.getElementById("dotacion_059_sel_educadoraTratoDirecto_tipo_jornada").disabled = false; document.getElementById("dotacion_060_sel_educadoraTratoDirecto_horas_semanales").disabled = false; document.getElementById("dotacion_057_sel_educadoraTratoDirecto_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_059_sel_educadoraTratoDirecto_tipo_jornada").disabled = true; document.getElementById("dotacion_059_sel_educadoraTratoDirecto_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_060_sel_educadoraTratoDirecto_horas_semanales").disabled = true; document.getElementById("dotacion_060_sel_educadoraTratoDirecto_horas_semanales").value = "0";
                document.getElementById("dotacion_057_sel_educadoraTratoDirecto_existe").selectedIndex = 2;
            }
            break;
        case 16://manipuladorAlimentos
            var manipuladorAlimentos_ = $("#dotacion_062_sel_manipuladorAlimentos_cantidad").val();
            if (manipuladorAlimentos_ != "0" && manipuladorAlimentos_ != "") {
                document.getElementById("dotacion_063_sel_manipuladorAlimentos_tipo_jornada").disabled = false; document.getElementById("dotacion_064_sel_manipuladorAlimentos_horas_semanales").disabled = false; document.getElementById("dotacion_061_sel_manipuladorAlimentos_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_063_sel_manipuladorAlimentos_tipo_jornada").disabled = true; document.getElementById("dotacion_063_sel_manipuladorAlimentos_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_064_sel_manipuladorAlimentos_horas_semanales").disabled = true; document.getElementById("dotacion_064_sel_manipuladorAlimentos_horas_semanales").value = "0";
                document.getElementById("dotacion_061_sel_manipuladorAlimentos_existe").selectedIndex = 2;
            }
            break;
        case 17://apoyoAdministrativo
            var apoyoAdministrativo_ = $("#dotacion_066_sel_apoyoAdministrativo_cantidad").val();
            if (apoyoAdministrativo_ != "0" && apoyoAdministrativo_ != "") {
                document.getElementById("dotacion_067_sel_apoyoAdministrativo_tipo_jornada").disabled = false; document.getElementById("dotacion_068_sel_apoyoAdministrativo_horas_semanales").disabled = false; document.getElementById("dotacion_065_sel_apoyoAdministrativo_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_067_sel_apoyoAdministrativo_tipo_jornada").disabled = true; document.getElementById("dotacion_067_sel_apoyoAdministrativo_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_068_sel_apoyoAdministrativo_horas_semanales").disabled = true; document.getElementById("dotacion_068_sel_apoyoAdministrativo_horas_semanales").value = "0";
                document.getElementById("dotacion_065_sel_apoyoAdministrativo_existe").selectedIndex = 2;
            }
            break;
        case 18://personalAseo
            var personalAseo_ = $("#dotacion_070_sel_personalAseo_cantidad").val();
            if (personalAseo_ != "0" && personalAseo_ != "") {
                document.getElementById("dotacion_071_sel_personalAseo_tipo_jornada").disabled = false; document.getElementById("dotacion_072_sel_personalAseo_horas_semanales").disabled = false; document.getElementById("dotacion_069_sel_personalAseo_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_071_sel_personalAseo_tipo_jornada").disabled = true; document.getElementById("dotacion_071_sel_personalAseo_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_072_sel_personalAseo_horas_semanales").disabled = true; document.getElementById("dotacion_072_sel_personalAseo_horas_semanales").value = "0";
                document.getElementById("dotacion_069_sel_personalAseo_existe").selectedIndex = 2;
            }
            break;
        case 19://personalLavandería
            var personalLavanderia_ = $("#dotacion_074_sel_personalLavandería_cantidad").val();
            if (personalLavanderia_ != "0" && personalLavanderia_ != "") {
                document.getElementById("dotacion_075_sel_personalLavandería_tipo_joranada").disabled = false; document.getElementById("dotacion_076_sel_personalLavandería_horas_semanales").disabled = false; document.getElementById("dotacion_073_sel_personalLavanderia_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_075_sel_personalLavandería_tipo_joranada").disabled = true; document.getElementById("dotacion_075_sel_personalLavandería_tipo_joranada").selectedIndex = 0;
                document.getElementById("dotacion_076_sel_personalLavandería_horas_semanales").disabled = true; document.getElementById("dotacion_076_sel_personalLavandería_horas_semanales").value = "0";
                document.getElementById("dotacion_073_sel_personalLavanderia_existe").selectedIndex = 2;
            }
            break;
        case 20://monitoresTalleristas
            var monitoresTalleristas_ = $("#dotacion_078_sel_monitoresTalleristas_cantidad").val();
            if (monitoresTalleristas_ != "0" && monitoresTalleristas_ != "") {
                document.getElementById("dotacion_079_sel_monitoresTalleristas_tipo_jornada").disabled = false; document.getElementById("dotacion_080_sel_monitoresTalleristas_horas_semanales").disabled = false; document.getElementById("dotacion_077_sel_monitoresTalleristas_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_079_sel_monitoresTalleristas_tipo_jornada").disabled = true; document.getElementById("dotacion_079_sel_monitoresTalleristas_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_080_sel_monitoresTalleristas_horas_semanales").disabled = true; document.getElementById("dotacion_080_sel_monitoresTalleristas_horas_semanales").value = "0";
                document.getElementById("dotacion_077_sel_monitoresTalleristas_existe").selectedIndex = 2;
            }
            break;
        case 21://alumnosPractica
            var alumnosPractica_ = $("#dotacion_082_sel_alumnosPractica_cantidad").val();
            if (alumnosPractica_ != "0" && alumnosPractica_ != "") {
                document.getElementById("dotacion_083_sel_alumnosPractica_tipo_jornada").disabled = false; document.getElementById("dotacion_084_sel_alumnosPractica_horas_semanales").disabled = false; document.getElementById("dotacion_081_sel_alumnosPractica_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_083_sel_alumnosPractica_tipo_jornada").disabled = true; document.getElementById("dotacion_083_sel_alumnosPractica_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_084_sel_alumnosPractica_horas_semanales").disabled = true; document.getElementById("dotacion_084_sel_alumnosPractica_horas_semanales").value = "0";
                document.getElementById("dotacion_081_sel_alumnosPractica_existe").selectedIndex = 2;
            }
            break;
        case 22://apoyoVoluntario
            var apoyoVoluntario_ = $("#dotacion_086_sel_apoyoVoluntario_cantidad").val();
            if (apoyoVoluntario_ != "0" && apoyoVoluntario_ != "") {
                document.getElementById("dotacion_087_sel_apoyoVoluntario_tipo_jornada").disabled = false; document.getElementById("dotacion_088_sel_apoyoVoluntario_horas_semanales").disabled = false; document.getElementById("dotacion_085_sel_apoyoVoluntario_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_087_sel_apoyoVoluntario_tipo_jornada").disabled = true; document.getElementById("dotacion_087_sel_apoyoVoluntario_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_088_sel_apoyoVoluntario_horas_semanales").disabled = true; document.getElementById("dotacion_088_sel_apoyoVoluntario_horas_semanales").value = "0";
                document.getElementById("dotacion_085_sel_apoyoVoluntario_existe").selectedIndex = 2;
            }
            break;
        case 23://sel_Otros
            var sel_Otros_ = $("#dotacion_090_sel_Otros_cantidad").val();
            if (sel_Otros_ != "0" && sel_Otros_ != "") {
                document.getElementById("dotacion_091_sel_Otros_tipo_jornada").disabled = false; document.getElementById("dotacion_092_sel_Otros_horas_semanales").disabled = false; document.getElementById("dotacion_089_sel_Otros_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_091_sel_Otros_tipo_jornada").disabled = true; document.getElementById("dotacion_091_sel_Otros_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_092_sel_Otros_horas_semanales").disabled = true; document.getElementById("dotacion_092_sel_Otros_horas_semanales").value = "0";
                document.getElementById("dotacion_089_sel_Otros_existe").selectedIndex = 2;
            }
            break;
        case 24://PersonalLicenciaMedica
            var PersonalLicenciaMedica_ = $("#dotacion_094_sel_PersonalLicenciaMedica_cantidad").val();
            if (PersonalLicenciaMedica_ != "0" && PersonalLicenciaMedica_ != "") {
                document.getElementById("dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada").disabled = false; document.getElementById("dotacion_096_sel_PersonalLicenciaMedica_horas_semanales").disabled = false; document.getElementById("dotacion_093_sel_PersonalLicenciaMedica_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada").disabled = true; document.getElementById("dotacion_095_sel_PersonalLicenciaMedica_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_096_sel_PersonalLicenciaMedica_horas_semanales").disabled = true; document.getElementById("dotacion_096_sel_PersonalLicenciaMedica_horas_semanales").value = "0";
                document.getElementById("dotacion_093_sel_PersonalLicenciaMedica_existe").selectedIndex = 2;
            }
            break;
        case 25://PersonalLicenciaMedicaConSuplente
            var PersonalLicenciaMedicaConSuplente_ = $("#dotacion_098_sel_PersonalLicenciaMedicaConSuplente_cantidad").val();
            if (PersonalLicenciaMedicaConSuplente_ != "0" && PersonalLicenciaMedicaConSuplente_ != "") {
                document.getElementById("dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada").disabled = false; document.getElementById("dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales").disabled = false; document.getElementById("dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe").selectedIndex = 1;
            }
            else {
                document.getElementById("dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada").disabled = true; document.getElementById("dotacion_099_sel_PersonalLicenciaMedicaConSuplente_tipo_jornada").selectedIndex = 0;
                document.getElementById("dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales").disabled = true; document.getElementById("dotacion_100_sel_PersonalLicenciaMedicaConSuplente_horas_semanales").value = "0";
                document.getElementById("dotacion_097_sel_PersonalLicenciaMedicaConSuplente_existe").selectedIndex = 2;
            }
            break;
    }

}