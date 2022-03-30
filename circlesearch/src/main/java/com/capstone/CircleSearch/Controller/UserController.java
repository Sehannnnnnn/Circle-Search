package com.capstone.CircleSearch.Controller;

import com.capstone.CircleSearch.Model.dao.CheckIdDAO;
import com.capstone.CircleSearch.Model.dao.InterestDAO;
import com.capstone.CircleSearch.Model.dao.UserDAO;
import com.capstone.CircleSearch.Model.dto.CheckIdDTO;
import com.capstone.CircleSearch.Model.dto.InterestDTO;
import com.capstone.CircleSearch.Model.dto.InterestInputDTO;
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

    //로그인 기능
    @PostMapping("/user/login")
    public int userLogin(@RequestBody UserDTO userDTO) throws Exception {
        CheckIdDTO idDTO = new CheckIdDTO(userDTO.getId());
        String pw_stored = checkIdDAO.getLogin(idDTO);
        if(pw_stored.equals(userDTO.getPw())) {
            return 1;
        } else {
            return 0;
        }
    }

    //회원가입 1
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
    //Interest 저장하기
    @PostMapping("/user/register2/interest")
    public ResponseEntity<InterestInputDTO> InsertUserInterest(@RequestBody InterestInputDTO interestInputDTO) throws Exception {
        interestDAO.insertUserInterest(interestInputDTO);
        return new ResponseEntity<>(interestInputDTO, HttpStatus.OK);
    }

    // Register3 제작
    @GetMapping("/user/register3/checkNickname")
    public int CheckNicknamePrimary(@RequestParam(value = "userNickname", defaultValue = "") String userNickname) throws Exception{
        final CheckIdDTO param = new CheckIdDTO(userNickname);
        return checkIdDAO.checkUserNickname(param);
    }

    @GetMapping("/user/register3/getCollegeList")
    public List<CheckIdDTO> GetCollegeList() throws Exception{
        return checkIdDAO.selectAllCollegeList();
    }

    @PostMapping("/user/register3/postUserInfo")
    public ResponseEntity<UserDTO> InsertUserInfo(@RequestBody UserDTO userDTO) throws Exception{
        userDAO.insertUsersInfo(userDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }
}
