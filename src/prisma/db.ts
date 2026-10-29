import "dotenv/config";

import postgres from "@prisma/orm-postgres/runtime";
import { contractFromJson } from "@prisma/orm-postgres/static";

import "temporal-polyfill/global";

import type { Contract } from "./contract.d.ts";
import contractJson from "./contract.json" with { type: "json" };

export const contract = contractFromJson<Contract>(contractJson);

export const db = process.env.DATABASE_URL
	? postgres({ contract, url: process.env.DATABASE_URL })
	: postgres({ contract });

let connection: Promise<void> | undefined;

export function connectDatabase(): Promise<void> {
	connection ??= db
		.connect()
		.then(() => undefined)
		.catch((error: unknown) => {
			connection = undefined;
			throw error;
		});

	return connection;
}
