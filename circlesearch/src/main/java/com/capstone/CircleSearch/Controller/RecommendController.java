package com.capstone.CircleSearch.Controller;

import com.capstone.CircleSearch.Model.dao.RecommendDAO;
import com.capstone.CircleSearch.Model.dto.CircleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class RecommendController {

    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private RecommendDAO recommendDAO;

    //실제 파라미터는 회원정보에 있는 id를 받아와야함.
    @GetMapping("/RecommendPage")
    public List<CircleDTO> getRecommend (@RequestParam(value = "id", defaultValue = "")String id) throws Exception{
        return recommendDAO.recommendCircle(id);
    }

}
