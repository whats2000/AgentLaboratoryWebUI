# Agent Laboratory: Using LLM Agents as Research Assistants


<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demostración del flujo de AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | Español | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | <a href="../readme/README-vietnamese.md">Tiếng Việt</a> | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Sitio web</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> | 📚 <a href="https://agentlaboratory.github.io/#examples-goto">Artículo de ejemplo</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citación</a>】
</p>

## 📖 Overview

- **Agent Laboratory** es un flujo de trabajo de investigación autónomo de extremo a extremo diseñado para asistir **a ti** como investigador humano en **implementar tus ideas de investigación**. Agent Laboratory consiste en agentes especializados impulsados por grandes modelos de lenguaje para apoyarte a lo largo de todo el flujo de trabajo de investigación, desde la realización de revisiones bibliográficas y la formulación de planes hasta la ejecución de experimentos y la redacción de informes comprensivos.
- Este sistema no está diseñado para reemplazar tu creatividad, sino para complementarla, permitiéndote enfocarte en la ideación y el pensamiento crítico mientras automatiza tareas repetitivas y que consumen mucho tiempo, como la programación y la documentación. Al acomodar diferentes niveles de recursos computacionales e implicación humana, Agent Laboratory tiene como objetivo acelerar el descubrimiento científico y optimizar tu productividad en la investigación.

<p align="center">
  <img src="../media/AgentLab.png" alt="Demostración del flujo de AgentClinic" style="width: 99%;">
</p>

### 🔬 How does Agent Laboratory work?

- Agent Laboratory consta de tres fases principales que guían sistemáticamente el proceso de investigación: (1) Revisión de Literatura, (2) Experimentación y (3) Redacción de Informes. Durante cada fase, agentes especializados impulsados por LLM colaboran para lograr objetivos distintos, integrando herramientas externas como arXiv, Hugging Face, Python y LaTeX para optimizar los resultados. Este flujo de trabajo estructurado comienza con la recolección y análisis independiente de artículos de investigación relevantes, avanza a través de la planificación colaborativa y la preparación de datos, y culmina en la experimentación automatizada y la generación de informes comprensivos. Los detalles sobre roles específicos de los agentes y sus contribuciones a lo largo de estas fases se discuten en el documento.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demostración del flujo de AgentClinic" style="width: 99%;">
</p>

## 🖥️ Installation

### Python venv option


1. **Clonar el Repositorio de GitHub**: Comienza clonando el repositorio usando el comando:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```


2. **Configurar y Activar el Entorno de Python**
    ```bash
    python -m venv venv_agent_lab
    ```
    
    - Ahora activa este entorno:
    ```bash
    source venv_agent_lab/bin/activate
    ```


3. **Instalar las librerías requeridas**
    ```bash
    pip install -r requirements.txt
    ```


4. **Instalar pdflatex [OPCIONAL]**
    ```bash
    sudo apt install pdflatex
    ```
    
    - Esto permite que las fuentes de LaTeX sean compiladas por los agentes.
    - **[IMPORTANTE]** Si no puedes ejecutar este paso debido a la falta de acceso sudo, la compilación de PDF puede desactivarse ejecutando Agent Laboratory configurando la bandera `--compile_latex` a falso: `--compile_latex=False`


5. **¡Ahora ejecuta Agent Laboratory!**
    
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```
    
    o, si no tienes pdflatex instalado
    
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----
## Consejos para mejores resultados de investigación


#### [Consejo #1] 📝 ¡Asegúrate de escribir notas extensas! 📝

**Escribir notas extensas es importante** para ayudar a tu agente a comprender lo que buscas lograr en tu proyecto, así como cualquier preferencia de estilo. Las notas pueden incluir cualquier experimento que desees que los agentes realicen, proporcionar claves de API, ciertos gráficos o figuras que quieras incluir, o cualquier cosa que quieras que el agente sepa al realizar la investigación.

Esta también es tu oportunidad para informar al agente **a qué recursos computacionales tiene acceso**, por ejemplo, GPUs (cuántas, qué tipo de GPU, cuántos GB), CPUs (cuántos núcleos, qué tipo de CPUs), limitaciones de almacenamiento y especificaciones de hardware.

Para agregar notas, debes modificar la estructura `task_notes_LLM` dentro de `ai_lab_repo.py`. A continuación se proporciona un ejemplo de conjunto de notas utilizadas en algunos de nuestros experimentos.

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
    
#### [Consejo #2] 🚀 ¡Usar modelos más potentes generalmente conduce a una mejor investigación! 🚀

Al realizar investigaciones, **la elección del modelo puede impactar significativamente la calidad de los resultados**. Los modelos más potentes tienden a tener mayor precisión, mejores capacidades de razonamiento y mejor generación de informes. Si los recursos computacionales lo permiten, prioriza el uso de modelos avanzados como o1-(mini/preview) o modelos de lenguaje grandes similares de última generación.

Sin embargo, **es importante equilibrar el rendimiento y la rentabilidad**. Aunque los modelos potentes pueden ofrecer mejores resultados, a menudo son más costosos y requieren más tiempo para ejecutarse. Considera usarlos de manera selectiva, por ejemplo, para experimentos clave o análisis finales, mientras confías en modelos más pequeños y eficientes para tareas iterativas o prototipos iniciales.

Cuando los recursos son limitados, **optimiza ajustando finamente modelos más pequeños** en tu conjunto de datos específico o combinando modelos preentrenados con prompts específicos para tareas para lograr el equilibrio deseado entre rendimiento y eficiencia computacional.

-----

#### [Consejo #3] ✅ Puedes cargar guardados anteriores desde puntos de control ✅

**Si pierdes progreso, la conexión a internet o si una subtarea falla, siempre puedes cargar desde un estado anterior.** Todo tu progreso se guarda por defecto en la variable `state_saves`, que almacena cada punto de control individual. Simplemente pasa los siguientes argumentos al ejecutar `ai_lab_repo.py`

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [Consejo #4] 🈯 Si estás ejecutando en un idioma que no sea inglés 🈲

Si estás ejecutando Agent Laboratory en un idioma que no sea inglés, no hay problema, solo asegúrate de proporcionar una bandera de idioma a los agentes para realizar la investigación en tu idioma preferido. Ten en cuenta que no hemos estudiado extensivamente la ejecución de Agent Laboratory en otros idiomas, así que asegúrate de reportar cualquier problema que encuentres.

Por ejemplo, si estás ejecutando en chino:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [Consejo #5] 🌟 Hay mucho margen para mejorar 🌟

Hay mucho margen para mejorar esta base de código, así que si terminas haciendo cambios y quieres ayudar a la comunidad, ¡no dudes en compartir los cambios que has realizado! ¡Esperamos que esta herramienta te sea de ayuda!

## Referencia / Bibtex



```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```