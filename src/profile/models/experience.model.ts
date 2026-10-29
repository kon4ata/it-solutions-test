import { Field, ObjectType } from "@nestjs/graphql";
import { Achievement } from "./achievement.model.js";

@ObjectType()
export class Experience {
	@Field(() => String)
	company!: string;

	@Field(() => String)
	position!: string;

	@Field(() => String, { description: 'Дата начала работы, формат YYYY-MM-DD' })
	startDate!: string;

	@Field(() => String, {
		nullable: true,
		description: 'Дата окончания работы, null означает "по настоящее время"',
	})
	endDate?: string | null;

	@Field(() => String, { nullable: true })
	description?: string | null;

	@Field(() => [Achievement])
	achievements!: Achievement[];
}
