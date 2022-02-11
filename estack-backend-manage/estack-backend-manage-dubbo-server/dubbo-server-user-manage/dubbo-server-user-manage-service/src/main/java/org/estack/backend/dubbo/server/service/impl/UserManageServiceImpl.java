package org.estack.backend.dubbo.server.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.estack.backend.dubbo.server.pojo.Users;
import org.estack.backend.dubbo.server.service.BaseServiceImpl;
import org.estack.backend.dubbo.server.service.UserManageService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserManageServiceImpl extends BaseServiceImpl<Users> implements UserManageService{
    /**
     * add new user
     *
     * @param users
     *
     * @return -1: the format of parameter is wrong
     * 0: fail to insert new user into database
     * 1: succeed
     */

    @Override
    public int addUsers(Users users){
        //verification logic
        if(StringUtils.isBlank(users.getEmail())){
            return -1;
        }
        return super.save(users);
    }

    /**
     * get a user given his/her email
     *
     * @param key: a given column, either 'email' or 'uname'
     * @param password: the password of this user
     * @param keyType: integer 0: email, 1: uname
     *
     * @return null: no user with that email
     * users: succeed
     */
    @Override
    public Users getUsers(String key, String password, int keyType){
        Users this_user = new Users();
        if(keyType == 0){
            this_user.setEmail(key);
        }else{
            this_user.setUname(key);
        }
        this_user.setPassword(password);
        return (Users) super.queryOne(this_user);
    }
}
