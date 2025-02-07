# Лаборатория Агентов: Использование агентов на основе больших языковых моделей в качестве научных ассистентов

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | Русский | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Веб-сайт</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Программное обеспечение</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Видео</a> | 📚 <a href="https://agentlaboratory.github.io/#examples-goto">Пример статьи</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Цитирование</a>】
</p>

## 📖 Обзор

- **Лаборатория Агентов** — это автономный исследовательский процесс от начала до конца, предназначенный для помощи **вам** как человеческому исследователю в **реализации ваших исследовательских идей**. Лаборатория Агентов состоит из специализированных агентов, управляемых большими языковыми моделями, которые поддерживают вас на протяжении всего исследовательского процесса — от проведения обзора литературы и формулирования планов до выполнения экспериментов и написания подробных отчетов.
- Эта система не предназначена для замены вашего творчества, а дополняет его, позволяя вам сосредоточиться на генерации идей и критическом мышлении, одновременно автоматизируя повторяющиеся и времязатратные задачи, такие как кодирование и документирование. Адаптируясь к различным уровням вычислительных ресурсов и вовлеченности человека, Лаборатория Агентов стремится ускорить научные открытия и оптимизировать вашу исследовательскую продуктивность.

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

### 🔬 Как работает Лаборатория Агентов?

- Лаборатория Агентов состоит из трех основных фаз, которые систематически направляют исследовательский процесс: (1) Обзор литературы, (2) Экспериментирование и (3) Написание отчета. В каждой фазе специализированные агенты, управляемые большими языковыми моделями, сотрудничают для достижения отдельных целей, интегрируя внешние инструменты, такие как arXiv, Hugging Face, Python и LaTeX, для оптимизации результатов. Эта структурированная рабочая схема начинается с независимого сбора и анализа соответствующих научных работ, проходит через совместное планирование и подготовку данных и заканчивается автоматизированным проведением экспериментов и созданием подробных отчетов. Детали конкретных ролей агентов и их вклад на каждом этапе обсуждаются в статье.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

## 🖥️ Установка

### Вариант с использованием Python venv

1. **Клонируйте репозиторий GitHub**: Начните с клонирования репозитория с помощью команды:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **Настройте и активируйте Python окружение**
    ```bash
    python -m venv venv_agent_lab
    ```

    - Теперь активируйте это окружение:
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **Установите необходимые библиотеки**
    ```bash
    pip install -r requirements.txt
    ```

4. **Установите pdflatex [ОПЦИОНАЛЬНО]**
    ```bash
    sudo apt install pdflatex
    ```

    - Это позволяет агентам компилировать исходный код LaTeX.
    - **[ВАЖНО]** Если этот шаг невозможно выполнить из-за отсутствия прав sudo, можно отключить компиляцию pdf, запустив Лабораторию Агентов с флагом --compile_latex=False: --compile_latex=False

5. **Теперь запустите Лабораторию Агентов!**

    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "ВАША ИССЛЕДОВАТЕЛЬСКАЯ ИДЕЯ"
    ```

    или, если у вас не установлен pdflatex

    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "ВАША ИССЛЕДОВАТЕЛЬСКАЯ ИДЕЯ" --compile_latex=False
    ```

-----

## Советы для лучших исследовательских результатов

#### [Совет №1] 📝 Обязательно записывайте подробные заметки! 📝

**Ведение подробных заметок важно** для того, чтобы ваш агент понимал, что вы хотите достичь в вашем проекте, а также любые предпочтения в стиле. Заметки могут включать любые эксперименты, которые вы хотите, чтобы агенты выполняли, предоставление API-ключей, определенные графики или фигуры, которые вы хотите включить, или любую информацию, которую вы хотите, чтобы агент знал при проведении исследований.

Это также ваша возможность сообщить агенту, **какие вычислительные ресурсы у него есть**, например, GPU (сколько, какой тип GPU, сколько GB), CPU (сколько ядер, какой тип CPU), ограничения по памяти и спецификации оборудования.

Чтобы добавить заметки, необходимо изменить структуру task_notes_LLM внутри файла ai_lab_repo.py. Ниже приведен пример набора заметок, использованных в некоторых наших экспериментах.

