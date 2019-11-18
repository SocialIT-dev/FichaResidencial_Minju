using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace SENAME.Senainfo.ModFichaResidencial.DAL.DAO
{
    public class RegionDao : Repository
    {
        public DataTable ObtenerRegiones(int? codRegion)
        {
            using (var con = GetConnection())
            {
                con.Open();
                using (var cmd = new SqlCommand("SUPTECNICA.GetRegion", con))
                {
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    DataTable dt = new DataTable();

                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@codRegion", codRegion.HasValue ? (object)codRegion : DBNull.Value);
                    da.SelectCommand = cmd;
                    da.Fill(dt);
                    return dt;
                }
            }

        }
    }
}
