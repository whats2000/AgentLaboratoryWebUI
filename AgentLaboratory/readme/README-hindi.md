
# एजेंट लैबोरेटरी: अनुसंधान सहायकों के रूप में LLM एजेंटों का उपयोग

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="AgentClinic के प्रवाह का प्रदर्शन" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | हिंदी | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Website</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Example Paper</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citation</a>】
</p>

## 📖 अवलोकन

- **एजेंट लैबोरेटरी** एक अंत-से-अंत स्वायत्त अनुसंधान कार्यप्रवाह है जिसे **आप** को मानव शोधकर्ता के रूप में **अपने अनुसंधान विचारों को लागू करने** में सहायता करने के लिए डिज़ाइन किया गया है। एजेंट लैबोरेटरी में बड़े भाषा मॉडल द्वारा संचालित विशेषीकृत एजेंट शामिल हैं जो आपको संपूर्ण अनुसंधान कार्यप्रवाह के माध्यम से समर्थन करते हैं—साहित्य समीक्षा करने और योजनाएँ बनाने से लेकर प्रयोगों को निष्पादित करने और व्यापक रिपोर्ट लिखने तक।
- यह प्रणाली आपकी रचनात्मकता को बदलने के लिए नहीं बल्कि इसे पूरा करने के लिए डिज़ाइन की गई है, जिससे आप विचार-विमर्श और महत्वपूर्ण सोच पर ध्यान केंद्रित कर सकते हैं, जबकि कोडिंग और दस्तावेजीकरण जैसे दोहराए जाने वाले और समय-गहन कार्यों को स्वचालित किया जाता है। विभिन्न स्तर के संगणनात्मक संसाधनों और मानव भागीदारी को समायोजित करके, एजेंट लैबोरेटरी वैज्ञानिक खोज को तेज करने और आपके अनुसंधान उत्पादकता को अनुकूलित करने का लक्ष्य रखता है।

<p align="center">
  <img src="../media/AgentLab.png" alt="AgentClinic के प्रवाह का प्रदर्शन" style="width: 99%;">
</p>

### 🔬 एजेंट लैबोरेटरी कैसे काम करता है?

- एजेंट लैबोरेटरी तीन मुख्य चरणों से मिलकर बनता है जो अनुसंधान प्रक्रिया का व्यवस्थित रूप से मार्गदर्शन करते हैं: (1) साहित्य समीक्षा, (2) प्रयोग, और (3) रिपोर्ट लेखन। प्रत्येक चरण के दौरान, LLM द्वारा संचालित विशेषीकृत एजेंट विशिष्ट उद्देश्यों को प्राप्त करने के लिए सहयोग करते हैं, परिणामों को अनुकूलित करने के लिए arXiv, Hugging Face, Python, और LaTeX जैसे बाहरी उपकरणों को एकीकृत करते हैं। यह संरचित कार्यप्रवाह संबंधित अनुसंधान पत्रों के स्वतंत्र संग्रह और विश्लेषण से शुरू होता है, सहयोगात्मक योजना और डेटा तैयारी के माध्यम से प्रगति करता है, और स्वचालित प्रयोग और व्यापक रिपोर्ट जनरेशन में समाप्त होता है। इन चरणों में विशिष्ट एजेंट भूमिकाओं और उनके योगदान के विवरण पेपर में चर्चा किए गए हैं।

<p align="center">
  <img src="../media/AgentLabWF.png" alt="AgentClinic के प्रवाह का प्रदर्शन" style="width: 99%;">
</p>

## 🖥️ स्थापना

### Python venv विकल्प

1. **GitHub रिपॉजिटरी क्लोन करें**: रिपॉजिटरी को क्लोन करना शुरू करें निम्न कमांड का उपयोग करके:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **पायथन पर्यावरण सेटअप और सक्रिय करें**
    ```bash
    python -m venv venv_agent_lab
    ```
    - अब इस पर्यावरण को सक्रिय करें:
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **आवश्यक पुस्तकालय स्थापित करें**
    ```bash
    pip install -r requirements.txt
    ```

4. **pdflatex स्थापित करें [वैकल्पिक]**
    ```bash
    sudo apt install pdflatex
    ```
    - यह एजेंटों द्वारा latex स्रोत को संकलित करने में सक्षम बनाता है।
    - **[महत्वपूर्ण]** यदि इस चरण को sudo एक्सेस न होने के कारण नहीं चलाया जा सकता है, तो Agent Laboratory को --compile_latex फ्लैग को false सेट करके pdf संकलन बंद किया जा सकता है: `--compile_latex=False`

