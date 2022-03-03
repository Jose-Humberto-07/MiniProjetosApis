import { Pool } from "pg";

const connectionString = 'postgres://vuhtpewj:VJfR3Z7Zm1itYKTPAUZ9-dtak2BF8qjb@kesavan.db.elephantsql.com/vuhtpewj';


const db = new Pool({ connectionString });


export default db;