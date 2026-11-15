import { personalFacts } from '@/data/personalFacts'
import FactCard from '@/components/FactCard'

export default function FactsPage() {
    return (
    <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Факты обо мне</h1>
        <div className="grid gap-6 sm:grid-cols-2">
        {personalFacts.map((fact) => (
            <FactCard key={fact.id} fact={fact} />
        ))}
        </div>
    </main>
    )
}
