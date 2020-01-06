using System;
using System.Data;
using System.Web;
using System.Collections.Generic;
using System.Web.Services;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Impl;
using System.Web.UI;
using System.Text;
using System.Security.Cryptography;
using System.Web.Security;

namespace SENAME.Senainfo.ModFichaResidencial.WEB.ModFichaResidencial
{
    public partial class FichaResidencial : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //<<== DESBLOQUEAR EN PRODUCCION/ CERTIFICACIÓN EL SIGUIENTE BLOQUEO LINEAS EN PRODUCCION
            if (Session["tokens"] == null || ((DataSet)Session["tokens"]).Tables[0].Rows.Count == 0)
            {
                Response.Redirect("~/logout.aspx");
            }
            else
            {
                if (!windowFR.existetoken("61471B04-7513-468F-A9E6-EB545E4C04FE"))
                {
                    Response.Redirect("~/logout.aspx");
                }
                else
                {
                    string tokenslist = "";

                    this.idusuario_conect.Value = Session["IdUsuario"].ToString();
                    if (Session["tokens"] != null)
                    {
                        DataSet ds = new DataSet();
                        ds = (DataSet)Session["tokens"];
                        for (int k = 0; k <= ds.Tables[0].Rows.Count - 1; k++)
                        {
                            tokenslist = tokenslist + ";" + ds.Tables[0].Rows[k][1];
                        }
                    }
                    this.tokensUsr.Value = tokenslist;
                }
            }

            //////<<== DESBLOQUEAR EN DESARROLLO/LOCAL LAS SIGUIENTES 4 LINEAS   

            //Session["IdUsuario"] = "96040"; // "96040"; USUARIO ADMIN // "79533";  //"69368"; //"69368"; // "50328"; //"47468"; //"69368"  //ELENA ULLOA 1434 ;D5CF4DE5-5EFA-4EDD-AD65-5BED3AD9482A
            //this.idusuario_conect.Value = Session["IdUsuario"].ToString();

