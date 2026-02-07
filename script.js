const projectData = {
    robotics: {
        title: "Роботизация производства",
        pre: ["Импортозамещение запчастей", "Дефицит кадров", "Субсидии до 50%", "Рост производительности"],
        effects: "Эффект: +40% к скорости, -30% брака",
        images: ["img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"]
    },
    quality: {
        title: "Контроль качества",
        pre: ["Искусственный интеллект", "Оцифровка брака", "Машинное зрение", "Конкуренция"],
        effects: "Эффект: точность контроля 99.8%",
        images: ["img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg"]
    },
    security: {
        title: "Средства охраны",
        pre: ["Антитеррористическая защита", "ФЗ-187 КИИ", "Автоматизация КПП"],
        effects: "Эффект: исключение человеческого фактора на 100%",
        images: ["img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg", "img16.jpg"]
    },
    eco: {
        title: "Экомониторинг",
        pre: ["Программа «Безопасный труд»", "Контроль выбросов", "Датчики загазованности"],
        effects: "Эффект: предотвращение аварий на ранней стадии",
        images: ["img17.jpg", "img18.jpg", "img19.jpg", "img20.jpg", "img21.jpg"]
    },
    equipment: {
        title: "Технологическое оборудование",
        pre: ["Котлы и турбины", "Энергоцентры", "Системы очистки", "Локализация"],
        effects: "Эффект: снижение затрат на ремонт на 40%",
        images: ["img22.jpg", "img23.jpg", "img24.jpg", "img25.jpg", "img26.jpg"]
    }
};

function openSlide(key) {
    const d = projectData[key];
    const modal = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <div class="container">
            <h1 style="color:var(--rt-orange); font-size: 3rem;">${d.title}</h1>
            <div class="slide-grid">
                <div>
                    <h3>Предпосылки и задачи:</h3>
                    <ul style="margin: 20px 0; list-style: none;">
                        ${d.pre.map(item => `<li style="margin-bottom:10px; border-left: 3px solid var(--rt-orange); padding-left: 15px;">${item}</li>`).join('')}
                    </ul>
                    <div style="background:var(--rt-blue); padding: 30px; border-radius: 15px; margin-top: 40px;">
                        <h4>Ожидаемый результат:</h4>
                        <p>${d.effects}</p>
                    </div>
                </div>
                <div class="img-strip">
                    ${d.images.map(src => `<img src="${src}" alt="Фото проекта">`).join('')}
                </div>
            </div>
        </div>
    `;

    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeSlide() {
    document.getElementById('modal-overlay').classList.remove('visible');
    document.body.style.overflow = 'auto';
}
