package org.estack.backend.dubbo.api.vo;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Pagination {

    private Integer current;
    private Integer total;
    private Integer pageSize;
}
