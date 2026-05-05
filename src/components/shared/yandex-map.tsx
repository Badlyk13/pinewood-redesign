"use client";

type YandexMapProps = {
  className?: string;
  title?: string;
};

export function YandexMap({ className, title = "Офис Pinewood Homes на карте" }: YandexMapProps) {
  return (
    <div className={`aspect-[4/3] sm:aspect-[16/9] sm:min-h-[400px] w-full overflow-hidden rounded-2xl border border-border focus-within:ring-2 focus-within:ring-primary ${className || ""}`}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=37.280000%2C55.690000&z=16&text=%D0%9E%D0%B4%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D0%BE%2C%20%D1%83%D0%BB.%20%D0%97%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%2015"
        loading="lazy"
        className="h-full w-full"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}
