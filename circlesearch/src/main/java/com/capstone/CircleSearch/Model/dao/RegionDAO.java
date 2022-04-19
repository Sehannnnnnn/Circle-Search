package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.RegionDTO;

import java.util.List;

public interface RegionDAO {
    List<RegionDTO> selectRegion() throws Exception;
}
