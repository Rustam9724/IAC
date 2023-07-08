 export interface ITextItem {
    ru: string,
    en: string
}

interface IText {
    [key: string]: ITextItem,   
}

const text: IText = {
    headerDescription: {
        ru: 'Производство и продажа промышленного оборудования',
        en: 'Production and sale industrial equipment'
    },
    wellcomeTitle: {
        ru: 'Промышленное оборудование в странах СНГ с пожизненной гарантией',
        en: 'Industrial equipment in the CIS countries with a lifetime warranty',
    },
    wellcomeSubTitle: {
        ru: 'Оформите заказ и получите в подарок: запчасти, средства по уходу или Kärcher',
        en: 'Place an order and receive as a gift: spare parts, care products or Kärcher',
    },
    wellcomeButton: {
        ru: 'ОФОРМИТЬ ЗАКАЗ',
        en: 'CHECKOUT',
    },
    rangeTitle: {
        ru: 'Большой ассортимент оборудования',
        en: 'Large range of equipment',
    },
    rangeListFirstItem: {
        ru: 'Нержавеющая сталь марки AISI–304',
        en: 'Stainless steel grade AISI-304',
    },
    rangeListSecondItem: {
        ru: 'Электроника привезённая и Европы',
        en: 'Electronics imported from Europe',
    },
    rangeListThirdItem: {
        ru: 'Более 300 видов оборудования',
        en: 'Over 300 types of equipment',
    },
    rangeText: {
        ru: 'Оставьте заявку — мы свяжемся с вами с готовым предложением',
        en: 'Leave a request - we will contact you with a ready offer',
    },
    rangeFirstButton: {
        ru: 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ',
        en: 'GET AN OFFER',
    },
    rangeSecondButton: {
        ru: 'СМОТРЕТЬ ВСЕ ТОВАРЫ',
        en: 'VIEW ALL PRODUCTS',
    },
    sertificatesTitle: {
        ru: 'Наше оборудование прошло все возможные вариации контроля качества',
        en: 'Our equipment has passed all possible variations of quality control',
    },
    sertificatesText: {
        ru: 'Сертификат соответсвия',
        en: 'Certificate of conformity',
    },
    clientsTitle: {
        ru: 'Нам доверяют крупные компании',
        en: 'We are trusted by large companies',
    },
    clientsText: {
        ru: 'Оставьте заявку — мы свяжемся с вами и проведём БЕСПЛАТНУЮ ЭКСКУРСИЮ',
        en: 'Leave a request - we will contact you and conduct a FREE TOUR',
    },
    clientsButton: {
        ru: 'ПОЛУЧИТЬ ЭКСКУРСИЮ',
        en: 'GET A TOUR',
    },
    stagesTitle: {
        ru: 'Этапы работы',
        en: 'Stages of work',
    },
    stagesFirstStageTitle: {
        ru: 'Звонок-заявка',
        en: 'Call-application',
    },
    stagesFirstStageText: {
        ru: 'Поступление звонка или заявки с сайта и соц сетей',
        en: 'Receipt of a call or request from the site and social networks',
    },
    stagesSecondStageTitle: {
        ru: 'Встреча',
        en: 'Meeting',
    },
    stagesSecondStageText: {
        ru: 'Встреча с клиентом и обсуждение деталей предстоящей работы',
        en: 'Meeting with the client and discussing the details of the upcoming work',
    },
    stagesThirdStageTitle: {
        ru: 'Осмотр завода',
        en: 'Factory tour',
    },
    stagesThirdStageText: {
        ru: 'Осмотр объекта для предстоящих работ',
        en: 'Inspection of the object for upcoming work',   
    },
    stagesFourthStageTitle: {
        ru: 'Подписание договора',
        en: 'Signing an agreement',
    },
    stagesFourthStageText: {
        ru: 'Согласование и подписание договора',
        en: 'Negotiation and signing of the contract',
    },
    stagesFifthStageTitle: {
        ru: 'Оплата',
        en: 'Payment'
    }, 
    stagesFifthStageText: {
        ru: 'Внесение предоплаты согласно условиям оговорённым в договоре',
        en: 'Making an advance payment in accordance with the conditions specified in the contract',
    },
    stagesSixthStageTitle: {
        ru: 'Производство',
        en: 'Production',
    },
    stagesSixthStageText: {
        ru: 'Производство оборудования и запчастей согласно заказу',
        en: 'Production of equipment and spare parts according to the order',
    },
    stagesSeventhStageTitle: {
        ru: 'Доставка',
        en: 'Delivery',
    },
    stagesSeventhStageText: {
        ru: 'Доставка оборудования в страну и город клиента',
        en: 'Delivery of equipment to the country and city of the client',
    },
    stagesEighthStageTitle: {
        ru: 'Монтажные работы',
        en: 'Installation work',
    },
    stagesEighthStageText: {
        ru: 'Установка оборудования на объект клиента',
        en: "Installation of equipment at the client's site",
    },
    stagesNinthStageTitle: {
        ru: 'Запуск производства',
        en: 'Start of production',
    },
    stagesNinthStageText: {
        ru: 'Полноценное запущенное производство',
        en: 'Fully launched production',
    },
    stagesDay: {
        ru: 'день',
        en: 'day',
    },
    stagesDaysFirst: {
        ru: 'дня',
        en: 'days',
    },
    stagesDaysSecond: {
        ru: 'дней',
        en: 'days',
    },
    stagesMonth: {
        ru: 'месяцев',
        en: 'months',
    },
    stagesGetStartTitle: {
        ru: 'Давайте начнём уже сейчас',
        en: "Let's start now",
    },
      stagesGetStartText: {
        ru: 'Оставьте заявку — мы свяжемся с вами с готовым предложением',
        en: 'Leave a request - we will contact you with a ready offer',
    },
    stagesButton: {
        ru: 'НАЧАТЬ СЕЙЧАС',
        en: 'START NOW',
    },
    exhibitionsTitle: {
        ru: 'Мы уже 4 года учавствуем в крупных выставках Узбекистана',
        en: 'We have been participating in major exhibitions in Uzbekistan for 4 years',
    },
    employersTitle: {
        ru: 'Каждый из наших специалистов ежегодно проходит обучение по повышению квалификации в разных странах',
        en: 'Each of our specialists annually undergoes professional development training in different countries',
    },
    employersInPhoto: {
        ru: 'На фото:',
        en: 'On the picture:',
    },
    employerfirstName: {
        ru: 'Павел Охлобыстин',
        en: 'Pavel Okhlobystin',
    },
    employersecondName: {
        ru: 'Юлий Мадленов',
        en: 'Julius Madelenov',
    },
    employerthirdName: {
        ru: 'Рушан Марианов',
        en: 'Rushan Marianov',
    },
    employerfourthName: {
        ru: 'Трифон Искандеров',
        en: 'Trifon Iskanderov',
    },
    employerfifthName: {
        ru: 'Тамерлан Витальев',
        en: 'Tamerlan Vitaliev',
    },
    employersfirstJobTitle: {
        ru: 'Монтажник компрессорного оборудования',
        en: 'Compressor equipment installer',
    },
    employerssecondJobTitle: {
        ru: 'Слесарь-ремонтик оборудования',
        en: 'Equipment repairman',
    },
    employersthirdJobTitle: {
        ru: 'Оператор конвейерной линии',
        en: 'Conveyor line operator',
    },
    employersfourthJobTitle: {
        ru: 'Водитель грузовых автомобилей',
        en: 'Truck driver',
    },
    employersfifthJobTitle: {
        ru: 'Тестировщик оборудования',
        en: 'Equipment tester',
    },
    FAQTitle: {
        ru: 'Часто задаваемые вопросы',
        en: 'Frequently Asked Questions',
    },
    FAQSubTitle: {
        ru: 'Здесь мы собрали для вас ответы на самые часто задаваемые вопросы',
        en: 'Here we have collected answers to the most frequently asked questions for you',
    },
    FAQFirstTitle: {
        ru: 'Форма оплаты',
        en: 'Payment form',
    },
    FAQFirstText: {
        ru: 'Мы принимаем оплату наличными, перечислением, PayMe, Visa и Mastercard',
        en: 'We accept cash, bank transfer, PayMe, Visa and Mastercard',
    },
    FAQSecondTitle: {
        ru: 'Сервисоное обслуживание',
        en: 'Service maintenance',
    },
    FAQSecondText: {
        ru: 'Мы предоставляем своим клиентам сервисное обслуживание сроком на 3 года с возможностью продления',
        en: 'We provide our customers with service for a period of 3 years with the possibility of extension',
    },
    FAQThirdTitle: {
        ru: 'Рабочее время',
        en: 'Work time',
    },
    FAQThirdText: {
        ru: 'Пн–Пт 8:00–18:00 Сб 8:00–15:00',
        en: 'Mon–Fri 8:00–18:00 Sat 8:00–15:00',
    },
    FAQFourthTitle: {
        ru: 'Посмотреть оборудование',
        en: 'View equipment',
    },
    FAQFourthText: {
        ru: 'Мы можем устроить вам бесплатную экскурсию по объектам наших клиентов',
        en: "We can arrange a free tour of our clients' properties for you",
    },
    FAQFifthTitle: {
        ru: 'В какие страны',
        en: 'To which countries',
    },
    FAQFifthText: {
        ru: 'Мы поставляем нашу продукцию во все страны СНГ без исключения',
        en: 'We supply our products to all CIS countries without exception',
    },
    FAQSixthTitle: {
        ru: 'Гарантия',
        en: 'Guarantee',
    },
    FAQSixthText: {
        ru: 'При покупке нашей продукции вы получаете на неё пожизненную гарантию от заводского брака',
        en: 'When you buy our products, you get a lifetime warranty against manufacturing defects',
    },
    callUpTitle: {
        ru: 'Давайте созвонимся',
        en: "Let's call",
    },
    callUpName: {
        ru: 'Фамилия Имя',
        en: 'Full name',
    },
    callUpPhone: {
        ru: 'Номер телефона',
        en: 'Phone number',
    },
    callUpConvenientTime: {
        ru: 'В какое время в течение дня вам удобно разговаривать?',
        en: 'What time of the day is convenient for you to talk?',
    },
    callUpButton: {
        ru: 'ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК',
        en: 'REQUEST A CALL BACK',
    },
    footerContactsTitle: {
        ru: 'Контакты',
        en: 'Contacts',
    },
    footerAddress: {
        ru: 'ул. Узбекистон Овози, 21 Ташкент, Узбекистан 100007',
        en: 'st. Uzbekistan Ovozi, 21 Tashkent, Uzbekistan 100007',
    },
    modalFormTitle: {
        ru: 'Получите от нас коммерческое предложение или бесплатную экскурсию по объектам',
        en: 'Get a commercial offer from us or a free tour of the facilities',
    },
    modalFormSubTitle: {
        ru: 'Мы свяжемся с Вами',
        en: 'We will contact you',
    },
    modalFormName: {
        ru: 'Фамилия Имя',
        en: 'Full name',
    },
    modalFormPhone: {
        ru: 'Номер телефона',
        en: 'phone number'
    },
    modalFormButton: {
        ru: 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ',
        en: 'GEN AN OFFER'
    },
    burgerMenuAboutUs: {
        ru: 'О нас',
        en: 'About us',
    },
    burgerMenuGoods: {
        ru: 'Товары',
        en: 'Goods',
    },
    burgerMenuConfidence: {
        ru: 'Нам доверяют',
        en: 'we are trusted',
    },
    burgerMenuTeam: {
        ru: 'Комнанда',
        en: 'Team',
    },
    burgerMenuContacts: {
        ru: 'Контакты',
        en: 'Contacts',
    }
}

export default text;