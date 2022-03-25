package com.capstone.CircleSearch.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String id;
    private String pw;
    private String email;
    private String interest1;
    private String interest2;
    private String nickname;
    private String birth;
    private String college;
    private String studentid;
    private String major;
    private String region;

}
