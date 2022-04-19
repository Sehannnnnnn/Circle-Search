package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.CoCircleDTO;
import com.capstone.CircleSearch.Model.dto.UniCircleDTO;
import org.springframework.data.repository.query.Param;

public interface CircleDAO {
    int insertCoCircle(CoCircleDTO param) throws Exception;
    int insertUniCircle(UniCircleDTO param) throws Exception;
    int createTable(@Param("url") String url) throws Exception;
    int createRequestTable(@Param("url") String url) throws Exception;
    int insertManager(@Param("url") String url,String id,String nickname) throws Exception;

}
