# آزمایشگاه ایجینت ها: استفاده از نمایندگان مدل‌های زبانی بزرگ به عنوان دستیار برای محققان

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | فارسی | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Website</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Example Paper</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citation</a>】
</p>

## 📖 نمای کلی

- **آزمایشگاه ایجینت ها** یک سیستم کاملا اتوماتیک برای کارهای تحقیقاتی است که به منظور کمک به **شما** به عنوان پژوهشگر انسانی برای **اجرای ایده‌های تحقیقاتی خود** طراحی شده است. آزمایشگاه ایجینت ها شامل نمایندگان تخصصی است که توسط مدل‌های زبان بزرگ هدایت می‌شوند تاتا در تمام مراحل تحقیق از انجام مطالعه و تدوین برنامه‌ها تا اجرای آزمایش‌ها و نوشتن گزارش‌های جامع از شما حمایت کنند.
- این سیستم برای جایگزینی خلاقیت شما طراحی نشده است، بلکه برای تکمیل آن است، به شما این امکان را می‌دهد که بر ایده‌پردازی و تفکر انتقادی تمرکز کنید در حالی که وظایف تکراری و زمان‌بر مانند کدنویسی و مستندسازی خودکار می‌شوند. با پذیرش سطوح مختلف منابع محاسباتی و مشارکت انسانی، آزمایشگاه ایجنت ها هدف دارد تا کشف علمی را تسریع کرده و بهره‌وری تحقیقاتی شما را بهینه کند.

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

### 🔬 آزمایشگاه ایجنت ها چگونه کار می‌کند؟

- آزمایشگاه ایجنت ها شامل سه مرحله اصلی است که به طور سیستماتیک فرآیند تحقیق را هدایت می‌کنند: (1) مرور ادبیات، (2) آزمایش‌گری، و (3) نوشتن گزارش. در هر مرحله، عوامل تخصصی هدایت‌شده توسط مدل‌های زبان بزرگ با هم همکاری می‌کنند تا اهداف متمایز را محقق کنند و ابزارهای خارجی مانند arXiv، Hugging Face، Python، و LaTeX را برای بهینه‌سازی نتایج ادغام می‌کنند. این جریان کاری ساختاریافته با جمع‌آوری و تحلیل مستقل مقالات تحقیقاتی مرتبط آغاز می‌شود، از طریق برنامه‌ریزی مشارکتی و آماده‌سازی داده‌ها پیش می‌رود، و به آزمایش‌گری خودکار و تولید گزارش جامع منتهی می‌شود. جزئیات نقش‌های خاص عوامل و مشارکت‌های آن‌ها در این مراحل در مقاله مورد بحث قرار گرفته است.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

## 🖥️ نصب

### گزینه محیط مجازی پایتون (venv)

1. **کلون کردن مخزن گیت‌هاب**: با استفاده از دستور زیر، مخزن را کلون کنید:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **تنظیم و فعال‌سازی محیط پایتون**
    ```bash
    python -m venv venv_agent_lab
    ```

   - این محیط را فعال کنید:
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **نصب کتابخانه‌های مورد نیاز**
    ```bash
    pip install -r requirements.txt
    ```

4. **نصب pdflatex [اختیاری]**
    ```bash
    sudo apt install pdflatex
    ```

    - این امکان را می‌دهد تا منبع LaTeX توسط عوامل کامپایل شود.
    - **[مهم]** اگر به دلیل نداشتن دسترسی sudo نمی‌توانید این مرحله را اجرا کنید، می‌توانید کامپایل PDF را با اجرای آزمایشگاه ایجنت ها و تنظیم فلگ --compile_latex به false غیرفعال کنید:
      ```
      --compile_latex=False
      ```

