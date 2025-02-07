# এজেন্ট ল্যাবরেটরি: গবেষণা সহকারী হিসেবে LLM এজেন্ট ব্যবহার

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | বাংলা | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Website</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Example Paper</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citation</a>】
</p>

## 📖 ওভারভিউ

- **এজেন্ট ল্যাবরেটরি** একটি এন্ড-টু-এন্ড স্বায়ত্তশাসিত গবেষণা ওয়ার্কফ্লো যা **আপনাকে** মানব গবেষক হিসেবে **আপনার গবেষণা ধারণাগুলি বাস্তবায়নে** সহায়তা করার জন্য ডিজাইন করা হয়েছে। এজেন্ট ল্যাবরেটরি বড় ভাষা মডেল দ্বারা চালিত বিশেষায়িত এজেন্টের সমন্বয়ে গঠিত যা আপনাকে সম্পূর্ণ গবেষণা ওয়ার্কফ্লো জুড়ে সহায়তা করে—সাহিত্য পর্যালোচনা পরিচালনা থেকে পরিকল্পনা গঠন, পরীক্ষা সম্পাদন এবং বিস্তৃত প্রতিবেদন লেখা পর্যন্ত।
- এই সিস্টেমটি আপনার সৃজনশীলতাকে প্রতিস্থাপন করার জন্য ডিজাইন করা হয়নি বরং এটি সম্পূরক করার জন্য, আপনাকে ধারণা গঠন এবং সমালোচনামূলক চিন্তাভাবনায় মনোনিবেশ করার পাশাপাশি কোডিং এবং ডকুমেন্টেশন মত পুনরাবৃত্তিমূলক এবং সময়সাপেক্ষ কাজগুলি স্বয়ংক্রিয়করণের সুযোগ দেয়। বিভিন্ন স্তরের গণনামূলক সম্পদ এবং মানব সম্পৃক্ততাকে সমন্বিত করে, এজেন্ট ল্যাবরেটরি বৈজ্ঞানিক আবিষ্কারকে ত্বরান্বিত করা এবং আপনার গবেষণা উৎপাদনশীলতাকে সর্বাধিক করতে লক্ষ্য রাখে।

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

### 🔬 এজেন্ট ল্যাবরেটরি কীভাবে কাজ করে?

- এজেন্ট ল্যাবরেটরি তিনটি প্রধান পর্যায় নিয়ে গঠিত যা পদ্ধতিগতভাবে গবেষণা প্রক্রিয়াকে নির্দেশ করে: (১) সাহিত্য পর্যালোচনা, (২) পরীক্ষা, এবং (৩) প্রতিবেদন লেখা। প্রতিটি পর্যায়ে, LLM দ্বারা চালিত বিশেষায়িত এজেন্টরা পৃথক লক্ষ্য অর্জনের জন্য সহযোগিতা করে, ফলাফল অপ্টিমাইজ করার জন্য arXiv, Hugging Face, Python এবং LaTeX এর মত বহিরাগত সরঞ্জামগুলিকে সংহত করে। এই কাঠামোবদ্ধ ওয়ার্কফ্লো প্রাসঙ্গিক গবেষণা পত্রের স্বাধীন সংগ্রহ এবং বিশ্লেষণ দিয়ে শুরু হয়, সহযোগিতামূলক পরিকল্পনা এবং তথ্য প্রস্তুতির মাধ্যমে অগ্রসর হয়, এবং স্বয়ংক্রিয় পরীক্ষণ এবং বিস্তৃত প্রতিবেদন তৈরিতে শেষ হয়। এই পর্যায়গুলির জুড়ে নির্দিষ্ট এজেন্ট ভূমিকা এবং তাদের অবদান সম্পর্কে বিস্তারিত গবেষণাপত্রে আলোচনা করা হয়েছে।

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

## 🖥️ ইনস্টলেশন

### পাইথন venv বিকল্প

