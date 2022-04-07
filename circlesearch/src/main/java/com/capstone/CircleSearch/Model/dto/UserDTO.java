package com.capstone.CircleSearch.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String user_id;
    private int user_college;
    private int user_region;
    private int user_interest1;
    private int user_interest2;
    private String user_password;
    private String user_email;
    private String user_nickname;
    private String deleted = "N";
}
