package com.capstone.CircleSearch.Model.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UniCircleDTO {
    private int index;
    private int interest_code;
    private int region_code;
    private String circle_name;
    private String purpose;
    private byte[] image;
    private String url;
    private String manager;
}