1. **GitHub রিপোজিটরি ক্লোন করুন**: কমান্ডটি ব্যবহার করে রিপোজিটরিটি ক্লোন করা শুরু করুন:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **পাইথন পরিবেশ সেট আপ এবং সক্রিয় করুন**
    ```bash
    python -m venv venv_agent_lab
    ```

    - এখন এই পরিবেশটি সক্রিয় করুন:
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **প্রয়োজনীয় লাইব্রেরিগুলি ইনস্টল করুন**
    ```bash
    pip install -r requirements.txt
    ```

4. **pdflatex ইনস্টল করুন [ঐচ্ছিক]**
    ```bash
    sudo apt install pdflatex
    ```

    - এটি এজেন্ট দ্বারা ল্যাটেক্স সোর্স কম্পাইল করা সক্ষম করে।
    - **[গুরুত্বপূর্ণ]** যদি sudo অ্যাক্সেস না থাকার কারণে এই ধাপটি চালানো না যায়, তাহলে --compile_latex ফ্ল্যাগটি false এ সেট করে এজেন্ট ল্যাবরেটরি চালিয়ে pdf কম্পাইলিং বন্ধ করা যেতে পারে: --compile_latex=False

5. **এখন এজেন্ট ল্যাবরেটরি চালান!**
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```
    অথবা, যদি আপনি pdflatex ইনস্টল না করে থাকেন
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----

## গবেষণার ফলাফল উন্নত করার টিপস

#### [টিপ #১] 📝 ব্যাপক নোট লেখার বিষয়টি নিশ্চিত করুন! 📝

**ব্যাপক নোট লেখা গুরুত্বপূর্ণ** কারণ এটি আপনার এজেন্টকে আপনার প্রকল্পে আপনি কী অর্জন করতে চাইছেন তা বোঝাতে এবং যে কোনও স্টাইল পছন্দ রয়েছে তা বুঝতে সাহায্য করে। নোটগুলিতে যে কোনও পরীক্ষা আপনি এজেন্টদের সম্পাদন করতে চান, API কী সরবরাহ করা, আপনি যে নির্দিষ্ট প্লট বা চিত্র অন্তর্ভুক্ত করতে চান, অথবা গবেষণা পরিচালনা করার সময় এজেন্টকে যা কিছু জানাতে চান তা অন্তর্ভুক্ত থাকতে পারে।

এটি এছাড়াও আপনার সুযোগ আপনার এজেন্টকে জানানোর **কোন কম্পিউট সম্পদগুলিতে এটি প্রবেশাধিকার রয়েছে**, উদাহরণস্বরূপ, GPUs (কতগুলো, কোন ধরণের GPU, কতগুলো GB), CPUs (কতগুলো কোর, কোন ধরণের CPU), স্টোরেজ সীমাবদ্ধতা, এবং হার্ডওয়্যার স্পেসিফিকেশন।

নোট যুক্ত করার জন্য, আপনাকে ai_lab_repo.py এর ভিতরে task_notes_LLM গঠনটি পরিবর্তন করতে হবে। নীচে কিছু পরীক্ষার জন্য ব্যবহৃত নোটগুলির একটি উদাহরণ দেওয়া হল।

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

#### [টিপ #২] 🚀 আরও শক্তিশালী মডেলগুলি সাধারণত আরও ভাল গবেষণার দিকে নিয়ে যায় 🚀

গবেষণা পরিচালনার সময়, **মডেলের নির্বাচন ফলাফলের গুণমানকে উল্লেখযোগ্যভাবে প্রভাবিত করতে পারে**। আরও শক্তিশালী মডেলগুলির সাধারণত উচ্চতর নির্ভুলতা, উন্নত যুক্তিবিদ্যা ক্ষমতা, এবং উন্নত প্রতিবেদন তৈরির ক্ষমতা থাকে। যদি গণনামূলক সম্পদ অনুমতি দেয়, তাহলে o1-(mini/preview) বা অনুরূপ অত্যাধুনিক বড় ভাষা মডেলগুলির মতো উন্নত মডেলগুলির ব্যবহারে অগ্রাধিকার দিন।

তবে, **কর্মক্ষমতা এবং ব্যয়-কার্যকারিতা মধ্যে ভারসাম্য বজায় রাখা গুরুত্বপূর্ণ**। শক্তিশালী মডেলগুলি যদিও ভাল ফলাফল দিতে পারে, তবে এগুলি প্রায়শই চালাতে বেশি ব্যয়বহুল এবং সময়সাপেক্ষ হয়। সেগুলি নির্বাচিতভাবে ব্যবহার করার কথা বিবেচনা করুন—উদাহরণস্বরূপ, মূল পরীক্ষাগুলি বা চূড়ান্ত বিশ্লেষণের জন্য—অব iterativeative কাজ বা প্রাথমিক প্রোটোটাইপিংয়ের জন্য ছোট, আরও দক্ষ মডেলগুলির উপর নির্ভর করে।

যখন সম্পদ সীমিত থাকে, **আপনার নির্দিষ্ট ডেটাসেটে ছোট মডেলগুলিকে সূক্ষ্ম-সংশোধন করে বা কার্য-নির্দিষ্ট প্রম্পটগুলির সাথে পূর্ব-প্রশিক্ষিত মডেলগুলিকে সংযোজন করে কর্মক্ষমতা এবং গণনামূলক দক্ষতার মধ্যে কাঙ্ক্ষিত ভারসাম্য অর্জন করুন**।

-----

#### [টিপ #৩] ✅ আপনি চেকপয়েন্টগুলি থেকে পূর্ববর্তী সেভগুলি লোড করতে পারেন ✅

**যদি আপনি অগ্রগতি হারান, ইন্টারনেট সংযোগ হারান, বা যদি একটি উপ-কাজ ব্যর্থ হয়, তবে আপনি সর্বদা পূর্ববর্তী অবস্থান থেকে লোড করতে পারেন।** আপনার সমস্ত অগ্রগতি ডিফল্টভাবে state_saves ভেরিয়েবলে সংরক্ষিত থাকে, যা প্রতিটি পৃথক চেকপয়েন্ট সংরক্ষণ করে। ai_lab_repo.py চালানোর সময় কেবল নিম্নলিখিত আর্গুমেন্টগুলি প্রদান করুন

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [টিপ #৪] 🈯 আপনি যদি ইংরেজির বাইরে অন্য কোনো ভাষায় চালাচ্ছেন 🈲

আপনি যদি এজেন্ট ল্যাবরেটরি ইংরেজির বাইরে অন্য কোনো ভাষায় চালাচ্ছেন, সমস্যা নেই, কেবল নিশ্চিত করুন যে আপনি এজেন্টদের আপনার পছন্দের ভাষায় গবেষণা সম্পাদনের জন্য একটি ভাষা ফ্ল্যাগ সরবরাহ করেছেন। লক্ষ্য করুন যে আমরা অন্যান্য ভাষায় এজেন্ট ল্যাবরেটরি চালানোর ব্যাপকভাবে অধ্যয়ন করি নি, তাই আপনি যে কোনও সমস্যা সম্মুখীন হলে তা রিপোর্ট করতে ভুলবেন না।

উদাহরণস্বরূপ, আপনি যদি চীনা ভাষায় চালাচ্ছেন:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [টিপ #৫] 🌟 উন্নতির জন্য অনেক জায়গা রয়েছে 🌟

এই কোডবেস উন্নত করার জন্য অনেক সুযোগ রয়েছে, তাই আপনি যদি পরিবর্তন করতে পারেন এবং কমিউনিটির সাহায্য করতে চান, তবে দয়া করে আপনার করা পরিবর্তনগুলি ভাগ করতে দ্বিধা করবেন না! আমরা আশা করি এই টুলটি আপনাকে সাহায্য করবে!

## রেফারেন্স / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```