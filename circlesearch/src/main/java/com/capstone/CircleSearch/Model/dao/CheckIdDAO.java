package com.capstone.CircleSearch.Model.dao;

import java.util.HashMap;
import java.util.List;


public interface CheckIdDAO {
    int checkUserid (String param) throws Exception;
    int checkUserNickname (String param) throws Exception;
    List<String> selectAllCollegeList() throws Exception;
    String getLogin(String id) throws Exception;
    List<String> selectRegion() throws Exception;
    List<HashMap<String,String>> getMyCircle(String user_id) throws Exception;
}
