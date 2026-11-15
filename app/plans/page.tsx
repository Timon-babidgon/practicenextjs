export default function PlansPage() {
    return (
    <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Мои планы</h1>
        <ol className="list-decimal pl-6 space-y-4">
        <li>
            <strong className="text-lg">Освоить React-хуки.</strong>
            <p className="text-gray-600">Сделаю небольшой todo-лист на useState.</p>
        </li>
        <li>
            <strong className="text-lg">Разобраться с API.</strong>
            <p className="text-gray-600">Напишу страницу погоды с fetch.</p>
        </li>
        <li>
            <strong className="text-lg">Сделать свой проект.</strong>
            <p className="text-gray-600">Начну с создания для портфолио.</p>
        </li>
            </ol>
    </main>
    )
}