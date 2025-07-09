import z from 'zod';

export const LoginFormSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;
export type LoginFormErrors = Partial<Record<keyof LoginForm, string[]>>;