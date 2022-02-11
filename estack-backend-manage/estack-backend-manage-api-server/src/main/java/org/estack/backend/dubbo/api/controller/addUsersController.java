package org.estack.backend.dubbo.api.controller;

import org.estack.backend.dubbo.api.service.UserManageService;
import org.estack.backend.dubbo.server.pojo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("users/addUsers")
public class addUsersController {
    @Autowired
    private UserManageService userManageService;

    /**
     * add new users
     *
     * @param users (json)
     * @return
     */
    @PostMapping
    @ResponseBody
    public ResponseEntity<Void> addUsers(@RequestBody Users users){
        try {
            boolean bool = this.userManageService.add(users);
            if(bool){
                return ResponseEntity.status(HttpStatus.CREATED).build();
            }
        } catch(Exception e){
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    /**
     * test
     *
     * @return
     */
    @GetMapping
    @ResponseBody
    public ResponseEntity<String> get(){ return ResponseEntity.ok("ok");}
}
