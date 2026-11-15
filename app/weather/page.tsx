type Weather = {
    city: string
    date: string
    temperature: number
    description: string
}

export default async function WeatherPage() {
    const res = await fetch('https://first.orn1xx.ru/weather/Kazan?date=2026-01-16', {
    cache: 'no-store' 
    })

    if (!res.ok) {
        return (
        <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Ошибка загрузки погоды: {res.status}</h1>
        </main>
    ) 
    }

    const data: Weather = await res.json()

    return (
    <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Погода (Серверный запрос)</h1>
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl space-y-2">
        <p><span className="font-semibold">Город:</span> {data.city}</p>
        <p><span className="font-semibold">Дата:</span> {data.date}</p>
        <p><span className="font-semibold">Температура:</span> {data.temperature} °C</p>
        <p><span className="font-semibold">Описание:</span> {data.description}</p>
        </div>
    </main>
    )
}