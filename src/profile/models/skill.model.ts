import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Skill {
	@Field(() => String)
	name!: string;
}
