import { z } from "zod";

export const nameSchema = z.string().min(2, "Минимум 2 символа");

export const phoneSchema = z
  .string()
  .min(1, "Укажите телефон")
  .regex(/^\+?[7-8][\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/, "Неверный формат телефона");

export const emailSchema = z.string().email("Неверный email");

export const messageSchema = z.string().min(10, "Минимум 10 символов");

export const contactFormSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema.optional().or(z.literal("")),
  message: messageSchema,
});

export const ctaFormSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
});

export const comingSoonFormSchema = z.object({
  email: emailSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CTAFormData = z.infer<typeof ctaFormSchema>;
export type ComingSoonFormData = z.infer<typeof comingSoonFormSchema>;
