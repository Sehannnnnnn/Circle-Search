package com.capstone.CircleSearch.Controller;



import com.capstone.CircleSearch.Model.dao.FindDAO;
import com.capstone.CircleSearch.Model.dao.RequestDAO;
import com.capstone.CircleSearch.Model.dto.FindDTO;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@MapperScan(basePackages = "com.capstone.CircleSearch.Model.dao")
public class RequestController {

    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private RequestDAO requestDAO;

    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private FindDAO findDAO;

   @GetMapping("Circle/join/{url}")
    public int wantJoin(@PathVariable String url,@RequestParam String user_id, @RequestParam String goal) throws Exception {
       return requestDAO.joinCircle(url,user_id,goal);
   }
   @GetMapping("Circle/agree/{url}")
    public List<String> confirm(@PathVariable String url) throws Exception{
       return requestDAO.confirmRequest(url);
   }
    @PostMapping("Circle/agree/{url}")
    public int agreeJoin(@PathVariable String url,@RequestParam String user_id, @RequestParam String agreement) throws Exception{
        String y = "Y";
        if(y.equals(agreement)){
            FindDTO findDTO = new FindDTO();
            findDTO.setId(user_id);
           String nickname = findDAO.findUsernickname(findDTO);
            requestDAO.agreeRequest(url, user_id);
            return requestDAO.registerCircle(url, user_id,nickname);
        }

        return requestDAO.rejectRequest(url, user_id);
    }

}
