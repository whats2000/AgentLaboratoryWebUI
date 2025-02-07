# Agent Laboratory: Using LLM Agents as Research Assistants

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | 한국어 | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Website</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Example Paper</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citation</a>】
</p>

## 📖 개요

- **Agent Laboratory**는 **당신**이 인간 연구자로서 **연구 아이디어를 구현**할 수 있도록 지원하는 엔드 투 엔드 자율 연구 워크플로우입니다. Agent Laboratory는 대규모 언어 모델에 의해 구동되는 전문화된 에이전트들로 구성되어 문헌 검토 수행, 계획 수립, 실험 실행, 종합 보고서 작성에 이르기까지 전체 연구 워크플로우를 지원합니다.
- 이 시스템은 당신의 창의성을 대체하기 위해 설계된 것이 아니라 보완하기 위해 설계되었습니다. 아이디어 발상과 비판적 사고에 집중할 수 있도록 하면서 코딩 및 문서화와 같은 반복적이고 시간이 많이 소요되는 작업을 자동화합니다. 다양한 수준의 컴퓨팅 자원과 인간의 참여를 수용함으로써 Agent Laboratory는 과학적 발견을 가속화하고 연구 생산성을 최적화하는 것을 목표로 합니다.

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

### 🔬 Agent Laboratory는 어떻게 작동하나요?

- Agent Laboratory는 연구 과정을 체계적으로 안내하는 세 가지 주요 단계로 구성됩니다: (1) 문헌 검토, (2) 실험, (3) 보고서 작성. 각 단계 동안 LLM에 의해 구동되는 전문화된 에이전트들이 협력하여 개별 목표를 달성하며, arXiv, Hugging Face, Python, LaTeX와 같은 외부 도구를 통합하여 결과를 최적화합니다. 이 구조화된 워크플로우는 관련 연구 논문의 독립적인 수집 및 분석으로 시작하여, 협력적인 계획 수립 및 데이터 준비를 거쳐, 자동화된 실험 실행 및 종합적인 보고서 생성으로 이어집니다. 이러한 단계 전반에 걸친 특정 에이전트 역할과 기여에 대한 자세한 내용은 논문에서 논의됩니다.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

## 🖥️ 설치

### Python venv 옵션


1. **GitHub 저장소 복제**: 다음 명령어를 사용하여 저장소를 복제합니다:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```


2. **Python 환경 설정 및 활성화**
    ```bash
    python -m venv venv_agent_lab
    ```
    
    - 이제 이 환경을 활성화합니다:
    ```bash
    source venv_agent_lab/bin/activate
    ```


3. **필수 라이브러리 설치**
    ```bash
    pip install -r requirements.txt
    ```


4. **pdflatex 설치 [옵션]**
    ```bash
    sudo apt install pdflatex
    ```
    
    - 이는 에이전트들이 LaTeX 소스를 컴파일할 수 있도록 합니다.
    - **[중요]** sudo 접근 권한이 없어 이 단계를 실행할 수 없는 경우, --compile_latex 플래그를 false로 설정하여 Agent Laboratory 실행 시 PDF 컴파일을 비활성화할 수 있습니다: `--compile_latex=False`


5. **이제 Agent Laboratory를 실행하세요!**
    
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```
    
    또는, pdflatex가 설치되어 있지 않은 경우
    
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----
## 더 나은 연구 결과를 위한 팁

#### [팁 #1] 📝 광범위한 노트를 작성하세요! 📝

**광범위한 노트 작성은** 에이전트가 프로젝트에서 달성하려는 목표와 스타일 선호도를 이해하는 데 중요합니다. 노트에는 에이전트에게 수행하도록 원하는 실험, API 키 제공, 포함하고 싶은 특정 플롯이나 그림, 또는 연구를 수행할 때 에이전트가 알아야 할 모든 내용을 포함할 수 있습니다.

또한, **에이전트가 접근할 수 있는 컴퓨팅 자원**을 알려줄 수 있는 기회이기도 합니다. 예를 들어 GPU (몇 개, 어떤 유형의 GPU, GB 수), CPU (코어 수, CPU 유형), 저장 한계 및 하드웨어 사양 등을 포함할 수 있습니다.

노트를 추가하려면, ai_lab_repo.py 내부의 `task_notes_LLM` 구조를 수정해야 합니다. 아래는 일부 실험에 사용된 노트의 예시입니다.

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

#### [팁 #2] 🚀 더 강력한 모델을 사용하는 것이 일반적으로 더 나은 연구로 이어집니다 🚀

연구를 수행할 때, **모델의 선택은 결과의 질에 상당한 영향을 미칠 수 있습니다**. 더 강력한 모델은 일반적으로 더 높은 정확도, 더 나은 추론 능력, 더 우수한 보고서 생성을 제공합니다. 컴퓨팅 자원이 허용한다면, o1-(mini/preview)와 같은 최첨단 대규모 언어 모델과 같은 고급 모델의 사용을 우선시하세요.

그러나, **성능과 비용 효율성의 균형을 맞추는 것이 중요합니다**. 강력한 모델은 더 나은 결과를 제공할 수 있지만, 실행하는 데 비용과 시간이 더 많이 소요되는 경우가 많습니다. 예를 들어, 핵심 실험이나 최종 분석에는 고급 모델을 선택적으로 사용하고, 반복 작업이나 초기 프로토타이핑에는 더 작고 효율적인 모델을 사용하는 것을 고려하세요.

자원이 제한된 경우, **작은 모델을 특정 데이터셋에 맞게 미세 조정하거나, 사전 훈련된 모델과 작업 특화 프롬프트를 결합하여 성능과 컴퓨팅 효율성 사이의 원하는 균형을 달성할 수 있습니다**.

-----

#### [팁 #3] ✅ 체크포인트에서 이전 저장 상태를 불러올 수 있습니다 ✅

**진행 상황을 잃었거나 인터넷 연결이 끊기거나 하위 작업이 실패한 경우, 이전 상태에서 항상 불러올 수 있습니다.** 모든 진행 상황은 기본적으로 `state_saves` 변수에 저장되며, 이는 각 개별 체크포인트를 저장합니다. ai_lab_repo.py를 실행할 때 다음 인수를 전달하면 됩니다.

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [팁 #4] 🈯 영어가 아닌 다른 언어로 실행하는 경우 🈲

Agent Laboratory를 영어가 아닌 다른 언어로 실행하는 경우, 문제 없습니다. 단, 에이전트가 선호하는 언어로 연구를 수행할 수 있도록 언어 플래그를 제공해야 합니다. 다른 언어로 Agent Laboratory를 실행하는 것에 대해 광범위하게 연구하지 않았으므로, 발생하는 문제를 반드시 보고해 주세요.

예를 들어, 중국어로 실행하는 경우:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [팁 #5] 🌟 개선의 여지가 많습니다 🌟

이 코드베이스를 개선할 여지가 많으므로, 변경을 가하고 커뮤니티에 기여하고 싶다면, 변경한 사항을 자유롭게 공유해 주세요! 이 도구가 여러분에게 도움이 되길 바랍니다!

## 참고 문헌 / Bibtex



```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```