package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.RequestSelectDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RequestDAO {
    int joinCircle(String circle_name, String user_id, String goal) throws Exception;

    RequestSelectDTO confirmRequest(String circle_name) throws Exception;

    int agreeRequest(String circle_name, String user_id) throws Exception;

    int rejectRequest(String circle_name, String user_id) throws Exception;

    int registerCircle(String circle_name, String user_id, String url) throws Exception;
}
