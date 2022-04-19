package com.capstone.CircleSearch.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CircleDTO {
    private Long index;
    private Long college;
    private Long category;
    private String circle;
    private String purpose;
}
