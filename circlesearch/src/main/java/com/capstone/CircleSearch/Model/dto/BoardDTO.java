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
    private String id;
    private String password;
    private String deleted = "N";
    private int read =0;
}