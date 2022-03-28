package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.CheckIdDTO;

import java.util.List;


public interface CheckIdDAO {
    int checkUserid (CheckIdDTO param) throws Exception;
    int checkUserNickname (CheckIdDTO param) throws Exception;
    List<CheckIdDTO> selectAllCollegeList() throws Exception;
    String getLogin(CheckIdDTO userid) throws Exception;
}
