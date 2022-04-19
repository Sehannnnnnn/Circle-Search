package com.capstone.CircleSearch.Controller;

import com.capstone.CircleSearch.Model.dao.CircleDAO;
import com.capstone.CircleSearch.Model.dao.FindDAO;
import com.capstone.CircleSearch.Model.dto.*;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@MapperScan(basePackages = "com.capstone.CircleSearch.Model.dao")
public class CircleController {

    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private CircleDAO circleDAO;

    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private FindDAO findDAO;


    @GetMapping("/createTest")
    public int createTable(@RequestBody InputCircleDTO inputCircleDTO)throws Exception{

        return circleDAO.createTable(inputCircleDTO.getUrl());
    }

    @GetMapping("/test1")
    public String nicknamego(@RequestBody InputCircleDTO inputCircleDTO) throws Exception{
        FindDTO findDTO = new FindDTO();
        findDTO.setCollege(inputCircleDTO.getCollege());
        findDTO.setInterest(inputCircleDTO.getInterest());
        findDTO.setRegion(inputCircleDTO.getRegion());
        findDTO.setId(inputCircleDTO.getId());
        return findDAO.findUsernickname(findDTO);

    }





    @PostMapping("/circle/register/CoCircle")
    public int insertCircle(@RequestBody InputCircleDTO inputCircleDTO
    )throws  Exception{

        FindDTO findDTO = new FindDTO();
        findDTO.setCollege(inputCircleDTO.getCollege());
        findDTO.setInterest(inputCircleDTO.getInterest());
        findDTO.setId(inputCircleDTO.getId());
        int a = findDAO.findCollegecode(findDTO);
        int b = findDAO.findInterestcode(findDTO);
        String c = String.valueOf(findDAO.findUsernickname(findDTO));
        final CoCircleDTO param = new CoCircleDTO(0,a,b, inputCircleDTO.getCircle_name(), inputCircleDTO.getPurpose(), null, inputCircleDTO.getUrl(),inputCircleDTO.getId());
        circleDAO.insertCoCircle(param);
        circleDAO.createTable(inputCircleDTO.getUrl());
        circleDAO.createRequestTable(inputCircleDTO.getUrl());
        return circleDAO.insertManager(inputCircleDTO.getUrl(), inputCircleDTO.getId(),c);
        //위의 리턴값에는 동아리 페이지를 만들 유저의 아이디,관리자 등급으로 바로 insert시키는거로 해보자. 

    }


    @PostMapping("/circle/register/UniCircle")
    public int insertUniCircle(@RequestBody InputCircleDTO inputCircleDTO) throws Exception{
        FindDTO findDTO = new FindDTO();
        findDTO.setInterest(inputCircleDTO.getInterest());
        findDTO.setRegion(inputCircleDTO.getRegion());
        findDTO.setId(inputCircleDTO.getId());
        int a = findDAO.findInterestcode(findDTO);
        int b = findDAO.findRegioncode(findDTO);
        String c = String.valueOf(findDAO.findUsernickname(findDTO));
        final UniCircleDTO param = new UniCircleDTO(0,a,b, inputCircleDTO.getCircle_name(), inputCircleDTO.getPurpose(), null, inputCircleDTO.getUrl(),inputCircleDTO.getId());
        circleDAO.insertUniCircle(param);
        circleDAO.createTable(inputCircleDTO.getUrl());
        return circleDAO.insertManager(inputCircleDTO.getUrl(), inputCircleDTO.getId(),c);
    }
}
