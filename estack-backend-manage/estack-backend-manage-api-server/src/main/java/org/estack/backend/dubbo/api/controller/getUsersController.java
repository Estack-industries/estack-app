package org.estack.backend.dubbo.api.controller;

import org.apache.commons.lang3.StringUtils;
import org.estack.backend.dubbo.api.service.UserManageService;
import org.estack.backend.dubbo.server.pojo.UserRequest;
import org.estack.backend.dubbo.server.pojo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("users/getUsers")
public class getUsersController {
    @Autowired
    private UserManageService userManageService;

    /**
     * get a user given his/her email/uname and password
     *
     * @param userRequest
     *        key: a given column, either 'email' or 'uname'
     *        password: the password of this user
     *        keyType: integer 0: email, 1: uname
     *
     * @return null: no user with that email
     * users: succeed
     */
    @PostMapping
    @ResponseBody
    public ResponseEntity<Users> getUsers(@RequestBody UserRequest userRequest){
        try {
            Users user = this.userManageService.get(userRequest);
            if(!StringUtils.isBlank(user.getEmail())){
                return ResponseEntity.status(HttpStatus.FOUND).body(user);
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
