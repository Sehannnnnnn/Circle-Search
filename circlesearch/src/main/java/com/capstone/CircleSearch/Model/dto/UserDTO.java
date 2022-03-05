package com.capstone.CircleSearch.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDTO {
    private String id;
    private String pw;
    private String name;
    private String birth;
    private String email;
}
