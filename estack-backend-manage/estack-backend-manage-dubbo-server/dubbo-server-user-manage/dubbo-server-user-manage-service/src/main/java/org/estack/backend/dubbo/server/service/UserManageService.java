package org.estack.backend.dubbo.server.service;

import org.estack.backend.dubbo.server.pojo.Users;


public interface UserManageService {
    /**
     * add new user
     *
     * @param users
     *
     * @return -1: the format of parameter is wrong
     * 0: fail to insert new user into database
     * 1: succeed
     */
    int addUsers(Users users);

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
    Users getUsers(String key, String password, int keyType);

}
