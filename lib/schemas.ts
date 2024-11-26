import { z } from 'zod'
import isMobilePhone from 'validator/lib/isMobilePhone';
export const UserInfoCollectionFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }).max(50, { message: "Name should be less than 50 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().refine((str) => isMobilePhone(str, 'en-US'), 'Invalid Phone Number')
})

export const SetNewPasswordFormSchema = z.object({
    password: z
        .string()
        .superRefine((val, ctx) => {
            if (val.length < 8) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Be at least 8 characters.",
                });
            }
            if (!/[A-Z]/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Contain at least one uppercase letter.",
                });
            }
            if (!/[a-z]/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Contain at least one lowercase letter.",
                });
            }
            if (!/\d/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Contain at least one number.",
                });
            }
        }),
    confirmPassword: z.string()
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "Confirm password did not match password",
            path: ['confirmPassword']
        });
    }
});
export const SignUpFormSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
        .string()
        .superRefine((val, ctx) => {
            if (val.length < 8) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Be at least 8 characters.",
                });
            }
            if (!/[A-Z]/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Contain at least one uppercase letter.",
                });
            }
            if (!/[a-z]/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Contain at least one lowercase letter.",
                });
            }
            if (!/\d/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Contain at least one number.",
                });
            }
        }),
    confirmPassword: z.string()
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "Confirm password did not match password",
            path: ['confirmPassword']
        });
    }
});



export const SignInFormSchema = z.object({
    email: z.string({ required_error: "Required" }).email({
        message: "Incorrect email format",
    }),
    password: z.string({ required_error: "Required" }),
});

export const PasswordResetFormSchema = z.object({
    email: z.string({ required_error: "Required" }).email({
        message: "Incorrect email format",
    }),
});

export type FormState =
    | {
        errors?: {
            firstName?: string[]
            lastName?: string[]
            email?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined
