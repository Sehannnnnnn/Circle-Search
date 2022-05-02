package com.capstone.CircleSearch.Controller;


import com.capstone.CircleSearch.Model.dao.BoardDAO;
import com.capstone.CircleSearch.Model.dto.BoardDTO;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@MapperScan(basePackages = "com.capstone.CircleSearch.Model.dao")
public class BoardController {
    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private BoardDAO boardDAO;

    @PostMapping("/board") //게시판 등록 받아야할 값 --> title(제목),contents(내용),id(유저 아이디),password(게시판글 비밀번호)
    public int postBoard(BoardDTO board) throws Exception {
        return  boardDAO.newBoard(board);
    }
    @GetMapping("board/readcount/{seq}")
    public int board1(@PathVariable("seq") final int seq) throws Exception {
        return boardDAO.getReadCount(seq);
    }



    @GetMapping("/board/{seq}") // 게시판의 글 번호 입력값 받기
    public BoardDTO board(@PathVariable("seq") final int seq) throws Exception {
        boardDAO.addBoardReadCount(seq);
        BoardDTO board = boardDAO.getBoard(seq);
        return board;
    }
    @PutMapping( "/board/{seq}") // 게시판 수정 API --> 받아야할 값 :게시판 글 번호, 해당 게시글 비밀번호
    public ResponseEntity<BoardDTO> putBoard(@PathVariable("seq") final int seq, BoardDTO param) throws Exception {
        if ((param.getId() == null) || (param.getContents() == null) || (param.getPassword() == null) || (param.getTitle() == null)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        param.setSeq(seq); // 조회할 게시물 번호 지정
        BoardDTO board = boardDAO.getBoard(seq);
        if (board == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        board.setTitle(param.getTitle());
        board.setContents(param.getContents());
        board.setId(param.getId());
        boardDAO.editBoard(board);

        return new ResponseEntity<>(board, HttpStatus.OK);
    }

   @DeleteMapping("/board/{seq}")// 게시판 삭제 API --> 받아야할 값 게시판 글번호, 게시글 비밀번호
    public ResponseEntity<BoardDTO> deleteBoard(@PathVariable("seq") final int seq, BoardDTO param) throws Exception {
        if (param.getPassword() == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        param.setSeq(seq); // 조회할 게시물 번호 지정
        BoardDTO board = boardDAO.getBoard(seq);
        if (board == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        board.setDeleted("Y");
        boardDAO.editBoard(board);

        return new ResponseEntity<>(HttpStatus.OK);
    }



}
