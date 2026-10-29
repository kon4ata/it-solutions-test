import { registerEnumType } from "@nestjs/graphql";

export enum LinkType {
	GITHUB = "github",
	TELEGRAM = "telegram",
}

registerEnumType(LinkType, {
	name: "LinkType",
	description: "Тип ссылки на проф. ресурс",
});