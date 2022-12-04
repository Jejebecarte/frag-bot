declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MINECRAFT_EMAIL: string;
			MINECRAFT_PASSWORD: string;
			MINECRAFT_AUTH_TYPE: "microsoft" | "mojang";

			BOT_OWNER: string;

			INVITE_MODE: "owner" | "whitelist" | "everyone";
		}
	}
}
