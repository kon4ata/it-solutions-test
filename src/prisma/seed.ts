import { db } from "./db";

// заполнять вручную перед запуском
async function main() {
	await db.transaction(async (tx) => {
		const {
			Profile,
			ProfileLink,
			Skill,
			Experience,
			Achievement,
			Project,
		} = db.orm.public;

		const existing = await Profile.first({ name: "" });

		if (existing) {
			console.log("Профиль уже существует");

			return;
		}

		await Profile.where({ name: "" }).deleteAndCount();

		const profile = await Profile.create({
			name: "",
			title: "",
			description: "",
		});

		await ProfileLink.createAll([
			{
				profileId: profile.id,
				type: "github",
				url: "",
			},
			{
				profileId: profile.id,
				type: "telegram",
				url: "",
			},
		]);

		await Skill.createAll(
			["Skill 1", "Skill 2", "Skill 3", "Skill 4"].map((skill) => ({
				profileId: profile.id,
				name: skill,
			})),
		);

		const exp = await Experience.create({
			profileId: profile.id,
			company: "",
			position: "",
			startDate: "2000-01-01",
			endDate: null,
			description: "",
		});

		await Achievement.createAll([
			{
				experienceId: exp.id,
				text: "",
			},
		]);

		await Project.createAll([
			{
				profileId: profile.id,
				name: "",
				url: "",
				description: "",
				technologies: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
			},
		]);
	});
}

main().finally(() => db.runtime().close());
