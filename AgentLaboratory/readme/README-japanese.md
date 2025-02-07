# Agent Laboratory: Using LLM Agents as Research Assistants

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | 日本語 | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Website</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Example Paper</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citation</a>】
</p>

## 📖 概要

- **Agent Laboratory**は、**あなた**が**研究アイデアを実現する**ために支援するエンドツーエンドの自律的な研究ワークフローです。Agent Laboratoryは、大規模言語モデルによって駆動される専門のエージェントで構成されており、文献レビューの実施や計画の策定から実験の実行、包括的な報告書の作成まで、研究の全過程をサポートします。
- このシステムはあなたの創造性を置き換えるものではなく、補完するために設計されています。アイデアの創出や批判的思考に集中できるようにし、コーディングやドキュメント作成のような反復的で時間のかかる作業を自動化します。計算資源や人間の関与のレベルに応じて対応することで、Agent Laboratoryは科学的発見を加速し、研究の生産性を最適化することを目指しています。

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

### 🔬 Agent Laboratoryはどのように機能しますか？

- Agent Laboratoryは、研究プロセスを体系的に導く3つの主要なフェーズから構成されています：（1）文献レビュー、（2）実験、（3）報告書作成。各フェーズでは、LLMによって駆動される専門のエージェントが協力してそれぞれの目標を達成し、arXiv、Hugging Face、Python、LaTeXなどの外部ツールを統合して成果を最適化します。この構造化されたワークフローは、関連する研究論文の独立した収集と分析から始まり、協力的な計画とデータ準備を経て、自動化された実験と包括的な報告書の生成に至ります。これらのフェーズ全体にわたる具体的なエージェントの役割と貢献の詳細は論文で説明されています。

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

## 🖥️ インストール

### Python venv オプション

1. **GitHubリポジトリをクローンする**: 以下のコマンドを使用してリポジトリをクローンします：
```bash
git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
```

2. **Python環境を設定してアクティベートする**
```bash
python -m venv venv_agent_lab
```

- 次に、この環境をアクティベートします：
```bash
source venv_agent_lab/bin/activate
```

3. **必要なライブラリをインストールする**
```bash
pip install -r requirements.txt
```

4. **pdflatexをインストールする [オプション]**
```bash
sudo apt install pdflatex
```

- これにより、エージェントがLaTeXソースをコンパイルできるようになります。
- **[重要]** sudo権限がないためにこのステップを実行できない場合、Agent Laboratoryを実行する際に --compile_latexフラグをfalseに設定してPDFのコンパイルをオフにすることができます: --compile_latex=False

5. **Agent Laboratoryを実行します！**

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
```

または、pdflatexがインストールされていない場合

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
```

-----
## より良い研究成果を得るためのヒント


#### [ヒント #1] 📝 詳細なノートを書くことを忘れずに！ 📝

**詳細なノートを書くことは重要です**。これにより、エージェントがプロジェクトで達成しようとしていることや、スタイルの好みを理解するのに役立ちます。ノートには、エージェントに実行してほしい実験、APIキーの提供、含めたい特定のプロットや図、研究を行う際にエージェントに知っておいてほしいことなどを含めることができます。

また、**エージェントがアクセスできる計算資源**を知らせる機会でもあります。例えば、GPU（数、種類、GB数）、CPU（コア数、種類）、ストレージの制限、ハードウェア仕様などです。

ノートを追加するには、ai_lab_repo.py内のtask_notes_LLM構造を変更する必要があります。以下に、いくつかの実験で使用されたノートの例を示します。

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

#### [ヒント #2] 🚀 より強力なモデルを使用することで、一般的により良い研究が可能になります 🚀

研究を行う際、**モデルの選択は結果の質に大きな影響を与える可能性があります**。より強力なモデルは、通常、精度が高く、推論能力が優れており、報告書の生成も優れています。計算資源が許す場合は、o1-(mini/preview)などの先進的な大規模言語モデルの使用を優先してください。

ただし、**性能と費用対効果のバランスを取ることが重要です**。強力なモデルはより良い結果をもたらす可能性がありますが、実行には時間と費用がかかることが多いです。重要な実験や最終分析には選択的に使用し、反復作業や初期のプロトタイピングには小さく効率的なモデルを使用することを検討してください。

資源が限られている場合は、**小さなモデルを特定のデータセットでファインチューニングするか、タスク固有のプロンプトと組み合わせて使用することで、性能と計算効率の間の望ましいバランスを達成します**。

-----

#### [ヒント #3] ✅ チェックポイントから以前の保存をロードできます ✅

**進捗が失われた場合、インターネット接続が切れた場合、またはサブタスクが失敗した場合でも、以前の状態から常にロードできます。** すべての進捗はデフォルトでstate_saves変数に保存され、各チェックポイントが保存されます。ai_lab_repo.pyを実行する際に、以下の引数を渡すだけです

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----




#### [ヒント #4] 🈯 英語以外の言語で実行している場合 🈲

Agent Laboratoryを英語以外の言語で実行している場合でも問題ありません。エージェントが希望する言語で研究を行えるように、言語フラグを提供することを確認してください。Agent Laboratoryを他の言語で実行することについては十分に研究していないため、問題が発生した場合は必ず報告してください。

例えば、中国語で実行する場合：

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [ヒント #5] 🌟 改善の余地がたくさんあります 🌟

このコードベースには改善の余地がたくさんありますので、変更を加えてコミュニティに貢献したい場合は、ぜひ変更内容を共有してください！このツールが皆さんのお役に立つことを願っています！

## 参考文献 / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```