            //string tokenslist = "200E217F-71E6-4DBB-95EE-816A86198D58;D0001462-4D7E-4579-B871-D568661FD5E9;0DD7623B-A889-4BC3-8AE0-3E17156BF488;233A9B12-A499-4A86-B2F0-2C2C5C08509F;A757360B-5759-4070-89D0-C9696E5C2DF8;8145AB2F-2E60-4A73-BCAC-E18F4271B561;F4E295EA-02A9-4180-8BEC-F532FF357A14;85A1C656-60FC-41F8-A95C-886B0160C46E;050866FC-1A2B-4D38-91C2-6D7E6796A175;2A6F6013-9230-43E5-90EF-E14BA3B07EC4;54E1332C-4FD5-4034-8596-E097C6CFA58C;2A3EE049-3FA8-43C1-B3A0-47D1D2299846;BF175148-E5BD-4229-A5A2-4ECDEAA52A46;7D72764A-4835-4B63-8C40-DF766C9952F1;12839A53-18CA-407E-821E-C109FF601C06;FBD329A9-B05D-4704-AD06-BE6982DB976F;2D3236CF-382B-4325-9361-DACBB48EA45D;472F3E96-A3EA-499B-8FEC-06038D2B69A6;339AABB9-819C-476A-8553-FD1A8C37C3F9;98D1156E-C499-4484-8384-EF622F444BE8;197225F1-8C5E-4AEC-B9E8-B35EAA497340;5CCA1B92-8C7F-4178-8416-834117298CE8;1715E2F2-126D-4191-A6C7-8A5EA58FB348;D94C9F76-E96B-4931-8AC9-EF593181A881;F48C5D91-62CA-490E-BA02-09F048199414;FE41CADE-9738-4931-9200-FF0824BD37F3;EA503F96-DA81-4DFC-8E07-E1E597F0E324;1387A974-8A5C-42E4-8BF0-9FC5AEE96E9B;0DBEB613-6AA1-4E68-BC00-2C836BEA6404;49795519-1868-467C-8225-AFD99F8D2C27;304DAF27-8B43-4CFA-88C3-321A1A693562;212D60FD-B92C-4CFF-BB82-B4ACF79EFC90;46ADD4E0-BD61-49B8-802E-112A10A4724B;FA9FE7DD-EE09-4A0E-890C-8E1109B2009D;7689E453-C4CE-4CFC-B594-836DC12DA648;75E2E6CF-C6A2-4C32-A406-A862BCA719F8;FFDE3824-A2CC-4EDE-928D-829D57ECBB97;E6AF7398-72DC-4CAB-A890-026D9C6C3DDF;65C6093C-2D24-49CC-9FFD-B2233BFD9EC4;F090F043-338D-45ED-837B-60DDE7BA9E2D;04640223-98C3-4874-9847-A5E5AA5263F0;075CEDBA-76F3-44E1-9C3E-A0F93CC86C57;E0430222-2C3A-4CDB-818A-F893A322D9B0;86261269-8D36-4552-B588-1AD3C55E0A2A;8E51CA9F-53F8-4D86-A786-5D8EA62A9B36;63196369-5B79-42FB-AFB0-867A064A68FF;D889FD88-85E5-450B-B77C-961598E659F7;CC568EA0-113C-455C-BAF5-3C1190BC110E;053760A4-E027-40D6-8F8A-3F8A64DD075C;B8549126-72BE-4463-A01F-1BAF60C6977F;33467A63-518C-471D-A8B3-C215C4E0ED20;4B31153A-CE60-4782-B5EB-29100FBB2C31;79270734-C383-487D-8EAB-BC63F1521932;E2C81AB9-0504-4916-9CFB-798EA900151D;3FE17A39-80A0-4F7A-9A46-EC2BB934697D;357AB123-05D6-4F6F-93E9-C8007A403079;D911B057-20D8-4171-831E-51037EEDBE8F;169A2222-0D01-4B62-A224-41B67BAD0387;21A824F4-19EC-4D44-9C44-C4136DD5AC66;B122B56F-15E0-4488-B5FE-FEADD035CF36;9273FC38-331B-4E54-B78E-1E7CB41CB0B5;C1CE36BE-8C53-4CEE-A00C-677AF4D6C8EE;E402C60B-4824-4947-9048-B0E585AA8ADA;45442D35-CC14-45C6-89F8-C7F6892D919A;DCE10CD5-8F3E-42F6-818C-9827C89A2FCD;DAE38BBF-BB91-42E9-84CB-BA6CAE9FB07B;6F360136-E048-44FA-828E-E62CE3BDE05F;AB6C0CB8-2C58-4C7D-B15D-00A0AFC14287;A638709F-43F2-4319-B1CA-2D675EC5C5C4;ECA2B3FC-B8CB-4E4D-AF27-0A8842AAA0C7;8A25E23A-114B-4CDE-9C26-A0567B2A4D77;D5CB6532-B21A-4E77-91A5-3B2A960EB36C;C4993FED-83F3-479F-BEF7-17C1EEFC8933;E72C07AF-C6AA-41D8-8582-F8D371BD68D8;C06E3BDB-1478-4307-BDFA-64C8CB28E296;07175B93-AD3C-45C4-A5BB-85A1EF272AF4;9DBC19F1-1053-47B3-9D35-F12FEB3AB649;330DC7B0-1ADA-4F24-AA77-1B84AFE5595E;E89B114E-DC11-474A-8E2A-CC64991C5592;C625A6E1-5FAF-4A04-B7E0-4B747FD8C76F;5D2C7956-AC23-4CC5-9A37-A2A04FB8A029;66469021-AF97-49D1-AAE9-6039810F9781;749D2D91-2F3C-4AEE-9148-42B94C4A53CA;3A094373-D07C-4400-9718-F1840C8B6B27;5130E3E3-AA03-4F0E-AFB5-0EA1941A9A87;6F447A62-BF21-4ADA-A29D-FC485AA5CE70;F5D8706E-E8F7-4AB3-BEC4-34A21839494B;C0749B2F-6E63-49D1-8E53-C0FA460FC38B;34D4A205-613F-4568-819C-C84DB225B9D3;C45A06F2-3BAB-4694-A680-A791BC239F28;C4BFE91D-C904-47B0-B2C9-FD558E25BF29;3014920C-B438-4FE7-8261-7D33BBA4AC2A;BA388C19-048E-4235-93D4-AF3187DA84E3;06575374-958C-472D-835A-3EBEAFBC19B9;E681BCEC-7ACA-44AC-915D-7478ACC87545;6F89B8C7-B911-4F0F-9A21-3A407CE419B4;BA3BC7A2-9F8E-4683-954E-94C38B0521B6;F0EDC755-DE3B-4AFC-915E-38C2DD660378;C5034C6A-727B-4903-B71A-726FB6974D4F;2AF9A778-66AA-4C3A-BC8B-842E9BDB1AE0;A1403397-FF92-48F1-A3CB-123DBEB7064F;B73DAB93-9CBB-478D-BC39-AA05A52C328D;91B59A7D-39C2-4D1E-A99D-C6E6DD5E034E;8541A2AA-E9F1-468F-A2DB-849E382E2661;1C127EBF-6855-4FB4-8CA8-7E971824EE98;DBCB9A79-16E9-4742-8919-92EB2A71DC4F;868DDE8D-0611-4ABA-AECF-0E00C59BAC0A;0F514F6E-D2C6-4C5E-9B68-28E9FBCA57B4;A65B26C6-A249-4EA5-A7B4-5279385460BA;1AEEDB78-831C-4312-8C03-09AB09F044A1;A0FB8124-3125-4E32-8F18-9E2C83FA3075;B4BEA335-5237-47FB-80CF-136CCFFD7941;4318B663-F3D9-4FB1-9400-8FE823E80FBC;8A7DDE69-818F-4E9B-9030-45AC352AAE09;0F4FDCBE-DF2E-4B3E-B499-A2A631D9C0E8;10C18A46-10E6-4929-9A21-8E6449780FD4;F993FD0B-E0DE-498F-B438-C69F0520AD22;0A1715B2-9D19-44A0-A067-B1F3AEF2B4B7;D5BC7036-E3FD-4584-BB25-863FF75F59F0;F8E34A4B-00AF-452D-A393-3FAE2CB62BC5;D71D803D-6C17-421A-AB8C-18C20EFE1B99;44D5E8DF-EF7D-40D9-B365-FF5121470C25;9E1E1B9A-59AD-4D9B-932E-6B9E0B2601A1;7AD10DA4-7503-43D0-A6C2-9372034617A0;50E42F6A-FD76-4AF0-8678-6AD6FF07BAC8;B65DD182-8A4C-48EE-8C8C-9727AF2388C8;829F5BB9-0539-40F9-A581-01FD86747973;D152B8A4-2605-497B-9EAB-2A287B90C194;0733E5C1-596B-4661-B1EF-845D7555466C;D9F01097-AD80-45EB-B901-9CA848214479;A11337E6-B14B-4451-B5A6-E1749D00191C;22302E88-3808-4063-8DEB-5CF3CCFA54BA;0CA7E2BA-5F5C-4E7E-82FF-F91CB973A14B;3621604D-6405-46BE-A894-F06F08A4CC57;A0E9140C-9EB3-4EF8-B02A-44290F63874D;AE32753D-BFAE-422D-A95B-4E57E0A0D720;CD89D421-008E-439A-B0EE-B0EABEC488B9;94163862-16AC-4070-81EC-0DB2273D1D1D;801C727E-E0DF-45CC-8B83-FBEE50607071;DE5654C8-B715-486B-8B2F-AB889CE5835B;22065426-766E-45BF-9ED8-AD668B6DC602;2BD00AFF-5E6B-46DE-8028-0F1B874E2CC8;B12A10FB-41D6-4F02-B629-AD11D49FE083;39FAC617-2E6C-497D-9C0A-5679DE94EB03;AEC14F07-C63A-4AD8-B6FE-A9BCDB083D71;C5BE45EC-0949-4BFA-BDF1-BD837EAF860F;752BC9BA-A4BA-4B97-8CA4-1A3D05976B6B;113F61A3-6597-47FF-817A-D6383E6410CC;C1589A57-12D9-49BD-AA55-6DC289D590BD;288C6387-0F4C-4E37-B5A7-0934A131F289;2FAD77D1-3A13-4E2B-9B49-05915C67EBDA;3E85C221-1603-4D99-AA31-9EFD971F7387;E3C693D7-13BE-4B98-BB60-7B3159710E16;15152ADB-D98E-4D32-BFD5-4333DBC1ED78;2978373A-77C7-4196-827B-C9AB3F735375;48D24B60-A2D2-4184-BD2B-6ADB27E952B4;BF6CD5DC-CA02-44D3-A8AF-06B19026044F;4C50B363-077F-48ED-83D4-789EEFC5BD45;E73B1051-C725-4C6C-A226-0D069582367C;F25E6CFD-234C-4777-8FA8-797057DF3089;8C4A371E-572D-4265-9A04-EC66F6A90A6D;F5E94FD8-7C0D-475C-81AB-D30159E5C8FE;7B284FF9-AF22-420B-A402-F7F0C9D8DE97;4C5E2268-221F-4E78-96FC-D6B15091B4DF;127ED738-05E2-4843-96DD-827002DD8237;5284B60C-0247-4223-BBB9-3A0FF1C120B2;D4924069-4D42-4FCB-99B5-09B55785BE82;2A3931FA-A68D-47C0-BB9E-13CB5A39D2D1;BC474D0D-47B0-4E96-BA24-4B1268DD5CB3;C5E26D5F-A3B6-45BF-AF0B-F0C9860688D9;51E93346-5D4D-4D67-AA3D-13204CA5C14E;FC939781-3AAC-4629-A519-F8AE502639AA;EF43432B-6D72-4933-866A-76433AA600DF;77147E20-8685-49FC-9CA6-16538FB1A907;CDA1CF49-486F-43F8-A651-AFB81E543A96;87E37000-C502-4A88-8125-6CC1E03AF14A;538BC2A6-C781-4D1F-A4F8-D91F7235D492;BF9F97E0-9AAD-4ECA-936A-5DE47C72115E;69D92A8B-09D8-4B2A-A72D-008CAA1D9664;175AB38B-0F11-41CD-8C40-FE835007A6E7;2A88CCE2-BE2D-4796-8770-BF4BCB0C7378;B62A2EB8-91C1-470A-84E0-B2CF5DA4FB62;062B7B26-F307-4861-8485-D352554544C6;4903500A-271B-45AA-9174-94471A865F02;197F60AF-6A09-4F6A-B89C-94AA0B19E6BE;65AEAF20-5B52-4E6D-BD5B-4478F211FDF1;A9D39FD1-9D7E-491B-90E2-9568FE385E7B;54D7D768-1AFF-43DF-B98A-F605B53E9934;CAFDFC45-AF06-486F-A6D2-FF378ED931E1;B174D4E2-A45B-4FFC-A105-33164BCD7525;CD2BBA2C-0C68-4C81-A845-07DC929EC1C9;5771A850-1B77-4B05-A068-CE312A32DF4F;93EBE1CC-EA67-4295-AF8C-B068049A6324;8BC7212A-9EE9-44EE-A3C3-A663D28DB921;67A50811-CB01-4769-89B3-DD359A39BAE4;25461EE4-E0C9-4708-98E0-3FDFFE86516A;85F1DC97-EEDB-4089-B0D2-F8E91F21E4C6;F6C66E85-55BE-4357-9807-E10E8DFA7BAD;CB4A5095-0A55-46FB-9F1D-B4E1C6791FFF;C6F87E3E-DD9E-4B52-A8BB-66DF74640585;A3C97D17-079D-4E27-A036-6CB7264A1566;968760A0-0BDB-4C2A-A3B5-AD1AE642AD74;027ADC1A-CA91-4354-8D6E-743BF22937AB;892E9B4F-307D-4721-99D8-98F101691E53;086276C5-711B-4856-A6AA-5C36BA264C7E;E03B502F-A3F1-4B81-8FB1-6B1C2BFE2D67;96CC9027-9626-4617-90D7-25E39856BC39;88B4FB5C-92C7-46E0-9706-9E895D51D4ED;80C5FF27-1B6D-43CB-9290-862435F622FD;2C1DFD0C-B30D-48EE-9863-412F7365BD0C;B6D3A41C-F73A-4087-9490-BAC547B711B1;E36FFBD9-4E3A-422E-AF7B-836B53C8E69D;2CA0BBF1-58F4-487E-85DE-AB01B2363319;6607C7EB-391F-4761-9B95-20EE06AB7D03;48353371-431D-4860-923D-D5EE66E317CC;B979FAF8-9A3F-4A0E-9E35-AD83F1BAD19A;E022ABD0-53F1-4AD7-B974-4636BAEDCE84;592D1D80-A226-4A1D-9A13-85F071339C95;620A1AB7-8532-4BA9-83E7-25E1DD3159E1;4B533EB6-4FE5-46B1-9E26-4187C95EF1DD;68B36F05-DE9F-4AE5-9594-31C5EB4E2B95;68ED6A0E-3E2A-418F-83BA-286B9C8F7871;DCE43E1E-CA55-445A-8CE1-24995EA87B8B;2B44AEEE-3067-4831-B561-E9BAE7B13524;ADEA84F8-1AF9-4164-9FD1-AC656E891356;155F7054-9F60-47A7-A685-2356F0CCD89E;96C212CC-209D-41F6-9942-AA47CEDB49F9;1E29CB8C-8885-468B-8ECE-C6E228F750E0;B45E6B2B-EFFF-4F83-A0BA-BB98C41C727B;99CD4E3D-5F51-4C73-A85B-67BFBB1449C2;236813D7-8C36-4D93-BB1A-E1D4C1F37013;E33AD04D-FB43-406B-A13C-7BAE23059DA4;C74071FC-CF4A-4596-A746-B7E14FB262A2;41AC08A5-1C63-476A-8F20-79C0789A0F9C;B9B0788E-E8D2-4A4C-83C3-D534F02EC843;2482124D-E39B-433E-99C6-AC1DBCA6790B;552928ED-3E34-49EA-8AF2-0619992ED1B7;146209E4-C62A-48FB-BD77-2913E3D64DD5;F1315126-A9BB-443D-8040-44F721B97EB2;64347828-3B63-4A4E-9287-5A74560BB81C;C129DFDF-2B72-4F25-93F7-5457E814EAB6;63EB6C6B-3F8F-45B7-8545-4996A7DE73FC;A964F47A-7204-4049-ABB1-A988E13532BC;37843402-3C51-4373-B206-5A8F9B71C6B0;F6DC09AD-5F04-4F95-BF81-B806C49B66BA;8C83A0F6-76FA-448E-9F19-E83805BA7001;018DCDC4-F1A6-4814-9D80-435161333E26;B0803670-B908-4301-B01A-7B0FA6F360B9;69921F68-8127-4B07-A4DA-31D27E408C82;AA938FAD-0140-474C-9DEA-6D6BF31E0A3D;5F8F033B-E90E-4292-8665-F4D80019FCB0;95043B03-51F4-4398-84FF-CCF864BE33AE;26592D4D-A6D3-4370-8A6C-D91636CBD24E;00CF3E08-D85F-4717-A498-98483D4B8F45;B4F1DB45-5F6C-4F95-9BA9-520D39C09DFF;196A62E3-1539-47C1-9431-12F3BDEC4310;93212935-F018-4B05-8D0D-7D67B67CFF3B;9DDBB7ED-19CB-4962-A2FE-DE4D6C5B8C32;09B7EC80-B028-4F5E-89E3-AA6AB005FAC7;39059438-6B5B-4AB5-8056-1A3D89254304;12CA9DD0-AD68-4740-8F40-16DCFE62D106;23C24062-9E9C-44BE-8AA4-5A3AF6121452;D8299046-01C7-4DFB-B35A-47A61A64315E;B6E884B4-9B86-424D-A122-F41A6C28ACE4;18D1A2AB-B036-4573-B20B-2A078AB9A89D;49E9FC7F-D444-43EE-8061-8845AB345DF1;8F324DF0-04C2-4E56-B1CC-7D25DD3BA16C;B5173CC3-9837-4410-88FB-244483548B2F;258DE3AD-DA5D-4CAA-B2C5-6417241CD761;055E1E1B-377B-4313-A875-3950AD9571EE;7F8273EF-4A66-410E-8E11-52AC934D62AE;7204D523-8221-4D3B-B07D-21DB8B886975;BB36C9DD-EE8A-4EFF-A62D-A7B334E4A386;FC1F585E-3CA3-48F7-B63C-8F40A33E58D0;222CA151-8F29-468C-A94D-F637B2059851;AA206E05-A358-4C10-A17D-5D42BAAF7E09;28322987-6B23-4ED4-B360-36022EFDED49;2848B503-5880-45CF-B840-B2A7A3202EFA;AFF08F7A-C752-4D65-B7FB-0736D1F804D3;59BD64A1-4B3C-4BAE-86E6-DCACFCCC1102;4FC81A27-2EB7-4D82-BB76-2E53A5471970;35804B1B-1D1D-466B-92AA-A84C830F996D;E73B1051-C725-4C6C-A226-0D069582367C;F5E94FD8-7C0D-475C-81AB-D30159E5C8FE;127ED738-05E2-4843-96DD-827002DD8237;93212935-F018-4B05-8D0D-7D67B67CFF3B;9DDBB7ED-19CB-4962-A2FE-DE4D6C5B8C32;09B7EC80-B028-4F5E-89E3-AA6AB005FAC7;0C3D0790-43EF-4F4D-AF2E-AF9AF5527C46;3EE11321-5110-44A0-819E-443CEBC462E1;951B0D8E-CFF7-4DAC-889B-88D153390C75;DCCD0FF4-D3DF-4578-95FC-159BFD8EFF90;E298F94F-CDA5-4E3A-975F-1EBD35D418BF;DE3CC676-1886-446D-BE05-7B6EBD91E31E;20A45A43-8077-4D06-BCAB-4B7B1BDF29D2;6A28C220-4907-4695-A95D-9797F17430F7;D7B92202-704C-4BA7-AA1B-9CB5EDD6E19E;582C86A0-4085-40BF-A6CB-4F33EB88D0A9;073242C5-B273-44C0-85F3-8BDA9627F9BC;832342EA-9D9B-42B1-BCD7-2928770D86F3;2D32A6EE-6BD0-4052-B148-73E315EBCE1F;3DED27B7-0ED0-4DEA-95DB-132143AECF83;23D086E8-5D17-423A-98CB-AC296709225B;73C3068C-6995-49E7-85BE-31B0446E623F;151DB05E-312B-4A71-BBDC-1A9D3A3F47FE;170E59E8-84F6-41CF-ACB2-8DAF7C5CB41E;7ED38C9A-E4CE-4264-A71B-E5BC886568D6;804C2A82-7B95-4C04-9A9B-AC8A2B0E5587;752901DF-E0AA-44DB-A1DD-2B1A4CE67142;54CE026E-066D-44E1-A7A0-7349846BD74E;62659F7E-E691-4837-AB73-FCB9EED5334B;F2534472-03B5-4427-A823-9A9FB4E4DEB9;4A35676D-7B1C-42E7-AF74-0C6CE25256B5;59D46443-EA90-410A-B179-7E263816E1BB;6529D784-FD47-4979-ACED-BBC91AABE8B6;9F381950-06C9-4ACB-93DA-0B7F7EAB06F0;B9EC6B6C-FE5C-4162-8B81-2EA70D92B1A5;6DEB6A08-9E08-45F6-83A9-D4819DCC7E25;1AE0DAE9-5C2B-4A86-81AC-50EBD6FB650E;5F3B85C6-F19B-4262-9862-C20DC637D43E;6DD18ACE-4AE1-4F7C-A772-C80BC6027BEA;51B9A239-4BC2-4923-AC02-354A18F6CAFD;6AE08E0A-BEB1-43B8-B397-C302D6B3FCD8;D3TS0RUH-OYV8-UEBA-UMB7-D4F8LOY793BO;D3TS0RUH-OYV8-UEBA-AFGY-D4F8LOY793BO;9F683814-9F31-46E2-A242-D1ECACDE83EB;51F4451D-A100-404F-93FE-FE9719068E2C;41023851-234B-44C8-BA07-C79F8C52E450;1921F5FB-B32A-429B-BF76-E0D91DC67940;15152ADB-D98E-4D32-AWE4-4333DBC1ED78;15152ADB-D98E-4D32-DER6-4333DBC1ED78;15152ADB-D98E-4D32-AEU9-4333DBC1ED78;15152ADB-D98E-4D32-KLO1-4333DBC1ED78;15152ADB-D98E-4D32-ERI5-4333DBC1ED78;15152ADB-D98E-4D32-LPI3-4333DBC1ED78;15152ADB-D98E-4D32-JUI2-4333DBC1ED78;15152ADB-D98E-4D32-OIU9-4333DBC1ED78;15152ADB-D98E-4D32-BFT3-4333DBC1ED78;15152ADB-D98E-4D32-TYH7-4333DBC1ED78;30E094F5-5AED-42CC-89A0-CA90C2E8ED25;61471B04-7513-468F-A9E6-EB545E4C04FE;24B82077-7396-4A38-8ADF-B80A14367511;254F5AF0-05BA-43A1-8A92-15C4EE748B72;5F9D1BB1-2B2F-488F-83B0-77A281C47DDD;045153A8-8837-42E3-8D75-028C8E71A52E;D602BA97-D375-4BCA-ACE6-3D4166581BD5;C6AF69E5-8207-4D81-B5B9-7D661EC15F5E;17E2C5B4-0A9E-4B75-B66E-20D02588C841;C615FCFB-16B1-48F6-9739-40D8DFEC096C;B49655E5-D1C1-43CE-9FEA-4B42FB7FC904;35759509-74CB-4A53-9CF5-B8484DAA8C86;C588FD34-E039-4BA9-909A-AFBBA005DD04;EA91C623-3D25-47CA-9A74-032281A4D263;F23449CA-1E4B-43CC-AF41-BE66AF9A10C9;A2BC9599-014E-4364-B7A9-0F8BE336783A;1A55DD5E-8260-4392-9CC1-5D5D6329C4A8;90F0F6A9-160A-41D7-A584-EB3A616A6D50;1FA4CCAF-8156-45A3-B07E-60381CB48FC3;1EA346D2-47BA-41A5-AE4F-4A189BF5F9AB;6216D625-8842-45EA-821F-D8792F975990;ABACCF95-A3D1-4F8A-A4B0-2121CC1A2538;19AE51B9-2593-4650-8842-AF6637EAAD61;D8725CBF-7F7A-4714-B8D0-DAB537616CD5;0CF0CF11-D1DE-49AC-B0B1-A7B676890148;AB0495B2-4C55-4819-8E48-C1672BC44A45;B03C9508-C6AD-4262-9A07-38F401CCFAC5;242FA6ED-C568-487D-980B-B91DEC860E20;EE222737-BB57-4DA7-BFB4-348962DC47C2;EFBFEC57-3CBA-4BBB-A122-ADA0A16995C1;335654CB-3604-4DE1-A218-D8318FD9AB1E;C77AE3C9-9204-4304-B40B-566A8E01A529;C77AE3C9-9204-4304-B40B-566A8E01A529;C77AE3C9-9204-4304-B40B-566A8E01A529;F83422CB-D572-4920-829D-6FA3DC75AC26;76D99E5C-E6AC-4ECE-8EF6-5B126F4CCA24;CC23AB65-E6E2-4018-81F6-CFF882399FE2;61AEE67D-1B71-4810-894A-A10E159761C3;1126BD94-05D1-4C1C-AF8E-12A867123C51;D75C96E1-5180-4D14-A9C2-FF70FDB48CCA;A534579C-11EA-47BC-8E95-B7958DC5FCFF;12B78AF5-C2DD-464B-A7CA-17970C6D9EFF;94B40268-784B-480B-B6C2-47584437A0D4;8853A838-467F-4B88-964B-FBE1D2BD2301;A2757503-1155-40FB-84EE-8ADF6FA7A906;D005D5BA-089F-4FF0-ADAB-3B3D62B480F3;0D00B8F8-5409-43BD-A1AF-1C969B288A99;098FB29E-240A-43B7-A17C-B9F31F8E4163;4CF4B5F4-E4DC-4D1B-A9CF-26A11C198388;1D888345-B81A-4435-B902-A8254B384985;D5CF4DE5-5EFA-4EDD-AD65-5BED3AD9482A";
            //this.tokensUsr.Value = tokenslist;
            //this.idusuario_conect.Value = Session["IdUsuario"].ToString();


