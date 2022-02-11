package org.estack.backend.dubbo.server.pojo;
import org.estack.backend.dubbo.server.pojo.BasePojo;
import lombok.Data;
import lombok.experimental.Accessors;



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
public class UserRequest extends BasePojo {
    private String key;

    private int keyType;

    private String password;

}
