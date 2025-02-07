# Agent Laboratory: Sử dụng Đại Diện LLM làm Trợ Lý Nghiên Cứu

<p align="center">
  <img src="../media/AgentLabLogo.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>


<p align="center">
    【<a href="../README.md">English</a> | <a href="../readme/README-chinese.md">中文</a> | <a href="../readme/README-japanese.md">日本語</a> | <a href="../readme/README-korean.md">한국어</a> | <a href="../readme/README-filipino.md">Filipino</a> | <a href="../readme/README-french.md">Français</a> | <a href="../readme/README-slovak.md">Slovenčina</a> | <a href="../readme/README-portugese.md">Português</a> | <a href="../readme/README-spanish.md">Español</a> | <a href="../readme/README-turkish.md">Türkçe</a> | <a href="../readme/README-hindi.md">हिंदी</a> | <a href="../readme/README-bengali.md">বাংলা</a> | Tiếng Việt | <a href="../readme/README-russian.md">Русский</a> | <a href="../readme/README-arabic.md">العربية</a> | <a href="../readme/README-farsi.md">فارسی</a> | <a href="../readme/README-italian.md">Italiano</a>】
</p>

<p align="center">
    【🌐 <a href="https://agentlaboratory.github.io/">Website</a> | 💻 <a href="https://github.com/SamuelSchmidgall/AgentLaboratory">Software</a> | 🎥 <a href="https://agentlaboratory.github.io/#youtube-video">Video</a> |  📚 <a href="https://agentlaboratory.github.io/#examples-goto">Example Paper</a> | 📰 <a href="https://agentlaboratory.github.io/#citation-ref">Citation</a>】
</p>

## 📖 Tổng Quan

- **Agent Laboratory** là một quy trình nghiên cứu tự động từ đầu đến cuối, nhằm hỗ trợ **bạn** với tư cách là nhà nghiên cứu con người trong việc **triển khai các ý tưởng nghiên cứu của bạn**. Agent Laboratory bao gồm các đại diện chuyên biệt được điều khiển bởi các mô hình ngôn ngữ lớn để hỗ trợ bạn trong toàn bộ quy trình nghiên cứu—từ việc thực hiện đánh giá tài liệu và xây dựng kế hoạch đến thực hiện các thí nghiệm và viết các báo cáo toàn diện.
- Hệ thống này không được thiết kế để thay thế sự sáng tạo của bạn mà để bổ sung cho nó, cho phép bạn tập trung vào ý tưởng và tư duy phản biện trong khi tự động hóa các nhiệm vụ lặp đi lặp lại và tốn thời gian như mã hóa và tài liệu hóa. Bằng cách đáp ứng các mức độ tài nguyên tính toán và sự tham gia của con người khác nhau, Agent Laboratory nhằm mục tiêu tăng tốc khám phá khoa học và tối ưu hóa năng suất nghiên cứu của bạn.

<p align="center">
  <img src="../media/AgentLab.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

### 🔬 Agent Laboratory hoạt động như thế nào?

- Agent Laboratory bao gồm ba giai đoạn chính hướng dẫn hệ thống quy trình nghiên cứu một cách có hệ thống: (1) Đánh giá Tài liệu, (2) Thực nghiệm, và (3) Viết Báo cáo. Trong mỗi giai đoạn, các đại diện chuyên biệt được điều khiển bởi LLM hợp tác để đạt được các mục tiêu riêng biệt, tích hợp các công cụ bên ngoài như arXiv, Hugging Face, Python, và LaTeX để tối ưu hóa kết quả. Quy trình làm việc có cấu trúc này bắt đầu với việc thu thập và phân tích độc lập các bài báo nghiên cứu liên quan, tiến tới lập kế hoạch hợp tác và chuẩn bị dữ liệu, và kết thúc với việc thực hiện các thí nghiệm tự động và tạo báo cáo toàn diện. Chi tiết về các vai trò cụ thể của đại diện và đóng góp của họ trong các giai đoạn này được thảo luận trong bài báo.

<p align="center">
  <img src="../media/AgentLabWF.png" alt="Demonstration of the flow of AgentClinic" style="width: 99%;">
</p>

## 🖥️ Cài Đặt

### Tùy chọn môi trường ảo Python


1. **Nhân bản kho lưu trữ GitHub**: Bắt đầu bằng cách nhân bản kho lưu trữ bằng lệnh:
    ```bash
    git clone git@github.com:SamuelSchmidgall/AgentLaboratory.git
    ```

2. **Thiết lập và Kích hoạt Môi trường Python**
    ```bash
    python -m venv venv_agent_lab
    ```

    - Bây giờ kích hoạt môi trường này:
    ```bash
    source venv_agent_lab/bin/activate
    ```

3. **Cài đặt các thư viện cần thiết**
    ```bash
    pip install -r requirements.txt
    ```

4. **Cài đặt pdflatex [TUÝ CHỌN]**
    ```bash
    sudo apt install pdflatex
    ```

    - Điều này cho phép mã nguồn latex được biên dịch bởi các đại diện.
    - **[QUAN TRỌNG]** Nếu bước này không thể chạy do không có quyền sudo, việc biên dịch pdf có thể được tắt bằng cách chạy Agent Laboratory với cờ --compile_latex đặt thành false: --compile_latex=False

