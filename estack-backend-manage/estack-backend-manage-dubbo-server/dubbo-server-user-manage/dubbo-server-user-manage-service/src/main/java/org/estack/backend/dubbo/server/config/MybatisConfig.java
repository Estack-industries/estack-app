package org.estack.backend.dubbo.server.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

@MapperScan("org.estack.backend.dubbo.server.mapper")
@Configuration
public class MybatisConfig {
}
