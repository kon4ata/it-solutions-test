import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Project {
	@Field(() => String)
	name!: string;

	@Field(() => String)
	url!: string;

	@Field(() => String, { nullable: true })
	description?: string | null;

	@Field(() => [String])
	technologies!: string[];
}
