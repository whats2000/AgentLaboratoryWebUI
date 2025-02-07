# مختبر الوكيل: استخدام وكلاء النماذج اللغوية الكبيرة كمساعدين بحثيين

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a>  | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | العربية | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>


<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">الموقع الإلكتروني</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">البرمجيات</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">الفيديو</a> | 📚 <a href="https://agentlaboratory.github.io/#examples-goto">مثال على ورقة بحثية</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">الاستشهاد</a>】
</p>

## 📖 نظرة عامة

- **مختبر الوكيل** هو سير عمل بحثي مستقل من البداية للنهاية مصمم لمساعدتك كباحث بشري في **تنفيذ أفكار بحثك**. يتكون مختبر الوكيل من وكلاء متخصصين مدفوعين بنماذج لغوية كبيرة لدعمك طوال سير العمل البحثي بالكامل — من إجراء مراجعات الأدبيات وصياغة الخطط إلى تنفيذ التجارب وكتابة تقارير شاملة.
- هذا النظام ليس مصممًا لاستبدال إبداعك بل لتكملته، مما يتيح لك التركيز على توليد الأفكار والتفكير النقدي بينما يقوم بأتمتة المهام المتكررة والتي تستغرق وقتًا طويلاً مثل البرمجة والتوثيق. من خلال استيعاب مستويات مختلفة من الموارد الحاسوبية والمشاركة البشرية، يهدف مختبر الوكيل إلى تسريع الاكتشافات العلمية وتحسين إنتاجيتك البحثية.

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

### 🔬 كيف يعمل مختبر الوكيل؟

- يتكون مختبر الوكيل من ثلاث مراحل رئيسية توجه عملية البحث بشكل منهجي: (1) مراجعة الأدبيات، (2) التجارب، و(3) كتابة التقارير. خلال كل مرحلة، يتعاون وكلاء متخصصون مدفوعون بنماذج لغوية كبيرة لتحقيق أهداف مميزة، مع دمج أدوات خارجية مثل arXiv، Hugging Face، Python، وLaTeX لتحسين النتائج. يبدأ سير العمل هذا بجمع وتحليل مستقل للأوراق البحثية ذات الصلة، يتقدم من خلال التخطيط التعاوني وإعداد البيانات، وينتهي بتنفيذ التجارب تلقائيًا وتوليد تقارير شاملة. يتم مناقشة تفاصيل أدوار الوكلاء المحددة ومساهماتهم عبر هذه المراحل في الورقة البحثية.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

## 🖥️ التثبيت


### خيار البيئة الافتراضية للبايثون

1. **استنساخ مستودع GitHub**: ابدأ باستنساخ المستودع باستخدام الأمر:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **إعداد وتفعيل بيئة البايثون**
    ```bash
    python -m venv venv_agent_lab
    ```

    - الآن قم بتفعيل هذه البيئة:
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **تثبيت المكتبات المطلوبة**
    ```bash
    pip install -r requirements.txt
    ```

4. **تثبيت pdflatex [اختياري]**
    ```bash
    sudo apt install pdflatex
    ```

    - هذا يمكن الوكلاء من تجميع مصدر LaTeX.
    - **[مهم]** إذا لم تتمكن من تشغيل هذه الخطوة بسبب عدم وجود صلاحيات sudo، يمكن إيقاف تجميع PDF عن طريق تشغيل مختبر الوكيل مع تعيين العلم --compile_latex إلى false:
    ```bash
    --compile_latex=False
    ```

