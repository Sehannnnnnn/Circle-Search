package com.capstone.CircleSearch.Model.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CoCircleDTO {
    private int index ;
    private int college_code;
    private int interest_code;
    private String circle_name;
    private String purpose;
    private byte[] image;
    private String url;
    private String manager;

}
