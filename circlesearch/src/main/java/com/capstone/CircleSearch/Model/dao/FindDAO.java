package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.FindDTO;

public interface FindDAO {

    int findInterestcode(FindDTO param) throws Exception;
    int findRegioncode(FindDTO param) throws Exception;
    int findCollegecode(FindDTO param) throws Exception;
    String findUsernickname(FindDTO param) throws Exception;
}
