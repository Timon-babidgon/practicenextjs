
import { personalFacts } from '../../../data/personalFacts'
import Link from 'next/link'

export default async function FactDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    
    const fact = personalFacts.find((f) => f.id === id)
    
    if (!fact) {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Факт не найден</h1>
        <Link href="/facts" className="text-blue-600 hover:underline">
            Назад к фактам
        </Link>
        </main>
    )
    }  
    return (
    <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">{fact.title}</h1>
        <img src={fact.image} alt={fact.title} className="w-full max-w-md rounded-lg mb-6" />
        
        <div className="space-y-3 mb-8">
        {fact.details.map((line, index) => (
            <p key={index} className="text-lg text-gray-700">
            {line}
            </p>
        ))}
        </div>
        <Link href="/facts" className="text-blue-600 hover:underline font-medium">
        Назад к фактам
        </Link>
    </main>
    )
}