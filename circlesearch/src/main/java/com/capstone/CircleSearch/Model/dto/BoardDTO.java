package com.capstone.CircleSearch.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class BoardDTO {
    private int seq;
    private String title;
    private String contents;
    private String author;
    private String password;
    private int read =0;
    private String deleted = "N";
}
