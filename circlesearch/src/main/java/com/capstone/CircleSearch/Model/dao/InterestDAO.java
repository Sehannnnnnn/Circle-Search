package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.InterestDTO;
import com.capstone.CircleSearch.Model.dto.InterestInputDTO;

import java.util.List;

public interface InterestDAO {
    List<InterestDTO> selectInterestList() throws Exception;
    int insertUserInterest(InterestInputDTO interestInputDTO);

}
