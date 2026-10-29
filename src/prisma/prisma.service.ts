import { Injectable, type OnModuleDestroy } from "@nestjs/common";
import { connectDatabase, db } from "./db.ts";

@Injectable()
export class PrismaService implements OnModuleDestroy {
	readonly db = db;

	async onModuleInit() {
		await connectDatabase();
	}

	async onModuleDestroy() {
		await this.db.runtime().close();
	}
}
