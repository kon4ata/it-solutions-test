import { Field, ObjectType } from "@nestjs/graphql";
import { LinkType } from "./link-type.enum.js";

@ObjectType()
export class ProfileLink {
	@Field(() => LinkType)
	type!: LinkType;

	@Field(() => String)
	url!: string;
}