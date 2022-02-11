package org.estack.backend.dubbo.api.controller;

import org.estack.backend.dubbo.api.service.PropertiesManageService;
import org.estack.backend.dubbo.api.vo.TableResult;
import org.estack.backend.dubbo.server.pojo.Properties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("manage/properties")
public class PropertiesController {
    @Autowired
    private PropertiesManageService propertiesManageService;

    /**
     * add new properties
     *
     * @param properties
     *
     * @return -1: the format of parameter is wrong
     * 0: fail to insert new properties into database
     * 1: succeed
     */
    @PostMapping
    @ResponseBody
    public ResponseEntity<Void> addProperties(@RequestBody Properties properties){
        try{
            boolean bool = this.propertiesManageService.add(properties);
            if(bool){
                return ResponseEntity.status(HttpStatus.CREATED).build();
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    /**
     *  query property list
     * @param properties
     * @param currentPage
     * @param pageSize
     * @return
     */
    @GetMapping
    @ResponseBody
    public ResponseEntity<TableResult> listProperties(Properties properties,
                                                      @RequestParam(name = "currentPage",
                                                              defaultValue = "1") Integer currentPage,
                                                      @RequestParam(name = "pageSize",
                                                            defaultValue = "10") Integer pageSize){
        return ResponseEntity.ok(this.propertiesManageService.queryList(properties, currentPage, pageSize));
    }
}
