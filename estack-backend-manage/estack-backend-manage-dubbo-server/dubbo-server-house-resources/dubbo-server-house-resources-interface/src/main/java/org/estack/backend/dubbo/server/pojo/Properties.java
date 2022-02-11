package org.estack.backend.dubbo.server.pojo;

import java.math.BigDecimal;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDate;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * <p>
 *
 * </p>
 *
 * @author estack
 * @since 2022-01-18
 */
@Data
@Accessors(chain = true)
@TableName("properties")
public class Properties extends BasePojo {

    private static final long serialVersionUID = 779152022777511825L;

    @TableId(value="id", type= IdType.AUTO)
    private Long id;

//    @TableField("ownerId")
//    private int ownerId;

    private String street;

    private String city;

    private String state;

    @TableField("zipCode")
    private String zipCode;

    @TableField("propertyType")
    private String propertyType;

    @TableField("yearBuilt")
    private LocalDate yearBuilt;

    @TableField("numBedrooms")
    private Integer numBedrooms;

    @TableField("numBathrooms")
    private Integer numBathrooms;

    @TableField("dateAvailable")
    private LocalDate dateAvailable;

    @TableField("leaseDuration")
    private Integer leaseDuration;

    private BigDecimal squareft;

    private Boolean ac;

    private Boolean furnished;

    private Boolean balcony;

    @TableField("hardWood")
    private Boolean hardWood;

    @TableField("wheelChairAcces")
    private Boolean wheelChairAcces;

    @TableField("garageParking")
    private Boolean garageParking;

    @TableField("offStreetParking")
    private Boolean offStreetParking;

    @TableField("imgFile")
    private String imgFile;

    @TableField("monthlyRent")
    private BigDecimal monthlyRent;

    private BigDecimal deposit;

    @TableField("cleaningFee")
    private BigDecimal cleaningFee;

    private String description;


}
