import { db } from "./db";

// заполнять вручную при запуске
async function main() {

}

main().finally(() => db.runtime().close());
