# Laboratoire d'Agent : Utilisation des agents LLM comme assistants de recherche

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Démonstration du flux de AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | Français | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Site Web</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Logiciel</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Vidéo</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Article Exemple</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citation</a>】
</p>

## 📖 Aperçu

- **Laboratoire d'Agent** est un flux de travail de recherche autonome de bout en bout destiné à vous assister en tant que chercheur humain dans **la mise en œuvre de vos idées de recherche**. Le Laboratoire d'Agent est composé d'agents spécialisés alimentés par de grands modèles de langage pour vous soutenir tout au long du processus de recherche—de la réalisation des revues de littérature et de la formulation de plans à l'exécution des expériences et à la rédaction de rapports complets.
- Ce système n'est pas conçu pour remplacer votre créativité, mais pour la compléter, vous permettant de vous concentrer sur l’idéation et la pensée critique tout en automatisant les tâches répétitives et chronophages telles que la programmation et la documentation. En s'adaptant à différents niveaux de ressources informatiques et d'implication humaine, le Laboratoire d'Agent vise à accélérer la découverte scientifique et à optimiser votre productivité en recherche.

<p align="center">
  <img src="../media/AgentLab.png" alt="Démonstration du flux de AgentClinic" style="width: 99%;">
</p>

### 🔬 Comment fonctionne le Laboratoire d'Agent ?

- Le Laboratoire d'Agent se compose de trois phases principales qui guident systématiquement le processus de recherche : (1) Revue de littérature, (2) Expérimentation et (3) Rédaction de rapports. Pendant chaque phase, des agents spécialisés alimentés par des LLM collaborent pour atteindre des objectifs distincts, en intégrant des outils externes tels qu'arXiv, Hugging Face, Python et LaTeX afin d'optimiser les résultats. Ce flux de travail structuré commence par la collecte et l'analyse indépendantes des articles de recherche pertinents, progresse par la planification collaborative et la préparation des données, et aboutit à l'expérimentation automatisée et à la génération de rapports complets. Les détails sur les rôles spécifiques des agents et leurs contributions au cours de ces phases sont abordés dans l'article.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Démonstration du flux de AgentClinic" style="width: 99%;">
</p>

## 🖥️ Installation

### Option d'environnement virtuel Python

1. **Cloner le dépôt GitHub** : Commencez par cloner le dépôt en utilisant la commande :
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **Configurer et activer l'environnement Python**
    ```bash
    python -m venv venv_agent_lab
    ```

    - Activez maintenant cet environnement :
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **Installer les bibliothèques requises**
    ```bash
    pip install -r requirements.txt
    ```

4. **Installer pdflatex [OPTIONNEL]**
    ```bash
    sudo apt install pdflatex
    ```

    - Cela permet aux agents de compiler le code source LaTeX.
    - **[IMPORTANT]** Si cette étape ne peut pas être exécutée en raison de l'absence d'accès sudo, la compilation PDF peut être désactivée en exécutant le Laboratoire d'Agent avec le drapeau `--compile_latex` défini sur `false` : `--compile_latex=False`

5. **Lancez maintenant le Laboratoire d'Agent !**
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "VOTRE IDÉE DE RECHERCHE"
    ```

    ou, si vous n'avez pas installé pdflatex

    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "VOTRE IDÉE DE RECHERCHE" --compile_latex=False
    ```

-----
## Conseils pour de meilleurs résultats de recherche

#### [Conseil n°1] 📝 Assurez-vous de prendre des notes détaillées ! 📝

**Prendre des notes détaillées est important** pour aider votre agent à comprendre ce que vous cherchez à accomplir dans votre projet, ainsi que toute préférence de style. Les notes peuvent inclure les expériences que vous souhaitez que les agents réalisent, la fourniture de clés API, certains graphiques ou figures que vous souhaitez inclure, ou tout ce que vous souhaitez que l'agent sache lors de la réalisation de recherches.

C'est également votre opportunité d'informer l'agent **quelles ressources informatiques il peut utiliser**, par exemple les GPU (combien, quel type de GPU, combien de Go), les CPU (combien de cœurs, quel type de CPU), les limitations de stockage et les spécifications matérielles.

Pour ajouter des notes, vous devez modifier la structure `task_notes_LLM` à l'intérieur de `ai_lab_repo.py`. Ci-dessous, un exemple de jeu de notes utilisé pour certaines de nos expériences.

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
    
#### [Conseil n°2] 🚀 Utiliser des modèles plus puissants conduit généralement à une meilleure recherche 🚀

Lors de la conduite de recherches, **le choix du modèle peut avoir un impact significatif sur la qualité des résultats**. Les modèles plus puissants ont tendance à avoir une précision plus élevée, de meilleures capacités de raisonnement et une meilleure génération de rapports. Si les ressources informatiques le permettent, privilégiez l'utilisation de modèles avancés tels que o1-(mini/preview) ou d'autres grands modèles de langage à la pointe de la technologie.

Cependant, **il est important de trouver un équilibre entre performance et rentabilité**. Bien que les modèles puissants puissent donner de meilleurs résultats, ils sont souvent plus coûteux et plus longs à exécuter. Envisagez de les utiliser de manière sélective—par exemple, pour des expériences clés ou des analyses finales—tout en comptant sur des modèles plus petits et plus efficaces pour des tâches itératives ou du prototypage initial.

Lorsque les ressources sont limitées, **optimisez en affinant des modèles plus petits** sur votre jeu de données spécifique ou en combinant des modèles pré-entraînés avec des invites spécifiques à la tâche afin d'atteindre l'équilibre souhaité entre performance et efficacité computationnelle.

-----

#### [Conseil n°3] ✅ Vous pouvez charger des sauvegardes précédentes depuis des points de contrôle ✅

**Si vous perdez des progrès, la connexion Internet ou si une sous-tâche échoue, vous pouvez toujours charger à partir d'un état précédent.** Tous vos progrès sont enregistrés par défaut dans la variable `state_saves`, qui stocke chaque point de contrôle individuel. Il vous suffit de passer les arguments suivants lors de l'exécution de `ai_lab_repo.py`

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [Conseil n°4] 🈯 Si vous utilisez une langue autre que l'anglais 🈲

Si vous exécutez le Laboratoire d'Agent dans une langue autre que l'anglais, pas de problème, assurez-vous simplement de fournir un drapeau de langue aux agents pour effectuer des recherches dans votre langue préférée. Notez que nous n'avons pas étudié de manière approfondie l'exécution du Laboratoire d'Agent dans d'autres langues, alors assurez-vous de signaler tout problème que vous rencontrez.

Par exemple, si vous utilisez le chinois :

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [Conseil n°5] 🌟 Il y a beaucoup de place pour l'amélioration 🌟

Il y a beaucoup de possibilités d'améliorer cette base de code, donc si vous finissez par apporter des modifications et souhaitez aider la communauté, n'hésitez pas à partager les changements que vous avez effectués ! Nous espérons que cet outil vous sera utile !

## Référence / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```