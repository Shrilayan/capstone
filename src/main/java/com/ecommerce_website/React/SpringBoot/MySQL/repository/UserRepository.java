package com.ecommerce_website.React.SpringBoot.MySQL.repository;


import com.ecommerce_website.React.SpringBoot.MySQL.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    @Query("select u from User u where u.userName=:name")
    public User searchByUserName(@Param("name")String userName);
    public User getUserByUserName(String userName);
}
