import React, { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import {
  Typography,
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  Select,
  Checkbox,
  Button,
  Collapse,
  Divider,
  Space,
  Alert,
  message,
} from 'antd';
import { useTranslation } from 'react-i18next';

import {
  ResearchPayload,
  ResearchResponse,
  SavesResponse,
  SettingsData,
} from '@/types';
import { getSaves, getSettings, postResearch, saveSettings } from '@/api';
import { AVAILABLE_LANGUAGES, AVAILABLE_MODELS } from '@/config';

const { TextArea } = Input;
const { Panel } = Collapse;

// Optional styled container for layout
const Container = styled.div`
  padding: 24px;
  background: ${(props) => (props.theme.isDark ? '#1f1f1f' : '#fff')};
  min-height: calc(100vh - 64px); // Account for header height
  border-radius: 8px;
  margin: 0 24px;
`;

// Interface for the form values (client-side keys)
interface FormValues {
  researchTopic: string;
  apiKey: string;
  deepseekApiKey: string;
  googleApiKey: string;
  anthropicApiKey: string;
  llmBackend: string;
  customLlmBackend: string;
  ollamaMaxTokens: number;
  language: string;
  copilotMode: boolean;
  compileLatex: boolean;
  numPapersLitReview: number;
  mlesolverMaxSteps: number;
  papersolverMaxSteps: number;
  loadExisting: boolean;
  existingSaves: string;
}

const ConfigurationPage: React.FC = () => {
  const { t } = useTranslation();
  const [messageApi] = message.useMessage();
  const [form] = Form.useForm<FormValues>();
  const [savedStates, setSavedStates] = useState<string[]>([]);
  const [status, setStatus] = useState<string>('');

  // Load initial settings and saved states on mount
  useEffect(() => {
    getSettings()
      .then((data: SettingsData) => {
        form.setFieldsValue({
          researchTopic: data.research_topic || '',
          apiKey: data.api_key || '',
          deepseekApiKey: data.deepseek_api_key || '',
          googleApiKey: data.google_api_key || '',
          anthropicApiKey: data.anthropic_api_key || '',
          llmBackend: data.llm_backend || 'o1-mini',
          customLlmBackend: data.custom_llm_backend || '',
          ollamaMaxTokens: data.ollama_max_tokens || 2048,
          language: data.language || 'English',
          copilotMode: data.copilot_mode || false,
          compileLatex: data.compile_latex || true,
          numPapersLitReview: data.num_papers_lit_review || 5,
          mlesolverMaxSteps: data.mlesolver_max_steps || 3,
          papersolverMaxSteps: data.papersolver_max_steps || 5,
          loadExisting: false,
          existingSaves: 'No saved states found',
        });
      })
      .catch((err: Error) => {
        console.error(err);
        void messageApi.error(t('configurationPage.messages.loadError'));
      });

    getSaves()
      .then((res: SavesResponse) => {
        setSavedStates(res.saves);
      })
      .catch((err: Error) => {
        console.error(err);
        void messageApi.error(t('configurationPage.messages.savesError'));
      });
  }, [form, messageApi, t]);

  // Handle form submission
  const handleStartResearch = (values: FormValues): void => {
    const payload: ResearchPayload = {
      research_topic: values.researchTopic,
      api_key: values.apiKey,
      deepseek_api_key: values.deepseekApiKey,
      google_api_key: values.googleApiKey,
      anthropic_api_key: values.anthropicApiKey,
      llm_backend: values.llmBackend,
      custom_llm_backend: values.customLlmBackend,
      ollama_max_tokens: values.ollamaMaxTokens,
      language: values.language,
      copilot_mode: values.copilotMode,
      compile_latex: values.compileLatex,
      num_papers_lit_review: values.numPapersLitReview,
      mlesolver_max_steps: values.mlesolverMaxSteps,
      papersolver_max_steps: values.papersolverMaxSteps,
      load_existing: values.loadExisting,
      load_existing_path: values.existingSaves,
    };

    postResearch(payload)
      .then((res: ResearchResponse) => {
        setStatus(res.status || 'No status returned');
      })
      .catch((err: Error) => {
        console.error(err);
        setStatus('Error starting research process');
      });
  };

  // Refresh saved states
  const handleRefreshSaves = (): void => {
    getSaves()
      .then((res: SavesResponse) => {
        setSavedStates(res.saves);
        void messageApi.success('Saved states refreshed!');
      })
      .catch((err: Error) => {
        console.error(err);
        void messageApi.error('Failed to refresh saved states');
      });
  };

  // Add auto-save functionality
  const debouncedSave = useCallback(
    debounce((values: FormValues) => {
      const payload: ResearchPayload = {
        research_topic: values.researchTopic,
        api_key: values.apiKey,
        deepseek_api_key: values.deepseekApiKey,
        google_api_key: values.googleApiKey,
        anthropic_api_key: values.anthropicApiKey,
        llm_backend: values.llmBackend,
        custom_llm_backend: values.customLlmBackend,
        ollama_max_tokens: values.ollamaMaxTokens,
        language: values.language,
        copilot_mode: values.copilotMode,
        compile_latex: values.compileLatex,
        num_papers_lit_review: values.numPapersLitReview,
        mlesolver_max_steps: values.mlesolverMaxSteps,
        papersolver_max_steps: values.papersolverMaxSteps,
        load_existing: values.loadExisting,
        load_existing_path: values.existingSaves,
      };
      saveSettings(payload).catch((err: Error) => {
        console.error('Failed to auto-save settings:', err);
      });
    }, 5000),
    [],
  );

  // Watch form changes for auto-save
  const handleFormChange = useCallback(() => {
    const values = form.getFieldsValue();
    debouncedSave(values);
  }, [form, debouncedSave]);

  return (
    <Container>
      <Form<FormValues>
        form={form}
        layout='vertical'
        onFinish={handleStartResearch}
        onValuesChange={handleFormChange}
      >
        <Row gutter={24}>
          {/* Left Column: Basic Configuration */}
          <Col xs={24} md={12}>
            <Divider>
              <Typography.Text>
                {t('configurationPage.LLM Configuration')}
              </Typography.Text>
            </Divider>

            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label={t('configurationPage.LLM Backend')}
                  name='llmBackend'
                >
                  <Select
                    options={AVAILABLE_MODELS.map((model) => ({
                      label: model,
                      value: model,
                    }))}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={t('configurationPage.Language')}
                  name='language'
                >
                  <Select
                    options={AVAILABLE_LANGUAGES.map((lang) => ({
                      label: lang,
                      value: lang,
                    }))}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Collapse style={{ marginBottom: 16 }}>
              <Panel
                header={t('configurationPage.API Key Configuration')}
                key='1'
              >
                <Form.Item
                  label={t('configurationPage.OpenAI API Key')}
                  name='apiKey'
                  tooltip={t(
                    "configurationPage.For Ollama, set API key to 'ollama'",
                  )}
                >
                  <Input.Password
                    placeholder={t(
                      'configurationPage.Enter your OpenAI API key',
                    )}
                  />
                </Form.Item>

                <Form.Item
                  label={t('configurationPage.DeepSeek API Key (Optional)')}
                  name='deepseekApiKey'
                >
                  <Input.Password
                    placeholder={t(
                      'configurationPage.Enter your DeepSeek API key',
                    )}
                  />
                </Form.Item>

                <Form.Item
                  label={t('configurationPage.Google API Key (Optional)')}
                  name='googleApiKey'
                >
                  <Input.Password
                    placeholder={t(
                      'configurationPage.Enter your Google API key',
                    )}
                  />
                </Form.Item>

                <Form.Item
                  label={t('configurationPage.Anthropic API Key (Optional)')}
                  name='anthropicApiKey'
                >
                  <Input.Password
                    placeholder={t(
                      'configurationPage.Enter your Anthropic API key',
                    )}
                  />
                </Form.Item>
              </Panel>
            </Collapse>

            <Divider>
              <Typography.Text>
                {t('configurationPage.Ollama Configuration')}
              </Typography.Text>
            </Divider>

            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label={t('configurationPage.Custom LLM Backend (For Ollama)')}
                  name='customLlmBackend'
                >
                  <Input
                    placeholder={t(
                      'configurationPage.Enter your custom model string (optional)',
                    )}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label={t('configurationPage.Custom Max Tokens for Ollama')}
                  name='ollamaMaxTokens'
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={1}
                    placeholder='2048'
                  />
                </Form.Item>
              </Col>
            </Row>

            <Alert
              closable={true}
              type={'info'}
              showIcon={true}
              message={t('configurationPage.Instructions for Use:')}
              description={
                <ul>
                  {[
                    t('configurationPage.Fill in the research configuration.'),
                    t(
                      'configurationPage.Optionally load a previous research state.',
                    ),
                    t(
                      'configurationPage.For standard models select from the LLM dropdown.',
                    ),
                    t("configurationPage.For Ollama set API key to 'ollama'."),
                    t(
                      'configurationPage.Click "Start Research in Terminal" to launch a new terminal.',
                    ),
                  ].map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              }
            />
          </Col>

          {/* Right Column: Advanced Configuration */}
          <Col xs={24} md={12}>
            <Divider>
              <Typography.Text>
                {t('configurationPage.Research Settings')}
              </Typography.Text>
            </Divider>

            <Form.Item
              label={t('configurationPage.Research Topic')}
              name='researchTopic'
              rules={[
                {
                  required: true,
                  message: t('configurationPage.Please enter a research topic'),
                },
              ]}
            >
              <TextArea
                placeholder={t('configurationPage.Enter your research idea...')}
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </Form.Item>

            <Row gutter={12}>
              <Col span={12}>
                <Form.Item name='copilotMode' valuePropName='checked'>
                  <Checkbox>
                    {t('configurationPage.Enable Human-in-Loop Mode')}
                  </Checkbox>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name='compileLatex' valuePropName='checked'>
                  <Checkbox>{t('configurationPage.Compile LaTeX')}</Checkbox>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={12}>
              <Col span={8}>
                <Form.Item
                  label={t('configurationPage.Papers in Literature Review')}
                  name='numPapersLitReview'
                >
                  <InputNumber min={1} max={20} style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  label={t('configurationPage.MLE Solver Max Steps')}
                  name='mlesolverMaxSteps'
                >
                  <InputNumber min={1} max={10} style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  label={t('configurationPage.Paper Solver Max Steps')}
                  name='papersolverMaxSteps'
                >
                  <InputNumber min={1} max={10} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Divider>
              <Typography.Text>
                {t('configurationPage.Saved States')}
              </Typography.Text>
            </Divider>

            <Space direction={'vertical'} style={{ width: '100%' }}>
              <Row gutter={12} align={'bottom'} style={{ marginBottom: 16 }}>
                <Col span={16}>
                  <Form.Item
                    name='existingSaves'
                    label={t('configurationPage.Select Saved Research State')}
                    style={{ width: '100%', marginBottom: 0 }}
                  >
                    <Select style={{ width: '100%' }}>
                      {savedStates.length > 0 ? (
                        savedStates.map((item: string) => (
                          <Select.Option key={item} value={item}>
                            {item}
                          </Select.Option>
                        ))
                      ) : (
                        <Select.Option value='No saved states found'>
                          {t('configurationPage.No saved states found')}
                        </Select.Option>
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Button onClick={handleRefreshSaves} block={true}>
                    {t('configurationPage.Refresh Saved States')}
                  </Button>
                </Col>
              </Row>
              <Form.Item name='loadExisting' valuePropName='checked'>
                <Checkbox>
                  {t('configurationPage.Load Existing Research State')}
                </Checkbox>
              </Form.Item>
            </Space>
          </Col>
        </Row>

        <Divider />

        {/* Bottom row: Start button */}
        <Row justify='center' style={{ marginTop: 16 }}>
          <Button type='primary' htmlType='submit' block={true}>
            {t('configurationPage.Start Research in Terminal')}
          </Button>
        </Row>

        {/* Status Section */}
        <Row style={{ marginTop: 24 }}>
          <Col span={24}>
            <Collapse>
              <Panel header={t('configurationPage.Status')} key='status'>
                <div
                  dangerouslySetInnerHTML={{ __html: status }}
                  style={{ whiteSpace: 'pre-wrap' }}
                />
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ConfigurationPage;
