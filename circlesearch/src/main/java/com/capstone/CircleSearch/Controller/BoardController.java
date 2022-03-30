package com.capstone.CircleSearch.Controller;

import com.capstone.CircleSearch.Model.dao.BoardDAO;
import com.capstone.CircleSearch.Model.dto.BoardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {

    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private BoardDAO boardDAO;

    //게시물 작성 API
    @RequestMapping(value = "/board", method = RequestMethod.POST)
    public BoardDTO postBoard(BoardDTO board) throws Exception {
        boardDAO.newBoard(board);
        return board;
    }
    //게시물 호출 API + 조회수 증가하는 API
    @RequestMapping(value = "/board/{seq}", method = RequestMethod.GET)
    public BoardDTO getboard(@PathVariable("seq")  int seq) throws Exception{
        BoardDTO param = new BoardDTO();
        param.setSeq(seq);

        boardDAO.addBoardReadCount(param);
        BoardDTO board= boardDAO.getBoard(seq);
        return board;
    }
    //게시물 수정 API
    @RequestMapping(value = "/board/{seq}", method = RequestMethod.PUT)
    public ResponseEntity<BoardDTO> putBoard(@PathVariable("seq") final int seq, BoardDTO param) throws Exception {
        if ((param.getAuthor() == null) || (param.getContents() == null) || (param.getPassword() == null) || (param.getTitle() == null)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        param.setSeq(seq); // 조회할 게시물 번호 지정
        BoardDTO board = boardDAO.getBoard(seq);
        if (board == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        board.setTitle(param.getTitle());
        board.setContents(param.getContents());
        board.setAuthor(param.getAuthor());
        boardDAO.editBoard(board);

        return new ResponseEntity<>(board, HttpStatus.OK);
    }
    //삭제 API
    @RequestMapping(value = "/board/{seq}",method = RequestMethod.DELETE)
    public ResponseEntity<BoardDTO> deleteBoard(@PathVariable("seq") int seq, BoardDTO param) throws Exception{
        if(param.getPassword() ==null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        }
        param.setSeq(seq);
        BoardDTO board = boardDAO.getBoard(seq);
        if(board ==null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        board.setDeleted("Y");
        boardDAO.editBoard(board);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
