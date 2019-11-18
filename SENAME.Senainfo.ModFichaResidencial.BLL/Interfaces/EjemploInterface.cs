using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces
{
    public interface IRegion
    {
        List<SENAME.Senainfo.ModFichaResidencial.BLL.DTO.RegionDto> ObtenerRegiones(int? codRegion);
    }
}
