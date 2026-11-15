export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold m-8">Привет, я Тимофей Надымов</h1>

      <section className="m-6 p-5 rounded-xl bg-gray-200">
        <h2 className="text-xl font-semibold mb-2">Что я изучаю?</h2>
        <p>Изучаю веб-разработку на Next.js, изучаю Python, нейросети и их использование как инструмента в веб-разработке.</p>
      </section>

      <section className="m-6 p-5 rounded-xl bg-gray-200">
        <h2 className="text-xl font-semibold mb-2">Чем увлекаюсь?</h2>
        <p>Увлекаюсь головоломками, люблю рисовать и увлекаюсь прогулками на природе.</p>
      </section>

      <section className="m-6 p-5 rounded-xl bg-gray-200">
        <h2 className="text-xl font-semibold mb-2">Чему хочу научиться в веб-разработке?</h2>
        <p>Хочу разобраться с React-хуками и внедрять динамичные 3д эффекты в свои веб-страницы.</p>
      </section>

      <figure className="mt-10">
        <img
          src="/megaminx.png"
          alt="Шахматы"
          className="w-full max-w-md rounded-lg"
        />
        <figcaption className="mt-2 text-sm text-gray-600">
          Сейчас я умею собирать такую головоломку.
        </figcaption>
      </figure>
    </main>
  )
}