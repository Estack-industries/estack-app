package org.estack.backend.dubbo.server.api;

import org.estack.backend.dubbo.server.pojo.Properties;
import org.estack.backend.dubbo.server.vo.PageInfo;

public interface ApiPropertiesManageService {

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


    /**
     * query properties list by pages given query condition
     * @param page current page number
     * @param pageSize current page size
     * @param queryCondition query condition
     * @return PageInfo<Properties>
     */

    PageInfo<Properties> queryPropertiesList(int page, int pageSize, Properties queryCondition);
}
