# Laboratorio Agenti: Utilizzo di Agenti LLM come Assistenti di Ricerca

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Dimostrazione del flusso di AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | Italiano】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Sito web</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Documento di esempio</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citazione</a>】
</p>

## 📖 Panoramica

- **Agent Laboratory** è un flusso di lavoro di ricerca autonomo end-to-end progettato per assistere **te** come ricercatore umano nell'**implementazione delle tue idee di ricerca**. Agent Laboratory è composto da agenti specializzati guidati da grandi modelli linguistici per supportarti durante l'intero flusso di lavoro di ricerca—dalla conduzione di revisioni della letteratura e formulazione di piani all'esecuzione di esperimenti e alla scrittura di rapporti completi.
- Questo sistema non è progettato per sostituire la tua creatività ma per complementarla, permettendoti di concentrarti sull'ideazione e il pensiero critico mentre automatizza compiti ripetitivi e che richiedono tempo come la codifica e la documentazione. Accomodando diversi livelli di risorse computazionali e coinvolgimento umano, Agent Laboratory mira ad accelerare la scoperta scientifica e ottimizzare la tua produttività di ricerca.

<p align="center">
  <img src="../media/AgentLab.png" alt="Dimostrazione del flusso di AgentClinic" style="width: 99%;">
</p>

### 🔬 Come funziona Agent Laboratory?

- Agent Laboratory è composto da tre fasi principali che guidano sistematicamente il processo di ricerca: (1) Revisione della letteratura, (2) Sperimentazione e (3) Scrittura del rapporto. Durante ogni fase, agenti specializzati guidati da LLM collaborano per raggiungere obiettivi distinti, integrando strumenti esterni come arXiv, Hugging Face, Python e LaTeX per ottimizzare i risultati. Questo flusso di lavoro strutturato inizia con la raccolta e analisi indipendente di documenti di ricerca pertinenti, prosegue attraverso la pianificazione collaborativa e la preparazione dei dati, e si conclude con la sperimentazione automatizzata e la generazione di rapporti completi. I dettagli sui ruoli specifici degli agenti e i loro contributi in queste fasi sono discussi nel documento.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Dimostrazione del flusso di AgentClinic" style="width: 99%;">
</p>

## 🖥️ Installazione

### Opzione Python venv

1. **Clona il Repository GitHub**: Inizia clonando il repository usando il comando:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **Configura e Attiva l'Ambiente Python**
    ```bash
    python -m venv venv_agent_lab
    ```
    - Ora attiva questo ambiente:
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **Installa le librerie richieste**
    ```bash
    pip install -r requirements.txt
    ```

4. **Installa pdflatex [OPZIONALE]**
    ```bash
    sudo apt install pdflatex
    ```
    - Questo permette agli agenti di compilare il codice sorgente LaTeX.
    - **[IMPORTANTE]** Se questo passaggio non può essere eseguito a causa della mancanza di accesso sudo, la compilazione del pdf può essere disattivata eseguendo Agent Laboratory impostando il flag --compile_latex su false: --compile_latex=False

5. **Ora esegui Agent Laboratory!**
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```
    oppure, se non hai installato pdflatex
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----

## Consigli per migliori risultati di ricerca

#### [Consiglio #1] 📝 Assicurati di scrivere appunti dettagliati! 📝

**Scrivere appunti dettagliati è importante** per aiutare il tuo agente a comprendere cosa intendi realizzare nel tuo progetto, nonché eventuali preferenze di stile. Gli appunti possono includere qualsiasi esperimento che desideri che gli agenti eseguano, fornire chiavi API, determinati grafici o figure che desideri includere, o qualsiasi cosa tu voglia che l'agente sappia durante la ricerca.

Questa è anche la tua opportunità di far sapere all'agente **a quali risorse computazionali ha accesso**, ad esempio GPU (quante, che tipo di GPU, quanti GB), CPU (quanti core, che tipo di CPU), limitazioni di archiviazione e specifiche hardware.

Per aggiungere appunti, devi modificare la struttura task_notes_LLM all'interno di ai_lab_repo.py. Di seguito è fornito un esempio di set di appunti utilizzati per alcuni dei nostri esperimenti.

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

#### [Consiglio #2] 🚀 Utilizzare modelli più potenti generalmente porta a migliori ricerche 🚀

Quando si conduce una ricerca, **la scelta del modello può influenzare significativamente la qualità dei risultati**. I modelli più potenti tendono ad avere una maggiore accuratezza, migliori capacità di ragionamento e una migliore generazione dei rapporti. Se le risorse computazionali lo consentono, dà priorità all'uso di modelli avanzati come o1-(mini/preview) o simili modelli linguistici di grandi dimensioni all'avanguardia.

Tuttavia, **è importante bilanciare le prestazioni e l'efficienza dei costi**. Sebbene i modelli potenti possano fornire risultati migliori, spesso sono più costosi e richiedono più tempo per essere eseguiti. Considera di usarli selettivamente—ad esempio, per esperimenti chiave o analisi finali—mentre ti affidi a modelli più piccoli ed efficienti per compiti iterativi o prototipazione iniziale.

Quando le risorse sono limitate, **ottimizza effettuando il fine-tuning di modelli più piccoli** sul tuo dataset specifico o combinando modelli pre-addestrati con prompt specifici per il compito per raggiungere l'equilibrio desiderato tra prestazioni ed efficienza computazionale.

-----

#### [Consiglio #3] ✅ Puoi caricare salvataggi precedenti dai checkpoint ✅

**Se perdi i progressi, la connessione a internet o se un sotto-compito fallisce, puoi sempre caricare da uno stato precedente.** Tutti i tuoi progressi vengono salvati di default nella variabile state_saves, che memorizza ogni singolo checkpoint. Basta passare i seguenti argomenti quando esegui ai_lab_repo.py

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [Consiglio #4] 🈯 Se stai utilizzando una lingua diversa dall'inglese 🈲

Se stai utilizzando Agent Laboratory in una lingua diversa dall'inglese, nessun problema, basta assicurarti di fornire un flag di lingua agli agenti per eseguire la ricerca nella tua lingua preferita. Nota che non abbiamo studiato approfonditamente l'utilizzo di Agent Laboratory in altre lingue, quindi assicurati di segnalare eventuali problemi che incontri.

Ad esempio, se stai utilizzando in cinese:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [Consiglio #5] 🌟 C'è molto spazio per miglioramenti 🌟

C'è molto spazio per migliorare questo codice, quindi se alla fine apporti modifiche e vuoi aiutare la comunità, sentiti libero di condividere le modifiche che hai effettuato! Speriamo che questo strumento ti sia d'aiuto!

## Riferimenti / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```