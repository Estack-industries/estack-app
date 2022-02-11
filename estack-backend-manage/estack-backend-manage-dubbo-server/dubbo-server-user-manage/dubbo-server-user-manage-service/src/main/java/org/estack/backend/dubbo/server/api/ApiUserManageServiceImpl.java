package org.estack.backend.dubbo.server.api;

import org.estack.backend.dubbo.server.pojo.Users;
import org.estack.backend.dubbo.server.service.UserManageService;
import org.springframework.beans.factory.annotation.Autowired;
import com.alibaba.dubbo.config.annotation.Service;

@Service(version = "1.0.0")
public class ApiUserManageServiceImpl implements ApiUserManageService{

    @Autowired
    private UserManageService userManageService;

    @Override
    public int addUsers(Users users){

        return this.userManageService.addUsers(users);
    }

    @Override
    public Users getUsers(String key, String password, int keyType){
        return this.userManageService.getUsers(key, password, keyType);
    }
}
