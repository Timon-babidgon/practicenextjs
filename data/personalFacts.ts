export type PersonalFact = {
    id: string
    title: string
    summary: string
    details: string[]
    image: string
}

export const personalFacts: PersonalFact[] = [
    {
    id: 'hobby',
    title: 'Рисование',
    summary: 'Люблю рисовать.',
    details: [
        'Начал рисовать в 7 лет.',
        'Любимые жанры — пейзаж и архитектура.',
        'Хочу попробовать рисовать на природе, на мольберте.',
    ],
    image: '/drawer.png',
    },
    {
    id: 'skills',
    title: 'Что уже умею',
    summary: 'Разбираюсь в HTML, CSS и основах TS.',
    details: [
        'Сделал несколько сайтов на Next.Js.',
        'Понимаю, как работает SQL.',
        'Освоил пользование Blender и Figma для собственных дизайнов.',
    ],
    image: '/program.png',
    },
    {
    id: 'future',
    title: 'Что хочу попробовать',
    summary: 'Хочу попробовать React и Next.js в деле.',
    details: [
        'Начать использование инструментов для добавления динамики в свой сайт.',
        'Сделать первое приложение.',
        'Разобраться с API-запросами.',
    ],
    image: '/nextphoto.png',
    },
]