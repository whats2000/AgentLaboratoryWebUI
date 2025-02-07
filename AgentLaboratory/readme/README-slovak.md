# Agent Laboratory: Používanie LLM Agentov ako Výskumných Asistentov

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstrácia toku AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | Slovenčina | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Webová stránka</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Softvér</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> | 📚 <a href="https://agentlaboratory.github.io/#examples-goto">Príkladový článok</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citácia</a>】
</p>

## 📖 Prehľad

- **Agent Laboratory** je autonómny výskumný pracovný postup od začiatku do konca, ktorý má za úlohu asistovať **vám** ako ľudskému výskumníkovi pri **realizácii vašich výskumných nápadov**. Agent Laboratory pozostáva zo špecializovaných agentov poháňaných veľkými jazykovými modelmi, ktorí vás podporujú počas celého výskumného procesu – od vykonávania literárnych prehľadov a formulovania plánov až po realizáciu experimentov a písanie komplexných správ.
- Tento systém nie je navrhnutý na nahradenie vašej kreativity, ale na jej doplnenie, čo vám umožňuje sústrediť sa na tvorivosť a kritické myslenie pri automatizácii opakujúcich sa a časovo náročných úloh, ako je kódovanie a dokumentácia. Tým, že zohľadňuje rôzne úrovne výpočtových zdrojov a ľudského zapojenia, Agent Laboratory má za cieľ urýchliť vedecké objavy a optimalizovať vašu výskumnú produktivitu.

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstrácia toku AgentClinic" style="width: 99%;">
</p>

### 🔬 Ako Agent Laboratory funguje?

- Agent Laboratory sa skladá z troch hlavných fáz, ktoré systematicky usmerňujú výskumný proces: (1) Literárny prehľad, (2) Experimentovanie a (3) Písanie správ. Počas každej fázy špecializovaní agenti poháňaní LLM spolupracujú na dosiahnutí konkrétnych cieľov, integrujúc externé nástroje ako arXiv, Hugging Face, Python a LaTeX na optimalizáciu výsledkov. Táto štruktúrovaná pracovná postupnosť začína nezávislým zhromažďovaním a analýzou relevantných výskumných prác, pokračuje cez kolaboratívne plánovanie a prípravu dát a končí automatizovaným experimentovaním a komplexnou generáciou správ. Podrobnosti o konkrétnych rolách agentov a ich príspevkoch v rámci týchto fáz sú diskutované v článku.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstrácia toku AgentClinic" style="width: 99%;">
</p>

## 🖥️ Inštalácia

### Python venv možnosť

1. **Naklonujte GitHub repozitár**: Začnite klonovaním repozitára pomocou príkazu:
   ```bash
   git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
   ```

2. **Nastavte a aktivujte Python prostredie**
   ```bash
   python -m venv venv_agent_lab
   ```

   - Teraz aktivujte toto prostredie:
     ```bash
     source venv_agent_lab/bin/activate
     ```

3. **Nainštalujte požadované knižnice**
   ```bash
   pip install -r requirements.txt
   ```

4. **Nainštalujte pdflatex [VOLITEĽNÉ]**
   ```bash
   sudo apt install pdflatex
   ```

   - Toto umožňuje agentom kompilovať latex zdroj.
   - **[DÔLEŽITÉ]** Ak tento krok nemôžete vykonať kvôli absencii sudo prístupu, kompiláciu pdf môžete vypnúť spustením Agent Laboratory s nastavením vlajky --compile_latex na false: `--compile_latex=False`

5. **Teraz spustite Agent Laboratory!**
   ```bash
   python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
   ```
   
   alebo, ak nemáte nainštalovaný pdflatex
   ```bash
   python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
   ```

-----
## Tipy pre lepšie výskumné výsledky

#### [Tip #1] 📝 Uistite sa, že píšete rozsiahle poznámky! 📝

**Písanie rozsiahlych poznámok je dôležité** pre pomoc vášmu agentovi pochopiť, čo sa snažíte dosiahnuť vo vašom projekte, ako aj akékoľvek preferencie štýlu. Poznámky môžu obsahovať akékoľvek experimenty, ktoré chcete, aby agenti vykonali, poskytovanie API kľúčov, určité grafy alebo figúry, ktoré chcete zahrnúť, alebo čokoľvek, čo chcete, aby agent vedel pri vykonávaní výskumu.

Je to tiež vaša príležitosť informovať agenta, **aké výpočtové zdroje má k dispozícii**, napr. GPU (koľko, aký typ GPU, koľko GB), CPU (koľko jadier, aký typ CPU), obmedzenia úložiska a hardvérové špecifikácie.

Aby ste pridali poznámky, musíte upraviť štruktúru `task_notes_LLM` v súbore `ai_lab_repo.py`. Nižšie je uvedený príklad sady poznámok použitých pre niektoré naše experimenty.

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

#### [Tip #2] 🚀 Používanie výkonnejších modelov zvyčajne vedie k lepšiemu výskumu 🚀

Pri vykonávaní výskumu môže **výber modelu významne ovplyvniť kvalitu výsledkov**. Výkonnejšie modely majú tendenciu mať vyššiu presnosť, lepšie schopnosti logického uvažovania a lepšiu generáciu správ. Ak výpočtové zdroje umožňujú, uprednostnite používanie pokročilých modelov, ako sú o1-(mini/preview) alebo podobné najmodernejšie veľké jazykové modely.

Avšak, **je dôležité nájsť rovnováhu medzi výkonom a nákladovou efektívnosťou**. Zatiaľ čo výkonnejšie modely môžu priniesť lepšie výsledky, často sú drahšie a časovo náročnejšie na spustenie. Zvážte ich selektívne používanie – napríklad pre kľúčové experimenty alebo konečné analýzy – zatiaľ čo na iteratívne úlohy alebo počiatočné prototypovanie sa spoliehajte na menšie, efektívnejšie modely.

Keď sú zdroje obmedzené, **optimalizujte jemným ladením menších modelov** na vašich špecifických dátach alebo kombinovaním predtrénovaných modelov s úlohovo špecifickými promptami, aby ste dosiahli požadovanú rovnováhu medzi výkonom a výpočtovou efektívnosťou.

-----

#### [Tip #3] ✅ Môžete načítať predchádzajúce uloženia z kontrolných bodov ✅

**Ak stratíte postup, internetové pripojenie alebo ak sa podúloha nepodarí, môžete vždy načítať z predchádzajúceho stavu.** Všetok váš postup je predvolene uložený v premennej `state_saves`, ktorá ukladá každý jednotlivý kontrolný bod. Stačí pri spúšťaní `ai_lab_repo.py` zadať nasledujúce argumenty:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [Tip #4] 🈯 Ak pracujete v inom jazyku než angličtine 🈲

Ak spúšťate Agent Laboratory v inom jazyku než v angličtine, nie je problém, stačí zabezpečiť, aby ste agentom poskytli jazykovú vlajku pre vykonávanie výskumu vo vašom preferovanom jazyku. Všimnite si, že sme neštudovali dôkladne spúšťanie Agent Laboratory v iných jazykoch, preto určite hláste akékoľvek problémy, na ktoré narazíte.

Napríklad, ak pracujete v čínštine:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [Tip #5] 🌟 Je tu veľa priestoru na zlepšenie 🌟

Je tu veľa priestoru na zlepšenie tohto kódu, takže ak urobíte zmeny a chcete pomôcť komunite, neváhajte zdieľať zmeny, ktoré ste vykonali! Dúfame, že vám tento nástroj pomôže!

## Reference / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```