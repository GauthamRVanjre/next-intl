import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { form } = await getDictionary(lang);

  return (
    <>
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">{form.name}</h1>
          <p className="text-gray-500">{form.email}</p>
          <p className="text-gray-500">{form.city}</p>
        </div>
      </section>
    </>
  );
}
