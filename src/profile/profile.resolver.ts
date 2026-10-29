import { Inject } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { Profile } from "./models/profile.model.js";
import { ProfileService } from "./profile.service.js";

@Resolver(() => Profile)
export class ProfileResolver {
	constructor(
		@Inject(ProfileService)

		private readonly profileService: ProfileService
	) {}

	@Query(() => Profile)
	async profile() {
		return await this.profileService.find();
	}
}
