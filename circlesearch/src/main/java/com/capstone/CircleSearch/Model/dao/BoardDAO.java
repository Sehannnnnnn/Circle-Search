package com.capstone.CircleSearch.Model.dao;

import com.capstone.CircleSearch.Model.dto.BoardDTO;

public interface BoardDAO {
    int newBoard(BoardDTO param) throws Exception;
    BoardDTO getBoard(int param) throws Exception;
    int editBoard(BoardDTO param) throws Exception;
    int addBoardReadCount(int seq) throws Exception;
    int getReadCount(int seq) throws Exception;
}
