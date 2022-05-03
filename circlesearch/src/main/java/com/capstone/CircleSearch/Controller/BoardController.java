package com.capstone.CircleSearch.Controller;


import com.capstone.CircleSearch.Model.dao.BoardDAO;
import com.capstone.CircleSearch.Model.dto.BoardDTO;
import com.capstone.CircleSearch.Model.dto.ListDTO;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@MapperScan(basePackages = "com.capstone.CircleSearch.Model.dao")
@EnableAutoConfiguration
public class BoardController {

    @Autowired
    private BoardDAO boardDAO;

    @RequestMapping(value = "/board", method = RequestMethod.POST)
    public ResponseEntity<BoardDTO> postBoard(BoardDTO board) throws Exception {
        if ((board.getId() == null) || (board.getContents() == null) || (board.getPassword() == null) || (board.getTitle() == null)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        boardDAO.newBoard(board);
        return new ResponseEntity<>(board, HttpStatus.OK);
    }

    @RequestMapping(value = "/board/{seq}", method = RequestMethod.GET)
    public ResponseEntity<BoardDTO> getBoard(@PathVariable("seq") final int seq) throws Exception {
        BoardDTO param = new BoardDTO();
        param.setSeq(seq);

        boardDAO.addBoardReadCount(param);
        BoardDTO board = boardDAO.getBoard(param);

        if (board == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(board, HttpStatus.OK);
    }

    @RequestMapping(value = "/board/{seq}", method = RequestMethod.PUT)
    public ResponseEntity<BoardDTO> putBoard(@PathVariable("seq") final int seq, BoardDTO param) throws Exception {
        if ((param.getId() == null) || (param.getContents() == null) || (param.getPassword() == null) || (param.getTitle() == null)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        param.setSeq(seq); // 조회할 게시물 번호 지정
        BoardDTO board = boardDAO.getBoard(param);
        if (board == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        board.setTitle(param.getTitle());
        board.setContents(param.getContents());
        board.setId(param.getId());
        boardDAO.editBoard(board);

        return new ResponseEntity<>(board, HttpStatus.OK);
    }

    @RequestMapping(value = "/board/{seq}", method = RequestMethod.DELETE)
    public ResponseEntity<BoardDTO> deleteBoard(@PathVariable("seq") final int seq, BoardDTO param) throws Exception {
        if (param.getPassword() == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        param.setSeq(seq); // 조회할 게시물 번호 지정
        BoardDTO board = boardDAO.getBoard(param);
        if (board == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        board.setDeleted("Y");
        boardDAO.editBoard(board);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/board", method = RequestMethod.GET)
    public ResponseEntity<List> getBoardList(ListDTO param) throws Exception {
        List<BoardDTO> board = boardDAO.getBoardList(param);

        return new ResponseEntity<>(board, HttpStatus.OK);
    }

}
