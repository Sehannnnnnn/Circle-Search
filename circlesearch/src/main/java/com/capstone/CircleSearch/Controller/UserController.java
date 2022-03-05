package com.capstone.CircleSearch.Controller;

import com.capstone.CircleSearch.Model.dao.UserDAO;
import com.capstone.CircleSearch.Model.dto.UserDTO;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@MapperScan(basePackages = "com.capstone.CircleSearch.Model.dao")
public class UserController {

    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private UserDAO userDAO;

    @GetMapping("/users")
    public List<UserDTO> users(@RequestParam(value = "name", defaultValue = "") String name) throws Exception {
        final UserDTO param = new UserDTO(null, null, name, null, null);
        return userDAO.selectUsers(param);
    }

    @PostMapping("/user/register1")
    public ResponseEntity<UserDTO> users(@RequestBody UserDTO userDTO) throws Exception{
        userDAO.insertUsers(userDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

//    Register2 제작 필요
}
