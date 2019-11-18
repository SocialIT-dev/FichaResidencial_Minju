using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

using System.Threading;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class FichaResidencialMasivoDao : Repository
    {
        public DataSet ObtenerDatosFichaResidencial(int codProyecto)
        {
            using (var con = GetConnection())
            {
                con.Open();
                using (var cmd = new SqlCommand("FichaRes.SendFichaResidencial", con))
                {
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    DataSet dt = new DataSet();

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@codProyecto", codProyecto);
                    da.SelectCommand = cmd;
                    da.Fill(dt);

                    return dt;
                }
            }
        }

        public System.Xml.XmlDocument ObtenerDatosFichaResidencialXML(int codProyecto)
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            System.Xml.XmlDocument doc = new System.Xml.XmlDocument();

            try { 
                

                Thread_antecedentes_ficha ClsAntecedentesFicha1 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha2 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha3 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha4 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha5 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha6 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha7 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha8 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha9 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha10 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsAntecedentesFicha11 = new Thread_antecedentes_ficha();

                string datos_generales = "";
                string datos_poblacion_capacidad = "";
                string antecedentes_nna_abandono = "";
                string antecedentes_nna_adolecente_con_hijo = "";
                string antecedentes_dotacion_personal = "";
                string antecedentes_infraestructura_equipamiento = "";
                string antecedentes_seguridad = "";
                string antecedentes_salud = "";
                string antecedentes_educacion = "";
                string antecedentes_alimentacion = "";
                string antecedentes_gestion_residencia = "";

                Thread thread_generales = new Thread(delegate() { datos_generales = ClsAntecedentesFicha1.antecedentes_("FichaRes.SendFichaResidencial_xml_general", codProyecto); });
                Thread thread_poblacion = new Thread(delegate() { datos_poblacion_capacidad = ClsAntecedentesFicha2.antecedentes_("FichaRes.SendFichaResidencial_xml_poblacion_capacidad", codProyecto); });
                Thread thread_nna_abandono = new Thread(delegate() { antecedentes_nna_abandono = ClsAntecedentesFicha3.antecedentes_("FichaRes.SendFichaResidencial_xml_abandono", codProyecto); });
                Thread thread_nna_adoles_conhijo = new Thread(delegate() { antecedentes_nna_adolecente_con_hijo = ClsAntecedentesFicha4.antecedentes_("FichaRes.SendFichaResidencial_xml_adolescentes", codProyecto); });
                Thread thread_dotacion = new Thread(delegate() { antecedentes_dotacion_personal = ClsAntecedentesFicha5.antecedentes_("FichaRes.SendFichaResidencial_xml_personal", codProyecto); });
                Thread thread_infraestructura = new Thread(delegate() { antecedentes_infraestructura_equipamiento = ClsAntecedentesFicha6.antecedentes_("FichaRes.SendFichaResidencial_xml_infraestructura", codProyecto); });
                Thread thread_seguridad = new Thread(delegate() { antecedentes_seguridad = ClsAntecedentesFicha7.antecedentes_("FichaRes.SendFichaResidencial_xml_seguridad", codProyecto); });
                Thread thread_salud = new Thread(delegate() { antecedentes_salud = ClsAntecedentesFicha8.antecedentes_("FichaRes.SendFichaResidencial_xml_salud", codProyecto); });
                Thread thread_educacion = new Thread(delegate() { antecedentes_educacion = ClsAntecedentesFicha9.antecedentes_("FichaRes.SendFichaResidencial_xml_educacion", codProyecto); });
                Thread thread_alimentacion = new Thread(delegate() { antecedentes_alimentacion = ClsAntecedentesFicha10.antecedentes_("FichaRes.SendFichaResidencial_xml_alimentacion", codProyecto); });
                Thread thread_gestion = new Thread(delegate() { antecedentes_gestion_residencia = ClsAntecedentesFicha11.antecedentes_("FichaRes.SendFichaResidencial_xml_residencia", codProyecto); });

                thread_generales.Start();
                thread_poblacion.Start();
                thread_nna_abandono.Start();
                thread_nna_adoles_conhijo.Start();
                thread_dotacion.Start();
                thread_infraestructura.Start();
                thread_seguridad.Start();
                thread_salud.Start();
                thread_educacion.Start();
                thread_alimentacion.Start();
                thread_gestion.Start();

                while (thread_generales.IsAlive || thread_poblacion.IsAlive || thread_nna_abandono.IsAlive || thread_nna_adoles_conhijo.IsAlive ||
                       thread_dotacion.IsAlive || thread_infraestructura.IsAlive || thread_seguridad.IsAlive || thread_salud.IsAlive ||
                       thread_educacion.IsAlive || thread_alimentacion.IsAlive || thread_gestion.IsAlive)
                    Thread.Sleep(1);

                if ( !datos_generales.Contains("ERROR|") &&
                     !datos_poblacion_capacidad.Contains("ERROR|") &&
                     !antecedentes_nna_abandono.Contains("ERROR|") &&
                     !antecedentes_nna_adolecente_con_hijo.Contains("ERROR|") &&
                     !antecedentes_dotacion_personal.Contains("ERROR|") &&
                     !antecedentes_infraestructura_equipamiento.Contains("ERROR|") &&
                     !antecedentes_seguridad.Contains("ERROR|") &&
                     !antecedentes_salud.Contains("ERROR|") &&
                     !antecedentes_educacion.Contains("ERROR|") &&
                     !antecedentes_alimentacion.Contains("ERROR|") &&
                     !antecedentes_gestion_residencia.Contains("ERROR|"))
                {

                    sb.Append("<FICHA_RESIDENCIAL xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>");
                    sb.Append(datos_generales);
                    sb.Append(datos_poblacion_capacidad);
                    sb.Append(antecedentes_nna_abandono);
                    sb.Append(antecedentes_nna_adolecente_con_hijo);
                    sb.Append(antecedentes_dotacion_personal);
                    sb.Append(antecedentes_infraestructura_equipamiento);
                    sb.Append(antecedentes_seguridad);
                    sb.Append(antecedentes_salud);
                    sb.Append(antecedentes_educacion);
                    sb.Append(antecedentes_alimentacion);
                    sb.Append(antecedentes_gestion_residencia);
                    sb.Append("</FICHA_RESIDENCIAL>");

                }
                else {
                    string[] errorArr1;
                    string[] errorArr2; 
                    string[] errorArr3;
                    string[] errorArr4; 
                    string[] errorArr5; 
                    string[] errorArr6; 
                    string[] errorArr7; 
                    string[] errorArr8; 
                    string[] errorArr9; 
                    string[] errorArr10; 
                    string[] errorArr11; 
                    string errorFinal="";

                    if (datos_generales.Contains("ERROR|")) { errorArr1 = datos_generales.Split('|'); errorFinal = "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_general'>" + errorArr1[1] + "</DESCRIPCION_ERROR>"; }
                    if (datos_poblacion_capacidad.Contains("ERROR|")) { errorArr2 = datos_poblacion_capacidad.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_poblacion_capacidad'>" + errorArr2[1] + "</DESCRIPCION_ERROR>"; }
                    if (antecedentes_nna_abandono.Contains("ERROR|")) { errorArr3 = antecedentes_nna_abandono.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_abandono'>" + errorArr3[1] + "</DESCRIPCION_ERROR>"; }
                    if (antecedentes_nna_adolecente_con_hijo.Contains("ERROR|")) { errorArr4 = antecedentes_nna_adolecente_con_hijo.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_adolescentes'>" + errorArr4[1] + "</DESCRIPCION_ERROR>"; }
                    if (antecedentes_dotacion_personal.Contains("ERROR|")) { errorArr5 = antecedentes_dotacion_personal.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_personal'>" + errorArr5[1] + "</DESCRIPCION_ERROR>"; }
                    if (antecedentes_infraestructura_equipamiento.Contains("ERROR|")) { errorArr6 = antecedentes_infraestructura_equipamiento.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_infraestructura'>" + errorArr6[1] + "</DESCRIPCION_ERROR>"; }
                    if (antecedentes_seguridad.Contains("ERROR|")) { errorArr7 = antecedentes_seguridad.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_seguridad'>" + errorArr7[1] + "</DESCRIPCION_ERROR>"; }
                    if (antecedentes_salud.Contains("ERROR|")) { errorArr8 = antecedentes_salud.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_salud'>" + errorArr8[1] + "</DESCRIPCION_ERROR>"; }
                    if (antecedentes_educacion.Contains("ERROR|")) { errorArr9 = antecedentes_educacion.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_educacion'>" + errorArr9[1] + "</DESCRIPCION_ERROR>"; }
                    if (antecedentes_alimentacion.Contains("ERROR|")) { errorArr10 = antecedentes_alimentacion.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_alimentacion'>" + errorArr10[1] + "</DESCRIPCION_ERROR>"; }
                    if (antecedentes_gestion_residencia.Contains("ERROR|")) { errorArr11 = antecedentes_gestion_residencia.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendFichaResidencial_xml_residencia'>" + errorArr11[1] + "</DESCRIPCION_ERROR>"; }

                    AnularFechaConsumoWS(codProyecto);

                    sb.Append("<FICHA_RESIDENCIAL xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>");
                    sb.Append("<ESTATUS><CODIGO>4</CODIGO><GLOSA>" + errorFinal + "</GLOSA></ESTATUS>");
                    sb.Append("</FICHA_RESIDENCIAL>");
                }
                doc.LoadXml(sb.ToString());            
            }
            catch(Exception e){
   
                sb.Append("<FICHA_RESIDENCIAL xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>");
                sb.Append("<ESTATUS><CODIGO>4</CODIGO><GLOSA>"+ e.Message+"</GLOSA></ESTATUS>");
                sb.Append("</FICHA_RESIDENCIAL>");

                doc.LoadXml(sb.ToString());
            }

            //con.Close();

            return doc;
        }

        public System.Xml.XmlDocument ObtenerDatosProyectoXML(int codProyecto)
        {
            System.Xml.XmlDocument doc = new System.Xml.XmlDocument();
            string datos_proyectos = "";

            try { 
                 
                Thread_antecedentes_ficha ClsAntecedentesFicha1 = new Thread_antecedentes_ficha();

                datos_proyectos = ClsAntecedentesFicha1.antecedentes_("FichaRes.SendProyectosVigentes", codProyecto);

                if ( datos_proyectos.Contains("ERROR|") )
                {
                    string[] errorArr = datos_proyectos.Split('|');
                    datos_proyectos = "<PROYECTOS_VIGENTE><ESTATUS><CODIGO>4</CODIGO><GLOSA>" + errorArr[1] + "</GLOSA></ESTATUS></PROYECTOS_VIGENTE>"; 
                }

                doc.LoadXml(datos_proyectos.ToString());
            }
            catch(Exception e){
                datos_proyectos = "<PROYECTOS_VIGENTE><ESTATUS><CODIGO>4</CODIGO><GLOSA>"+ e.Message +"</GLOSA></ESTATUS></PROYECTOS_VIGENTE>";
                doc.LoadXml(datos_proyectos.ToString());
            }

            //con.Close();

            return doc;
        }

        public System.Xml.XmlDocument ObtenerDatosObservacionesFichaXML(int codProyecto)
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            System.Xml.XmlDocument doc = new System.Xml.XmlDocument();

            try
            {
                Thread_antecedentes_ficha ClsObservacionesFicha1 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha2 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha3 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha4 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha5 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha6 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha7 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha8 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha9 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha10 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha11 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha12 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha13 = new Thread_antecedentes_ficha();
                Thread_antecedentes_ficha ClsObservacionesFicha14 = new Thread_antecedentes_ficha();

                string observaciones_informe_visita = "";
                string observaciones_ficha = "";
                string observaciones_poblacion_capacidad = "";
                string observaciones_antecedentes_generales = "";
                string observaciones_nna_abandono = "";
                string observaciones_nna_adolecente_con_hijo = "";
                string observaciones_dotacion_personal = "";
                string observaciones_infraestructura_equipamiento = "";
                string observaciones_seguridad = "";
                string observaciones_salud = "";
                string observaciones_educacion = "";
                string observaciones_alimentacion = "";
                string observaciones_gestion_residencia = "";
                string observaciones_nna_entrevistados = "";

                Thread thread_informe_visita = new Thread(delegate() { observaciones_informe_visita = ClsObservacionesFicha1.antecedentes_("FichaRes.SendGestionObservaciones_xml_Informe_Visita", codProyecto); });
                Thread thread_ficha = new Thread(delegate() { observaciones_ficha = ClsObservacionesFicha2.antecedentes_("FichaRes.SendGestionObservaciones_xml_ficha", codProyecto); });
                Thread thread_poblacion = new Thread(delegate() { observaciones_poblacion_capacidad = ClsObservacionesFicha3.antecedentes_("FichaRes.SendGestionObservaciones_xml_poblacion_capacidad", codProyecto); });
                Thread thread_generales = new Thread(delegate() { observaciones_antecedentes_generales = ClsObservacionesFicha4.antecedentes_("FichaRes.SendGestionObservaciones_xml_antecedentes_generales", codProyecto); });
                Thread thread_nna_abandono = new Thread(delegate() { observaciones_nna_abandono = ClsObservacionesFicha5.antecedentes_("FichaRes.SendGestionObservaciones_xml_abandono", codProyecto); });
                Thread thread_nna_adoles_conhijo = new Thread(delegate() { observaciones_nna_adolecente_con_hijo = ClsObservacionesFicha6.antecedentes_("FichaRes.SendGestionObservaciones_xml_adolescentes", codProyecto); });
                Thread thread_dotacion = new Thread(delegate() { observaciones_dotacion_personal = ClsObservacionesFicha7.antecedentes_("FichaRes.SendGestionObservaciones_xml_personal", codProyecto); });
                Thread thread_infraestructura = new Thread(delegate() { observaciones_infraestructura_equipamiento = ClsObservacionesFicha8.antecedentes_("FichaRes.SendGestionObservaciones_xml_infraestructura", codProyecto); });
                Thread thread_seguridad = new Thread(delegate() { observaciones_seguridad = ClsObservacionesFicha8.antecedentes_("FichaRes.SendGestionObservaciones_xml_seguridad", codProyecto); });
                Thread thread_salud = new Thread(delegate() { observaciones_salud = ClsObservacionesFicha10.antecedentes_("FichaRes.SendGestionObservaciones_xml_salud", codProyecto); });
                Thread thread_educacion = new Thread(delegate() { observaciones_educacion = ClsObservacionesFicha11.antecedentes_("FichaRes.SendGestionObservaciones_xml_educacion", codProyecto); });
                Thread thread_alimentacion = new Thread(delegate() { observaciones_alimentacion = ClsObservacionesFicha12.antecedentes_("FichaRes.SendGestionObservaciones_xml_alimentacion", codProyecto); });
                Thread thread_gestion = new Thread(delegate() { observaciones_gestion_residencia = ClsObservacionesFicha13.antecedentes_("FichaRes.SendGestionObservaciones_xml_residencia", codProyecto); });
                Thread thread_nna_entrevistados = new Thread(delegate() { observaciones_nna_entrevistados = ClsObservacionesFicha14.antecedentes_("FichaRes.SendGestionObservaciones_xml_NNAentrevistados", codProyecto); });

                thread_informe_visita.Start();
                thread_ficha.Start(); 
                thread_poblacion.Start(); 
                thread_generales.Start(); 
                thread_nna_abandono.Start(); 
                thread_nna_adoles_conhijo.Start(); 
                thread_dotacion.Start(); 
                thread_infraestructura.Start(); 
                thread_seguridad.Start(); 
                thread_salud.Start(); 
                thread_educacion.Start(); 
                thread_alimentacion.Start(); 
                thread_gestion.Start();
                thread_nna_entrevistados.Start();

                while (thread_informe_visita.IsAlive || thread_ficha.IsAlive || thread_poblacion.IsAlive || thread_generales.IsAlive || thread_nna_abandono.IsAlive ||
                       thread_nna_adoles_conhijo.IsAlive || thread_dotacion.IsAlive || thread_infraestructura.IsAlive || thread_seguridad.IsAlive ||
                       thread_salud.IsAlive || thread_educacion.IsAlive || thread_alimentacion.IsAlive || thread_gestion.IsAlive || thread_nna_entrevistados.IsAlive)
                    Thread.Sleep(1);

                if (!observaciones_informe_visita.Contains("ERROR|") &&    
                     !observaciones_ficha.Contains("ERROR|") &&
                     !observaciones_poblacion_capacidad.Contains("ERROR|") &&
                     !observaciones_antecedentes_generales.Contains("ERROR|") &&
                     !observaciones_nna_abandono.Contains("ERROR|") &&
                     !observaciones_nna_adolecente_con_hijo.Contains("ERROR|") &&
                     !observaciones_dotacion_personal.Contains("ERROR|") &&
                     !observaciones_infraestructura_equipamiento.Contains("ERROR|") &&
                     !observaciones_seguridad.Contains("ERROR|") &&
                     !observaciones_salud.Contains("ERROR|") &&
                     !observaciones_educacion.Contains("ERROR|") &&
                     !observaciones_alimentacion.Contains("ERROR|") &&
                     !observaciones_gestion_residencia.Contains("ERROR|") &&
                     !observaciones_nna_entrevistados.Contains("ERROR|"))
                {

                    sb.Append("<OBSERVACIONES_FICHA_RESIDENCIAL xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>");
                    sb.Append(observaciones_informe_visita);
                    sb.Append(observaciones_ficha);
                    sb.Append(observaciones_poblacion_capacidad);
                    sb.Append(observaciones_antecedentes_generales);
                    sb.Append(observaciones_nna_abandono);
                    sb.Append(observaciones_nna_adolecente_con_hijo);
                    sb.Append(observaciones_dotacion_personal);
                    sb.Append(observaciones_infraestructura_equipamiento);
                    sb.Append(observaciones_seguridad);
                    sb.Append(observaciones_salud);
                    sb.Append(observaciones_educacion);
                    sb.Append(observaciones_alimentacion);
                    sb.Append(observaciones_gestion_residencia);
                    sb.Append(observaciones_nna_entrevistados);
                    sb.Append("</OBSERVACIONES_FICHA_RESIDENCIAL>");

                }
                else
                {
                    string[] errorArr1;
                    string[] errorArr2;
                    string[] errorArr3;
                    string[] errorArr4;
                    string[] errorArr5;
                    string[] errorArr6;
                    string[] errorArr7;
                    string[] errorArr8;
                    string[] errorArr9;
                    string[] errorArr10;
                    string[] errorArr11;
                    string[] errorArr12;
                    string[] errorArr13;
                    string[] errorArr14;
                    string errorFinal = "";

                    if (observaciones_informe_visita.Contains("ERROR|")) { errorArr1 = observaciones_informe_visita.Split('|'); errorFinal = "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_Informe_Visita'>" + errorArr1[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_ficha.Contains("ERROR|")) { errorArr2 = observaciones_ficha.Split('|'); errorFinal = "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_ficha'>" + errorArr2[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_poblacion_capacidad.Contains("ERROR|")) { errorArr3 = observaciones_poblacion_capacidad.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_poblacion_capacidad'>" + errorArr3[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_antecedentes_generales.Contains("ERROR|")) { errorArr4 = observaciones_antecedentes_generales.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_antecedentes_generales'>" + errorArr4[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_nna_abandono.Contains("ERROR|")) { errorArr5 = observaciones_nna_abandono.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_abandono'>" + errorArr5[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_nna_adolecente_con_hijo.Contains("ERROR|")) { errorArr6 = observaciones_nna_adolecente_con_hijo.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_adolescentes'>" + errorArr6[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_dotacion_personal.Contains("ERROR|")) { errorArr7 = observaciones_dotacion_personal.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_personal'>" + errorArr7[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_infraestructura_equipamiento.Contains("ERROR|")) { errorArr8 = observaciones_infraestructura_equipamiento.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_infraestructura'>" + errorArr8[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_seguridad.Contains("ERROR|")) { errorArr9 = observaciones_seguridad.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_seguridad'>" + errorArr9[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_salud.Contains("ERROR|")) { errorArr10 = observaciones_salud.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_salud'>" + errorArr10[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_educacion.Contains("ERROR|")) { errorArr11 = observaciones_educacion.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_educacion'>" + errorArr11[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_alimentacion.Contains("ERROR|")) { errorArr12 = observaciones_alimentacion.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_alimentacion'>" + errorArr12[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_gestion_residencia.Contains("ERROR|")) { errorArr13 = observaciones_gestion_residencia.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_residencia'>" + errorArr13[1] + "</DESCRIPCION_ERROR>"; }
                    if (observaciones_nna_entrevistados.Contains("ERROR|")) { errorArr14 = observaciones_nna_entrevistados.Split('|'); errorFinal = errorFinal + "<DESCRIPCION_ERROR sp='FichaRes.SendGestionObservaciones_xml_NNAentrevistados'>" + errorArr14[1] + "</DESCRIPCION_ERROR>"; }

                    AnularFechaConsumoWSMINJU(codProyecto);
                    
                    sb.Append("<OBSERVACIONES_FICHA_RESIDENCIAL xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>");
                    sb.Append("<ESTATUS><CODIGO>5</CODIGO><GLOSA>" + errorFinal + "</GLOSA></ESTATUS>");
                    sb.Append("</OBSERVACIONES_FICHA_RESIDENCIAL>");
                }
                doc.LoadXml(sb.ToString());
            }
            catch (Exception e)
            {

                sb.Append("<OBSERVACIONES_FICHA_RESIDENCIAL xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>");
                sb.Append("<ESTATUS><CODIGO>5</CODIGO><GLOSA>" + e.Message + "</GLOSA></ESTATUS>");
                sb.Append("</OBSERVACIONES_FICHA_RESIDENCIAL>");

                doc.LoadXml(sb.ToString());
            }

            //con.Close();

            return doc;
        }

        public class Thread_antecedentes_ficha : Repository
        {
            public string antecedentes_(string procedimiento_almacenado, int codProyecto)
            {
                var con = GetConnection();
                string datos_ = "";

                try { 
                    con.Open();

                    System.Xml.XmlDocument doc = new System.Xml.XmlDocument();
                    SqlDataReader rdr;

                    SqlCommand cmd = new SqlCommand(procedimiento_almacenado, con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@codProyecto", codProyecto);

                    //1 - ANTECEDENTES_GENERALES
                    
                    rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        datos_ = datos_ + rdr.GetString(0);
                    }
                    rdr.Close();
                    con.Close();  
                }
                catch(Exception e){
                    datos_ = "ERROR|"+ e.Message;
                }
                
                //string outmethod;
                return datos_;
            }
        }

        public string AnularFechaConsumoWS(int? CodProyecto)
        {
            DataTable dt = new DataTable();
            string salida = "";

            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.UpdateFicha_FechaConsumoWs", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        da.SelectCommand = cmd;
                        da.Fill(dt);
                        DataRow dr;
                        dr = dt.Rows[0];

                        if (dr["REGISTRO_ACTUALIZADO"].ToString() == "0")
                            salida = "OK";
                        else
                            salida = "NO OK";
                    }
                }
            }
            catch (Exception e)
            {
                salida = e.Message;
                salida = "NO OK";
            }

            return salida;
        }

        public string AnularFechaConsumoWSMINJU(int? CodProyecto)
        {
            DataTable dt = new DataTable();
            string salida = "";

            try
            {
                using (var con = GetConnection())
                {
                    con.Open();
                    using (var cmd = new SqlCommand("FichaRes.UpdateRespuesta_FechaConsumoWs(MINJU)", con))
                    {
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@CodProyecto", CodProyecto.HasValue ? (object)CodProyecto : DBNull.Value);
                        da.SelectCommand = cmd;
                        da.Fill(dt);
                        DataRow dr;
                        dr = dt.Rows[0];

                        if (dr["REGISTRO_ACTUALIZADO"].ToString() == "0")
                            salida = "OK";
                        else
                            salida = "NO OK";
                    }
                }
            }
            catch (Exception e)
            {
                salida = e.Message;
                salida = "NO OK";
            }

            return salida;
        }

      }
}
