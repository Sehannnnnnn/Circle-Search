package com.capstone.CircleSearch.Controller;



import com.capstone.CircleSearch.Model.dao.FindDAO;
import com.capstone.CircleSearch.Model.dao.RequestDAO;
import com.capstone.CircleSearch.Model.dto.FindDTO;
import com.capstone.CircleSearch.Model.dto.RequestSelectDTO;
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

   @PostMapping("Circle/join")
    public int wantJoin(@RequestParam String circle_name,@RequestParam String user_id, @RequestParam String goal) throws Exception {
       return requestDAO.joinCircle(circle_name,user_id,goal);
   }
   @GetMapping("Circle/agree") // 신청한 사람들 보기
    public RequestSelectDTO confirm(@RequestParam String circle_name) throws Exception{
       return requestDAO.confirmRequest(circle_name);
   }
    @PostMapping("Circle/agree")//agreement는 수락(Y) 아니오(N) --> 수락 누르면 MyCircle_tb에 insert
    public int agreeJoin(@RequestParam String circle_name,@RequestParam String user_id, @RequestParam String agreement) throws Exception{
        String y = "Y";
        String url = null;
        if(y.equals(agreement)){
            requestDAO.agreeRequest(circle_name, user_id);
            if(findDAO.findCocircleurl(circle_name)!=null){
                url = findDAO.findCocircleurl(circle_name);}
            else if(findDAO.findUnicircleurl(circle_name)!=null){
                url= findDAO.findUnicircleurl(circle_name);}
            return requestDAO.registerCircle(circle_name,user_id,url);
        }

        return requestDAO.rejectRequest(circle_name, user_id);
    }

}
