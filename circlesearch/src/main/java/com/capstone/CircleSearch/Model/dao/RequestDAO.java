package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.RequestSelectDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RequestDAO {
    int joinCircle(@Param("url") String url, String user_id, String goal) throws Exception;

    RequestSelectDTO confirmRequest(@Param("url") String url) throws Exception;

    int agreeRequest(@Param("url") String url, String user_id) throws Exception;

    int rejectRequest(@Param("url") String url, String user_id) throws Exception;

    int registerCircle(@Param("url") String url, String user_id, String user_nickname) throws Exception;
}
