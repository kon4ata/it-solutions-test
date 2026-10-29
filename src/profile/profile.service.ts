import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.ts";

@Injectable()
export class ProfileService {
	constructor(
		@Inject(PrismaService)
		private readonly prisma: PrismaService,
	) {}

	private get profile() {
		return this.prisma.db.orm.public.Profile;
	}

	async find() {
		const profile = await this.profile
			.include("links", (link) => link.orderBy((x) => x.id.asc()))
			.include("skills", (skill) => skill.orderBy((x) => x.id.asc()))
			.include("experiences", (exp) => exp
					.orderBy((x) => x.startDate.desc())
					.include("achievements", (achievement) =>
						achievement.orderBy((x) => x.id.asc()),
					),
			)
			.include("projects", (project) => project.orderBy((x) => x.id.asc()))
			.first();

		if (!profile) throw new NotFoundException("Профиль не найден");

		return profile;
	}
}
