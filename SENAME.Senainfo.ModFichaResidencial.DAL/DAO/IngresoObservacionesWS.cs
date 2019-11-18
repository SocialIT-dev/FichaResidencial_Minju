using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class ObservacionesFichaResidencialDao : Repository
    {
        public System.Xml.XmlDocument GrabarObservacionesPjud(
                            int? abnSistFem, 
                            int? abnSistMas,
                            int? accesoAgua,
                            int? accesoDisca,
                            int? accesoInternet,
                            int? adolEmbarazada,
                            int? adolNegControl,
                            int? almaceAlimento,
                            int? alumnPracHor,
                            int? alumnPracJor,
                            int? ambienPoblac,
                            int? apoyoAdmHor,
                            int? apoyoAdmJor,
                            int? apoyoVolunHor,
                            int? apoyoVolunJor,
                            int? asistSocHor,
                            int? asistSocJor,
                            int? autocuidado,
                            int? auxEnferHor,
                            int? auxEnferJor,
                            int? cantAlumnPrac, 
                            int? cantApoyoAdm,
                            int? cantApoyoVolun, 
                            int? cantAreasVerd, 
                            int? cantAsitSocial,
                            int? cantAuxEnfer, 
                            int? cantBanosNna, 
                            int? cantBanosPubl, 
                            int? cantCamasNna,
                            int? cantClosetLoc, 
                            int? cantCocinaOp, 
                            int? cantComedorOp, 
                            int? cantDir, 
                            int? cantDormNna, 
                            int? cantDuchasNna, 
                            int? cantEduTratDir, 
                            int? cantEducadParv,
                            int? cantEnfer, 
                            int? cantEnfermOp, 
                            int? cantEspacRecr, 
                            int? cantEspacVisit, 
                            int? cantFonoAud, 
                            int? cantKine, 
                            int? cantLavanOp, 
                            int? cantManipAlim, 
                            int? cantMedico, 
                            int? cantMonitAll, 
                            int? cantNutri, 
                            int? cantOficAdm, 
                            int? cantOtrosOp, 
                            int? cantPersLav, 
                            int? cantPersLicMed, 
                            int? cantPersSupl, 
                            int? cantPersonalAseo, 
                            int? cantProfEd, 
                            int? cantPsico, 
                            int? cantPsicop, 
                            int? cantPsiqui,
                            int? cantSalaEstar,
                            int? cantSalaMulti, 
                            int? cantSalaRecep, 
                            int? cantSalaReun, 
                            int? cantTerapOcup, 
                            int? capPersonal, 
                            int? catRedes, 
                            int? certiSanitario,
                            int? codCorte,
                            int? codTribunal, 
                            int? computadores, 
                            int? controlAdol, 
                            int? controlMedicDias, 
                            string crrConsejeroVisitante, 
                            string crrJuezVisitante, 
                            string  ctnLitigante,
                            string ctnLitiganteNna,
                            string ctnLitiganteTot,
                            int? cuentaConProt, 
                            int? cuentaConRegist,
                            int? dirOpHor, 
                            int? dirOpJor, 
                            int? eduTratDirHor, 
                            int? eduTratDirJor, 
                            int? educadParvHor, 
                            int? educadParvJor, 
                            int? enferOpHor, 
                            int? enferOpJor, 
                            int? entregAlimento, 
                            int? espDesaTareas, 
                            int? estadoGas, 
                            int? evalUno, 
                            int? evalDos, 
                            int? evalTres, 
                            int? evalCuatro, 
                            int? evalAccesAgua, 
                            int? evalAccesDisc, 
                            int? evalAlimPobl, 
                            int? evalAreasVerd, 
                            int? evalBanosNna, 
                            int? evalBanosPubl, 
                            int? evalCamasNna, 
                            int? evalClosetLoc, 
                            int? evalCocinaOp, 
                            int? evalComedorOp, 
                            int? evalDormNna, 
                            int? evalDuchasNna, 
                            int? evalEnfermOp, 
                            int? evalEspacRecr, 
                            int? evalEspacVisit, 
                            int? evalEstCalef, 
                            int? evalInstHab, 
                            int? evalLavanOp, 
                            int? evalOficAdm, 
                            int? evalSalaEstar, 
                            int? evalSalaMulti, 
                            int? evalSalaRecep, 
                            int? evalSalaReun, 
                            int? evalSistCalef, 
                            int? evalUtilAseo, 
                            int? evalVentAdec, 
                            int? evalVestAdec, 
                            int? extintores, 
                            DateTime fecVisitaActual, 
                            DateTime fecVisitaAnterior, 
                            int? fonoOpHor, 
                            int? fonoOpJor, 
                            string glsObsAntecAlim, 
                            string glsObsAntecCap, 
                            string glsObsAntecEduc, 
                            string glsObsAntecMat, 
                            string glsObsAntecPer, 
                            string glsObsAntecPob,
                            string glsObsAntecRes, 
                            string glsObsAntecSalud, 
                            string glsObsAntecSegur, 
                            string glsPersonaResidenciaUno, 
                            string glsPersonaResidenciaDos, 
                            int? habilLaboral, 
                            string horaFinVisita, 
                            string horaInicioVisita, 
                            int? hospFem, 
                            int? hospMas, 
                            int? instalaciones, 
                            int? kineOpHor, 
                            int? kineOpJor, 
                            int? manipAlimHor, 
                            int? manipAlimJor, 
                            int? matBiblio, 
                            int? medOpHor, 
                            int? medOpJor, 
                            int? menuBalanceado, 
                            int? menuEspecial, 
                            int? montTallHor, 
                            int? montTallJor, 
                            int? ninoAbnFem, 
                            int? ninoAbnMas, 
                            int? ninoIngFem, 
                            int? ninoIngMas, 
                            int? ninoSinSenFem, 
                            int? ninoSinSenMas, 
                            int? ninoSuspFem, 
                            int? ninoSuspMas,
                            int? nnaAcerFem,
                            int? nnaAcerMas,
                            int? nnaAdopFem,
                            int? nnaAdopMas,
                            int? nnaFem,
                            int? nnaJuez, 
                            int? nnaMas, 
                            int? nnaReservada, 
                            int? numAsistEducEspec, 
                            int? numAsistEducNivel, 
                            int? numAsistEstable, 
                            int? numCesfam, 
                            int? numComidaEntreFin, 
                            int? numComidaEntreSem, 
                            int? numDiscapacidad, 
                            int? numDrogas, 
                            int? numEnferCronica, 
                            int? numMatriCance, 
                            int? numMentalConDiag, 
                            int? numMentalSinDiag, 
                            int? numNoAsistEstable, 
                            int? numRecibMedic,
                            int? numRetEscolar, 
                            int? numSaludTrat, 
                            int? nutriOpHor, 
                            int? nutriOpJor, 
                            string obsGenDes, 
                            int? otraPlazaFem, 
                            int? otraPlazaMas, 
                            int? otrosOpHor, 
                            int? otrosOpJor, 
                            int? persLavHor, 
                            int? persLavJor, 
                            int? persLicMedHor, 
                            int? persLicMedJor, 
                            int? persSuplHor, 
                            int? persSuplJor, 
                            int? personalAseoHora, 
                            int? personalAseoJor, 
                            int? plaSenameFem, 
                            int? plaSenameMas, 
                            int? planEmergencia, 
                            int? planEmergenciaCal, 
                            int? planiMenu, 
                            int? pobVigenteFem, 
                            int? pobVigenteMas, 
                            int? procInformacion, 
                            int? profEdHor, 
                            int? profEdJor, 
                            int? protocoloAcogida, 
                            int? protocoloActuacion, 
                            int? protocoloApadri, 
                            int? protocoloConvivencia, 
                            int? protocoloDerivRes, 
                            int? protocoloEgreso, 
                            int? protocoloEspacios, 
                            int? protocoloInformacion, 
                            int? protocoloReclamos, 
                            int? protocoloRedSalud, 
                            int? protocoloRegistro, 
                            int? psicOpHor, 
                            int? psicOpJor,
                            int? psicopOpHor,
                            int? psicopOpJor,
                            int? psiqOpHor, 
                            int? psiqOpJor,
                            int? rangoEtaAtencion, 
                            int? rangoEtaPredominante, 
                            int? recNacidoFem, 
                            int? recNacidoMas, 
                            int? resMayFem, 
                            int? resMayMas, 
                            int? residenciaSuvSename, 
                            int? sanDesFum, 
                            int? senaletica, 
                            int? sexo, 
                            int? simulEmergencia, 
                            int? sistElectrico, 
                            int? sisteCalefac, 
                            string sugResidencia, 
                            string sugSename, 
                            int? terapOcupHor, 
                            int? terapOcupJor, 
                            string tipVulFrecuente, 
                            int? utilesAseo, 
                            int? ventiAdecua,
                            int? vestAdecuado, 
                            int? viaEvacuacion, 
                            int? vinculacionResi,
                            int? zonaSeguridad,
                            int? codFichaPadre,
                            int? codFichaPjud,
                            int? RutJuez,
                            string DV_Juez,
                            int? RutConsejero,
                            string DV_Consejero)
        {
            System.Xml.XmlDocument doc = new System.Xml.XmlDocument();
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
        
                DataTable dt = new DataTable();
                try
                {
                    using (var con = GetConnection())
                    {
                        con.Open();
                        using (var cmd = new SqlCommand("FichaRes.InsertObservacionesPjud", con))
                        {
                            SqlDataAdapter da = new SqlDataAdapter(cmd);

                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.AddWithValue("@abnSistFem", abnSistFem.HasValue ? (object)abnSistFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@abnSistMas", abnSistMas.HasValue ? (object)abnSistMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@accesoAgua", accesoAgua.HasValue ? (object)accesoAgua : DBNull.Value);
                            cmd.Parameters.AddWithValue("@accesoDisca", accesoDisca.HasValue ? (object)accesoDisca : DBNull.Value);
                            cmd.Parameters.AddWithValue("@accesoInternet", accesoInternet.HasValue ? (object)accesoInternet : DBNull.Value);
                            cmd.Parameters.AddWithValue("@adolEmbarazada", adolEmbarazada.HasValue ? (object)adolEmbarazada : DBNull.Value);
                            cmd.Parameters.AddWithValue("@adolNegControl", adolNegControl.HasValue ? (object)adolNegControl : DBNull.Value);
                            cmd.Parameters.AddWithValue("@almaceAlimento", almaceAlimento.HasValue ? (object)almaceAlimento : DBNull.Value);
                            cmd.Parameters.AddWithValue("@alumnPracHor", alumnPracHor.HasValue ? (object)alumnPracHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@alumnPracJor", alumnPracJor.HasValue ? (object)alumnPracJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ambienPoblac", ambienPoblac.HasValue ? (object)ambienPoblac : DBNull.Value);
                            cmd.Parameters.AddWithValue("@apoyoAdmHor", apoyoAdmHor.HasValue ? (object)apoyoAdmHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@apoyoAdmJor", apoyoAdmJor.HasValue ? (object)apoyoAdmJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@apoyoVolunHor", apoyoVolunHor.HasValue ? (object)apoyoVolunHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@apoyoVolunJor", apoyoVolunJor.HasValue ? (object)apoyoVolunJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@asistSocHor", asistSocHor.HasValue ? (object)asistSocHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@asistSocJor", asistSocJor.HasValue ? (object)asistSocJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@autocuidado", autocuidado.HasValue ? (object)autocuidado : DBNull.Value);
                            cmd.Parameters.AddWithValue("@auxEnferHor", auxEnferHor.HasValue ? (object)auxEnferHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@auxEnferJor", auxEnferJor.HasValue ? (object)auxEnferJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantAlumnPrac", cantAlumnPrac.HasValue ? (object)cantAlumnPrac : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantApoyoAdm", cantApoyoAdm.HasValue ? (object)cantApoyoAdm : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantApoyoVolun", cantApoyoVolun.HasValue ? (object)cantApoyoVolun : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantAreasVerd", cantAreasVerd.HasValue ? (object)cantAreasVerd : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantAsitSocial", cantAsitSocial.HasValue ? (object)cantAsitSocial : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantAuxEnfer", cantAuxEnfer.HasValue ? (object)cantAuxEnfer : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantBanosNna", cantBanosNna.HasValue ? (object)cantBanosNna : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantBanosPubl", cantBanosPubl.HasValue ? (object)cantBanosPubl : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantCamasNna", cantCamasNna.HasValue ? (object)cantCamasNna : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantClosetLoc", cantClosetLoc.HasValue ? (object)cantClosetLoc : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantCocinaOp", cantCocinaOp.HasValue ? (object)cantCocinaOp : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantComedorOp", cantComedorOp.HasValue ? (object)cantComedorOp : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantDir", cantDir.HasValue ? (object)cantDir : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantDormNna", cantDormNna.HasValue ? (object)cantDormNna : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantDuchasNna", cantDuchasNna.HasValue ? (object)cantDuchasNna : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantEduTratDir", cantEduTratDir.HasValue ? (object)cantEduTratDir : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantEducadParv", cantEducadParv.HasValue ? (object)cantEducadParv : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantEnfer", cantEnfer.HasValue ? (object)cantEnfer : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantEnfermOp", cantEnfermOp.HasValue ? (object)cantEnfermOp : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantEspacRecr", cantEspacRecr.HasValue ? (object)cantEspacRecr : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantEspacVisit", cantEspacVisit.HasValue ? (object)cantEspacVisit : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantFonoAud", cantFonoAud.HasValue ? (object)cantFonoAud : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantKine", cantKine.HasValue ? (object)cantKine : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantLavanOp", cantLavanOp.HasValue ? (object)cantLavanOp : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantManipAlim", cantManipAlim.HasValue ? (object)cantManipAlim : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantMedico", cantMedico.HasValue ? (object)cantMedico : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantMonitAll", cantMonitAll.HasValue ? (object)cantMonitAll : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantNutri", cantNutri.HasValue ? (object)cantNutri : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantOficAdm", cantOficAdm.HasValue ? (object)cantOficAdm : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantOtrosOp", cantOtrosOp.HasValue ? (object)cantOtrosOp : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantPersLav", cantPersLav.HasValue ? (object)cantPersLav : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantPersLicMed", cantPersLicMed.HasValue ? (object)cantPersLicMed : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantPersSupl", cantPersSupl.HasValue ? (object)cantPersSupl : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantPersonalAseo", cantPersonalAseo.HasValue ? (object)cantPersonalAseo : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantProfEd", cantProfEd.HasValue ? (object)cantProfEd : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantPsico", cantPsico.HasValue ? (object)cantPsico : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantPsicop", cantPsicop.HasValue ? (object)cantPsicop : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantPsiqui", cantPsiqui.HasValue ? (object)cantPsiqui : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantSalaEstar", cantSalaEstar.HasValue ? (object)cantSalaEstar : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantSalaMulti", cantSalaMulti.HasValue ? (object)cantSalaMulti : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantSalaRecep", cantSalaRecep.HasValue ? (object)cantSalaRecep : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantSalaReun", cantSalaReun.HasValue ? (object)cantSalaReun : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cantTerapOcup", cantTerapOcup.HasValue ? (object)cantTerapOcup : DBNull.Value);
                            cmd.Parameters.AddWithValue("@capPersonal", capPersonal.HasValue ? (object)capPersonal : DBNull.Value);
                            cmd.Parameters.AddWithValue("@catRedes", catRedes.HasValue ? (object)catRedes : DBNull.Value);
                            cmd.Parameters.AddWithValue("@certiSanitario", certiSanitario.HasValue ? (object)certiSanitario : DBNull.Value);
                            cmd.Parameters.AddWithValue("@codCorte", codCorte.HasValue ? (object)codCorte : DBNull.Value);
                            cmd.Parameters.AddWithValue("@codTribunal", codTribunal.HasValue ? (object)codTribunal : DBNull.Value);
                            cmd.Parameters.AddWithValue("@computadores", computadores.HasValue ? (object)computadores : DBNull.Value);
                            cmd.Parameters.AddWithValue("@controlAdol", controlAdol.HasValue ? (object)controlAdol : DBNull.Value);
                            cmd.Parameters.AddWithValue("@controlMedicDias", controlMedicDias.HasValue ? (object)controlMedicDias : DBNull.Value);
                            cmd.Parameters.AddWithValue("@crrConsejeroVisitante", crrConsejeroVisitante);
                            cmd.Parameters.AddWithValue("@crrJuezVisitante", crrJuezVisitante);
                            cmd.Parameters.AddWithValue("@ctnLitigante", ctnLitigante);
                            cmd.Parameters.AddWithValue("@ctnLitiganteNna", ctnLitiganteNna);
                            cmd.Parameters.AddWithValue("@ctnLitiganteTot", ctnLitiganteTot);
                            cmd.Parameters.AddWithValue("@cuentaConProt", cuentaConProt.HasValue ? (object)cuentaConProt : DBNull.Value);
                            cmd.Parameters.AddWithValue("@cuentaConRegist", cuentaConRegist.HasValue ? (object)cuentaConRegist : DBNull.Value);
                            cmd.Parameters.AddWithValue("@dirOpHor", dirOpHor.HasValue ? (object)dirOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@dirOpJor", dirOpJor.HasValue ? (object)dirOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@eduTratDirHor", eduTratDirHor.HasValue ? (object)eduTratDirHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@eduTratDirJor", eduTratDirJor.HasValue ? (object)eduTratDirJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@educadParvHor", educadParvHor.HasValue ? (object)educadParvHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@educadParvJor", educadParvJor.HasValue ? (object)educadParvJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@enferOpHor", enferOpHor.HasValue ? (object)enferOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@enferOpJor", enferOpJor.HasValue ? (object)enferOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@entregAlimento", entregAlimento.HasValue ? (object)entregAlimento : DBNull.Value);
                            cmd.Parameters.AddWithValue("@espDesaTareas", espDesaTareas.HasValue ? (object)espDesaTareas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@estadoGas", estadoGas.HasValue ? (object)estadoGas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalUno", evalUno.HasValue ? (object)evalUno : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalDos", evalDos.HasValue ? (object)evalDos : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalTres", evalTres.HasValue ? (object)evalTres : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalCuatro", evalCuatro.HasValue ? (object)evalCuatro : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalAccesAgua", evalAccesAgua.HasValue ? (object)evalAccesAgua : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalAccesDisc", evalAccesDisc.HasValue ? (object)evalAccesDisc : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalAlimPobl", evalAlimPobl.HasValue ? (object)evalAlimPobl : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalAreasVerd", evalAreasVerd.HasValue ? (object)evalAreasVerd : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalBanosNna", evalBanosNna.HasValue ? (object)evalBanosNna : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalBanosPubl", evalBanosPubl.HasValue ? (object)evalBanosPubl : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalCamasNna", evalCamasNna.HasValue ? (object)evalCamasNna : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalClosetLoc", evalClosetLoc.HasValue ? (object)evalClosetLoc : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalCocinaOp", evalCocinaOp.HasValue ? (object)evalCocinaOp : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalComedorOp", evalComedorOp.HasValue ? (object)evalComedorOp : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalDormNna", evalDormNna.HasValue ? (object)evalDormNna : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalDuchasNna", evalDuchasNna.HasValue ? (object)evalDuchasNna : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalEnfermOp", evalEnfermOp.HasValue ? (object)evalEnfermOp : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalEspacRecr", evalEspacRecr.HasValue ? (object)evalEspacRecr : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalEspacVisit", evalEspacVisit.HasValue ? (object)evalEspacVisit : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalEstCalef", evalEstCalef.HasValue ? (object)evalEstCalef : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalInstHab", evalInstHab.HasValue ? (object)evalInstHab : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalLavanOp", evalLavanOp.HasValue ? (object)evalLavanOp : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalOficAdm", evalOficAdm.HasValue ? (object)evalOficAdm : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalSalaEstar", evalSalaEstar.HasValue ? (object)evalSalaEstar : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalSalaMulti", evalSalaMulti.HasValue ? (object)evalSalaMulti : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalSalaRecep", evalSalaRecep.HasValue ? (object)evalSalaRecep : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalSalaReun", evalSalaReun.HasValue ? (object)evalSalaReun : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalSistCalef", evalSistCalef.HasValue ? (object)evalSistCalef : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalUtilAseo", evalUtilAseo.HasValue ? (object)evalUtilAseo : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalVentAdec", evalVentAdec.HasValue ? (object)evalVentAdec : DBNull.Value);
                            cmd.Parameters.AddWithValue("@evalVestAdec", evalVestAdec.HasValue ? (object)evalVestAdec : DBNull.Value);
                            cmd.Parameters.AddWithValue("@extintores", extintores.HasValue ? (object)extintores : DBNull.Value);
                            cmd.Parameters.AddWithValue("@fecVisitaActual", fecVisitaActual);
                            cmd.Parameters.AddWithValue("@fecVisitaAnterior", fecVisitaAnterior);
                            cmd.Parameters.AddWithValue("@fonoOpHor", fonoOpHor.HasValue ? (object)fonoOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@fonoOpJor", fonoOpJor.HasValue ? (object)fonoOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@glsObsAntecAlim", glsObsAntecAlim);
                            cmd.Parameters.AddWithValue("@glsObsAntecCap", glsObsAntecCap);
                            cmd.Parameters.AddWithValue("@glsObsAntecEduc", glsObsAntecEduc);
                            cmd.Parameters.AddWithValue("@glsObsAntecMat", glsObsAntecMat);
                            cmd.Parameters.AddWithValue("@glsObsAntecPer", glsObsAntecPer);
                            cmd.Parameters.AddWithValue("@glsObsAntecPob", glsObsAntecPob);
                            cmd.Parameters.AddWithValue("@glsObsAntecRes", glsObsAntecRes);
                            cmd.Parameters.AddWithValue("@glsObsAntecSalud", glsObsAntecSalud);
                            cmd.Parameters.AddWithValue("@glsObsAntecSegur", glsObsAntecSegur);
                            cmd.Parameters.AddWithValue("@glsPersonaResidenciaUno", glsPersonaResidenciaUno);
                            cmd.Parameters.AddWithValue("@glsPersonaResidenciaDos", glsPersonaResidenciaDos);
                            cmd.Parameters.AddWithValue("@habilLaboral", habilLaboral.HasValue ? (object)habilLaboral : DBNull.Value);
                            cmd.Parameters.AddWithValue("@horaFinVisita", horaFinVisita);
                            cmd.Parameters.AddWithValue("@horaInicioVisita", horaInicioVisita);
                            cmd.Parameters.AddWithValue("@hospFem", hospFem.HasValue ? (object)hospFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@hospMas", hospMas.HasValue ? (object)hospMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@instalaciones", instalaciones.HasValue ? (object)instalaciones : DBNull.Value);
                            cmd.Parameters.AddWithValue("@kineOpHor", kineOpHor.HasValue ? (object)kineOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@kineOpJor", kineOpJor.HasValue ? (object)kineOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@manipAlimHor", manipAlimHor.HasValue ? (object)manipAlimHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@manipAlimJor", manipAlimJor.HasValue ? (object)manipAlimJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@matBiblio", matBiblio.HasValue ? (object)matBiblio : DBNull.Value);
                            cmd.Parameters.AddWithValue("@medOpHor", medOpHor.HasValue ? (object)medOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@medOpJor", medOpJor.HasValue ? (object)medOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@menuBalanceado", menuBalanceado.HasValue ? (object)menuBalanceado : DBNull.Value);
                            cmd.Parameters.AddWithValue("@menuEspecial", menuEspecial.HasValue ? (object)menuEspecial : DBNull.Value);
                            cmd.Parameters.AddWithValue("@montTallHor", montTallHor.HasValue ? (object)montTallHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@montTallJor", montTallJor.HasValue ? (object)montTallJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ninoAbnFem", ninoAbnFem.HasValue ? (object)ninoAbnFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ninoAbnMas", ninoAbnMas.HasValue ? (object)ninoAbnMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ninoIngFem", ninoIngFem.HasValue ? (object)ninoIngFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ninoIngMas", ninoIngMas.HasValue ? (object)ninoIngMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ninoSinSenFem", ninoSinSenFem.HasValue ? (object)ninoSinSenFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ninoSinSenMas", ninoSinSenMas.HasValue ? (object)ninoSinSenMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ninoSuspFem", ninoSuspFem.HasValue ? (object)ninoSuspFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ninoSuspMas", ninoSuspMas.HasValue ? (object)ninoSuspMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nnaAcerFem", nnaAcerFem.HasValue ? (object)nnaAcerFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nnaAcerMas", nnaAcerMas.HasValue ? (object)nnaAcerMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nnaAdopFem", nnaAdopFem.HasValue ? (object)nnaAdopFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nnaAdopMas", nnaAdopMas.HasValue ? (object)nnaAdopMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nnaFem", nnaFem.HasValue ? (object)nnaFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nnaJuez", nnaJuez.HasValue ? (object)nnaJuez : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nnaMas", nnaMas.HasValue ? (object)nnaMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nnaReservada", nnaReservada.HasValue ? (object)nnaReservada : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numAsistEducEspec", numAsistEducEspec.HasValue ? (object)numAsistEducEspec : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numAsistEducNivel", numAsistEducNivel.HasValue ? (object)numAsistEducNivel : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numAsistEstable", numAsistEstable.HasValue ? (object)numAsistEstable : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numCesfam", numCesfam.HasValue ? (object)numCesfam : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numComidaEntreFin", numComidaEntreFin.HasValue ? (object)numComidaEntreFin : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numComidaEntreSem", numComidaEntreSem.HasValue ? (object)numComidaEntreSem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numDiscapacidad", numDiscapacidad.HasValue ? (object)numDiscapacidad : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numDrogas", numDrogas.HasValue ? (object)numDrogas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numEnferCronica", numEnferCronica.HasValue ? (object)numEnferCronica : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numMatriCance", numMatriCance.HasValue ? (object)numMatriCance : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numMentalConDiag", numMentalConDiag.HasValue ? (object)numMentalConDiag : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numMentalSinDiag", numMentalSinDiag.HasValue ? (object)numMentalSinDiag : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numNoAsistEstable", numNoAsistEstable.HasValue ? (object)numNoAsistEstable : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numRecibMedic", numRecibMedic.HasValue ? (object)numRecibMedic : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numRetEscolar", numRetEscolar.HasValue ? (object)numRetEscolar : DBNull.Value);
                            cmd.Parameters.AddWithValue("@numSaludTrat", numSaludTrat.HasValue ? (object)numSaludTrat : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nutriOpHor", nutriOpHor.HasValue ? (object)nutriOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@nutriOpJor", nutriOpJor.HasValue ? (object)nutriOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@obsGenDes", obsGenDes);
                            cmd.Parameters.AddWithValue("@otraPlazaFem", otraPlazaFem.HasValue ? (object)otraPlazaFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@otraPlazaMas", otraPlazaMas.HasValue ? (object)otraPlazaMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@otrosOpHor", otrosOpHor.HasValue ? (object)otrosOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@otrosOpJor", otrosOpJor.HasValue ? (object)otrosOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@persLavHor", persLavHor.HasValue ? (object)persLavHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@persLavJor", persLavJor.HasValue ? (object)persLavJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@persLicMedHor", persLicMedHor.HasValue ? (object)persLicMedHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@persLicMedJor", persLicMedJor.HasValue ? (object)persLicMedJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@persSuplHor", persSuplHor.HasValue ? (object)persSuplHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@persSuplJor", persSuplJor.HasValue ? (object)persSuplJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@personalAseoHora", personalAseoHora.HasValue ? (object)personalAseoHora : DBNull.Value);
                            cmd.Parameters.AddWithValue("@personalAseoJor", personalAseoJor.HasValue ? (object)personalAseoJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@plaSenameFem", plaSenameFem.HasValue ? (object)plaSenameFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@plaSenameMas", plaSenameMas.HasValue ? (object)plaSenameMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@planEmergencia", planEmergencia.HasValue ? (object)planEmergencia : DBNull.Value);
                            cmd.Parameters.AddWithValue("@planEmergenciaCal", planEmergenciaCal.HasValue ? (object)planEmergenciaCal : DBNull.Value);
                            cmd.Parameters.AddWithValue("@planiMenu", planiMenu.HasValue ? (object)planiMenu : DBNull.Value);
                            cmd.Parameters.AddWithValue("@pobVigenteFem", pobVigenteFem.HasValue ? (object)pobVigenteFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@pobVigenteMas", pobVigenteMas.HasValue ? (object)pobVigenteMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@procInformacion", procInformacion.HasValue ? (object)procInformacion : DBNull.Value);
                            cmd.Parameters.AddWithValue("@profEdHor", profEdHor.HasValue ? (object)profEdHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@profEdJor", profEdJor.HasValue ? (object)profEdJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloAcogida", protocoloAcogida.HasValue ? (object)protocoloAcogida : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloActuacion", protocoloActuacion.HasValue ? (object)protocoloActuacion : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloApadri", protocoloApadri.HasValue ? (object)protocoloApadri : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloConvivencia", protocoloConvivencia.HasValue ? (object)protocoloConvivencia : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloDerivRes", protocoloDerivRes.HasValue ? (object)protocoloDerivRes : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloEgreso", protocoloEgreso.HasValue ? (object)protocoloEgreso : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloEspacios", protocoloEspacios.HasValue ? (object)protocoloEspacios : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloInformacion", protocoloInformacion.HasValue ? (object)protocoloInformacion : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloReclamos", protocoloReclamos.HasValue ? (object)protocoloReclamos : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloRedSalud", protocoloRedSalud.HasValue ? (object)protocoloRedSalud : DBNull.Value);
                            cmd.Parameters.AddWithValue("@protocoloRegistro", protocoloRegistro.HasValue ? (object)protocoloRegistro : DBNull.Value);
                            cmd.Parameters.AddWithValue("@psicOpHor", psicOpHor.HasValue ? (object)psicOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@psicOpJor", psicOpJor.HasValue ? (object)psicOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@psicopOpHor", psicopOpHor.HasValue ? (object)psicopOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@psicopOpJor", psicopOpJor.HasValue ? (object)psicopOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@psiqOpHor", psiqOpHor.HasValue ? (object)psiqOpHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@psiqOpJor", psiqOpJor.HasValue ? (object)psiqOpJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@rangoEtaAtencion", rangoEtaAtencion.HasValue ? (object)rangoEtaAtencion : DBNull.Value);
                            cmd.Parameters.AddWithValue("@rangoEtaPredominante", rangoEtaPredominante.HasValue ? (object)rangoEtaPredominante : DBNull.Value);
                            cmd.Parameters.AddWithValue("@recNacidoFem", recNacidoFem.HasValue ? (object)recNacidoFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@recNacidoMas", recNacidoMas.HasValue ? (object)recNacidoMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@resMayFem", resMayFem.HasValue ? (object)resMayFem : DBNull.Value);
                            cmd.Parameters.AddWithValue("@resMayMas", resMayMas.HasValue ? (object)resMayMas : DBNull.Value);
                            cmd.Parameters.AddWithValue("@residenciaSuvSename", residenciaSuvSename.HasValue ? (object)residenciaSuvSename : DBNull.Value);
                            cmd.Parameters.AddWithValue("@sanDesFum", sanDesFum.HasValue ? (object)sanDesFum : DBNull.Value);
                            cmd.Parameters.AddWithValue("@senaletica", senaletica.HasValue ? (object)senaletica : DBNull.Value);
                            cmd.Parameters.AddWithValue("@sexo", sexo.HasValue ? (object)sexo : DBNull.Value);
                            cmd.Parameters.AddWithValue("@simulEmergencia", simulEmergencia.HasValue ? (object)simulEmergencia : DBNull.Value);
                            cmd.Parameters.AddWithValue("@sistElectrico", sistElectrico.HasValue ? (object)sistElectrico : DBNull.Value);
                            cmd.Parameters.AddWithValue("@sisteCalefac", sisteCalefac.HasValue ? (object)sisteCalefac : DBNull.Value);
                            cmd.Parameters.AddWithValue("@sugResidencia", sugResidencia);
                            cmd.Parameters.AddWithValue("@sugSename", sugSename);
                            cmd.Parameters.AddWithValue("@terapOcupHor", terapOcupHor.HasValue ? (object)terapOcupHor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@terapOcupJor", terapOcupJor.HasValue ? (object)terapOcupJor : DBNull.Value);
                            cmd.Parameters.AddWithValue("@tipVulFrecuente", tipVulFrecuente);
                            cmd.Parameters.AddWithValue("@utilesAseo", utilesAseo.HasValue ? (object)utilesAseo : DBNull.Value);
                            cmd.Parameters.AddWithValue("@ventiAdecua", ventiAdecua.HasValue ? (object)ventiAdecua : DBNull.Value);
                            cmd.Parameters.AddWithValue("@vestAdecuado", vestAdecuado.HasValue ? (object)vestAdecuado : DBNull.Value);
                            cmd.Parameters.AddWithValue("@viaEvacuacion", viaEvacuacion.HasValue ? (object)viaEvacuacion : DBNull.Value);
                            cmd.Parameters.AddWithValue("@vinculacionResi", vinculacionResi.HasValue ? (object)vinculacionResi : DBNull.Value);
                            cmd.Parameters.AddWithValue("@zonaSeguridad", zonaSeguridad.HasValue ? (object)zonaSeguridad : DBNull.Value);
                            cmd.Parameters.AddWithValue("@codFichaPadre", codFichaPadre.HasValue ? (object)codFichaPadre : DBNull.Value);
                            cmd.Parameters.AddWithValue("@codFichaPjud", codFichaPjud.HasValue ? (object)codFichaPjud : DBNull.Value);
                            cmd.Parameters.AddWithValue("@RutJuez", RutJuez.HasValue ? (object)RutJuez : DBNull.Value);
                            cmd.Parameters.AddWithValue("@DV_Juez", DV_Juez);
                            cmd.Parameters.AddWithValue("@RutConsejero", RutConsejero.HasValue ? (object)RutConsejero : DBNull.Value);
                            cmd.Parameters.AddWithValue("@DV_Consejero", DV_Consejero); 
                            da.SelectCommand = cmd;
                            da.Fill(dt);
                            DataRow dr = dt.Rows[0];

                            sb.Append("<FICHA_RESIDENCIAL_PJUD xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>");
                            sb.Append((string)dr["Estatus"]);
                            sb.Append("</FICHA_RESIDENCIAL_PJUD>");
                            doc.LoadXml(sb.ToString());
                            
                        }
                    }
                }
                catch (Exception e)
                {

                    sb.Append("<FICHA_RESIDENCIAL_PJUD xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>");
                    sb.Append("<ESTATUS><CODIGO>4</CODIGO><GLOSA>" + e.Message + "</GLOSA></ESTATUS>");
                    sb.Append("</FICHA_RESIDENCIAL_PJUD>");

                    doc.LoadXml(sb.ToString());
                }
                return doc;
            }
    }
}
