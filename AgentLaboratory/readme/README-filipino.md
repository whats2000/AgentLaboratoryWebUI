# Agent Laboratory: Paggamit ng LLM Agents bilang mga Tagapag-Asistang Pang-research

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstrasyon ng daloy ng AgentClinic" style="width: 99%;">
</p>

<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | Filipino | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Website</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Example Paper</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citation</a>】
</p>

## 📖 Pangkalahatang-ideya

- **Agent Laboratory** ay isang end-to-end na autonomous na workflow sa pananaliksik na nilalayong tulungan **ikaw** bilang isang human researcher sa **pagpapatupad ng iyong mga ideya sa pananaliksik**. Binubuo ang Agent Laboratory ng mga espesyalistang ahente na pinapagana ng malalaking modelo ng wika upang suportahan ka sa buong workflow ng pananaliksik—mula sa pagsasagawa ng mga pagsusuri sa literatura at pagbuo ng mga plano hanggang sa pagpapatupad ng mga eksperimento at pagsulat ng komprehensibong mga ulat.
- Ang sistemang ito ay hindi dinisenyo upang palitan ang iyong pagkamalikhain kundi upang kumpletuhin ito, na nagbibigay-daan sa iyo na magpokus sa ideasyon at kritikal na pag-iisip habang ina-automate ang mga paulit-ulit at matagal na gawain tulad ng pag-cocode at dokumentasyon. Sa pamamagitan ng pag-aakma sa iba't ibang antas ng computational na mga mapagkukunan at partisipasyon ng tao, layunin ng Agent Laboratory na pabilisin ang siyentipikong pagtuklas at i-optimize ang iyong produktibidad sa pananaliksik.

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstrasyon ng daloy ng AgentClinic" style="width: 99%;">
</p>

### 🔬 Paano gumagana ang Agent Laboratory?

- Binubuo ang Agent Laboratory ng tatlong pangunahing yugto na sistematikong ginagabayan ang proseso ng pananaliksik: (1) Pagsusuri ng Literatura, (2) Eksperimentasyon, at (3) Pagsulat ng Ulat. Sa bawat yugto, ang mga espesyalistang ahente na pinapagana ng LLMs ay nagtutulungan upang makamit ang mga natatanging layunin, na nag-iintegrate ng mga panlabas na kagamitan tulad ng arXiv, Hugging Face, Python, at LaTeX upang i-optimize ang mga resulta. Nagsisimula ang estrukturadong workflow na ito sa malayang koleksyon at pagsusuri ng mga kaugnay na papel sa pananaliksik, sumusulong sa pamamagitan ng kolaboratibong pagpaplano at paghahanda ng datos, at nagreresulta sa automated na eksperimento at komprehensibong paggawa ng ulat. Ang mga detalye tungkol sa mga tiyak na papel ng ahente at kanilang mga kontribusyon sa mga yugtong ito ay tinalakay sa papel.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstrasyon ng daloy ng AgentClinic" style="width: 99%;">
</p>

## 🖥️ Pag-install

### Python venv na opsyon

1. **I-clone ang GitHub Repository**: Magsimula sa pamamagitan ng pag-clone ng repository gamit ang utos:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **I-set up at I-activate ang Python Environment**
    ```bash
    python -m venv venv_agent_lab
    ```
    - Ngayon i-activate ang environment na ito:
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **I-install ang mga kinakailangang library**
    ```bash
    pip install -r requirements.txt
    ```

4. **I-install ang pdflatex [OPTIONAL]**
    ```bash
    sudo apt install pdflatex
    ```
    - Pinapayagan nitong ma-compile ng mga ahente ang latex source.
    - **[MAHALAGA]** Kung hindi maisagawa ang hakbang na ito dahil sa kawalan ng sudo access, maaaring i-off ang pdf compiling sa pamamagitan ng pagpapatakbo ng Agent Laboratory gamit ang pag-set ng `--compile_latex` flag sa false:
    ```bash
    --compile_latex=False
    ```

