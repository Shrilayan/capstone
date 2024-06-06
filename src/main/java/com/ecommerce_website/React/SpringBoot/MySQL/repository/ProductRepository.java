package com.ecommerce_website.React.SpringBoot.MySQL.repository;

import com.ecommerce_website.React.SpringBoot.MySQL.model.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
    //@Query("select p from Product p where p.name like %:name%")
    //public List<Product> searchByUserName(@Param("name") String userName);
}
