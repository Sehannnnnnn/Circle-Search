package com.capstone.CircleSearch.Model.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InputCircleDTO {
    private int index;
    private String college;
    private String interest;
    private String region;
    private String circle_name;
    private String purpose;
    private byte[] image;
    private String url;
    private String id;
}
