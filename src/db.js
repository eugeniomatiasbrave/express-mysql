import { createPool } from "mysql2/promise";

export const pool = createPool({
	  host: "localhost",
	  user: "Euge",
	  password: "ECO336699",
	  port: 3306,
	  database: "toys",
});