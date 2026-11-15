import { PersonalFact } from '../data/personalFacts'
import Link from 'next/link' 

type FactCardProps = {
    fact: PersonalFact
}

export default function FactCard({ fact }: FactCardProps) {
    return (
    <div className="rounded-xl border p-4 shadow-sm flex flex-col justify-between">
        <div>
        <img 
            src={fact.image} 
            alt={fact.title} 
            className="w-full h-48 object-cover rounded-lg" 
        />
        <h3 className="mt-3 text-lg font-semibold">{fact.title}</h3>
        <p className="text-gray-600 mb-4">{fact.summary}</p>
        </div>
        
        <Link 
        href={`/facts/${fact.id}`} 
        className="text-blue-600 hover:underline font-medium mt-auto"
        >
        Подробнее
        </Link>
    </div>
    )
}