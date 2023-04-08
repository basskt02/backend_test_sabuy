import  Sequelize  from "sequelize";

import sequelize from './../../database'

const Test = sequelize.define("test_table" ,{
  ITEMCODE : {type : Sequelize.STRING,primaryKey: true},
  ITEMNAME : Sequelize.STRING,
  MAX : Sequelize.INTEGER,
  MIN : Sequelize.INTEGER,
},{  timestamps: false ,    freezeTableName: true
})

export default Test