            //Session["IdUsuario"] = "96044";

            //string tokenslist = "757360B-5759-4070-89D0-C9696E5C2DF8;8145AB2F-2E60-4A73-BCAC-E18F4271B561;F4E295EA-02A9-4180-8BEC-F532FF357A14;050866FC-1A2B-4D38-91C2-6D7E6796A175;2A6F6013-9230-43E5-90EF-E14BA3B07EC4;54E1332C-4FD5-4034-8596-E097C6CFA58C;7D72764A-4835-4B63-8C40-DF766C9952F1;472F3E96-A3EA-499B-8FEC-06038D2B69A6;1715E2F2-126D-4191-A6C7-8A5EA58FB348;EA503F96-DA81-4DFC-8E07-E1E597F0E324;49795519-1868-467C-8225-AFD99F8D2C27;46ADD4E0-BD61-49B8-802E-112A10A4724B;FA9FE7DD-EE09-4A0E-890C-8E1109B2009D;75E2E6CF-C6A2-4C32-A406-A862BCA719F8;FFDE3824-A2CC-4EDE-928D-829D57ECBB97;E6AF7398-72DC-4CAB-A890-026D9C6C3DDF;65C6093C-2D24-49CC-9FFD-B2233BFD9EC4;04640223-98C3-4874-9847-A5E5AA5263F0;075CEDBA-76F3-44E1-9C3E-A0F93CC86C57;E0430222-2C3A-4CDB-818A-F893A322D9B0;D889FD88-85E5-450B-B77C-961598E659F7;053760A4-E027-40D6-8F8A-3F8A64DD075C;B8549126-72BE-4463-A01F-1BAF60C6977F;33467A63-518C-471D-A8B3-C215C4E0ED20;79270734-C383-487D-8EAB-BC63F1521932;E2C81AB9-0504-4916-9CFB-798EA900151D;3FE17A39-80A0-4F7A-9A46-EC2BB934697D;357AB123-05D6-4F6F-93E9-C8007A403079;D911B057-20D8-4171-831E-51037EEDBE8F;169A2222-0D01-4B62-A224-41B67BAD0387;21A824F4-19EC-4D44-9C44-C4136DD5AC66;B122B56F-15E0-4488-B5FE-FEADD035CF36;45442D35-CC14-45C6-89F8-C7F6892D919A;DCE10CD5-8F3E-42F6-818C-9827C89A2FCD;DAE38BBF-BB91-42E9-84CB-BA6CAE9FB07B;6F360136-E048-44FA-828E-E62CE3BDE05F;AB6C0CB8-2C58-4C7D-B15D-00A0AFC14287;A638709F-43F2-4319-B1CA-2D675EC5C5C4;ECA2B3FC-B8CB-4E4D-AF27-0A8842AAA0C7;8A25E23A-114B-4CDE-9C26-A0567B2A4D77;C4993FED-83F3-479F-BEF7-17C1EEFC8933;C06E3BDB-1478-4307-BDFA-64C8CB28E296;07175B93-AD3C-45C4-A5BB-85A1EF272AF4;9DBC19F1-1053-47B3-9D35-F12FEB3AB649;330DC7B0-1ADA-4F24-AA77-1B84AFE5595E;61736ABB-4B02-4DA0-AD99-C5C7114DBB5D;C625A6E1-5FAF-4A04-B7E0-4B747FD8C76F;5D2C7956-AC23-4CC5-9A37-A2A04FB8A029;749D2D91-2F3C-4AEE-9148-42B94C4A53CA;3A094373-D07C-4400-9718-F1840C8B6B27;5130E3E3-AA03-4F0E-AFB5-0EA1941A9A87;6F447A62-BF21-4ADA-A29D-FC485AA5CE70;C0749B2F-6E63-49D1-8E53-C0FA460FC38B;34D4A205-613F-4568-819C-C84DB225B9D3;C45A06F2-3BAB-4694-A680-A791BC239F28;C4BFE91D-C904-47B0-B2C9-FD558E25BF29;3014920C-B438-4FE7-8261-7D33BBA4AC2A;BA388C19-048E-4235-93D4-AF3187DA84E3;A65B26C6-A249-4EA5-A7B4-5279385460BA;1AEEDB78-831C-4312-8C03-09AB09F044A1;A0FB8124-3125-4E32-8F18-9E2C83FA3075;B4BEA335-5237-47FB-80CF-136CCFFD7941;4318B663-F3D9-4FB1-9400-8FE823E80FBC;3E85C221-1603-4D99-AA31-9EFD971F7387;E3C693D7-13BE-4B98-BB60-7B3159710E16;15152ADB-D98E-4D32-BFD5-4333DBC1ED78;2978373A-77C7-4196-827B-C9AB3F735375;3E77CA9D-4DB0-4306-A560-0EE7E32E1E0D;4B9168D8-AB52-4C63-9072-383A844755BB;BF6CD5DC-CA02-44D3-A8AF-06B19026044F;4C50B363-077F-48ED-83D4-789EEFC5BD45;E73B1051-C725-4C6C-A226-0D069582367C;F25E6CFD-234C-4777-8FA8-797057DF3089;8C4A371E-572D-4265-9A04-EC66F6A90A6D;F5E94FD8-7C0D-475C-81AB-D30159E5C8FE;7B284FF9-AF22-420B-A402-F7F0C9D8DE97;4C5E2268-221F-4E78-96FC-D6B15091B4DF;127ED738-05E2-4843-96DD-827002DD8237;5284B60C-0247-4223-BBB9-3A0FF1C120B2;D4924069-4D42-4FCB-99B5-09B55785BE82;2A3931FA-A68D-47C0-BB9E-13CB5A39D2D1;BC474D0D-47B0-4E96-BA24-4B1268DD5CB3;FC939781-3AAC-4629-A519-F8AE502639AA;77147E20-8685-49FC-9CA6-16538FB1A907;CDA1CF49-486F-43F8-A651-AFB81E543A96;87E37000-C502-4A88-8125-6CC1E03AF14A;175AB38B-0F11-41CD-8C40-FE835007A6E7;B62A2EB8-91C1-470A-84E0-B2CF5DA4FB62;062B7B26-F307-4861-8485-D352554544C6;4903500A-271B-45AA-9174-94471A865F02;54D7D768-1AFF-43DF-B98A-F605B53E9934;B174D4E2-A45B-4FFC-A105-33164BCD7525;CD2BBA2C-0C68-4C81-A845-07DC929EC1C9;5771A850-1B77-4B05-A068-CE312A32DF4F;25461EE4-E0C9-4708-98E0-3FDFFE86516A;F6C66E85-55BE-4357-9807-E10E8DFA7BAD;CB4A5095-0A55-46FB-9F1D-B4E1C6791FFF;C6F87E3E-DD9E-4B52-A8BB-66DF74640585;892E9B4F-307D-4721-99D8-98F101691E53;E03B502F-A3F1-4B81-8FB1-6B1C2BFE2D67;96CC9027-9626-4617-90D7-25E39856BC39;88B4FB5C-92C7-46E0-9706-9E895D51D4ED;E36FFBD9-4E3A-422E-AF7B-836B53C8E69D;6607C7EB-391F-4761-9B95-20EE06AB7D03;48353371-431D-4860-923D-D5EE66E317CC;620A1AB7-8532-4BA9-83E7-25E1DD3159E1;68B36F05-DE9F-4AE5-9594-31C5EB4E2B95;68ED6A0E-3E2A-418F-83BA-286B9C8F7871;DCE43E1E-CA55-445A-8CE1-24995EA87B8B;ADEA84F8-1AF9-4164-9FD1-AC656E891356;155F7054-9F60-47A7-A685-2356F0CCD89E;96C212CC-209D-41F6-9942-AA47CEDB49F9;B45E6B2B-EFFF-4F83-A0BA-BB98C41C727B;99CD4E3D-5F51-4C73-A85B-67BFBB1449C2;236813D7-8C36-4D93-BB1A-E1D4C1F37013;B9B0788E-E8D2-4A4C-83C3-D534F02EC843;552928ED-3E34-49EA-8AF2-0619992ED1B7;1FECB5C2-839A-4579-BFC1-16D9246230F0;F1315126-A9BB-443D-8040-44F721B97EB2;64347828-3B63-4A4E-9287-5A74560BB81C;C129DFDF-2B72-4F25-93F7-5457E814EAB6;63EB6C6B-3F8F-45B7-8545-4996A7DE73FC;A964F47A-7204-4049-ABB1-A988E13532BC;37843402-3C51-4373-B206-5A8F9B71C6B0;018DCDC4-F1A6-4814-9D80-435161333E26;B0803670-B908-4301-B01A-7B0FA6F360B9;5F8F033B-E90E-4292-8665-F4D80019FCB0;00CF3E08-D85F-4717-A498-98483D4B8F45;18D1A2AB-B036-4573-B20B-2A078AB9A89D;49E9FC7F-D444-43EE-8061-8845AB345DF1;8F324DF0-04C2-4E56-B1CC-7D25DD3BA16C;E73B1051-C725-4C6C-A226-0D069582367C;F5E94FD8-7C0D-475C-81AB-D30159E5C8FE;127ED738-05E2-4843-96DD-827002DD8237;3EE11321-5110-44A0-819E-443CEBC462E1;951B0D8E-CFF7-4DAC-889B-88D153390C75;DCCD0FF4-D3DF-4578-95FC-159BFD8EFF90;E298F94F-CDA5-4E3A-975F-1EBD35D418BF;DE3CC676-1886-446D-BE05-7B6EBD91E31E;20A45A43-8077-4D06-BCAB-4B7B1BDF29D2;6A28C220-4907-4695-A95D-9797F17430F7;62659F7E-E691-4837-AB73-FCB9EED5334B;F2534472-03B5-4427-A823-9A9FB4E4DEB9;4A35676D-7B1C-42E7-AF74-0C6CE25256B5;D3TS0RUH-OYV8-UEBA-UMB7-D4F8LOY793BO;D3TS0RUH-OYV8-UEBA-AFGY-D4F8LOY793BO;2C5AD29E-B91B-4101-A3B7-0F631F799E75;EC2DE678-3140-44EF-A059-91C2D09F3AA0;03185197-D803-44A7-A121-2AD8C2D7804C;8D757A5C-48B9-4A2C-B526-7B893FBBDE8D;012ABB5D-213A-42F8-A9CD-109FFE3F0725;A5090F24-CD3F-4788-BA15-E53F0D96C698;D5C61CB7-8BE6-47B5-BD82-77F5591305F8;C529F65E-934E-4429-AC23-D4268F6645CD;593A58F4-BABB-4379-B7B4-29C8451CE739;9B27426C-8E7E-4EA3-B3FE-BB74C0C1AF58;1A55DD5E-8260-4392-9CC1-5D5D6329C4A8;90F0F6A9-160A-41D7-A584-EB3A616A6D50;0F0942B2-024E-484C-B668-AE9B762C3B46;61471B04-7513-468F-A9E6-EB545E4C04FE;1EA346D2-47BA-41A5-AE4F-4A189BF5F9AB;D5CF4DE5-5EFA-4EDD-AD65-5BED3AD9482A;2681C316-B43B-4598-A936-A478CD05D9D5;1D888345-B81A-4435-B902-A8254B384985;3A13E80C-3EB9-4076-B4E7-C0E9A1BDF4DA;33A5128B-7796-4222-A9F3-F7F4A487A894;3362002C-C7E0-4670-8F18-18F4052C6A6A;C175A643-C947-40F9-8772-EE0BA8965866;9DD591F7-E24F-40AB-BA23-54D39A4C65B9;66BB890E-C38A-4A42-A71B-6830F368B589;01CB2AD0-492E-4C45-977E-5B0078759301;9A9CE9BF-B056-4D6F-8996-2658E86C7A73;C3997CF3-72EF-444E-89EE-EDCD26062D56;0372993E-890C-4A35-88EC-37034737D33E;858DA796-4715-4AE2-86E2-98A165EB6BF4;5EC3531E-D326-4C7D-AE2D-6B2B3A3B30D0;0331B5D4-3191-4445-8FF4-EBB867AE0F06";
            //this.tokensUsr.Value = tokenslist;
            //this.idusuario_conect.Value = Session["IdUsuario"].ToString();


        }
        #region AntecedentesGenerales
        [WebMethod]
        public static List<SETFechaAplicacionDto> GrabarFechaAplicacionFR(int CodFicha, string FechaAplicacion)
        {
            SETFechaAplicacionImpl _fechaAplicacionImpl = new SETFechaAplicacionImpl();
            var result = _fechaAplicacionImpl.GrabarFechaAplicacionFicha(CodFicha,FechaAplicacion);
            return result;
        }
        [WebMethod]
        public static List<FechaAplicacionDto> ObtenerFechaAplicacionFicha(int CodFicha)
        {
            FechaAplicacionImpl _fechaAplicacionImpl = new FechaAplicacionImpl();
            var result = _fechaAplicacionImpl.ObtenerFechaAplicacion(CodFicha);
            return result;
        } 


        [WebMethod]
        public static List<InstitucionesUsuarioDto> ObtenerInstitucionesUsuario(int IdUsuario)
        {
            InstitucionesUsuarioImpl _InstitucionessUsuarioImpl = new InstitucionesUsuarioImpl();
            var result = _InstitucionessUsuarioImpl.ObtenerInstitucionesUsuario(IdUsuario);
            return result;
        }

        [WebMethod]
        public static List<ProyectosUsuarioDto> ObtenerProyectosXInstitucionYUsuario(int IdUsuario, int codigoInstitucion)
        {
            ProyectosUsuarioImpl _proyectosUsuarioImpl = new ProyectosUsuarioImpl();
            var result = _proyectosUsuarioImpl.ObtenerProyectosXInstitucionYUsuario(IdUsuario, codigoInstitucion);
            return result;
        }

        [WebMethod]
        public static List<ProyectosUsuarioDto> ObtenerProyectosusuario(int IdUsuario)
        {
            ProyectosUsuarioImpl _proyectosUsuarioImpl = new ProyectosUsuarioImpl();
            var result = _proyectosUsuarioImpl.ObtenerProyectosUsuario (IdUsuario);
            return result;
        }

        [WebMethod]
        public static List<MantenerSesionDto> MantenerSesion(int IdUsuario)
        {
            var result = new List<MantenerSesionDto>();
            var resultBase = new MantenerSesionDto();

            try
            {
                resultBase.Estatus = "Success";
                resultBase.NombreInstitucion = "";
                resultBase.NombreProyecto = "";
                resultBase.NombreUsuario = IdUsuario.ToString();
                resultBase.error = "";
            }
            catch (Exception ex) {
                resultBase.Estatus = ex.Source;
                resultBase.NombreInstitucion = "";
                resultBase.NombreProyecto = "";
                resultBase.NombreUsuario = IdUsuario.ToString();
                resultBase.error = ex.Message;       
            }

            result.Add(resultBase);

            return result;
        }

        [WebMethod] 
        public static List<DatosGeneralesDto> ObtenerDatosGenerales(int CodProyecto)
        {
            DatosGeneralesImpl datosGeneralesImpl = new DatosGeneralesImpl();
            var result = datosGeneralesImpl.ObtenerDatosGenerales(CodProyecto);
            return result;
        }

        [WebMethod]
        public static List<NiñosVigentesDto> ObtenerNiñosVigentes(int CodProyecto)
        {
            NiñosVigentesImpl NinosVigentesImpl = new NiñosVigentesImpl();
            var result = NinosVigentesImpl.ObtenerNiñosVigentes(CodProyecto);
            return result;
        }

        [WebMethod]
        public static List<ResultadoOperacionDto> GrabarAntecedentesGenerales(
                        int CodProyecto,
                        int CodFicha,
                        int PoblacionHombres,
                        int PoblacionMujeres,
                        int PlazasSenameHombres,
                        int PlazasSenameMujeres,
                        int OtrasPlazasHombres,
                        int OtrasPlazasMujeres,
                        int TotalNnaHombres,
                        int TotalNnaMujeres,
                        int TotalAcercamientoHombres,
                        int TotalAcercamientoMujeres,
                        int TotalMayoresHombres,
                        int TotalMayoresMujeres,
                        int FugaHombres,
                        int FugaMujeres,
                        int HospitalizadosHombres,
                        int HosptitalizadosMujeres,
                        int Art80Hombres,
                        int Art80Mujeres,
                        int AbandonoHombres,
                        int AbandonoMujeres,
                        int SentenciaAdopcionHombres,
                        int SentenciaAdopcionMujeres,
                        int EnlaceAdopcionHombres,
                        int EnlaceAdopcionMujeres,
                        int SinSentenciaHombres,
                        int SinSentenciaMujeres,
                        int AdolecentesHijosHombres,
                        int AdolecentesHijosMujeres,
                        int IdUsuarioActualizacion,
                        int CodEstadoFicha,
                        string DetalleNNA_Abandono,
                        string DetalleNNA_AdolescenteConHijos)
        {
            //NiñosVigentesImpl NinosVigentesImpl = new NiñosVigentesImpl();

            System.Xml.XmlDocument oDOM_DetalleNNA_Abandono = new System.Xml.XmlDocument();
            System.Xml.XmlDocument oDOM_DetalleNNA_AdolescenteConHijos = new System.Xml.XmlDocument();

            if(DetalleNNA_Abandono != ""){
                oDOM_DetalleNNA_Abandono = GeneraParametroDetalleNNA(DetalleNNA_Abandono);
                DetalleNNA_Abandono = (string)oDOM_DetalleNNA_Abandono.DocumentElement.OwnerDocument.InnerXml;
            }
            if (DetalleNNA_AdolescenteConHijos != ""){
                oDOM_DetalleNNA_AdolescenteConHijos = GeneraParametroDetalleNNA(DetalleNNA_AdolescenteConHijos);
                DetalleNNA_AdolescenteConHijos = (string)oDOM_DetalleNNA_AdolescenteConHijos.DocumentElement.OwnerDocument.InnerXml;
            }


            ResultadoOperacionImpl _resultadoOperacionImpl = new ResultadoOperacionImpl();
            var result = _resultadoOperacionImpl.GrabarAntecedentesGenerales(
                                                                CodFicha,
                                                                CodProyecto,
                                                                CodEstadoFicha,
                                                                IdUsuarioActualizacion,
                                                                PoblacionHombres, 
                                                                PoblacionMujeres, 
                                                                PlazasSenameHombres,
                                                                PlazasSenameMujeres, 
                                                                OtrasPlazasHombres, 
                                                                OtrasPlazasMujeres, 
                                                                TotalNnaHombres, 
                                                                TotalNnaMujeres,
                                                                TotalAcercamientoHombres, 
                                                                TotalAcercamientoMujeres, 
                                                                TotalMayoresHombres, 
                                                                TotalMayoresMujeres,
                                                                FugaHombres, 
                                                                FugaMujeres, 
                                                                HospitalizadosHombres, 
                                                                HosptitalizadosMujeres, 
                                                                Art80Hombres,
                                                                Art80Mujeres, 
                                                                AbandonoHombres, 
                                                                AbandonoMujeres, 
                                                                SentenciaAdopcionHombres,
                                                                SentenciaAdopcionMujeres, 
                                                                EnlaceAdopcionHombres, 
                                                                EnlaceAdopcionMujeres, 
                                                                SinSentenciaHombres,
                                                                SinSentenciaMujeres, 
                                                                AdolecentesHijosHombres, 
                                                                AdolecentesHijosMujeres,
                                                                DetalleNNA_Abandono,
                                                                DetalleNNA_AdolescenteConHijos);
 
            return result;
        }

        [WebMethod]
        public static List<AntecedentesGeneralesDto> ObtenerAntecedentesGenerales(int CodFicha)
        {
            AntecedentesGeneralesImpl _antecedentesGeneralesImpl = new AntecedentesGeneralesImpl();
            var result = _antecedentesGeneralesImpl.ObtenerAntecedentesGenerales (CodFicha);
            return result;
        }

        [WebMethod]
        public static List<NnaAbandonoDto> ObtenerNnaAbandono(int CodFicha)
        {
            NnaAbandonoImpl _nnaAbandonoImpl = new NnaAbandonoImpl();
            var result = _nnaAbandonoImpl.ObtenerNnaAbandono(CodFicha);
            return result;
        }

        [WebMethod]
        public static List<AdolecentesConHijosDto> ObtenerAdolecentesConHijos(int CodFicha)
        {
            AdolcentesConHijosImpl _adolcentesConHijosImpl = new AdolcentesConHijosImpl();
            var result = _adolcentesConHijosImpl.ObtenerAdolecentesConHijos(CodFicha);
            return result;
        }       
        #endregion

        #region Antecedentes Poblacion y Capacidad
        [WebMethod]
        public static List<ResultadoOperacionPoblacionDto> GrabarAntecedentesPoblacionCapacidad(
                                                            int CodProyecto, 
                                                            int CodFicha, 
                                                            int IdUsuarioActualizacion,
                                                            int CodEstadoFicha,

                                                            int SubvencionSename, 
                                                            int SexoAtiende, 
                                                            int RangoEtareo, 
                                                            int PoblacionVigente, 
                                                            string TipoVulneracion, 
                                                            int ProgramaApadrinamiento)
        {
            ResultadoOperacionPoblacionImpl _resultadoOperacionPoblacionImpl = new ResultadoOperacionPoblacionImpl();
            var result = _resultadoOperacionPoblacionImpl.GrabarAntecedentesPoblacion(  CodFicha,
                                                                                        CodProyecto,
                                                                                        CodEstadoFicha,
                                                                                        IdUsuarioActualizacion,
                                                                                        SubvencionSename, 
                                                                                        SexoAtiende, 
                                                                                        RangoEtareo, 
                                                                                        PoblacionVigente, 
                                                                                        TipoVulneracion, 
                                                                                        ProgramaApadrinamiento);
            return result;
        }
        [WebMethod]
        public static List<GetAntecedentesPoblacionDto> ObtenerAntecedentesPoblacionCapacidad(int CodFicha)
        {
            GetAntecedentesPoblacionImpl _antecedentesPoblacionImpl = new GetAntecedentesPoblacionImpl();
            var result = _antecedentesPoblacionImpl.ObtenerAntecedentesPoblacion(CodFicha);
            return result;
        }

        /// <summary>
        /// Método que obtiene lista del objeto GetParRangoEtareoDto
        /// Spring N° 3 - 20191112 - gcastro
        /// </summary>
        /// <returns>Lista</returns>
        [WebMethod]
        public static List<GetParRangoEtareoDto> ObtenerRangoEtareoAtencion()
        {
            GetAntecedentesPoblacionImpl _antecedentesPoblacionImpl = new GetAntecedentesPoblacionImpl();
            var result = _antecedentesPoblacionImpl.ObtenerRangoEtareoAtencion();
            return result;
        }

        /// <summary>
        /// Método que obtiene lista del objeto GetParRangoEtareoDto por ID
        /// Spring N° 3 - 20191112 - gcastro 
        /// </summary>
        /// <param name="idRangoEtareo"></param>
        /// <returns>Lista</returns>
        [WebMethod]
        public static List<GetParRangoEtareoDto> ObtenerRangoEtareoAtencionPorID(int idRangoEtareo)
        {
            GetAntecedentesPoblacionImpl _getAntecedentesPoblacionImpl = new GetAntecedentesPoblacionImpl();
            var result = _getAntecedentesPoblacionImpl.ObtenerRangoEtareoAtencionPorID(idRangoEtareo);
            return result;
        }

        #endregion

        #region Antecedentes Dotacion Personal
        [WebMethod]
        public static List<ResultadoOperacionPersonalDto> GrabarAntecedentesDotacionPersonal(
                                                            int CodProyecto,
                                                            int CodFicha,
                                                            int IdUsuarioActualizacion,
                                                            int CodEstadoFicha,

                                                            int CantidadDirector,
                                                            int CodJornadaDirector,
                                                            int HorasSemDirector,
                                                            int CantidadAsistenteSocial,
                                                            int CodJornadaAsistenteSocial,
                                                            int HorasSemAsistenteSocial,
                                                            int CantidadPsicologo,
                                                            int CodJornadaPsicologo,
                                                            int HorasSemPsicologo,
                                                            int CantidadEnfermero,
                                                            int CodJornadaEnfermero,
                                                            int HorasSemEnfermero,
                                                            int CantidadAuxiliarEnfermeria,
                                                            int CodJornadaAuxiliarEnfermeria,
                                                            int HorasSemAuxiliarEnfermeria,
                                                            int CantidadMedico,
                                                            int CodJornadaMedico,
                                                            int HorasSemMedico,
                                                            int CantidadPsiquiatra,
                                                            int CodJornadaPsiquiatra,
                                                            int HorasSemPsiquiatra,
                                                            int CantidadTerapeutaOcupacional,
                                                            int CodJornadaTerapeutaOcupacional,
                                                            int HorasSemTerapeutaOcupacional,
                                                            int CantidadKinesiolgo,
                                                            int CodJornadaKinesiologo,
                                                            int HorasSemKinesiologo,
                                                            int CantidadNutricionista,
                                                            int CodJornadaNutricionista,
                                                            int HorasSemNutricionista,
                                                            int CantidadFonoaudiologo,
                                                            int CodJornadaFonoaudiologo,
                                                            int HorasSemFonoaudiolgo,
                                                            int CantidadProfEducFisica,
                                                            int CodJornadaProfEducFisica,
                                                            int HorasSemProfEducFisica,
                                                            int CantidadPsicopedagogo,
                                                            int CodJornadaPsicopedagogo,
                                                            int HorasSemPsicopedagogo,
                                                            int CantidadEducadoraParvulos,
                                                            int CodJornadaEducadoraParvulos,
                                                            int HorasSemEducadoraParvulos,
                                                            int CantidadEducadorTratoDirecto,
                                                            int CodJornadaEducadorTratoDirecto,
                                                            int HorasSemEducadorTratoDirecto,
                                                            int CantidadManipuladorAlimentos,
                                                            int CodJornadaManipuladorAlimentos,
                                                            int HorasSemManipuladorAlimentos,
                                                            int CantidadApoyoAdm,
                                                            int CodJornadaApoyoAdm,
                                                            int HorasSemApoyoAdm,
                                                            int CantidadPersonalAseo,
                                                            int CodJornadaPersonalAseo,
                                                            int HorasSemPersonalAseo,
                                                            int CantidadPersonalLavanderia,
                                                            int CodJornadaPersonalLavanderia,
                                                            int HorasSemPersonalLavanderia,
                                                            int CantidadMonitoresTalleristas,
                                                            int CodJornadaMonitoresTalleristas,
                                                            int HorasSemMonitoresTalleristas,
                                                            int CantidadAlumnosPractica,
                                                            int CodJornadaAlumnosPractica,
                                                            int HorasSemAlumnosPractica,
                                                            int CantidadApoyoVoluntario,
                                                            int CodJornadaApoyoVoluntario,
                                                            int HorasSemApoyoVoluntario,
                                                            int CantidadOtros,
                                                            int CodJornadaOtros,
                                                            int HorasSemOtros,
                                                            int CantidadLicencia,
                                                            int CodJornadaLicencia,
                                                            int HorasSemLicencia,
                                                            int CantidadSuplenteLicencia,
                                                            int CodJornadaSuplenteLicencia,
                                                            int HorasSemSuplenteLicencia,
                                                            string Observaciones)
        {
            ResultadoOperacionPersonalImpl _resultadoOperacionPersonalImpl = new ResultadoOperacionPersonalImpl();
            var result = _resultadoOperacionPersonalImpl.GrabarAntecedentesPersonal(
                                                            CodFicha,
                                                            CodProyecto,
                                                            CodEstadoFicha,
                                                            IdUsuarioActualizacion,
                                                            CantidadDirector,
                                                            CodJornadaDirector,
                                                            HorasSemDirector,
                                                            CantidadAsistenteSocial,
                                                            CodJornadaAsistenteSocial,
                                                            HorasSemAsistenteSocial,
                                                            CantidadPsicologo,
                                                            CodJornadaPsicologo,
                                                            HorasSemPsicologo,
                                                            CantidadEnfermero,
                                                            CodJornadaEnfermero,
                                                            HorasSemEnfermero,
                                                            CantidadAuxiliarEnfermeria,
                                                            CodJornadaAuxiliarEnfermeria,
                                                            HorasSemAuxiliarEnfermeria,
                                                            CantidadMedico,
                                                            CodJornadaMedico,
                                                            HorasSemMedico,
                                                            CantidadPsiquiatra,
                                                            CodJornadaPsiquiatra,
                                                            HorasSemPsiquiatra,
                                                            CantidadTerapeutaOcupacional,
                                                            CodJornadaTerapeutaOcupacional,
                                                            HorasSemTerapeutaOcupacional,
                                                            CantidadKinesiolgo,
                                                            CodJornadaKinesiologo,
                                                            HorasSemKinesiologo,
                                                            CantidadNutricionista,
                                                            CodJornadaNutricionista,
                                                            HorasSemNutricionista,
                                                            CantidadFonoaudiologo,
                                                            CodJornadaFonoaudiologo,
                                                            HorasSemFonoaudiolgo,
                                                            CantidadProfEducFisica,
                                                            CodJornadaProfEducFisica,
                                                            HorasSemProfEducFisica,
                                                            CantidadPsicopedagogo,
                                                            CodJornadaPsicopedagogo,
                                                            HorasSemPsicopedagogo,
                                                            CantidadEducadoraParvulos,
                                                            CodJornadaEducadoraParvulos,
                                                            HorasSemEducadoraParvulos,
                                                            CantidadEducadorTratoDirecto,
                                                            CodJornadaEducadorTratoDirecto,
                                                            HorasSemEducadorTratoDirecto,
                                                            CantidadManipuladorAlimentos,
                                                            CodJornadaManipuladorAlimentos,
                                                            HorasSemManipuladorAlimentos,
                                                            CantidadApoyoAdm,
                                                            CodJornadaApoyoAdm,
                                                            HorasSemApoyoAdm,
                                                            CantidadPersonalAseo,
                                                            CodJornadaPersonalAseo,
                                                            HorasSemPersonalAseo,
                                                            CantidadPersonalLavanderia,
                                                            CodJornadaPersonalLavanderia,
                                                            HorasSemPersonalLavanderia,
                                                            CantidadMonitoresTalleristas,
                                                            CodJornadaMonitoresTalleristas,
                                                            HorasSemMonitoresTalleristas,
                                                            CantidadAlumnosPractica,
                                                            CodJornadaAlumnosPractica,
                                                            HorasSemAlumnosPractica,
                                                            CantidadApoyoVoluntario,
                                                            CodJornadaApoyoVoluntario,
                                                            HorasSemApoyoVoluntario,
                                                            CantidadOtros,
                                                            CodJornadaOtros,
                                                            HorasSemOtros,
                                                            CantidadLicencia,
                                                            CodJornadaLicencia,
                                                            HorasSemLicencia,
                                                            CantidadSuplenteLicencia,
                                                            CodJornadaSuplenteLicencia,
                                                            HorasSemSuplenteLicencia,
                                                            Observaciones);
            return result;
        }
        [WebMethod]
        public static List<GetDotacionPersonalDto> ObtenerAntecedentesDotacionPersonal(int CodFicha)
        {
            GetDotacionPersonalImpl _dotacionPersonalImpl = new GetDotacionPersonalImpl();
            var result = _dotacionPersonalImpl.ObtenerDotacionPersonal(CodFicha);
            return result;
        }
        #endregion

        #region Antecedentes Infraestructura
  
        [WebMethod]
        public static List<GetParInfraestructuraDto> ObtenerParInfraestructura()
        {
            GetParInfraestructuraImpl _InfraestructuraImpl = new GetParInfraestructuraImpl();
            var result = _InfraestructuraImpl.ObtenerParInfraestructura();
            return result;
        }

        [WebMethod]
        public static List<ResultadoOperacionInfraestructuraDto> GrabarAntecedentesInfraestructura(
                                                            int CodProyecto,
                                                            int CodFicha,
                                                            int IdUsuarioActualizacion,
                                                            int CodEstadoFicha,

                                                            int CantidadOficAdm,
                                                            int CantidadSalaReunion,
                                                            int CantidadSalaRecepcion,
                                                            int CantidadEspaciosVisitas,
                                                            int CantidadSalaTalleres,
                                                            int CantidadSalaLiving,
                                                            int CantidadEnfermeria,
                                                            int CantidadRecreacion,
                                                            int CantidadAreasVerdes,
                                                            int CantidadCocina,
                                                            int CantidadComedor,
                                                            int CantidadLavanderia,
                                                            int CantidadDormitoriosNNA,
                                                            int CantidadCamasNNA,
                                                            int CantidadColsetLockers,
                                                            int CantidadBañosPublicos,
                                                            int CantidadBañosNNA,
                                                            int CantidadDuchasNNA,
                                                            int AmbienteAcorde,
                                                            int VestuarioAdecuado,
                                                            int UtilesAseo,
                                                            int AguaCaliente,
                                                            int CalefonGas,
                                                            int SistemaCalefacion,
                                                            int Ventilacion,
                                                            int AccesoDiscapacitados,
                                                            int HabilitaDiscapacitados,
                                                            string Observaciones,

                                                            int BanosNNAenFuncionamiento,
                                                            int BanosNNAdeacuerdoNormativa,
                                                            int BanosNNAdehombres,
                                                            int BanosNNAdemujeres,
                                                            int BanosNNAmixtos,
                                                            int DuchasNNAFuncionamiento,
                                                            int DuchasNNAdeacuerdoNormativa,
                                                            int DuchasNNAdehombres,
                                                            int DuchasNNAdemujeres,
                                                            int DuchasNNAmixtas,
                                                            int VestuarioPersonalizadoNNA ,
                                                            int CumpleNormativaCalefon ,
                                                            int CumpleNormativaLlaveGas
            )
        {
            ResultadoOperacionInfraestructuraImpl _resultadoOperacionInfraestructuraImpl = new ResultadoOperacionInfraestructuraImpl();
            var result = _resultadoOperacionInfraestructuraImpl.GrabarAntecedentesInfraestructura(
                                                                            CodFicha,
                                                                            CodProyecto,
                                                                            CodEstadoFicha,
                                                                            IdUsuarioActualizacion,
                                                                            CantidadOficAdm,
                                                                            CantidadSalaReunion,
                                                                            CantidadSalaRecepcion,
                                                                            CantidadEspaciosVisitas,
                                                                            CantidadSalaTalleres,
                                                                            CantidadSalaLiving,
                                                                            CantidadEnfermeria,
                                                                            CantidadRecreacion,
                                                                            CantidadAreasVerdes,
                                                                            CantidadCocina,
                                                                            CantidadComedor,
                                                                            CantidadLavanderia,
                                                                            CantidadDormitoriosNNA,
                                                                            CantidadCamasNNA,
                                                                            CantidadColsetLockers,
                                                                            CantidadBañosPublicos,

                                                                            CantidadBañosNNA,
                                                                            BanosNNAdeacuerdoNormativa,
                                                                            BanosNNAdehombres,
                                                                            BanosNNAdemujeres,
                                                                            BanosNNAenFuncionamiento,
                                                                            BanosNNAmixtos,

                                                                            CantidadDuchasNNA,                                                                            
                                                                            DuchasNNAdeacuerdoNormativa,
                                                                            DuchasNNAdehombres,
                                                                            DuchasNNAdemujeres,
                                                                            DuchasNNAFuncionamiento,
                                                                            DuchasNNAmixtas,

                                                                            AmbienteAcorde,
                                                                            VestuarioAdecuado,
                                                                            VestuarioPersonalizadoNNA,
                                                                            UtilesAseo,
                                                                            AguaCaliente,
                                                                            
                                                                            CalefonGas,
                                                                            CumpleNormativaCalefon ,
                                                                            CumpleNormativaLlaveGas,

                                                                            SistemaCalefacion,
                                                                            Ventilacion,
                                                                            AccesoDiscapacitados,
                                                                            HabilitaDiscapacitados,
                                                                            Observaciones);
            return result;
        }
        [WebMethod]
        public static List<GetAntecedentesInfraestructuraDto> ObtenerAntecedentesInfraestructura(int CodFicha)
        {
            GetAntecedentesInfraestructuraImpl _antecedentesInfraestructuraImpl = new GetAntecedentesInfraestructuraImpl();
            var result = _antecedentesInfraestructuraImpl.ObtenerAntecedentesInfraestructura(CodFicha);
            return result;
        }

        /// <summary>
        /// Método que lista parValores
        /// Spring 3 - 20191113 - gcastro
        /// </summary>
        /// <returns>Lista</returns>
        [WebMethod]
        public static List<GetParValoresDto> ObtenerParValores()
        {
            GetAntecedentesInfraestructuraImpl _antecedentesInfraestructuraImpl = new GetAntecedentesInfraestructuraImpl();
            var result = _antecedentesInfraestructuraImpl.ObtenerParValores();
            return result;
        }
        #endregion

        #region Antecedentes Seguridad
        [WebMethod]
        public static List<GetParSeguridadDto> ObtenerParSeguridad()
        {
            GetParSeguridadImpl _ParSeguridadImpl = new GetParSeguridadImpl();
            var result = _ParSeguridadImpl.ObtenerParSeguridad();
            return result;
        }

        [WebMethod]
        public static List<ResultadoOperacionSeguridadDto> GrabarAntecedentesSeguridad(
                                                            int CodProyecto,
                                                            int CodFicha,
                                                            int IdUsuarioActualizacion,
                                                            int CodEstadoFicha,
                                                            int PlanEmergencia,
                                                            int SimulacroEmergencia,
                                                            int PlanEmergenciaCalificado,
                                                            int Extintores,
                                                            int Senaletica,
                                                            int ViasEvacuacion,
                                                            int CapacitacionPersonalEmergencia,
                                                            int Sanitizacion,
                                                            int SistemaElectrico,
                                                            int ZonasSeguridad,
                                                            string Observaciones,

                                                            int capacitacionEmergencia,
                                                            int capacitacionPrimerosAux,
                                                            int seg_sanitizacion,
                                                            int seg_desratizacion,
                                                            int seg_fumigacion
            )
        {
            ResultadoOperacionSeguridadImpl _resultadoOperacionSeguridadImpl = new ResultadoOperacionSeguridadImpl();
            var result = _resultadoOperacionSeguridadImpl.GrabarAntecedentesSeguridad(
                                                                            CodFicha,
                                                                            CodProyecto,
                                                                            CodEstadoFicha,
                                                                            IdUsuarioActualizacion,
                                                                            PlanEmergencia,
                                                                            SimulacroEmergencia,
                                                                            PlanEmergenciaCalificado,
                                                                            Extintores,
                                                                            Senaletica,
                                                                            ViasEvacuacion,
                                                                            CapacitacionPersonalEmergencia,
                                                                            capacitacionEmergencia,
                                                                            capacitacionPrimerosAux,
                                                                            Sanitizacion,
                                                                            seg_desratizacion,
                                                                            seg_fumigacion,
                                                                            seg_sanitizacion,
                                                                            SistemaElectrico,
                                                                            ZonasSeguridad,
                                                                            Observaciones);
            return result;
        }
        [WebMethod]
        public static List<GetAntecedentesSeguridadDto> ObtenerAntecedentesSeguridad(int CodFicha)
        {
            GetAntecedentesSeguridadImpl _antecedentesSeguridadImpl = new GetAntecedentesSeguridadImpl();
            var result = _antecedentesSeguridadImpl.ObtenerAntecedentesSeguridad (CodFicha);
            return result;
        }
        #endregion

        #region Antecedentes Salud
        [WebMethod]
        public static List<GetParSaludDto> ObtenerParSalud()
        {
            GetParSaludImpl _SaludImpl = new GetParSaludImpl();
            var result = _SaludImpl.ObtenerParSalud();
            return result;
        }

        [WebMethod]
        public static List<ResultadoOperacionSaludDto> GrabarAntecedentesSalud(
                                                            int CodProyecto,
                                                            int CodFicha,
                                                            int IdUsuarioActualizacion,
                                                            int CodEstadoFicha,
                                                            int NNACesfam,
                                                            int NNASaludMentalDiagnostico,
                                                            int NNASaludMental,
                                                            int NNACronicos,
                                                            int NNADiscapacitados,
                                                            int NNAMedicamento,
                                                            int NNATratamiento,
                                                            int NNADrogas,
                                                            int RegistroMedicamentoNNA,
                                                            int ProtocoloAdmMedicamentos,
                                                            int ControlGinecologico,
                                                            int NegadaControlGinecologico,
                                                            int AdolecentesEmbarazadas,
                                                            int AdolecentesEmbarazadasControl,
                                                            string Observaciones,

                                                            int NNA_EsperaTransplantes,
                                                            int NNA_Transplantados,
                                                            int NNA_consumoAlcohol,
                                                            int sel_resguardoMedicamentos,
                                                            int sel_inventarioMedicamentos,
                                                            int sel_control_nino_sano,
                                                            int sel_control_adolescente_sano,
                                                            int NNAAlcoholyDroga
            )
        {
            ResultadoOperacionSaludImpl _resultadoOperacionSaludImpl = new ResultadoOperacionSaludImpl();
            var result = _resultadoOperacionSaludImpl.GrabarAntecedentesSalud(
                                                                            CodFicha,                                                            
                                                                            CodProyecto,
                                                                            CodEstadoFicha,
                                                                            IdUsuarioActualizacion,
                                                                            NNACesfam,
                                                                            NNASaludMentalDiagnostico,
                                                                            NNASaludMental,
                                                                            NNACronicos,
                                                                            NNADiscapacitados,
                                                                            NNAMedicamento,
                                                                            NNATratamiento,
                                                                            NNA_EsperaTransplantes,
                                                                            NNA_Transplantados,
                                                                            NNADrogas,
                                                                            NNA_consumoAlcohol,
                                                                            NNAAlcoholyDroga,
                                                                            sel_resguardoMedicamentos,
                                                                            sel_inventarioMedicamentos,
                                                                            sel_control_nino_sano,
                                                                            sel_control_adolescente_sano,
                                                                            RegistroMedicamentoNNA,
                                                                            ProtocoloAdmMedicamentos,
                                                                            ControlGinecologico,
                                                                            NegadaControlGinecologico,
                                                                            AdolecentesEmbarazadas,
                                                                            AdolecentesEmbarazadasControl,
                                                                            Observaciones); 
            return result;
        }
        [WebMethod]
        public static List<GetAntecedentesSaludDto> ObtenerAntecedentesSalud(int CodFicha)
        {
            GetAntecedentesSaludImpl _antecedentesSaludImpl = new GetAntecedentesSaludImpl();
            var result = _antecedentesSaludImpl.ObtenerAntecedentesSalud(CodFicha);
            return result;
        }
        #endregion

        #region Antecedentes Educación
        [WebMethod]
        public static List<ResultadoOperacionEducacionDto> GrabarAntecedentesEducacion(
                                                            int CodProyecto,
                                                            int CodFicha,
                                                            int IdUsuarioActualizacion,
                                                            int CodEstadoFicha,

                                                            int NNAEducacion,
                                                            int NNAEducacionNo,
                                                            int NNARetrasoEscolar,
                                                            int NNAMatriculaCancelada,
                                                            int NNAEducaionEspecial,
                                                            int NNANivelacion,
                                                            int EspaciosEstudios,
                                                            int MaterialBibliografico,
                                                            int Computadores,
                                                            int AccesoInternetControlado,
                                                            string Observaciones,

                                                            int NNA_matriculados,
                                                            int NNA_examenesLibres,
                                                            int NNAEducacionNoMotivo
            )
        {
            ResultadoOperacionEducacionImpl _resultadoOperacionEducacionImpl = new ResultadoOperacionEducacionImpl();
            var result = _resultadoOperacionEducacionImpl.GrabarAntecedentesEducacion(
                                                                                    CodFicha,                                                            
                                                                                    CodProyecto,
                                                                                    CodEstadoFicha,
                                                                                    IdUsuarioActualizacion,
                                                                                    NNAEducacion,
                                                                                    NNAEducacionNo,
                                                                                    NNAEducacionNoMotivo,
                                                                                    NNARetrasoEscolar,
                                                                                    NNAMatriculaCancelada,
                                                                                    NNAEducaionEspecial,
                                                                                    NNANivelacion,
                                                                                    NNA_matriculados,
                                                                                    NNA_examenesLibres, 
                                                                                    EspaciosEstudios,
                                                                                    MaterialBibliografico,
                                                                                    Computadores,
                                                                                    AccesoInternetControlado,
                                                                                    Observaciones);
            return result;
        }
        
        [WebMethod]
        public static List<GetAntecedentesEducacionDto> ObtenerAntecedentesEducacion(string CodProyecto, int CodEstadoFicha, int? CodFichaAUX)
        {
            GetMineducRegistroEducacionalImpl _antecedentesEducacion = new GetMineducRegistroEducacionalImpl();
            var result = _antecedentesEducacion.ObtenerAntecedentesEducacion(CodProyecto, CodEstadoFicha, CodFichaAUX);
            return result;
        }
        #endregion

        #region Antecedentes Alimentación  
        [WebMethod]
        public static List<GetParAlimentacionDto> ObtenerParAlimentacion()
        {
            GetParAlimentacionImpl _GestionResidenciaImpl = new GetParAlimentacionImpl();
            var result = _GestionResidenciaImpl.ObtenerParAlimentacion();
            return result;
        }

        [WebMethod]
        public static List<ResultadoOperacionAlimentacionDto> GrabarAntecedentesAlimentacion(
                                                            int CodProyecto, 
                                                            int CodFicha, 
                                                            int IdUsuarioActualizacion,
                                                            int CodEstadoFicha,
                                                            int RegistroHonorario,
                                                            int RegistroPlanificacion,
                                                            int MenusEspeciales,
                                                            int AsesoriaNutricionista,
                                                            int CertificadosSanitarios,
                                                            int ConservacionAlimentos,
                                                            int CantidadComidas,
                                                            int CantidadComidasFeriados,
                                                            string Observaciones,
            
                                                            int AlmacenaAlimento_existe,
                                                            int EstadoConserva_existe
            )
        {
            ResultadoOperacionAlimentacionImpl _resultadoOperacionAlimentacionImpl = new ResultadoOperacionAlimentacionImpl();
            var result = _resultadoOperacionAlimentacionImpl.GrabarAntecedentesAlimentacion(
                                                                                            CodFicha,                                                            
                                                                                            CodProyecto,
                                                                                            CodEstadoFicha,
                                                                                            IdUsuarioActualizacion,
                                                                                            RegistroHonorario,
                                                                                            RegistroPlanificacion,
                                                                                            MenusEspeciales,
                                                                                            AsesoriaNutricionista,
                                                                                            CertificadosSanitarios,
                                                                                            ConservacionAlimentos,
                                                                                            AlmacenaAlimento_existe,
                                                                                            EstadoConserva_existe,
                                                                                            CantidadComidas,
                                                                                            CantidadComidasFeriados,
                                                                                            Observaciones);
            return result;
        }
        [WebMethod]
        public static List<GetAntecedentesAlimentacionDto> ObtenerAntecedentesAlimentacion(int CodFicha)
        {
            GetAntecedentesAlimentacionImpl _antecedentesAlimentacionImpl = new GetAntecedentesAlimentacionImpl();
            var result = _antecedentesAlimentacionImpl.ObtenerAntecedentesAlimentacion(CodFicha);
            return result;
        }
        #endregion

        #region Antecedentes Gestión Residencica
        [WebMethod]
        public static List<GetParGestionResidenciaDto> ObtenerParAntecedentesGestionResidencia()
        {
            GetParGestionResidenciaImpl _GestionResidenciaImpl = new GetParGestionResidenciaImpl();
            var result = _GestionResidenciaImpl.ObtenerParAntecedentesGestionResidencia();
            return result;
        }


        [WebMethod]
        public static List<ResultadoOperacionResidenciaDto> GrabarAntecedentesGestionResidencia(
                                                            int CodProyecto,
                                                            int CodFicha,
                                                            int IdUsuarioActualizacion,
                                                            int CodEstadoFicha,
                                                            int CatastroRedes,
                                                            int RegistroVisitas,
                                                            int ProtocoloAcogida,
                                                            int AutocuidadoEquipo,
                                                            int IntervencionCrisis,
                                                            int InformacionNormativa,
                                                            int ProtocoloConvivencia,
                                                            int ProtocoloReclamos,
                                                            int ProtocoloEscucha,
                                                            int VinculacionResidencias,
                                                            int ProcesosFormacion,
                                                            int ProtocoloApadrinamiento,
                                                            int ProtocoloTraslado,
                                                            int ProtocoloEgreso,
                                                            int ProtocoloRedSalud,
                                                            int HabilitacionLaboral,
                                                            string Observaciones,

                                                            int protoVisitas_existe,
                                                            int regisVisitas_existe,
                                                            int activi_habilitaLaboral,
                                                            int activi_vidaInpendiente            
            )
        {
            ResultadoOperacionResidenciaImpl _resultadoOperacionResidenciaImpl = new ResultadoOperacionResidenciaImpl();
            var result = _resultadoOperacionResidenciaImpl.GrabarAntecedentesResidencia(
                                                                            CodFicha,                                                            
                                                                            CodProyecto,
                                                                            CodEstadoFicha,
                                                                            IdUsuarioActualizacion,
                                                                            CatastroRedes,
                                                                            RegistroVisitas,
                                                                            ProtocoloAcogida,
                                                                            AutocuidadoEquipo,
                                                                            IntervencionCrisis,
                                                                            InformacionNormativa,
                                                                            ProtocoloConvivencia,
                                                                            ProtocoloReclamos,
                                                                            ProtocoloEscucha,
                                                                            VinculacionResidencias,
                                                                            ProcesosFormacion,
                                                                            ProtocoloApadrinamiento,
                                                                            ProtocoloTraslado,
                                                                            ProtocoloEgreso,
                                                                            ProtocoloRedSalud,
                                                                            HabilitacionLaboral,
                                                                            protoVisitas_existe,
                                                                            regisVisitas_existe,
                                                                            activi_vidaInpendiente,
                                                                            activi_habilitaLaboral,                                                                           
                                                                            Observaciones);
            return result;
        }
        [WebMethod]
        public static List<GetAntecedentesResidenciaDto> ObtenerAntecedentesGestionResidencia(int CodFicha)
        {
            GetAntecedentesResidenciaImpl _antecedentesResidenciaImpl = new GetAntecedentesResidenciaImpl();
            var result = _antecedentesResidenciaImpl.ObtenerAntecedentesResidencia(CodFicha);
            return result;
        }
        #endregion

        #region Funciones Privadas
        private static System.Xml.XmlDocument GeneraParametroDetalleNNA(string arrDetalle_NNA)
        {
            //ORDEN DE INDICES: EN CADENA DE TEXTO DE ENTRADA
            //0:posicion
            //1:CodNino
            //2:Rut
            //3:Nombres
            //4:ApellidoPaterno
            //5:ApellidoMaterno
            //6:Rit
            //7:Tribunal
            //8:CodTribunal

            string detalleNNAXML = "";

            //int num_ninos = arrDetalle_NNA.Length / 2 / 8;

            string[] Detalle_NNA_rr = arrDetalle_NNA.Split('|');

            for (var k = 0; k <= Detalle_NNA_rr.Length - 2; k++)
            {

                //MessageBox.Show(arrDetalle_NNA[k, 0, 0].ToString() + " " + arrDetalle_NNA[k, 0, 1]);
                string[] datosNNA = Detalle_NNA_rr[k].Split('[');

                if (datosNNA.Length > 0)
                {
                    detalleNNAXML = detalleNNAXML + "<det " +
                                    "posicion='" + datosNNA[0] + "' " +
                                    "codnino='" + datosNNA[1] + "' " +
                                    "rut='" + datosNNA[2] + "' " +
                                    "nombres='" + datosNNA[3] + "' " +
                                    "apellidopaterno='" + datosNNA[4] + "' " +
                                    "apellidomaterno='" + datosNNA[5] + "' " +
                                    "rit='" + datosNNA[6] + "' " +
                                    "tribunal='" + datosNNA[7] + "' " +
                                    "codtribunal='" + datosNNA[8] + "' " +
                                    "/>";
                }
            }

            detalleNNAXML = "<detalle_nna_>" + detalleNNAXML + "</detalle_nna_>";

            System.Xml.XmlDocument oDOM = new System.Xml.XmlDocument();

            oDOM.LoadXml(detalleNNAXML);

            return oDOM;
        }
        #endregion
    }
    public class MantenerSesionDto
    {
        public string Estatus { get; set; }
        public string NombreProyecto { get; set; }
        public string NombreInstitucion { get; set; }
        public int CodProyecto { get; set; }
        public string NombreUsuario { get; set; }
        public string error { get; set; }
    }

    //PARA PROBAR EN CAPA DE PRESENTACIÓN CAPTURA DE ERRORES CRÍTICOS DE APP
    //throw new System.ArgumentException("Esta es una excepción forzada de la aplicación para probar captura de errores críticos a nivel de capa de presentación.", "original");


    public class windowFR
    {
        #region window.close
        public static void close(Page p)
        {
            p.ClientScript.RegisterClientScriptBlock(typeof(string), "SENAINFO", "<script  languaje=javascript> window.close(); </script>");

        }
        #endregion

        #region window.open

        //Felipe Ormazabal
        public static void open(Page p, string surl, string wname, int wname2, bool menubar, bool resizable, int width, int height, bool location, bool status, bool scrollbars)
        {
            string features = "menubar=" + menubar.ToString() + ", resizable=" + resizable.ToString() + ", width=" + width.ToString() + ", height=" + height.ToString() + ", location=" + location.ToString() + ", status=" + status.ToString() + ", scrollbars=" + scrollbars.ToString();
            string script = "<script  languaje=javascript> window.open('" + surl + "','" + wname + "','" + features + "'); </script>";
            p.ClientScript.RegisterClientScriptBlock(typeof(string), "SENAINFO", script);

        }

        public static void open(Page p, string surl, string wname, bool menubar, bool resizable, int width, int height, bool location, bool status, bool scrollbars)
        {

            string features = "menubar=" + Convert.ToInt32(menubar).ToString() + ", resizable=" + Convert.ToInt32(resizable).ToString() + ", width=" + width.ToString() + ", height=" + height.ToString() + ", location=" + Convert.ToInt32(location).ToString() + ", status=" + Convert.ToInt32(status).ToString() + ", scrollbars=" + Convert.ToInt32(scrollbars).ToString();
            string script = "<script  languaje=javascript> window.open('" + surl + "','" + wname + "','" + features + "'); </script>";
            p.ClientScript.RegisterClientScriptBlock(typeof(string), "SENAINFO", script);

        }

        public static void open(Page p, string surl, string wname, bool resizable, int width, int height, bool location, bool status, bool scrollbars)
        {
            bool menubar = false;
            open(p, surl, wname, menubar, resizable, width, height, location, status, scrollbars);
        }
        public static void open(Page p, string surl, string wname, int width, int height, bool location, bool status, bool scrollbars)
        {
            bool menubar = false;
            bool resizable = false;
            open(p, surl, wname, menubar, resizable, width, height, location, status, scrollbars);
        }
        public static void open(Page p, string surl, string wname, int width, int height, bool status, bool scrollbars)
        {
            bool menubar = false;
            bool resizable = false;
            bool location = false;
            open(p, surl, wname, menubar, resizable, width, height, location, status, scrollbars);
        }
        public static void open(Page p, string surl, string wname, int width, int height, bool scrollbars)
        {
            bool menubar = false;
            bool resizable = false;
            bool location = false;
            bool status = false;

            open(p, surl, wname, menubar, resizable, width, height, location, status, scrollbars);
        }

        //Modificacion Felipe

        public static void open(Page p, string surl, string wname, int wname2, int width, int height)
        {
            bool menubar = false;
            bool resizable = false;
            bool location = false;
            bool status = false;
            bool scrollbars = false;

            open(p, surl, wname, wname2, menubar, resizable, width, height, location, status, scrollbars);


        }

        public static void open(Page p, string surl, string wname, int width, int height)
        {
            bool menubar = false;
            bool resizable = false;
            bool location = false;
            bool status = false;
            bool scrollbars = false;

            open(p, surl, wname, menubar, resizable, width, height, location, status, scrollbars);


            //open(p, surl, wname, wname2, menubar, resizable, width, height, location, status, scrollbars);
        }
        public static void open(Page p, string surl, int width, int height)
        {
            bool menubar = false;
            bool resizable = false;
            bool location = false;
            bool status = false;
            bool scrollbars = false;
            string wname = "_media";

            open(p, surl, wname, menubar, resizable, width, height, location, status, scrollbars);
        }
        #endregion
        #region window.opener
        public class opener
        {
            public static void execute(Page p, string str)
            {

                p.ClientScript.RegisterClientScriptBlock(typeof(string), "SENAINFO", "<script  languaje=javascript> window.opener." + str + "; </script>");

            }

        }
        #endregion

        #region window.alert

        public static void alert(Page p, string message)
        {
            p.ClientScript.RegisterClientScriptBlock(typeof(string), "SENAINFO", "<script  languaje=javascript> alert('" + message + "'); </script>");

        }

        #endregion

        #region ExisteToken
        public static bool existetoken(string token)
        {
            try
            {
                //DataTable listatokens = ((DataSet)npl).Tables[0];
                //((DataSet)HttpContext.Current.Session["tokens"]).Tables[0];
                DataTable listatokens = ((DataSet)HttpContext.Current.Session["tokens"]).Tables[0];
                if (token.Trim() != string.Empty && listatokens.Rows.Count > 0)
                {
                    //return true;
                    return (listatokens.Select("TokenCadena = '" + token.Trim() + "'").Length != 0);
                }

                //return (listatokens.Select("TokenCadena = '" + token.Trim() +"'").Length != 0);

                //for (int i = 0; i < listatokens.Rows.Count; i++)
                //{
                //    if (token.Trim() == listatokens.Rows[i][1].ToString().Trim())
                //    {
                //        return true;
                //    }

                // }
            }
            catch { }
            return false;
        }
        #endregion

        public static string Base64Encode(string plainText)
        {
            var plainTextBytes = Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        public static string Base64Decode(string encodedString)
        {
            byte[] data = Convert.FromBase64String(encodedString);
            return Encoding.UTF8.GetString(data);

            //var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            //return System.Convert.ToBase64String(plainTextBytes);
        }

        /*public static string encriptaContrasena(string InContrasena)
        {
            byte[] hash = new SHA1CryptoServiceProvider().ComputeHash(Encoding.Unicode.GetBytes(InContrasena));
            string Contrasena = "";
            for (int index = 0; index < hash.Length; ++index)
                Contrasena += hash.GetValue(index).ToString();
            return Contrasena;
        }*/
        public static string EncriptarContrasena(string login, string contrasena)
        {
            List<byte> listBytes;
            StringBuilder sbResult;
            string username = login.ToLower();

            listBytes = new List<byte>();

            listBytes.AddRange(new SHA1CryptoServiceProvider().ComputeHash(Encoding.Unicode.GetBytes(contrasena)));
            /*if (username.Contains("@") == false)
            {
                listBytes.AddRange(new SHA1CryptoServiceProvider().ComputeHash(Encoding.Unicode.GetBytes(contrasena)));
            }
            else
            {
                username = username.Substring(username.Trim().Length - 1, 1) + username;

                listBytes.AddRange(new SHA1CryptoServiceProvider().ComputeHash(Encoding.Unicode.GetBytes(username)));
                listBytes.AddRange(new SHA1CryptoServiceProvider().ComputeHash(Encoding.Unicode.GetBytes(contrasena)));
            }*/

            sbResult = new StringBuilder();
            foreach (byte elemento in listBytes)
                sbResult.Append(elemento.ToString());

            return sbResult.ToString();
        }

        #region Validacion Usuario
        //public static bool validatetoken(string tkn, object npl)
        //{
        //    try
        //    {
        //        DataTable neopermissionlist = ((DataSet)npl).Tables[0];
        //        if (tkn.Trim() == string.Empty && neopermissionlist.Rows.Count > 0)
        //        {
        //            return true;
        //        }

        //        for (int i = 0; i < neopermissionlist.Rows.Count; i++)
        //        {
        //            if (tkn.Trim() == neopermissionlist.Rows[i][1].ToString().Trim())
        //            {
        //                return true;
        //            }

        //        }
        //    }
        //    catch { }
        //    return false;
        //}
        #endregion

        #region window.logout
        public static void logout()
        {
            try
            {
                FormsAuthentication.SignOut();

                HttpContext.Current.Session.Clear();

                HttpContext.Current.Session.Remove("tokens");
                HttpContext.Current.Session.Remove("IdUsuario");
                HttpContext.Current.Session.Remove("Usuario");

                HttpContext.Current.Session.Remove("NNANombres");
                HttpContext.Current.Session.Remove("NNAApellidoPaterno");
                HttpContext.Current.Session.Remove("NNAApellidoMaterno");
                HttpContext.Current.Session.Remove("NNACodProyecto");
                HttpContext.Current.Session.Remove("NNACodInstitucion");
                HttpContext.Current.Session.Remove("NNASexo");
                HttpContext.Current.Session.Remove("NNARutNino");
                HttpContext.Current.Session.Remove("NNACodNino");
                HttpContext.Current.Session.Remove("NNAFechaNacimiento");
            }
            catch { }
        }
        #endregion
    }

}