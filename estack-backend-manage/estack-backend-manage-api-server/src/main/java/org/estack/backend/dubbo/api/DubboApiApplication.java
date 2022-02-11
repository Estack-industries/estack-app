package org.estack.backend.dubbo.api;

import com.alibaba.dubbo.config.spring.context.annotation.EnableDubboConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableDubboConfig
@SpringBootApplication
public class DubboApiApplication {
    public static void main(String[] args){
        SpringApplication.run(DubboApiApplication.class, args);
    }
}
