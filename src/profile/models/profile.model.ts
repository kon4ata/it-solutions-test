import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Experience } from "./experience.model.js";
import { ProfileLink } from "./profile-link.model.js";
import { Project } from "./project.model.js";
import { Skill } from "./skill.model.js";

@ObjectType()
export class Profile {
	@Field(() => Int)
	id!: number;

	@Field(() => String)
	name!: string;

	@Field(() => String)
	title!: string;

	@Field(() => String)
	description!: string;

	@Field(() => [ProfileLink])
	links!: ProfileLink[];

	@Field(() => [Skill])
	skills!: Skill[];

	@Field(() => [Experience], { name: "experience" })
	experiences!: Experience[];

	@Field(() => [Project])
	projects!: Project[];
}
