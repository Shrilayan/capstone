package com.ecommerce_website.React.SpringBoot.MySQL.service;

import java.util.List;
import java.util.Optional;

public interface UserService<T> {

    T addUser(String userName, String password, String emailId, String address);

    int deleteUser(String id);

    Optional<T> getUser(String id);

    String getUserIdByName(String userName);

    Optional<T> getUserByName(String userName);

    List<T> getUsers();

    boolean passwordMatch(String id, String password);

    int updatePassword(String id, String oldPassword, String newPassword);

    int updateEmailId(String id, String newEmailId);

    int updateAddress(String id, String address);
}

