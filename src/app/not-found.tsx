import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center pt-[4.5rem]">
        <Container className="py-20 text-center">
          <p className="font-serif text-8xl font-bold text-primary/20">404</p>
          <h1 className="mt-4 font-serif text-display-2 font-bold text-fg">
            Страница не найдена
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-fg-muted">
            К сожалению, запрашиваемая страница не существует. Попробуйте вернуться на главную.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-fg transition-colors hover:bg-primary/90"
          >
            На главную
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
