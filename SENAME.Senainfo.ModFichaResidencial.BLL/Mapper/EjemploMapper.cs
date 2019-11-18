using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Mapper
{
    public class RegionMapper
    {

        public static List<RegionDto> ToDto(DataTable dt)
        {
            List<RegionDto> list = new List<RegionDto>();
            RegionDto dto = new RegionDto();

            foreach (DataRow dr in dt.Rows)
            {
                dto = new RegionDto();
                dto.CodRegion = (int)dr["CodRegion"];
                dto.Descripcion = dr["Descripcion"].ToString();
                list.Add(dto);
            }
            return list;
        }
    }
}
