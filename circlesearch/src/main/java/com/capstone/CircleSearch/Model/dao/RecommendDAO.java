package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.CircleDTO;

import java.util.List;

public interface RecommendDAO {
    //실제로는 유저의 id를 받아야 하기 때문에 String param으로 받는건 좋지 않은거 같음.
    List<CircleDTO> recommendCircle(String param) throws Exception;
}
