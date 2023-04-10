import  Sequelize  from "sequelize";

import sequelize from './../../database'


const TerminalInfo = sequelize.define("terminal_info" ,{
    TERM_ID :{ type : Sequelize.STRING, primaryKey: true},
    BRANCH :{ type : Sequelize.STRING, default : ""},
    VENDORNO :{ type : Sequelize.STRING, default : ""},
    PRODUCTNO :{ type : Sequelize.STRING, default : ""},
    PMINO :{ type : Sequelize.STRING, default : ""},
    BATCH : Sequelize.INTEGER,
    SLIPNO : Sequelize.INTEGER,
    TERM_NAME :{ type : Sequelize.STRING, default : ""},
    TERM_FOOD :{ type : Sequelize.STRING, default : ""},
    PAYPERCENT :{ type : Sequelize.DECIMAL(7,2)},
    PAYPERDAY: Sequelize.DECIMAL(7,2),
    INCLUDEVAT :{ type : Sequelize.STRING, default : ""},
    INV_PRINT :{ type : Sequelize.STRING, default : ""},
    INV_NAME :{ type : Sequelize.STRING, default : ""},
    INV_ADDR :{ type : Sequelize.STRING, default : ""},
    TERM_FLAG :{ type : Sequelize.STRING, default : ""},
    TYPEPAY :{ type : Sequelize.STRING, default : ""},
    STAFFOFCHARGE: Sequelize.DECIMAL(7,2),
    STAFFPRODUCTNO :{ type : Sequelize.STRING, default : ""},
    CUSTOMER_REF :{ type : Sequelize.STRING, default : ""},
    RENTAL_ID :{ type : Sequelize.STRING, default : ""},
    HORIZON_SENT :{ type : Sequelize.STRING, default : ""},
    LEASE_TYPE :{ type : Sequelize.STRING, default : ""},
    CLUBCARD_CODE :{ type : Sequelize.STRING, default : null},
    CLUBCARD_AMT : Sequelize.DECIMAL(7,2),
    CLUBCARD_POINT :Sequelize.INTEGER,
    TERMINAL_TYPE : Sequelize.STRING
},{  timestamps: false ,    freezeTableName: true
})




export default TerminalInfo