5. **अब Agent Laboratory चलाएं!**
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```
    या, यदि आपने pdflatex स्थापित नहीं किया है:
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----
## बेहतर अनुसंधान परिणामों के लिए सुझाव

#### [सुझाव #1] 📝 विस्तृत नोट्स लिखना सुनिश्चित करें! 📝

**विस्तृत नोट्स लिखना महत्वपूर्ण है** ताकि आपका एजेंट समझ सके कि आप अपने प्रोजेक्ट में क्या हासिल करना चाहते हैं, साथ ही किसी भी शैली की प्राथमिकताएँ। नोट्स में उन किसी भी प्रयोगों को शामिल किया जा सकता है जिन्हें आप एजेंटों से करने के लिए चाहते हैं, API कुंजी प्रदान करना, कुछ प्लॉट या आकृतियाँ शामिल करना, या कुछ भी जिसे आप अनुसंधान करते समय एजेंट को जानना चाहते हैं।

यह आपका अवसर भी है कि एजेंट को बताएं **कौन से कंप्यूट संसाधनों तक उसकी पहुंच है**, जैसे GPUs (कितने, किस प्रकार के GPU, कितने GBs), CPUs (कितने कोर, किस प्रकार के CPUs), स्टोरेज सीमाएँ, और हार्डवेयर स्पेसिफिकेशन।

नोट्स जोड़ने के लिए, आपको ai_lab_repo.py के अंदर task_notes_LLM संरचना को संशोधित करना होगा। नीचे हमारे कुछ प्रयोगों के लिए उपयोग किए गए नोट्स का एक उदाहरण दिया गया है।

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
    
#### [सुझाव #2] 🚀 अधिक शक्तिशाली मॉडल का उपयोग सामान्यतः बेहतर अनुसंधान की ओर ले जाता है 🚀

अनुसंधान करते समय, **मॉडल का चयन परिणामों की गुणवत्ता पर महत्वपूर्ण प्रभाव डाल सकता है**। अधिक शक्तिशाली मॉडल आमतौर पर उच्च सटीकता, बेहतर तर्क क्षमताओं, और बेहतर रिपोर्ट जनरेशन प्रदान करते हैं। यदि संगणनात्मक संसाधन अनुमति देते हैं, तो o1-(mini/preview) या इसी तरह के अत्याधुनिक बड़े भाषा मॉडल जैसे उन्नत मॉडलों के उपयोग को प्राथमिकता दें।

हालांकि, **प्रदर्शन और लागत-प्रभावशीलता के बीच संतुलन बनाना महत्वपूर्ण है**। जबकि शक्तिशाली मॉडल बेहतर परिणाम दे सकते हैं, उन्हें चलाने में अक्सर अधिक खर्च और समय लगता है। उन्हें चयनात्मक रूप से उपयोग करने पर विचार करें—उदाहरण के लिए, मुख्य प्रयोगों या अंतिम विश्लेषणों के लिए—जबकि पुनरावृत्त कार्यों या प्रारंभिक प्रोटोटाइपिंग के लिए छोटे, अधिक कुशल मॉडलों पर निर्भर रहें।

जब संसाधन सीमित हों, **अपने विशिष्ट डेटासेट पर छोटे मॉडलों को फाइन-ट्यून करके या कार्य-विशिष्ट प्रॉम्प्ट के साथ पूर्व-प्रशिक्षित मॉडलों को मिलाकर प्रदर्शन और संगणनात्मक दक्षता के बीच वांछित संतुलन प्राप्त करें**।

-----

#### [सुझाव #3] ✅ आप चेकपॉइंट से पिछले सहेजनों को लोड कर सकते हैं ✅

**यदि आप प्रगति खो देते हैं, इंटरनेट कनेक्शन खोते हैं, या कोई उपकार्य विफल हो जाता है, तो आप हमेशा पिछले स्थिति से लोड कर सकते हैं।** आपकी सभी प्रगति डिफ़ॉल्ट रूप से state_saves वेरिएबल में सहेजी जाती है, जो प्रत्येक व्यक्तिगत चेकपॉइंट को संग्रहीत करता है। बस ai_lab_repo.py चलाते समय निम्नलिखित तर्क पास करें:
```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [सुझाव #4] 🈯 यदि आप अंग्रेजी के अलावा किसी अन्य भाषा में चला रहे हैं 🈲

यदि आप एजेंट लैबोरेटरी को अंग्रेजी के अलावा किसी अन्य भाषा में चला रहे हैं, तो कोई समस्या नहीं है, बस सुनिश्चित करें कि एजेंटों को आपके पसंदीदा भाषा में अनुसंधान करने के लिए एक भाषा फ्लैग प्रदान करें। ध्यान दें कि हमने अन्य भाषाओं में एजेंट लैबोरेटरी चलाने का व्यापक अध्ययन नहीं किया है, इसलिए किसी भी समस्या का सामना करने पर रिपोर्ट करना सुनिश्चित करें।

उदाहरण के लिए, यदि आप चीनी में चला रहे हैं:
```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [सुझाव #5] 🌟 सुधार के लिए बहुत गुंजाइश है 🌟

इस कोडबेस में सुधार की बहुत गुंजाइश है, इसलिए यदि आप अंततः परिवर्तन करते हैं और समुदाय की मदद करना चाहते हैं, तो कृपया आप जो परिवर्तन किए हैं उन्हें साझा करने में संकोच न करें! हमें उम्मीद है कि यह उपकरण आपकी मदद करेगा!

## संदर्भ / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```