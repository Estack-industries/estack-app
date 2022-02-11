package org.estack.backend.dubbo.server.service;

import org.estack.backend.dubbo.server.pojo.Properties;
import org.estack.backend.dubbo.server.vo.PageInfo;

public interface PropertiesManageService {

    /**
     * add new properties
     *
     * @param properties
     *
     * @return -1: the format of parameter is wrong
     * 0: fail to insert new properties into database
     * 1: succeed
     */
    int addProperties(Properties properties);

    PageInfo<Properties> queryPropertiesList(int page, int pageSize, Properties queryCondition);
}