```python
task_notes_LLM = [
    {"phases": ["plan formulation"],
     "note": f"You should come up with a plan for TWO experiments."},

    {"phases": ["plan formulation", "data preparation",  "running experiments"],
     "note": "Please use gpt-4o-mini for your experiments."},

    {"phases": ["running experiments"],
     "note": f"Use the following code to inference gpt-4o-mini: \nfrom openai import OpenAI\nos.environ["OPENAI_API_KEY"] = "{api_key}"\nclient = OpenAI()\ncompletion = client.chat.completions.create(\nmodel="gpt-4o-mini-2024-07-18", messages=messages)\nanswer = completion.choices[0].message.content\n"},

    {"phases": ["running experiments"],
     "note": f"You have access to only gpt-4o-mini using the OpenAI API, please use the following key {api_key} but do not use too many inferences. Do not use openai.ChatCompletion.create or any openai==0.28 commands. Instead use the provided inference code."},

    {"phases": ["running experiments"],
     "note": "I would recommend using a small dataset (approximately only 100 data points) to run experiments in order to save time. Do not use much more than this unless you have to or are running the final tests."},

    {"phases": ["data preparation", "running experiments"],
     "note": "You are running on a MacBook laptop. You can use 'mps' with PyTorch"},

    {"phases": ["data preparation", "running experiments"],
     "note": "Generate figures with very colorful and artistic design."},
    ]
```

--------

#### [Совет №2] 🚀 Использование более мощных моделей обычно приводит к лучшим исследованиям 🚀

При проведении исследований, **выбор модели может значительно повлиять на качество результатов**. Более мощные модели, как правило, имеют более высокую точность, лучшие способности к рассуждению и более качественное генерирование отчетов. Если вычислительные ресурсы позволяют, отдавайте предпочтение использованию продвинутых моделей, таких как o1-(mini/preview) или подобных современных больших языковых моделей.

Однако, **важно балансировать между производительностью и экономической эффективностью**. Хотя мощные модели могут давать лучшие результаты, они часто дороже и требуют больше времени для выполнения. Рассмотрите возможность использования их выборочно — например, для ключевых экспериментов или окончательных анализов — в то время как для итеративных задач или начального прототипирования полагайтесь на более маленькие и эффективные модели.

Когда ресурсы ограничены, **оптимизируйте, дорабатывая более маленькие модели** на вашем конкретном наборе данных или комбинируя предобученные модели с специфическими для задачи подсказками, чтобы достичь желаемого баланса между производительностью и вычислительной эффективностью.

-----

#### [Совет №3] ✅ Вы можете загрузить предыдущие сохранения из контрольных точек ✅

**Если вы потеряете прогресс, потеряете интернет-соединение или если подзадача завершится неудачей, вы всегда можете загрузить предыдущую версию.** Весь ваш прогресс сохраняется по умолчанию в переменной state_saves, которая хранит каждую отдельную контрольную точку. Просто передайте следующие аргументы при запуске ai_lab_repo.py

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "ВАША ИССЛЕДОВАТЕЛЬСКАЯ ИДЕЯ" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [Совет №4] 🈯 Если вы работаете на другом языке, кроме английского 🈲

Если вы запускаете Лабораторию Агентов на другом языке, кроме английского, это не проблема, просто убедитесь, что вы предоставили языковой флаг агентам для проведения исследований на предпочитаемом вами языке. Обратите внимание, что мы не проводили обширных исследований по запуску Лаборатории Агентов на других языках, поэтому обязательно сообщайте о любых возникающих проблемах.

Например, если вы работаете на китайском языке:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "ВАША ИССЛЕДОВАТЕЛЬСКАЯ ИДЕЯ (на вашем языке)" --llm-backend "o1-mini" --language "中文"
```

----

#### [Совет №5] 🌟 Есть много возможностей для улучшения 🌟

Есть много возможностей для улучшения этой кодовой базы, поэтому если вы внесете изменения и захотите помочь сообществу, пожалуйста, не стесняйтесь поделиться внесенными изменениями! Мы надеемся, что этот инструмент вам поможет!

## Ссылки / Bibtex

bibtex
```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```