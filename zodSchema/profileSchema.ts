import z from "zod";

export const profileSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string().max(10).min(10),
	insta: z.string(),
	yt: z.string(),
});

export type Profile = z.infer<typeof profileSchema>;
