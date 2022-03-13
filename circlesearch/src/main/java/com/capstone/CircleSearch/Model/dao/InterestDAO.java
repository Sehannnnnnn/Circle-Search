package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.InterestDTO;

import java.util.List;

public interface InterestDAO {
    List<InterestDTO> selectInterestList() throws Exception;
}
