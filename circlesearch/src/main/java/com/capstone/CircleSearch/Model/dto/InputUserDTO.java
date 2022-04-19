package com.capstone.CircleSearch.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InputUserDTO {
    private String user_id;
    private String user_college;
    private String user_region;
    private String user_interest1;
    private String user_interest2;
    private String user_birth;
    private String user_password;
    private String user_email;
    private String user_nickname;
    private String deleted = "N";
}
