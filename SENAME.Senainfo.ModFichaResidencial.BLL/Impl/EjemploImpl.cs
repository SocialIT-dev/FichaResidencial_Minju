using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using SENAME.Senainfo.ModFichaResidencial.DAL.DAO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Mapper;
using SENAME.Senainfo.ModFichaResidencial.BLL.DTO;
using SENAME.Senainfo.ModFichaResidencial.BLL.Interfaces;


namespace SENAME.Senainfo.ModFichaResidencial.BLL.Impl
{
    public class RegionImpl : IRegion
    {
        private readonly RegionDao _regionDao;

        public RegionImpl()
        {
            _regionDao = new RegionDao();
        }

        public List<RegionDto> ObtenerRegiones(int? codRegion)
        {
            var result = _regionDao.ObtenerRegiones(codRegion);
            return RegionMapper.ToDto(result);
        }
    }
}
