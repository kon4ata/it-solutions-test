import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaModule } from './prisma/prisma.module.js';
import { PrismaService } from "./prisma/prisma.service.js";
import { ProfileModule } from './profile/profile.module.js';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			includeStacktraceInErrorResponses: false,
		}),
		ProfileModule,
		PrismaModule,
	],
	controllers: [],
	providers: [
		PrismaService,
	],
})
export class AppModule {}
