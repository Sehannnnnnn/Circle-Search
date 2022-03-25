package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.UserDTO;

import java.util.List;

public interface UserDAO {
    List<UserDTO> selectUsers(UserDTO param) throws Exception;
    int insertUsers(UserDTO body) throws Exception;
    int insertUsersInfo(UserDTO body) throws Exception;
}
