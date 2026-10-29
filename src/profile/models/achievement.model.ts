import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Achievement {
	@Field(() => String)
	text!: string;
}
