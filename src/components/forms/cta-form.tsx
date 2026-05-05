"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";
import { ctaFormSchema, type CTAFormData } from "@/lib/validators";

export function CTAForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CTAFormData>({
    resolver: zodResolver(ctaFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: CTAFormData) => {
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
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-400" />
        </motion.div>
        <h3 className="text-xl font-semibold text-white">Заявка отправлена</h3>
        <p className="mt-2 text-sm text-white/70">
          Менеджер свяжется с вами в течение 30 минут
        </p>
        <Button
          onClick={handleReset}
          variant="outline"
          className="mt-6 rounded-xl bg-white text-primary hover:bg-white/90"
        >
          Отправить ещё
        </Button>
      </div>
    );
  }

  return (
    <form
      className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm sm:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Label htmlFor="cta-name" className="text-white/70">
          Имя
        </Label>
        <Input
          id="cta-name"
          placeholder="Ваше имя"
          className={`mt-1.5 border-white/15 bg-white/[0.06] text-white placeholder:text-white/30 focus:border-white/30 ${
            errors.name ? "border-red-400 focus:border-red-400" : ""
          }`}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="cta-phone" className="text-white/70">
          Телефон
        </Label>
        <Input
          id="cta-phone"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          className={`mt-1.5 border-white/15 bg-white/[0.06] text-white placeholder:text-white/30 focus:border-white/30 ${
            errors.phone ? "border-red-400 focus:border-red-400" : ""
          }`}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>
      <Magnetic>
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="mt-2 w-full rounded-xl bg-white px-6 py-5 text-base font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-black/20"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : (
            "Получить консультацию"
          )}
        </Button>
      </Magnetic>
      <p className="text-center text-xs text-white/30">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
}
