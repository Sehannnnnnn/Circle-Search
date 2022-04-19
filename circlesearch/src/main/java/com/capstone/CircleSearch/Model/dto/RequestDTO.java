package com.capstone.CircleSearch.Model.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RequestDTO {
    private String url;
    private String user_id;
    private String goal;
    private String deleted = "N";

}