5. **Ngayon patakbuhin ang Agent Laboratory!**
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```
    o, kung wala kang naka-install na pdflatex
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----

## Mga Tip para sa Mas Mabuting Resulta ng Pananaliksik

#### [Tip #1] 📝 Tiyaking sumulat ng malawak na mga tala! 📝

**Mahalaga ang pagsusulat ng malawak na mga tala** upang matulungan ang iyong ahente na maunawaan kung ano ang nais mong makamit sa iyong proyekto, pati na rin ang anumang mga paboritong estilo. Maaaring kabilang sa mga tala ang anumang mga eksperimento na nais mong isagawa ng mga ahente, pagbibigay ng mga API key, tiyak na mga plot o figure na nais mong isama, o anumang nais mong malaman ng ahente kapag nagsasagawa ng pananaliksik.

Ito rin ang iyong pagkakataon upang ipaalam sa ahente **kung anong mga compute resources ang mayroon ito**, halimbawa, GPUs (ilan, anong uri ng GPU, ilang GBs), CPUs (ilang cores, anong uri ng CPUs), mga limitasyon sa storage, at mga specs ng hardware.

Upang magdagdag ng mga tala, kailangan mong baguhin ang `task_notes_LLM` na istraktura sa loob ng `ai_lab_repo.py`. Ibinigay sa ibaba ang isang halimbawa ng mga tala na ginamit para sa ilan sa aming mga eksperimento.

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

#### [Tip #2] 🚀 Ang paggamit ng mas malalakas na mga modelo ay karaniwang nagdudulot ng mas magagandang pananaliksik 🚀

Kapag nagsasagawa ng pananaliksik, **ang pagpili ng modelo ay maaaring malaki ang epekto sa kalidad ng mga resulta**. Ang mas malalakas na mga modelo ay karaniwang may mas mataas na katumpakan, mas mahusay na kakayahan sa pag-iisip, at mas magaling na paggawa ng ulat. Kung pinapayagan ng mga computational na mapagkukunan, bigyang prioridad ang paggamit ng mga advanced na modelo tulad ng o1-(mini/preview) o katulad na mga state-of-the-art na malalaking modelo ng wika.

Gayunpaman, **mahalagang balansehin ang pagganap at pagiging cost-effective**. Habang ang mga malalakas na modelo ay maaaring magbigay ng mas magagandang resulta, madalas silang mas mahal at mas matagal patakbuhin. Isaalang-alang ang paggamit ng mga ito nang selektibo—halimbawa, para sa mga pangunahing eksperimento o panghuling pagsusuri—habang umaasa sa mas maliit, mas mahusay na mga modelo para sa mga iteratibong gawain o paunang prototyping.

Kapag limitado ang mga mapagkukunan, **i-optimize sa pamamagitan ng fine-tuning ng mas maliliit na mga modelo** sa iyong partikular na dataset o pagsasama ng mga pre-trained na modelo sa mga task-specific na prompt upang makamit ang nais na balanse sa pagitan ng pagganap at computational na kahusayan.

-----

#### [Tip #3] ✅ Maaari kang mag-load ng mga naunang save mula sa mga checkpoint ✅

**Kung mawalan ka ng progreso, koneksyon sa internet, o kung mabigo ang isang subtask, maaari mong laging i-load mula sa isang naunang estado.** Ang lahat ng iyong progreso ay naka-save bilang default sa `state_saves` variable, na nag-iimbak ng bawat indibidwal na checkpoint. Ibigay lamang ang mga sumusunod na argumento kapag nagpapatakbo ng `ai_lab_repo.py`:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [Tip #4] 🈯 Kung ikaw ay nagpapatakbo sa isang wika maliban sa Ingles 🈲

Kung nagpapatakbo ka ng Agent Laboratory sa isang wika maliban sa Ingles, walang problema, siguraduhing magbigay ng language flag sa mga ahente upang magsagawa ng pananaliksik sa iyong nais na wika. Tandaan na hindi pa namin lubusang pinag-aralan ang pagpapatakbo ng Agent Laboratory sa ibang mga wika, kaya siguraduhing iulat ang anumang mga problemang iyong makaharap.

Halimbawa, kung nagpapatakbo ka sa Chinese:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [Tip #5] 🌟 Mayroong maraming puwang para sa pagpapabuti 🌟

Mayroong maraming puwang upang mapabuti ang codebase na ito, kaya kung ikaw ay gagawa ng mga pagbabago at nais makatulong sa komunidad, huwag mag-atubiling ibahagi ang mga pagbabagong iyong ginawa! Inaasahan naming makakatulong ang tool na ito sa iyo!

## Reference / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```