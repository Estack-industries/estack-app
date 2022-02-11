package org.estack.backend.dubbo.server.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDate;

/**
 * <p>
 * 
 * </p>
 *
 * @author estack
 * @since 2022-01-16
 */
@Data
@Accessors(chain = true)
@TableName("users")
public class Users extends BasePojo {

    private static final long serialVersionUID = 779152022777511825L;

    @TableId(value="id", type= IdType.AUTO)
    private Long id;

    private String uname;

    private String email;

    private String password;

    private String fname;

    private String lname;

    private LocalDate birthdate;

    private String street;

    private String city;

    private String state;

    private String zipCode;


}
