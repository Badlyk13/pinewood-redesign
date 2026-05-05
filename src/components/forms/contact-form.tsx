"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validators";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500 + Math.random() * 500));
    console.log("Form submitted:", data);
    setStatus("success");
  };

  const handleReset = () => {
    reset();
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="mb-4"
        >
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
        </motion.div>
        <h3 className="text-xl font-semibold text-fg">Заявка отправлена</h3>
        <p className="mt-2 text-sm text-fg-muted">
          Менеджер свяжется с вами в течение 30 минут
        </p>
        <Button
          onClick={handleReset}
          variant="outline"
          className="mt-6 rounded-xl"
        >
          Отправить ещё
        </Button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-xl font-semibold text-fg">Задать вопрос</h2>
      <p className="mt-2 text-sm text-fg-muted">
        Опишите ваш вопрос, и мы свяжемся с вами в ближайшее время.
      </p>

      <form
        className="mt-6 sm:mt-8 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-name">Имя</Label>
            <Input
              id="contact-name"
              placeholder="Ваше имя"
              className={`mt-1.5 h-10 sm:h-8 ${errors.name ? "border-red-500" : ""}`}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="contact-phone">Телефон</Label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className={`mt-1.5 h-10 sm:h-8 ${errors.phone ? "border-red-500" : ""}`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="your@email.com"
            className={`mt-1.5 h-10 sm:h-8 ${errors.email ? "border-red-500" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="contact-message">Сообщение</Label>
          <Textarea
            id="contact-message"
            placeholder="Ваш вопрос или пожелания..."
            rows={5}
            className={`mt-1.5 min-h-[5rem] sm:min-h-16 ${errors.message ? "border-red-500" : ""}`}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-10 sm:h-9 w-full gap-2 rounded-xl"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Отправить
            </>
          )}
        </Button>

        <p className="text-center text-xs text-fg-muted/60">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </>
  );
}
