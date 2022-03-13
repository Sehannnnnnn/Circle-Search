package com.capstone.CircleSearch.Controller;

import com.capstone.CircleSearch.Model.dao.CheckIdDAO;
import com.capstone.CircleSearch.Model.dao.InterestDAO;
import com.capstone.CircleSearch.Model.dao.UserDAO;
import com.capstone.CircleSearch.Model.dto.CheckIdDTO;
import com.capstone.CircleSearch.Model.dto.InterestDTO;
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
    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private CheckIdDAO checkIdDAO;
    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private InterestDAO interestDAO;

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

    //ID 중복체크
    @GetMapping("/user/register1/checkID")
    public int CheckIDPrimary(@RequestParam(value = "userID", defaultValue = "") String userID) throws Exception{
        final CheckIdDTO param = new CheckIdDTO(userID);
        return checkIdDAO.checkUserid(param);
    }

//    Register2 제작 필요

    //Interest 가져오기
    @GetMapping("/user/register2/interest")
    public List<InterestDTO> GetInterestList() throws Exception{
        return interestDAO.selectInterestList();
    }
}
