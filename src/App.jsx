import React, { useState, useEffect, useRef } from 'react'
import {
  ArrowRight,
  X,
  Menu,
  CheckCircle,
  Briefcase,
  User,
  ChevronLeft,
  ChevronRight,
  Eye,
  Globe,
  Send,
  Building2,
  Phone,
  Mail,
} from 'lucide-react'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const [lang, setLang] = useState('ru')
  const [isTrashRevealed, setTrashRevealed] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState(null)
  const [formStatus, setFormStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    company: '',
  })

  const scrollRef = useRef(null)

  const t = {
    ru: {
      page_title: 'NOT.PDF — Веб-резюме и вакансии будущего | Сайт-портфолио за 24 часа',
      meta_desc: 'Веб-резюме и веб-вакансии будущего с воронкой и конверсией. Соберём твой сайт-портфолио за 24 часа: продающее резюме или вакансию.',
      msg_error: 'Ошибка отправки',
      msg_error_sub: 'Попробуй ещё раз или напиши в Telegram.',
      nav_pain: 'Боль',
      nav_cases: 'Примеры',
      nav_price: 'Прайс',
      btn_job: 'Я Ищу Работу',
      btn_hire: 'Я Ищу Людей',
      hero_line1: 'УПАКУЙ',
      hero_line1_span: 'СЕБЯ',
      hero_line2: 'ИЛИ БИЗНЕС',
      hero_sub_pre: 'Твой PDF файл — ',
      hero_sub_blur: 'это мусор',
      hero_sub_post: '. Сделай из резюме и вакансии сайт, который упакует тебя/твою компанию и продаст.',
      hero_btn: 'Смотреть Примеры',
      system_msg: 'SYSTEM OVERLOAD: WORD И PDF УСТАРЕЛИ',
      marquee: 'ВЕБ РЕЗЮМЕ • ВЕБ ВАКАНСИЯ • ВЫДЕЛЯЙСЯ • 3 ЯЗЫКА • ',
      roast_title: 'Почему старый формат мертв',
      roast_user_title: 'Ты соискатель',
      roast_user_1: 'Твой PDF выглядит на телефоне как каша.',
      roast_user_2: "Пишешь 'стрессоустойчивость', как все.",
      roast_user_3: 'Тебя не запоминают. Ты просто файл.',
      roast_biz_title: 'Ты компания',
      roast_biz_1: "Описание 'печеньки в офисе' вызывает зевоту.",
      roast_biz_2: "Крутые спецы проходят мимо 'совка'.",
      roast_biz_3: "Нет воронки. Кандидат не жмет 'Откликнуться'.",
      portfolio_title: 'Смотри как это',
      portfolio_span: 'Выглядит',
      portfolio_sub: 'Свайпай примеры. Вдохновляйся. Заказывай.',
      filter_all: 'Всё',
      filter_res: 'Резюме',
      filter_vac: 'Вакансии',
      price_title: 'Прайс Лист',
      price_sub: 'Все честно. 3 языка включены в каждый тариф.',
      price_res_title: 'Веб-Резюме',
      price_res_sub: 'Одноразовая оплата. Сайт твой навсегда.',
      price_res_f1: 'Опросник-распаковка',
      price_res_f2: 'Адаптивный веб-дизайн',
      price_res_f3: 'Версия на RU, RO, EN',
      price_res_f4: 'QR-код для визитки',
      price_res_btn: 'Заказать за $30',
      price_vac_title: 'Веб-Вакансия',
      price_vac_sub: 'Окупается первым же наймом.',
      price_vac_f1: 'Маркетинговая проработка',
      price_vac_f2: 'Брендирование под компанию',
      price_vac_f3: 'Версия на RU, RO, EN',
      price_vac_f4: 'Встроенная форма отклика',
      price_vac_btn: 'Заказать за $70',
      footer_title: 'Не будь',
      footer_title_2: 'Скучным',
      footer_sub: 'Заполни бриф и получи сайт на 3 языках через 24 часа.',
      footer_btn: 'Написать в Telegram',
      cat_resume: 'ВЕБ-РЕЗЮМЕ',
      cat_vacancy: 'ВЕБ-ВАКАНСИЯ',
      demo_view: 'Смотреть демо',
      result_label: 'Результат:',
      advantages_title: 'Почему веб-формат',
      advantages_sub: 'Преимущества веб-резюме и веб-вакансий в одном экране.',
      advantages_items: [
        { title: 'Выделяйся', desc: 'Дизайн, который нельзя спутать с PDF.' },
        { title: 'Три языка', desc: 'RU / RO / EN в одной ссылке.' },
        { title: 'Мобильно', desc: 'Идеально читается в мессенджерах и на телефоне.' },
        { title: 'Всегда доступно', desc: 'Короткая ссылка и QR — открывается мгновенно.' },
        { title: 'Конверсия', desc: 'Кнопки и формы отклика встроены прямо в страницу.' },
        { title: 'Легко обновлять', desc: 'Правки без пересборки и пересылки файлов.' },
        { title: 'Богатый контент', desc: 'Видео, кейсы, ссылки — всё в одном месте.' },
        { title: 'Современно', desc: 'Легкий, быстрый, без тяжёлых вложений.' },
      ],
      modal_title_res: 'Упаковка Личности',
      modal_title_vac: 'Упаковка Бизнеса',
      modal_desc: 'Оставь контакт, мы скинем бриф в течение 15 минут.',
      lbl_name: 'Твоё Имя',
      lbl_contact: 'Telegram / WhatsApp',
      lbl_email: 'Email (для брифа)',
      lbl_company: 'Название Компании',
      btn_send: 'ОТПРАВИТЬ ЗАЯВКУ',
      msg_success: 'ЗАЯВКА ПРИНЯТА',
      msg_success_sub: 'Проверь мессенджер, мы уже пишем.',
    },
    ro: {
      page_title: 'NOT.PDF — CV și job-uri web ale viitorului | Portofoliu în 24h',
      meta_desc: 'CV și job-uri web cu funnel și conversie. Îți livrăm site-ul portofoliu în 24 de ore: CV care vinde sau job care atrage.',
      msg_error: 'Eroare la trimitere',
      msg_error_sub: 'Încearcă din nou sau scrie pe Telegram.',
      nav_pain: 'Durere',
      nav_cases: 'Exemple',
      nav_price: 'Preț',
      btn_job: 'Caut Job',
      btn_hire: 'Caut Oameni',
      hero_line1: 'FĂ-TE',
      hero_line1_span: 'REMARCAT',
      hero_line2: 'SAU AFACEREA',
      hero_sub_pre: 'Fișierul tău PDF ',
      hero_sub_blur: 'e gunoi',
      hero_sub_post: '. Transformă CV-ul și Job-ul într-un site care te/compania ta împachetează și vinde.',
      hero_btn: 'Vezi Exemple',
      system_msg: 'SYSTEM OVERLOAD: WORD ȘI PDF SUNT MOARTE',
      marquee: 'WEB CV • WEB JOB • IEȘI ÎN EVIDENȚĂ • 3 LIMBI • ',
      roast_title: 'De ce formatul vechi e mort',
      roast_user_title: 'Ești candidat',
      roast_user_1: 'PDF-ul tău arată groaznic pe telefon.',
      roast_user_2: "Scrii 'rezistență la stres' ca toți ceilalți.",
      roast_user_3: 'Nu te țin minte. Ești doar un fișier.',
      roast_biz_title: 'Ești companie',
      roast_biz_1: "Descrierea 'colectiv tânăr' provoacă căscat.",
      roast_biz_2: "Experții ignoră stilul 'sovietic'.",
      roast_biz_3: 'Nu ai funnel. Candidatul nu aplică.',
      portfolio_title: 'Uite cum',
      portfolio_span: 'Arată',
      portfolio_sub: 'Swipe la exemple. Inspiră-te. Comandă.',
      filter_all: 'Tot',
      filter_res: 'CV-uri',
      filter_vac: 'Job-uri',
      price_title: 'Lista de Prețuri',
      price_sub: 'Totul transparent. 3 limbi incluse în fiecare tarif.',
      price_res_title: 'Web CV',
      price_res_sub: 'Plată unică. Site-ul e al tău pe viață.',
      price_res_f1: 'Chestionar de despachetare',
      price_res_f2: 'Web Design Adaptiv',
      price_res_f3: 'Versiuni RU, RO, EN',
      price_res_f4: 'Cod QR pentru vizită',
      price_res_btn: 'Comandă cu $30',
      price_vac_title: 'Web Job',
      price_vac_sub: 'Se răscumpără la prima angajare.',
      price_vac_f1: 'Copywriting de marketing',
      price_vac_f2: 'Branding de companie',
      price_vac_f3: 'Versiuni RU, RO, EN',
      price_vac_f4: 'Formular de aplicare integrat',
      price_vac_btn: 'Comandă cu $70',
      footer_title: 'Nu fi',
      footer_title_2: 'Plictisitor',
      footer_sub: 'Completează brief-ul și primește site-ul în 3 limbi în 24h.',
      footer_btn: 'Scrie pe Telegram',
      cat_resume: 'WEB CV',
      cat_vacancy: 'WEB JOB',
      demo_view: 'Vezi demo',
      result_label: 'Rezultat:',
      advantages_title: 'De ce format web',
      advantages_sub: 'Avantajele web CV și web job într-o singură pagină.',
      advantages_items: [
        { title: 'Ieși în evidență', desc: 'Design pe care nu-l confunzi cu un PDF.' },
        { title: 'Trei limbi', desc: 'RU / RO / EN într-un singur link.' },
        { title: 'Mobil-first', desc: 'Se citește perfect în mesagerie și pe telefon.' },
        { title: 'Mereu accesibil', desc: 'Link scurt și QR — se deschide instant.' },
        { title: 'Conversie', desc: 'Buton și formă de aplicare integrate.' },
        { title: 'Ușor de actualizat', desc: 'Modifici textul fără să retrimiți fișiere.' },
        { title: 'Conținut bogat', desc: 'Video, studii de caz, linkuri — la un loc.' },
        { title: 'Modern', desc: 'Rapid, ușor, fără atașamente grele.' },
      ],
      modal_title_res: 'Personal Branding',
      modal_title_vac: 'Business Branding',
      modal_desc: 'Lasă un contact, trimitem brief-ul în 15 minute.',
      lbl_name: 'Numele Tău',
      lbl_contact: 'Telegram / WhatsApp',
      lbl_email: 'Email (pentru brief)',
      lbl_company: 'Numele Companiei',
      btn_send: 'TRIMITE CEREREA',
      msg_success: 'CERERE ACCEPTATĂ',
      msg_success_sub: 'Verifică messenger-ul, deja scriem.',
    },
    en: {
      page_title: 'NOT.PDF — Future-ready web resumes & vacancies | Portfolio in 24h',
      meta_desc: 'Web resumes and vacancies with funnel and conversion. Your portfolio site in 24 hours: a resume that sells or a vacancy that converts.',
      msg_error: 'Send error',
      msg_error_sub: 'Try again or ping us on Telegram.',
      nav_pain: 'Pain',
      nav_cases: 'Cases',
      nav_price: 'Price',
      btn_job: 'I Seek Job',
      btn_hire: 'I Seek Talent',
      hero_line1: 'PACK',
      hero_line1_span: 'YOURSELF',
      hero_line2: 'OR BUSINESS',
      hero_sub_pre: 'Your PDF file ',
      hero_sub_blur: 'is trash',
      hero_sub_post: '. Turn your resume and vacancy into a site that packages you/your company and sells.',
      hero_btn: 'View Examples',
      system_msg: 'SYSTEM OVERLOAD: WORD AND PDF ARE DEAD',
      marquee: 'WEB RESUME • WEB VACANCY • STAND OUT • 3 LANGUAGES • ',
      roast_title: 'Why old format is dead',
      roast_user_title: 'You are candidate',
      roast_user_1: 'Your PDF looks like mess on mobile.',
      roast_user_2: "You write 'stress resistant' like everyone else.",
      roast_user_3: 'You are forgettable. Just another file.',
      roast_biz_title: 'You are business',
      roast_biz_1: "'Cookies in office' description is boring.",
      roast_biz_2: "Top talents skip 'old school' vibes.",
      roast_biz_3: 'No funnel. Candidate leaves without applying.',
      portfolio_title: 'See How It',
      portfolio_span: 'Looks',
      portfolio_sub: 'Swipe examples. Get inspired. Order now.',
      filter_all: 'All',
      filter_res: 'Resume',
      filter_vac: 'Vacancy',
      price_title: 'Price List',
      price_sub: 'Fair play. 3 languages included in every plan.',
      price_res_title: 'Web Resume',
      price_res_sub: 'One-time payment. Website is yours forever.',
      price_res_f1: 'Personality Unpacking Quiz',
      price_res_f2: 'Adaptive Web Design',
      price_res_f3: 'RU, RO, EN Versions',
      price_res_f4: 'QR Code for networking',
      price_res_btn: 'Order for $30',
      price_vac_title: 'Web Vacancy',
      price_vac_sub: 'Pays off with the first hire.',
      price_vac_f1: 'Marketing Copywriting',
      price_vac_f2: 'Company Branding',
      price_vac_f3: 'RU, RO, EN Versions',
      price_vac_f4: 'Integrated Application Form',
      price_vac_btn: 'Order for $70',
      footer_title: "Don't Be",
      footer_title_2: 'Boring',
      footer_sub: 'Fill the brief and get your 3-language site in 24h.',
      footer_btn: 'Text on Telegram',
      cat_resume: 'WEB RESUME',
      cat_vacancy: 'WEB VACANCY',
      demo_view: 'View Demo',
      result_label: 'Result:',
      advantages_title: 'Why web format',
      advantages_sub: 'Advantages of web resume and web vacancy on one page.',
      advantages_items: [
        { title: 'Stand out', desc: "Design you can't confuse with a PDF." },
        { title: '3 languages', desc: 'RU / RO / EN in a single link.' },
        { title: 'Mobile-first', desc: 'Perfect in messengers and on phones.' },
        { title: 'Always on', desc: 'Short link & QR — opens instantly.' },
        { title: 'Conversion', desc: 'Apply buttons and forms built-in.' },
        { title: 'Easy updates', desc: 'Edit text without resending files.' },
        { title: 'Rich media', desc: 'Video, cases, links in one place.' },
        { title: 'Modern', desc: 'Fast, lightweight, no heavy attachments.' },
      ],
      modal_title_res: 'Personal Branding',
      modal_title_vac: 'Business Branding',
      modal_desc: 'Leave contact, we send the brief in 15 mins.',
      lbl_name: 'Your Name',
      lbl_contact: 'Telegram / WhatsApp',
      lbl_email: 'Email (for brief)',
      lbl_company: 'Company Name',
      btn_send: 'SEND REQUEST',
      msg_success: 'REQUEST ACCEPTED',
      msg_success_sub: 'Check your messenger, we are typing.',
    },
  }

  const text = t[lang]

  useEffect(() => {
    setTrashRevealed(false)
    document.title = t[lang].page_title
    document.documentElement.setAttribute('lang', lang)
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement('meta')
      m.name = 'description'
      document.head.appendChild(m)
      return m
    })()
    meta.setAttribute('content', t[lang].meta_desc)
  }, [lang])

  const openModal = (type) => {
    setModalType(type)
    setIsModalOpen(true)
    setFormStatus('idle')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setFormData({ name: '', contact: '', email: '', company: '' })
    setFormStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!modalType) return

    const endpoint = import.meta.env.VITE_MAIL_ENDPOINT || '/api/send-mail'

    setFormStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lead_type: modalType === 'vacancy' ? 'Web Vacancy' : 'Web Resume',
          subject:
            modalType === 'vacancy'
              ? `NOT.PDF | Web Vacancy | ${formData.company || formData.name}`
              : `NOT.PDF | Web Resume | ${formData.name}`,
          name: formData.name,
          contact: formData.contact,
          email: formData.email,
          company: modalType === 'vacancy' ? formData.company : 'N/A',
          lang,
          submitted_at: new Date().toISOString(),
        }),
      })

      if (!res.ok) throw new Error('Mail send failed')

      setFormStatus('success')
    } catch (error) {
      console.error('Email send error:', error)
      setFormStatus('error')
    }
  }

  const getPortfolioItems = (currentLang) => {
    const content = {
      ru: [
        { title: 'Сеньор Фронтендер', desc: 'Бог JavaScript. Знает React лучше создателей.', stats: 'Конверсия: 40%' },
        { title: 'Маркетинг Ниндзя', desc: 'Крипто-стартап ищет убийцу трафика.', stats: '+150 Откликов' },
        { title: 'Продакт Оунер', desc: 'Минимализм и метрики. Только хардкор.', stats: 'Найм за 3 дня' },
        { title: 'Бариста Рок-звезда', desc: 'Вайб важнее скиллов. Кофе научим.', stats: 'Вакансия закрыта' },
      ],
      ro: [
        { title: 'Senior Frontend', desc: 'Zeul JavaScript. Știe React mai bine ca creatorii.', stats: 'Conversie: 40%' },
        { title: 'Marketing Ninja', desc: 'Crypto startup caută ucigaș de trafic.', stats: '+150 Aplicări' },
        { title: 'Product Owner', desc: 'Minimalism și metrici. Doar hardcore.', stats: 'Angajat în 3 zile' },
        { title: 'Barista Rockstar', desc: 'Vibe-ul contează. Te învățăm cafea.', stats: 'Poziție închisă' },
      ],
      en: [
        { title: 'Senior Frontend', desc: 'JavaScript God. Knows React better than creators.', stats: 'Conversion: 40%' },
        { title: 'Marketing Ninja', desc: 'Crypto startup seeking traffic killer.', stats: '+150 Leads' },
        { title: 'Product Owner', desc: 'Minimalism & Metrics. Hardcore only.', stats: 'Hired in 3 days' },
        { title: 'Barista Rockstar', desc: 'Vibe over skills. We teach coffee.', stats: 'Position Closed' },
      ],
    }

    const c = content[currentLang]

    return [
      {
        id: 1,
        type: 'resume',
        category: t[currentLang].cat_resume,
        title: c[0].title,
        desc: c[0].desc,
        color: 'bg-lime-400',
        textColor: 'text-black',
        stats: c[0].stats,
      },
      {
        id: 2,
        type: 'vacancy',
        category: t[currentLang].cat_vacancy,
        title: c[1].title,
        desc: c[1].desc,
        color: 'bg-purple-500',
        textColor: 'text-white',
        stats: c[1].stats,
      },
      {
        id: 3,
        type: 'resume',
        category: t[currentLang].cat_resume,
        title: c[2].title,
        desc: c[2].desc,
        color: 'bg-white',
        textColor: 'text-black',
        stats: c[2].stats,
      },
      {
        id: 4,
        type: 'vacancy',
        category: t[currentLang].cat_vacancy,
        title: c[3].title,
        desc: c[3].desc,
        color: 'bg-orange-500',
        textColor: 'text-black',
        stats: c[3].stats,
      },
    ]
  }

  const portfolioItems = getPortfolioItems(lang)
  const filteredPortfolio = activeTab === 'all' ? portfolioItems : portfolioItems.filter((item) => item.type === activeTab)
  const advantages = text.advantages_items

  const scrollToSection = (id) => {
    setIsMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-lime-400 selection:text-black overflow-x-hidden relative">
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" onClick={closeModal}></div>

          <div
            className={`relative w-full max-w-lg bg-neutral-900 border-2 rounded-3xl p-6 md:p-10 shadow-2xl animate-in zoom-in-95 duration-300 ${
              modalType === 'resume'
                ? 'border-lime-400 shadow-[0_0_50px_rgba(163,230,53,0.2)]'
                : 'border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.2)]'
            }`}
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors">
              <X size={28} />
            </button>

            {formStatus === 'success' ? (
              <div className="text-center py-10">
                <div
                  className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-bounce ${
                    modalType === 'resume' ? 'bg-lime-400 text-black' : 'bg-purple-500 text-white'
                  }`}
                >
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-black uppercase mb-2">{text.msg_success}</h3>
                <p className="text-neutral-400 text-lg">{text.msg_success_sub}</p>
                <button onClick={closeModal} className="mt-8 text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-white underline">
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <div
                    className={`inline-block px-3 py-1 rounded text-xs font-black uppercase mb-4 ${
                      modalType === 'resume' ? 'bg-lime-400 text-black' : 'bg-purple-500 text-white'
                    }`}
                  >
                    {modalType === 'resume' ? 'PERSONAL' : 'BUSINESS'}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase leading-none mb-2">
                    {modalType === 'resume' ? text.modal_title_res : text.modal_title_vac}
                  </h3>
                  <p className="text-neutral-400">{text.modal_desc}</p>
                </div>

                <div className="space-y-4">
                  {modalType === 'vacancy' && (
                    <div className="group">
                      <label className="text-xs font-bold uppercase text-neutral-500 mb-1 block ml-1">{text.lbl_company}</label>
                      <div className="relative">
                        <Building2
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-purple-500 transition-colors"
                          size={20}
                        />
                        <input
                          required
                          type="text"
                          className="w-full bg-black border-2 border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-lg font-bold outline-none focus:border-purple-500 transition-all placeholder:text-neutral-700"
                          placeholder="Future Corp."
                          value={formData.company}
                          onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                        />
                      </div>
                    </div>
                  )}

                  <div className="group">
                    <label className="text-xs font-bold uppercase text-neutral-500 mb-1 block ml-1">{text.lbl_name}</label>
                    <div className="relative">
                      <User
                        className={`absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors ${
                          modalType === 'resume' ? 'group-focus-within:text-lime-400' : 'group-focus-within:text-purple-500'
                        }`}
                        size={20}
                      />
                      <input
                        required
                        type="text"
                        className={`w-full bg-black border-2 border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-lg font-bold outline-none transition-all placeholder:text-neutral-700 ${
                          modalType === 'resume' ? 'focus:border-lime-400' : 'focus:border-purple-500'
                        }`}
                        placeholder="Alex"
                          value={formData.name}
                          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-xs font-bold uppercase text-neutral-500 mb-1 block ml-1">{text.lbl_contact}</label>
                    <div className="relative">
                      <Phone
                        className={`absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors ${
                          modalType === 'resume' ? 'group-focus-within:text-lime-400' : 'group-focus-within:text-purple-500'
                        }`}
                        size={20}
                      />
                      <input
                        required
                        type="text"
                        className={`w-full bg-black border-2 border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-lg font-bold outline-none transition-all placeholder:text-neutral-700 ${
                          modalType === 'resume' ? 'focus:border-lime-400' : 'focus:border-purple-500'
                        }`}
                        placeholder="@telegram / +373..."
                          value={formData.contact}
                          onChange={(e) => setFormData((p) => ({ ...p, contact: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-xs font-bold uppercase text-neutral-500 mb-1 block ml-1">{text.lbl_email}</label>
                    <div className="relative">
                      <Mail
                        className={`absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors ${
                          modalType === 'resume' ? 'group-focus-within:text-lime-400' : 'group-focus-within:text-purple-500'
                        }`}
                        size={20}
                      />
                      <input
                        required
                        type="email"
                        className={`w-full bg-black border-2 border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-lg font-bold outline-none transition-all placeholder:text-neutral-700 ${
                          modalType === 'resume' ? 'focus:border-lime-400' : 'focus:border-purple-500'
                        }`}
                        placeholder="hello@world.com"
                          value={formData.email}
                          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <button
                  disabled={formStatus === 'sending'}
                  className={`w-full py-5 rounded-xl font-black text-xl uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${
                    modalType === 'resume' ? 'bg-lime-400 text-black hover:bg-white' : 'bg-purple-600 text-white hover:bg-purple-500'
                  } ${formStatus === 'sending' ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {formStatus === 'sending' ? 'Sending...' : text.btn_send}
                  {!formStatus && <Send size={20} />}
                </button>

                {formStatus === 'error' && (
                  <div className="text-center text-red-400 text-sm font-semibold">
                    {text.msg_error}
                    <div className="text-neutral-500 text-xs mt-1">{text.msg_error_sub}</div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}

      <nav className="fixed w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter italic flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-4 h-4 bg-lime-400 skew-x-12"></div>
            NOT.PDF
          </div>

          <div className="hidden lg:flex gap-8 font-bold text-sm tracking-widest uppercase text-neutral-400">
            <button onClick={() => scrollToSection('roast')} className="hover:text-white transition-colors">
              {text.nav_pain}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-lime-400 transition-colors text-white">
              {text.nav_cases}
            </button>
            <button onClick={() => scrollToSection('price')} className="hover:text-white transition-colors">
              {text.nav_price}
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <div className="flex bg-neutral-900 border border-neutral-800 rounded p-1 gap-1">
              {['ru', 'ro', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-[10px] md:text-xs font-black uppercase rounded transition-all ${
                    lang === l ? 'bg-neutral-700 text-lime-400' : 'text-neutral-500 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="hidden md:flex gap-2">
              <button
                onClick={() => openModal('resume')}
                className="border border-lime-400 text-lime-400 px-4 py-2 font-bold uppercase text-[10px] lg:text-xs hover:bg-lime-400 hover:text-black transition-all whitespace-nowrap"
              >
                {text.btn_job}
              </button>
              <button
                onClick={() => openModal('vacancy')}
                className="bg-purple-600 text-white px-4 py-2 font-bold uppercase text-[10px] lg:text-xs hover:bg-purple-500 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] whitespace-nowrap"
              >
                {text.btn_hire}
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 p-6 flex flex-col gap-6 md:hidden shadow-2xl">
            <button onClick={() => scrollToSection('roast')} className="text-xl font-black uppercase text-left">
              {text.nav_pain}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-xl font-black uppercase text-left text-lime-400">
              {text.nav_cases}
            </button>
            <button onClick={() => scrollToSection('price')} className="text-xl font-black uppercase text-left">
              {text.nav_price}
            </button>
            <div className="mt-4 flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  openModal('resume')
                }}
                className="bg-lime-400 text-black p-4 font-black uppercase text-center"
              >
                {text.btn_job}
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  openModal('vacancy')
                }}
                className="bg-purple-600 text-white p-4 font-black uppercase text-center"
              >
                {text.btn_hire}
              </button>
            </div>
          </div>
        )}
      </nav>

      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 container mx-auto text-center z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-lime-500/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-white/20 bg-white/5 text-neutral-300 font-mono text-xs mb-10 animate-pulse">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          {text.system_msg}
        </div>

        <h1 className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto mb-12 select-none">
          <div className="relative text-[13vw] lg:text-[11rem] leading-[0.8] font-black uppercase tracking-[-0.04em] text-white whitespace-nowrap z-10 mix-blend-screen hover:scale-[1.02] transition-transform duration-500">
            {text.hero_line1} <span className="text-lime-400">{text.hero_line1_span}</span>
          </div>

          <div className="relative text-[13vw] lg:text-[11rem] leading-[0.8] font-black uppercase tracking-[-0.04em] text-neutral-800 whitespace-nowrap z-0 lg:-mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 relative z-10">{text.hero_line2}</span>
            <div className="absolute top-1/2 left-0 w-full h-1/2 bg-purple-600 blur-[80px] opacity-40 -z-10"></div>
          </div>
        </h1>

        <p className="text-neutral-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium px-4">
          {text.hero_sub_pre}
          <span
            onClick={() => setTrashRevealed(true)}
            className={`inline-block px-2 mx-1 rounded cursor-pointer transition-all duration-300 relative select-none ${
              isTrashRevealed ? 'bg-transparent text-red-500 font-black scale-110' : 'bg-white/10 text-transparent blur-md hover:blur-sm hover:bg-white/20'
            }`}
          >
            <span className={isTrashRevealed ? '' : 'opacity-0'}>{text.hero_sub_blur}</span>
            {!isTrashRevealed && (
              <span className="absolute inset-0 flex items-center justify-center text-white/30 text-[10px] font-mono tracking-widest">CENSORED</span>
            )}
          </span>
          {text.hero_sub_post}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-auto px-6">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group relative bg-white text-black px-10 py-5 text-xl font-black uppercase tracking-wide overflow-hidden hover:scale-105 transition-transform"
          >
            <span className="relative z-10 flex items-center gap-2">
              {text.hero_btn} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-lime-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </header>

      <div className="bg-neutral-900 border-y border-neutral-800 py-6 overflow-hidden relative z-20">
        <div key={lang} className="whitespace-nowrap animate-marquee flex gap-16 items-center font-black text-4xl md:text-6xl text-neutral-800 select-none">
          {Array(6)
            .fill('')
            .map((_, i) => (
              <span key={`${i}-${lang}`} className={i % 2 === 0 ? 'text-lime-400/20' : 'text-purple-500/20'}>
                {text.marquee}
              </span>
            ))}
        </div>
      </div>

      <section id="roast" className="py-24 container mx-auto px-6">
        <h2 className="text-center text-3xl font-black mb-16 uppercase">{text.roast_title}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-neutral-900/50 p-8 border-l-4 border-lime-400 hover:bg-neutral-900 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-lime-400 p-3 text-black rounded">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase">{text.roast_user_title}</h3>
            </div>
            <ul className="space-y-6 text-lg text-neutral-400">
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" />
                <span>{text.roast_user_1}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" />
                <span>{text.roast_user_2}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" />
                <span>{text.roast_user_3}</span>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 p-8 border-l-4 border-purple-500 hover:bg-neutral-900 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-500 p-3 text-white rounded">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase">{text.roast_biz_title}</h3>
            </div>
            <ul className="space-y-6 text-lg text-neutral-400">
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" />
                <span>{text.roast_biz_1}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" />
                <span>{text.roast_biz_2}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="text-red-500 mt-1 shrink-0" />
                <span>{text.roast_biz_3}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-neutral-900 border-y border-neutral-800 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 leading-tight">
                {text.portfolio_title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-500">{text.portfolio_span}</span>
              </h2>
              <p className="text-neutral-400">{text.portfolio_sub}</p>
            </div>

            <div className="flex bg-black p-1 rounded-lg border border-neutral-800">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-sm font-bold uppercase rounded ${activeTab === 'all' ? 'bg-white text-black' : 'text-neutral-500 hover:text-white'}`}
              >
                {text.filter_all}
              </button>
              <button
                onClick={() => setActiveTab('resume')}
                className={`px-4 py-2 text-sm font-bold uppercase rounded ${
                  activeTab === 'resume' ? 'bg-lime-400 text-black' : 'text-neutral-500 hover:text-white'
                }`}
              >
                {text.filter_res}
              </button>
              <button
                onClick={() => setActiveTab('vacancy')}
                className={`px-4 py-2 text-sm font-bold uppercase rounded ${
                  activeTab === 'vacancy' ? 'bg-purple-500 text-white' : 'text-neutral-500 hover:text-white'
                }`}
              >
                {text.filter_vac}
              </button>
            </div>
          </div>

          <div className="relative group">
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-black border border-neutral-700 p-3 rounded-full hover:bg-neutral-800 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-black border border-neutral-700 p-3 rounded-full hover:bg-neutral-800 transition-colors"
            >
              <ChevronRight />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredPortfolio.map((item) => (
                <div key={item.id} className="min-w-[85vw] md:min-w-[400px] snap-center">
                  <div
                    className={`h-[500px] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group/card cursor-pointer transition-transform hover:scale-[1.02] border border-transparent hover:border-white/20 ${item.color} ${item.textColor}`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <span className="font-mono text-xs font-bold border border-current px-2 py-1 rounded-full opacity-70 uppercase">{item.category}</span>
                        <Globe size={20} className="opacity-50" />
                      </div>
                      <h3 className="text-4xl font-black leading-tight mb-2 uppercase italic break-words">{item.title}</h3>
                      <p className="font-medium opacity-80 leading-snug">{item.desc}</p>
                    </div>

                    <div className="mt-6 bg-black/10 backdrop-blur-sm rounded-xl border border-black/5 relative z-10 flex-col flex h-48 overflow-hidden">
                      <div className="p-4 space-y-3 flex-grow">
                        <div className="flex gap-1.5 mb-2 opacity-30">
                          <div className="w-2 h-2 rounded-full bg-current"></div>
                          <div className="w-2 h-2 rounded-full bg-current"></div>
                        </div>
                        <div className="h-2 w-1/3 bg-current opacity-10 rounded"></div>
                        <div className="h-2 w-full bg-current opacity-5 rounded"></div>
                        <div className="h-2 w-2/3 bg-current opacity-5 rounded"></div>
                      </div>
                      <div className="mt-auto p-4 border-t border-black/5 bg-black/5 flex flex-col gap-3">
                        <div className="flex items-center gap-2 opacity-60">
                          <Globe size={12} />
                          <span className="text-[10px] font-mono tracking-widest uppercase">RU / RO / EN</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs font-bold uppercase opacity-70 tracking-wider whitespace-nowrap">{text.result_label}</span>
                          <span className="text-lg font-black leading-none text-right break-words">{item.stats}</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity backdrop-blur-sm z-20">
                      <span className="text-white font-black uppercase text-xl flex items-center gap-2">
                        <Eye /> {text.demo_view}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-neutral-950 border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 via-purple-500/5 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-mono uppercase tracking-[0.25em] text-lime-400 mb-2">{text.advantages_title}</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight text-white">{text.hero_line2}</h2>
              <p className="text-neutral-400 mt-3 max-w-2xl">{text.advantages_sub}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-white text-black">Web</span>
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase border border-white/30 text-white">Resume</span>
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase border border-white/30 text-white">Vacancy</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, idx) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 p-6 hover:border-lime-400/60 transition-all"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-neutral-500">0{idx + 1}</span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-lime-400 text-black">Live</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white mb-2 leading-tight">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-300">
                  <Globe size={14} />
                  RU / RO / EN
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-24 px-6 container mx-auto">
        <h2 className="text-4xl md:text-7xl font-black text-center mb-4 uppercase">{text.price_title}</h2>
        <p className="text-center text-neutral-400 mb-16">{text.price_sub}</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-3xl relative overflow-hidden hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-lime-400"></div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black uppercase text-white">{text.price_res_title}</h3>
              <div className="bg-lime-400 text-black font-bold px-3 py-1 rounded text-sm">PERSONAL</div>
            </div>
            <div className="text-5xl font-black text-lime-400 mb-2">$30</div>
            <p className="text-neutral-500 mb-8 text-sm">{text.price_res_sub}</p>
            <ul className="space-y-4 mb-10 text-neutral-300">
              <li className="flex gap-3 items-center">
                <CheckCircle size={18} className="text-lime-400 shrink-0" /> {text.price_res_f1}
              </li>
              <li className="flex gap-3 items-center">
                <CheckCircle size={18} className="text-lime-400 shrink-0" /> {text.price_res_f2}
              </li>
              <li className="flex gap-3 items-center font-bold text-white bg-white/10 p-2 rounded -mx-2">
                <Globe size={18} className="text-lime-400 shrink-0" /> {text.price_res_f3}
              </li>
              <li className="flex gap-3 items-center">
                <CheckCircle size={18} className="text-lime-400 shrink-0" /> {text.price_res_f4}
              </li>
            </ul>
            <button onClick={() => openModal('resume')} className="w-full border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-black py-4 uppercase transition-all">
              {text.price_res_btn}
            </button>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-3xl relative overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-purple-500"></div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black uppercase text-white">{text.price_vac_title}</h3>
              <div className="bg-purple-500 text-white font-bold px-3 py-1 rounded text-sm">BUSINESS</div>
            </div>
            <div className="text-5xl font-black text-purple-500 mb-2">$70</div>
            <p className="text-neutral-500 mb-8 text-sm">{text.price_vac_sub}</p>
            <ul className="space-y-4 mb-10 text-neutral-300">
              <li className="flex gap-3 items-center">
                <CheckCircle size={18} className="text-purple-500 shrink-0" /> {text.price_vac_f1}
              </li>
              <li className="flex gap-3 items-center">
                <CheckCircle size={18} className="text-purple-500 shrink-0" /> {text.price_vac_f2}
              </li>
              <li className="flex gap-3 items-center font-bold text-white bg-white/10 p-2 rounded -mx-2">
                <Globe size={18} className="text-purple-500 shrink-0" /> {text.price_vac_f3}
              </li>
              <li className="flex gap-3 items-center">
                <CheckCircle size={18} className="text-purple-500 shrink-0" /> {text.price_vac_f4}
              </li>
            </ul>
            <button
              onClick={() => openModal('vacancy')}
              className="w-full bg-purple-600 text-white hover:bg-purple-500 font-black py-4 uppercase transition-all shadow-lg shadow-purple-900/20"
            >
              {text.price_vac_btn}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-lime-400 text-black py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-8xl font-black uppercase mb-8 leading-none">
            {text.footer_title}
            <br />
            {text.footer_title_2}
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto opacity-80">{text.footer_sub}</p>
          <a
            href="https://t.me/Muntuane"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-black text-white px-10 py-5 text-xl font-black uppercase hover:scale-105 transition-transform rounded-full shadow-2xl"
          >
            {text.footer_btn}
          </a>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 5s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}

export default App

