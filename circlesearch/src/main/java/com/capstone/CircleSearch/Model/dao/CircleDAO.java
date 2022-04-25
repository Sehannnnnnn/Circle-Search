package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.CoCircleDTO;
import com.capstone.CircleSearch.Model.dto.UniCircleDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CircleDAO {
    int insertCoCircle(CoCircleDTO param) throws Exception;
    int insertUniCircle(UniCircleDTO param) throws Exception;
    int createTable(@Param("url") String url) throws Exception;
    int createRequestTable(@Param("url") String url) throws Exception;
    int insertManager(@Param("url") String url,String id,String nickname) throws Exception;
    int storeMyCircle(String id, String circle_name, String url) throws Exception;
    List<UniCircleDTO> selectUniCircle(@Param("iCode") int iCode, @Param("RCode") int rCode) throws Exception;
    List<CoCircleDTO> selectCoCircle(int college_code) throws Exception;

}
