package org.estack.backend.dubbo.api.service;

import org.estack.backend.dubbo.server.api.ApiUserManageService;
import org.estack.backend.dubbo.server.pojo.UserRequest;
import org.estack.backend.dubbo.server.pojo.Users;
import com.alibaba.dubbo.config.annotation.Reference;
import org.springframework.stereotype.Service;


@Service
public class UserManageService {

    @Reference(version = "1.0.0")
    private ApiUserManageService apiUserManageService;

    public boolean add(Users users){
        int result = this.apiUserManageService.addUsers(users);
        return result == 1;
    }

    public Users get(UserRequest userRequest){
        String key = userRequest.getKey();
        String password = userRequest.getPassword();
        int keyType = userRequest.getKeyType();
        Users user = this.apiUserManageService.getUsers(key, password, keyType);
        return user;
    }

}
