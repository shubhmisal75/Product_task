import { Sequelize } from "sequelize";
const commonConfig = {
  dialectOptions: {
    multipleStatements: true,
    connectTimeout: 60000,
    decimalNumbers: true,
    flags: "-SESSION innodb_lock_wait_timeout=60",
  },
  define: {
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
  },
};

export const sequelize = new Sequelize(
  'SHOP',
  'demo_username',
  'demo_password',
  {
    host: 'demo_host',
    dialect: "mysql",
    port: 6000,
    timezone: "+05:30",
    ...commonConfig, // Include common configuration
  }
);

export async function mySqlDbConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      " Database connection has been established successfully. And Port is",
   6000
    );
  } catch (error) {
    console.error("Unable to connect to the Pro database:", error);
  }
}

import Product from "../model/ProductsModel";

const db = {};  
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.product = Product;
Product.sync();
export default db;




