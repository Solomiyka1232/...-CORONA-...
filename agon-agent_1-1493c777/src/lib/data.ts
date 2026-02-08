export const STATS = [
  { number: '60+', label: 'Учасників' },
  { number: '17', label: 'Автомобілів' },
  { number: '#1', label: 'Скоро' },
];

export const LEADERS = [
  { role: 'ЗАСНОВНИК', name: 'GIANNI_VERSACE' },
  { role: 'ЗАСТУПНИК', name: 'VITALIK_SERGIENKO' },
  { role: 'ЗАСТУПНИК', name: 'WALDEMAR_MILLENIUM' },
];

export const CODE_RULES = [
  {
    num: '01',
    title: 'ВІРНІСТЬ БРАТСТВУ',
    text: 'Будь-яка форма зради, співпраці з ворогами або приховування інформації карається негайним вигнанням із «чорним списком».',
  },
  {
    num: '02',
    title: 'СУВОРА ДИСЦИПЛІНА',
    text: 'Накази лідера GIANNI_VERSACE та його заступників не обговорюються. Дисципліна — наша головна зброя.',
  },
  {
    num: '03',
    title: 'ЗАХИСТ СВОЇХ',
    text: 'Напад на одного члена сім\'ї — це напад на всю сім\'ю. Ми ніколи не залишаємо своїх у біді, незалежно від обставин.',
  },
];

export const RANKS = [
  {
    range: '1-5 РАНГИ',
    name: 'НОВАЧКИ',
    perks: ['Вивчення кодексу', 'Доступ до авто (3+)', 'Виконання сімейних контрактів'],
    type: 'normal',
  },
  {
    range: '5-7 РАНГИ',
    name: 'СВОЇ',
    perks: ['Повна довіра', 'Допомога новачкам', 'Участь у зборах'],
    type: 'normal',
  },
  {
    range: '8 РАНГ',
    name: 'СТРІЛКИ',
    perks: ['Захист бізнесів', 'Участь у каптах'],
    type: 'shooter',
  },
  {
    range: '9-10 РАНГИ',
    name: 'КЕРІВНИЦТВО',
    perks: ['Прийняття рішень', 'Дипломатія', 'Контроль сім\'ї'],
    type: 'normal',
  },
];

export interface Car {
  name: string;
  plate: string;
  access: string;
  featured?: boolean;
}

export const FLEET: Car[] = [
  { name: 'Dodge Challenger SRT', plate: 'AM6196BP', access: '3+ ранг' },
  { name: 'Dodge Challenger SRT', plate: 'AP7772PM', access: '3+ ранг' },
  { name: 'Chevrolet Camaro', plate: 'OO3565OP', access: '3+ ранг' },
  { name: 'BMW X7', plate: 'BM2211IX', access: '3+ ранг' },
  { name: 'BMW X7', plate: 'AE4448ME', access: '3+ ранг' },
  { name: 'BMW X7', plate: 'TA4716KE', access: '3+ ранг' },
  { name: 'BMW X6M', plate: 'PB6655HP', access: '3+ ранг' },
  { name: 'BMW E39', plate: 'AH7241AC', access: '3+ ранг' },
  { name: 'MB GT63 AMG', plate: 'IE1439EC', access: '3+ ранг' },
  { name: 'MB V-Class', plate: 'EM6888BP', access: '3+ ранг' },
  { name: 'MB V-Class', plate: 'XE5353PO', access: '3+ ранг' },
  { name: 'MB SL63 AMG', plate: 'НЕМАЄ', access: '3+ ранг' },
  { name: 'McLaren 570S', plate: 'HX1881TX', access: '7+ ранг', featured: true },
  { name: 'Porsche Panamera', plate: 'KT2250MO', access: '3+ ранг' },
  { name: 'Range Rover Sport', plate: 'IA8447HM', access: '3+ ранг' },
  { name: 'Audi A4 B8', plate: 'EA9992TE', access: '3+ ранг' },
  { name: 'Caterham Superlight', plate: 'НЕМАЄ', access: '3+ ранг' },
];

export const DIPLOMACY = [
  {
    status: 'allies' as const,
    label: 'СОЮЗНИКИ',
    entries: [
      { name: 'Street Wolves', desc: 'Повна підтримка в конфліктах та спільні операції.' },
      { name: 'Туманное Братство', desc: 'Взаємний захист територій та обмін інформацією.' },
    ],
  },
  {
    status: 'neutral' as const,
    label: 'НЕЙТРАЛІТЕТ',
    entries: [
      { name: 'Всі інші сім\'ї', desc: 'Не чіпають нас — ми не чіпаємо їх. Дотримуємось пакту про ненапад.' },
    ],
  },
  {
    status: 'enemies' as const,
    label: 'ВОРОГИ',
    entries: [
      { name: 'Відсутні', desc: 'На даний момент ми вирішуємо питання розумом, а не силою.' },
    ],
  },
];

export const FAQ = [
  {
    q: 'Який мінімальний рівень для вступу?',
    a: 'Ми приймаємо гравців від 5-го рівня. Головне — знання базових правил сервера та адекватність.',
  },
  {
    q: 'Чи видаєте ви зброю та спорядження?',
    a: 'Так, сім\'я забезпечує активних гравців усім необхідним для сімейних заходів зі складу.',
  },
  {
    q: 'Як швидко я можу отримати 8 ранг (Стрілок)?',
    a: 'Вам потрібно показати хороші навички стрільби на тренуваннях (дуелях) та бути активним у житті сім\'ї.',
  },
  {
    q: 'Що робити, якщо мене образив член іншої сім\'ї?',
    a: 'Не ведіться на провокації. Зробіть фіксацію (скріншот/фрапс) та передайте старшому складу (9-10 ранг). Ми вирішимо це дипломатично або силою.',
  },
];

export const BLACKLIST = [
  {
    nick: 'Event_Horizon',
    roles: [
      { label: 'Зрадник', type: 'betrayal' },
      { label: 'Дезінформація', type: 'info' },
      { label: 'Провокатор', type: 'toxic' },
    ],
    reason: 'Спроба розколу сім\'ї зсередини, поширення фейків про лідерів та заступників, (наш хейтер). ЧС сім\'ї.',
  },
  {
    nick: 'Ralph_Lauren',
    roles: [
      { label: 'Злив складу', type: 'drain' },
      { label: 'Злив рангів', type: 'betrayal' },
      { label: 'Кік учасників', type: 'toxic' },
    ],
    reason: 'Використав високий ранг для масового видалення гравців із сім\'ї та повного спустошення складу. ЧС сім\'ї.',
  },
];

export const SKILLS = ['Стрільба', 'Онлайн 4+', 'Водіння', 'Адекватність'];