5. **اکنون آزمایشگاه ایجنت ها را اجرا کنید!**
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```

    یا اگر pdflatex نصب نکرده‌اید:
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----
## نکات برای نتایج بهتر تحقیق

#### [نکته #1] 📝 حتماً یادداشت‌های گسترده‌ای بنویسید! 📝

**نوشتن یادداشت‌های دقیق مهم است** تا به ایجنت ها شما در درک آنچه می‌خواهید در پروژه‌تان انجام دهید و همچنین هرگونه ترجیحات سبک کمک کند. یادداشت‌ها می‌توانند شامل هر آزمایشی باشند که می‌خواهید عوامل انجام دهند، ارائه کلیدهای API، نمودارها یا شکل‌های خاصی که می‌خواهید گنجانده شوند، یا هر چیزی که می‌خواهید ایجنت ها هنگام انجام تحقیق بداند.

این همچنین فرصت شماست تا به ایجنت ها اطلاع دهید **به چه منابع محاسباتی دسترسی دارد**، مثلاً GPUها (تعداد، نوع GPU، میزان GB)، CPUها (تعداد هسته، نوع CPUها)، محدودیت‌های ذخیره‌سازی، و مشخصات سخت‌افزاری.

برای افزودن یادداشت‌ها، باید ساختار task_notes_LLM را در داخل ai_lab_repo.py تغییر دهید. در زیر نمونه‌ای از مجموعه یادداشت‌هایی که برای برخی از آزمایش‌های ما استفاده شده است ارائه شده است.

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

#### [نکته #2] 🚀 استفاده از مدل‌های قدرتمندتر به طور کلی منجر به تحقیقات بهتر می‌شود 🚀

هنگام انجام تحقیقات، **انتخاب مدل می‌تواند به طور قابل توجهی بر کیفیت نتایج تأثیر بگذارد**. مدل‌های قدرتمندتر معمولاً دقت بالاتری دارند، قابلیت‌های استدلال بهتری ارائه می‌دهند و گزارش‌های بهتری تولید می‌کنند. اگر منابع محاسباتی اجازه می‌دهد، استفاده از مدل‌های پیشرفته مانند o1-(mini/preview) یا مدل‌های زبان بزرگ مشابه پیشرفته را در اولویت قرار دهید.

با این حال، **مهم است که تعادل بین عملکرد و هزینه را رعایت کنید**. در حالی که مدل‌های قدرتمند ممکن است نتایج بهتری ارائه دهند، اغلب هزینه‌بر و زمان‌بر هستند. در نظر بگیرید که از آن‌ها به صورت انتخابی استفاده کنید — به عنوان مثال، برای آزمایش‌های کلیدی یا تحلیل‌های نهایی — در حالی که برای وظایف تکراری یا نمونه‌سازی اولیه از مدل‌های کوچک‌تر و کارآمدتر استفاده کنید.

وقتی منابع محدود هستند، **با تنظیم دقیق مدل‌های کوچک‌تر بر روی مجموعه داده‌های خاص خود یا ترکیب مدل‌های پیش‌آموزش‌دیده با پرامپت‌های خاص وظیفه‌ای بهینه‌سازی کنید** تا تعادل مطلوب بین عملکرد و کارایی محاسباتی را به دست آورید.

-----

#### [نکته #3] ✅ می‌توانید ذخیره‌های قبلی را از نقاط بازگشت بارگذاری کنید ✅

**اگر پیشرفت خود را از دست دادید، اتصال اینترنت قطع شد، یا یک زیروظیفه شکست خورد، همیشه می‌توانید از وضعیت قبلی بارگذاری کنید.** تمام پیشرفت‌های شما به طور پیش‌فرض در متغیر state_saves ذخیره می‌شوند که هر نقطه بازگشت را ذخیره می‌کند. فقط هنگام اجرای ai_lab_repo.py از آرگومان‌های زیر استفاده کنید:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [نکته #4] 🈯 اگر به زبانی غیر از انگلیسی اجرا می‌کنید 🈲

اگر آزمایشگاه ایحنت ها را به زبانی غیر از انگلیسی اجرا می‌کنید، مشکلی نیست، فقط مطمئن شوید که پرچم زبان را به عوامل ارائه دهید تا به زبان مورد نظر شما تحقیق انجام دهند. توجه داشته باشید که ما به طور گسترده‌ای اجرای آزمایشگاه  ایجنت ها را به زبان‌های دیگر مطالعه نکرده‌ایم، بنابراین حتماً هر مشکلی که با آن مواجه شدید را گزارش دهید.

برای مثال، اگر به زبان چینی اجرا می‌کنید:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [نکته #5] 🌟 جای پیشرفت زیادی وجود دارد 🌟

جای پیشرفت زیادی برای بهبود این کدبیس وجود دارد، بنابراین اگر در نهایت تغییراتی ایجاد کردید و می‌خواهید به جامعه کمک کنید، لطفاً تغییراتی که ایجاد کرده‌اید را به اشتراک بگذارید! امیدواریم این ابزار به شما کمک کند!

## مراجع / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```