5. **Bây giờ chạy Agent Laboratory!**
    
    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA"
    ```

    hoặc, nếu bạn không cài đặt pdflatex

    ```bash
    python ai_lab_repo.py --api-key "API_KEY_HERE" --llm-backend "o1-mini" --research-topic "YOUR RESEARCH IDEA" --compile_latex=False
    ```

-----

## Mẹo để đạt được kết quả nghiên cứu tốt hơn


#### [Mẹo #1] 📝 Hãy chắc chắn ghi chép kỹ lưỡng! 📝

**Việc ghi chép kỹ lưỡng là quan trọng** để giúp đại diện của bạn hiểu bạn đang muốn đạt được điều gì trong dự án của mình, cũng như bất kỳ sở thích về phong cách nào. Ghi chú có thể bao gồm bất kỳ thí nghiệm nào bạn muốn các đại diện thực hiện, cung cấp các khóa API, các biểu đồ hoặc hình vẽ cụ thể bạn muốn bao gồm, hoặc bất cứ điều gì bạn muốn đại diện biết khi thực hiện nghiên cứu.

Đây cũng là cơ hội của bạn để cho đại diện biết **các tài nguyên tính toán mà nó có quyền truy cập**, ví dụ: GPU (số lượng, loại GPU, số GB), CPU (số lượng lõi, loại CPU), hạn chế về lưu trữ, và các thông số phần cứng.

Để thêm ghi chú, bạn phải sửa cấu trúc task_notes_LLM bên trong ai_lab_repo.py. Dưới đây là một ví dụ về bộ ghi chú được sử dụng cho một số thí nghiệm của chúng tôi. 


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

#### [Mẹo #2] 🚀 Sử dụng các mô hình mạnh mẽ hơn thường dẫn đến nghiên cứu tốt hơn 🚀

Khi tiến hành nghiên cứu, **lựa chọn mô hình có thể ảnh hưởng đáng kể đến chất lượng kết quả**. Các mô hình mạnh mẽ hơn thường có độ chính xác cao hơn, khả năng lý luận tốt hơn và khả năng tạo báo cáo tốt hơn. Nếu tài nguyên tính toán cho phép, hãy ưu tiên sử dụng các mô hình tiên tiến như o1-(mini/preview) hoặc các mô hình ngôn ngữ lớn tiên tiến tương tự.

Tuy nhiên, **quan trọng là phải cân bằng giữa hiệu suất và chi phí hiệu quả**. Trong khi các mô hình mạnh mẽ có thể mang lại kết quả tốt hơn, chúng thường đắt hơn và tốn thời gian chạy. Hãy cân nhắc sử dụng chúng một cách chọn lọc—ví dụ, cho các thí nghiệm chính hoặc phân tích cuối cùng—trong khi dựa vào các mô hình nhỏ hơn, hiệu quả hơn cho các nhiệm vụ lặp đi lặp lại hoặc phát mẫu ban đầu.

Khi tài nguyên hạn chế, **tối ưu hóa bằng cách tinh chỉnh các mô hình nhỏ hơn** trên bộ dữ liệu cụ thể của bạn hoặc kết hợp các mô hình đã được huấn luyện trước với các gợi ý cụ thể cho nhiệm vụ để đạt được sự cân bằng mong muốn giữa hiệu suất và hiệu quả tính toán.

-----

#### [Mẹo #3] ✅ Bạn có thể tải lại các lưu trạng thái trước từ các điểm kiểm tra ✅

**Nếu bạn mất tiến độ, kết nối internet, hoặc nếu một nhiệm vụ phụ thất bại, bạn luôn có thể tải lại từ trạng thái trước đó.** Tất cả tiến độ của bạn được lưu mặc định trong biến state_saves, lưu trữ từng điểm kiểm tra riêng lẻ. Chỉ cần truyền các tham số sau khi chạy ai_lab_repo.py

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA" --llm-backend "o1-mini" --load-existing True --load-existing-path "save_states/LOAD_PATH"
```

-----

#### [Mẹo #4] 🈯 Nếu bạn đang chạy bằng ngôn ngữ khác tiếng Anh 🈲

Nếu bạn đang chạy Agent Laboratory bằng ngôn ngữ khác tiếng Anh, không vấn đề gì, chỉ cần đảm bảo cung cấp cờ ngôn ngữ cho các đại diện để thực hiện nghiên cứu bằng ngôn ngữ bạn mong muốn. Lưu ý rằng chúng tôi chưa nghiên cứu kỹ việc chạy Agent Laboratory bằng các ngôn ngữ khác, vì vậy hãy chắc chắn báo cáo bất kỳ vấn đề nào bạn gặp phải.

Ví dụ, nếu bạn đang chạy bằng tiếng Trung:

```bash
python ai_lab_repo.py --api-key "API_KEY_HERE" --research-topic "YOUR RESEARCH IDEA (in your language)" --llm-backend "o1-mini" --language "中文"
```

----

#### [Mẹo #5] 🌟 Có rất nhiều cơ hội để cải thiện 🌟

Có rất nhiều cơ hội để cải thiện cơ sở mã này, vì vậy nếu bạn cuối cùng thay đổi và muốn giúp cộng đồng, hãy cảm thấy tự do chia sẻ các thay đổi mà bạn đã thực hiện! Chúng tôi hy vọng công cụ này sẽ giúp bạn!

## Tài liệu Tham khảo / Bibtex

```bibtex
@preprint{schmidgall2025AgentLaboratory,
  title={Agent Laboratory: Using LLM Agents as Research Assistants},
  author={Schmidgall, Samuel and Su, Yusheng and Wang, Ze and Sun, Ximeng and Wu, Jialian and Yu, Xiadong and Liu, Jiang, Liu, Zicheng and Barsoum, Emad},
  year={2025}
}
```
