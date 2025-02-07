# Agent Laboratuvarı: LLM Ajanlarını Araştırma Asistanı Olarak Kullanma

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | Türkçe | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Website</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Example Paper</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citation</a>】
</p>

## 📖 Genel Bakış

- **Agent Laboratuvarı**, **araştırma fikirlerinizi uygulamanıza** yardımcı olmak amacıyla **siz** insan araştırmacıyı desteklemek için tasarlanmış uçtan uca otonom bir araştırma iş akışıdır. Agent Laboratuvarı, literatür taramaları yapmaktan planlar oluşturmaya, deneyler yürütmekten kapsamlı raporlar yazmaya kadar tüm araştırma süreci boyunca sizi desteklemek için büyük dil modelleriyle desteklenen uzman ajanlardan oluşur.
- Bu sistem, yaratıcılığınızı yerine koymak için değil, onu tamamlamak için tasarlanmıştır; böylece kodlama ve dokümantasyon gibi tekrarlayan ve zaman alıcı görevleri otomatikleştirirken, fikir üretimi ve eleştirel düşünmeye odaklanabilirsiniz. Farklı düzeylerde hesaplama kaynakları ve insan katılımını karşılayarak, Agent Laboratuvarı bilimsel keşfi hızlandırmayı ve araştırma verimliliğinizi optimize etmeyi amaçlamaktadır.

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

### 🔬 Agent Laboratuvarı Nasıl Çalışır?

- Agent Laboratuvarı, araştırma sürecini sistematik olarak yönlendiren üç ana aşamadan oluşur: (1) Literatür Taraması, (2) Deney Yapma ve (3) Rapor Yazımı. Her aşamada, LLM'ler tarafından yönlendirilen uzman ajanlar, arXiv, Hugging Face, Python ve LaTeX gibi dış araçları entegre ederek farklı hedeflere ulaşmak için iş birliği yapar ve sonuçları optimize eder. Bu yapılandırılmış iş akışı, ilgili araştırma makalelerinin bağımsız olarak toplanması ve analiz edilmesiyle başlar, ortak planlama ve veri hazırlama aşamalarından geçer ve otomatik deney yapma ile kapsamlı rapor oluşturma ile sona erer. Bu aşamalarda belirli ajan rollerinin ve katkılarının detayları makalede tartışılmaktadır.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

## 🖥️ Kurulum

### Python venv seçeneği

1. **GitHub Deposu Klonlayın**: Depoyu aşağıdaki komutu kullanarak klonlayarak başlayın:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **Python Ortamını Kurun ve Aktif Hale Getirin**
    ```bash
    python -m venv venv_agent_lab
    ```

    - Şimdi bu ortamı etkinleştirin:
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **Gerekli Kütüphaneleri Yükleyin**
    ```bash
    pip install -r requirements.txt
    ```

4. **pdflatex'i Yükleyin [SEÇENEKSEL]**
    ```bash
    sudo apt install pdflatex
    ```

    - Bu, ajanların LaTeX kaynaklarını derleyebilmesini sağlar.
    - **[ÖNEMLİ]** Bu adımı sudo erişiminiz yoksa çalıştıramıyorsanız, Agent Laboratuvarı'nı çalıştırırken --compile_latex bayrağını false olarak ayarlayarak PDF derlemeyi kapatabilirsiniz: `--compile_latex=False`

5. **Şimdi Agent Laboratuvarı'nı Çalıştırın!**
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```

    veya, pdflatex yüklü değilse

    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----
## Daha İyi Araştırma Sonuçları için İpuçları

#### [İpucu #1] 📝 Kapsamlı Notlar Yazdığınızdan Emin Olun! 📝

**Kapsamlı notlar yazmak**, ajanın projenizde neyi başarmak istediğinizi ve herhangi bir stil tercihlerinizi anlamasına yardımcı olduğu için önemlidir. Notlar, ajanların gerçekleştirmesini istediğiniz deneyler, API anahtarları sağlamak, dahil edilmesini istediğiniz belirli grafikler veya figürler veya araştırma yaparken ajanın bilmesi gereken her şey gibi unsurları içerebilir.

Ayrıca, ajana **erişebileceği hesaplama kaynaklarını** bildirmeniz için bir fırsattır, örneğin GPU'lar (kaç tane, hangi tür GPU, kaç GB), CPU'lar (kaç çekirdek, hangi tür CPU'lar), depolama sınırlamaları ve donanım özellikleri.

Not eklemek için, ai_lab_repo.py içindeki task_notes_LLM yapısını değiştirmeniz gerekir. Aşağıda, bazı deneylerimizde kullanılan örnek notlar verilmiştir.

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
    
#### [İpucu #2] 🚀 Daha Güçlü Modeller Kullanmak Genellikle Daha İyi Araştırma Sonuçlarına Yol Açar 🚀

Araştırma yaparken, **model seçimi sonuçların kalitesi üzerinde önemli bir etkiye sahip olabilir**. Daha güçlü modeller genellikle daha yüksek doğruluk, daha iyi akıl yürütme yetenekleri ve daha iyi rapor oluşturma özelliklerine sahiptir. Hesaplama kaynaklarınız izin veriyorsa, o1-(mini/preview) gibi gelişmiş modellerin veya benzeri en son büyük dil modellerinin kullanımını önceliklendirin.

Ancak, **performans ve maliyet etkinliği arasında denge kurmak önemlidir**. Güçlü modeller daha iyi sonuçlar verebilirken, genellikle çalıştırmaları daha pahalı ve zaman alıcıdır. Bunları seçici olarak kullanmayı düşünün—örneğin, ana deneyler veya son analizler için—iteratif görevler veya ilk prototipler için daha küçük, daha verimli modelleri kullanmaya devam edin.

Kaynaklar sınırlı olduğunda, **daha küçük modelleri özel veri setinizde ince ayar yaparak veya görev odaklı istemlerle önceden eğitilmiş modelleri birleştirerek performans ve hesaplama verimliliği arasında istenen dengeyi sağlayın**.

-----

#### [İpucu #3] ✅ Önceki Kontrol Noktalarından Kaydedilenleri Yükleyebilirsiniz ✅

**İlerlemenizi kaybederseniz, internet bağlantınız kesilirse veya bir alt görev başarısız olursa, her zaman önceki bir durumdan yükleme yapabilirsiniz.** Tüm ilerlemeniz varsayılan olarak her bir kontrol noktasını saklayan state_saves değişkeninde kaydedilir. ai_lab_repo.py çalıştırılırken aşağıdaki argümanları geçmeniz yeterlidir:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [İpucu #4] 🈯 İngilizce Dışında Bir Dil Kullanıyorsanız 🈲

Agent Laboratuvarı'nı İngilizce dışında bir dilde çalıştırıyorsanız sorun yok, sadece ajanlara araştırmayı tercih ettiğiniz dilde gerçekleştirmeleri için bir dil bayrağı sağlamanız yeterlidir. Agent Laboratuvarı'nı diğer dillerde çalıştırmayı kapsamlı bir şekilde incelemediğimizi unutmayın, bu yüzden karşılaştığınız herhangi bir problemi bildirdiğinizden emin olun.

Örneğin, Çincede çalıştırıyorsanız:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [İpucu #5] 🌟 Geliştirme İçin Çok Fazla Alan Var 🌟

Bu kod tabanını geliştirmek için çok fazla alan var, bu yüzden değişiklik yaparsanız ve topluluğa yardımcı olmak isterseniz, yaptığınız değişiklikleri paylaşmaktan çekinmeyin! Umarız bu araç size yardımcı olur!

## Referans / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```