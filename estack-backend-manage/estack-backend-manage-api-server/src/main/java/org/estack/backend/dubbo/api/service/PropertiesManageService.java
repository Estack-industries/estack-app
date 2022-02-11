package org.estack.backend.dubbo.api.service;

import com.alibaba.dubbo.config.annotation.Reference;
import org.estack.backend.dubbo.api.vo.Pagination;
import org.estack.backend.dubbo.api.vo.TableResult;
import org.estack.backend.dubbo.server.pojo.Properties;
import org.estack.backend.dubbo.server.vo.PageInfo;
import org.springframework.stereotype.Service;
import org.estack.backend.dubbo.server.api.ApiPropertiesManageService;

@Service
public class PropertiesManageService {
    @Reference(version = "1.0.0")
    private ApiPropertiesManageService apiPropertiesManageService;

    public boolean add(Properties properties){
        int result = this.apiPropertiesManageService.addProperties(properties);
        return result == 1;
    }

    public TableResult<Properties> queryList(Properties properties, Integer currentPage, Integer pageSize){
        PageInfo<Properties> pageInfo = this.apiPropertiesManageService.queryPropertiesList(
                currentPage, pageSize, properties
        );
        return new TableResult<>(pageInfo.getRecords(), new Pagination(currentPage, pageSize, pageInfo.getTotal()));
    }


}