5. **الآن قم بتشغيل مختبر الوكيل!**
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```

    أو، إذا لم يكن لديك pdflatex مثبتًا
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----
## نصائح لتحقيق نتائج بحثية أفضل

#### [نصيحة #1] 📝 تأكد من كتابة ملاحظات شاملة! 📝

**كتابة ملاحظات شاملة أمر مهم** لمساعدة وكيلك على فهم ما تسعى إلى تحقيقه في مشروعك، بالإضافة إلى أي تفضيلات أسلوبية. يمكن أن تشمل الملاحظات أي تجارب ترغب في أن يقوم الوكلاء بتنفيذها، توفير مفاتيح API، بعض الرسوم البيانية أو الأشكال التي ترغب في تضمينها، أو أي شيء تريد أن يعرفه الوكيل عند إجراء البحث.

هذه أيضًا فرصتك لإعلام الوكيل **بالموارد الحاسوبية التي يمكنه الوصول إليها**، مثل وحدات معالجة الرسومات (عددها، نوعها، حجم الذاكرة)، وحدات المعالجة المركزية (عدد النوى، نوعها)، قيود التخزين، ومواصفات الأجهزة.

لإضافة ملاحظات، يجب تعديل هيكل task_notes_LLM داخل ملف ai_lab_repo.py. فيما يلي مثال على مجموعة من الملاحظات المستخدمة لبعض تجاربنا.

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
    
#### [نصيحة #2] 🚀 استخدام نماذج أكثر قوة يؤدي عمومًا إلى أبحاث أفضل 🚀

عند إجراء البحث، **يمكن أن يؤثر اختيار النموذج بشكل كبير على جودة النتائج**. النماذج الأكثر قوة تميل إلى أن تكون أكثر دقة، ولديها قدرات تفكير أفضل، وتوليد تقارير أفضل. إذا سمحت الموارد الحاسوبية، أعطِ الأولوية لاستخدام النماذج المتقدمة مثل o1-(mini/preview) أو نماذج لغوية كبيرة حديثة مماثلة.

ومع ذلك، **من المهم تحقيق التوازن بين الأداء والفعالية من حيث التكلفة**. بينما قد تؤدي النماذج القوية إلى نتائج أفضل، فهي غالبًا ما تكون أكثر تكلفة وتستغرق وقتًا أطول للتشغيل. فكر في استخدامها بشكل انتقائي — على سبيل المثال، للتجارب الرئيسية أو التحليلات النهائية — بينما تعتمد على نماذج أصغر وأكثر كفاءة للمهام التكرارية أو النمذجة الأولية.

عندما تكون الموارد محدودة، **قم بتحسين الأداء عن طريق ضبط النماذج الأصغر** على مجموعة البيانات الخاصة بك أو عن طريق دمج النماذج المدربة مسبقًا مع مطالبات محددة بالمهام لتحقيق التوازن المطلوب بين الأداء والكفاءة الحاسوبية.

-----

#### [نصيحة #3] ✅ يمكنك تحميل الحفظات السابقة من نقاط التفتيش ✅

**إذا فقدت تقدمك، أو انقطعت اتصال الإنترنت، أو فشلت مهمة فرعية، يمكنك دائمًا التحميل من حالة سابقة.** يتم حفظ كل تقدمك افتراضيًا في متغير state_saves، الذي يخزن كل نقطة تفتيش فردية. فقط مرر الحجج التالية عند تشغيل ai_lab_repo.py

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [نصيحة #4] 🈯 إذا كنت تعمل بلغة غير الإنجليزية 🈲

إذا كنت تشغل مختبر الوكيل بلغة غير الإنجليزية، لا مشكلة، فقط تأكد من توفير علم اللغة للوكلاء لأداء البحث بلغتك المفضلة. لاحظ أننا لم ندرس تشغيل مختبر الوكيل بلغات أخرى بشكل موسع، لذا تأكد من الإبلاغ عن أي مشكلات تواجهها.

على سبيل المثال، إذا كنت تعمل بالصينية:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [نصيحة #5] 🌟 هناك الكثير من المجال للتحسين 🌟

هناك الكثير من المجال لتحسين قاعدة الشيفرة هذه، لذا إذا قمت بإجراء تغييرات وترغب في مساعدة المجتمع، لا تتردد في مشاركة التغييرات التي قمت بها! نأمل أن تساعدك هذه الأداة!

## المرجع / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```