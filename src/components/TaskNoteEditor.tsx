import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  Space,
  Typography,
  Tooltip,
  Collapse,
  Modal,
  Drawer,
  Flex,
} from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
  SaveOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { TaskNote, Phase } from '@/types';

const { TextArea } = Input;
const { Option } = Select;
const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

interface TaskNoteEditorProps {
  taskNotes: TaskNote[];
  onChange: (updatedNotes: TaskNote[]) => void;
  isOpen: boolean;
  onClose: () => void;
}

const TaskNoteEditor: React.FC<TaskNoteEditorProps> = ({
  taskNotes,
  onChange,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();
  const [draftTaskNotes, setDraftTaskNotes] = useState<TaskNote[]>(taskNotes);
  const [activeKey, setActiveKey] = useState<string[]>([]);
  const [isJsonPreviewVisible, setIsJsonPreviewVisible] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    setDraftTaskNotes(taskNotes);
  }, [taskNotes]);

  const availablePhases: Phase[] = [
    'literature review',
    'plan formulation',
    'data preparation',
    'running experiments',
    'results interpretation',
    'report writing',
    'report refinement',
  ];

  const handleAddNote = () => {
    const newNote: TaskNote = {
      phases: [],
      note: '',
    };
    const updatedNotes = [...draftTaskNotes, newNote];
    setDraftTaskNotes(updatedNotes);
    setHasUnsavedChanges(true);

    // Open the newly added panel
    setActiveKey([...activeKey, `note-${updatedNotes.length - 1}`]);
  };

  const handleRemoveNote = (index: number) => {
    const updatedNotes = draftTaskNotes.filter((_, i) => i !== index);
    setDraftTaskNotes(updatedNotes);
    setHasUnsavedChanges(true);
  };

  const handleNoteChange = (
    index: number,
    key: keyof TaskNote,
    value: string | Phase[],
  ) => {
    const updatedNotes = [...draftTaskNotes];
    updatedNotes[index] = {
      ...updatedNotes[index],
      [key]: value,
    };
    setDraftTaskNotes(updatedNotes);
    setHasUnsavedChanges(true);
  };

  const handleSaveChanges = () => {
    onChange(draftTaskNotes);
    setHasUnsavedChanges(false);
  };

  const toggleJsonPreview = () => {
    setIsJsonPreviewVisible(!isJsonPreviewVisible);
  };

  const lowerDashCaseToCamelCase = (str: string) => {
    return str.replace(/_([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  return (
    <Drawer
      title={
        <Flex align={'center'} justify={'space-between'}>
          <Title level={4} style={{ margin: 0 }}>
            {t('taskNotes.title')}
          </Title>
          <Flex align={'center'}>
            <Tooltip title={t('taskNotes.guidanceTooltip')}>
              <InfoCircleOutlined style={{ fontSize: 16 }} />
            </Tooltip>
            <Tooltip title={t('taskNotes.viewJsonTooltip')}>
              <Button
                icon={<CodeOutlined />}
                onClick={toggleJsonPreview}
                type='text'
              />
            </Tooltip>
          </Flex>
        </Flex>
      }
      placement='right'
      width={600}
      onClose={onClose}
      open={isOpen}
    >
      <Space direction='vertical' style={{ width: '100%', marginBottom: 16 }}>
        <Space size={'small'}>
          <Space direction={'vertical'}>
            <Text>{t('taskNotes.availableVariables')}:</Text>
            <ul>
              {[
                'research_topic',
                'api_key',
                'deepseek_api_key',
                'google_api_key',
                'anthropic_api_key',
                'language',
                'llm_backend',
              ].map((variable) => (
                <li key={variable}>
                  <Text code>{`{{${variable}}}`}</Text>:{' '}
                  {t(
                    `taskNotes.${lowerDashCaseToCamelCase(variable).replace(/\s+/g, '')}`,
                  )}
                </li>
              ))}
            </ul>
          </Space>
        </Space>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            type='dashed'
            onClick={handleAddNote}
            style={{ flex: 1 }}
            icon={<PlusOutlined />}
          >
            {t('taskNotes.addTaskNote')}
          </Button>
          <Button
            type='primary'
            onClick={handleSaveChanges}
            icon={<SaveOutlined />}
            disabled={!hasUnsavedChanges}
          >
            {t('taskNotes.saveChanges')}
          </Button>
        </div>
      </Space>

      {hasUnsavedChanges && (
        <Paragraph type='warning' style={{ marginBottom: 16 }}>
          {t('taskNotes.unsavedChangesWarning')}
        </Paragraph>
      )}

      <Collapse
        activeKey={activeKey}
        onChange={(keys) => setActiveKey(keys as string[])}
      >
        {draftTaskNotes.map((note, index) => (
          <Panel
            key={`note-${index}`}
            header={`${t('taskNotes.taskNote')} ${index + 1}${
              note.phases.length > 0
                ? ` - ${t('taskNotes.appliesTo', {
                    count: note.phases.length,
                    total: availablePhases.length,
                  })}`
                : ''
            }`}
            extra={
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveNote(index);
                }}
              />
            }
          >
            <Form layout='vertical'>
              <Form.Item label={t('taskNotes.appliesToPhases')}>
                <Select
                  mode='multiple'
                  placeholder={t('taskNotes.selectPhases')}
                  value={note.phases}
                  onChange={(value: Phase[]) =>
                    handleNoteChange(index, 'phases', value)
                  }
                  style={{ width: '100%' }}
                >
                  {availablePhases.map((phase) => (
                    <Option key={phase} value={phase}>
                      {t(`taskNotes.phases.${phase.replace(/\s+/g, '')}`)}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label={t('taskNotes.noteContent')}>
                <TextArea
                  rows={4}
                  value={note.note}
                  onChange={(e) =>
                    handleNoteChange(index, 'note', e.target.value)
                  }
                  placeholder={t('taskNotes.enterNoteContent')}
                />
              </Form.Item>
            </Form>
          </Panel>
        ))}
      </Collapse>

      <Modal
        title={t('taskNotes.jsonPreviewTitle')}
        open={isJsonPreviewVisible}
        onCancel={() => setIsJsonPreviewVisible(false)}
        footer={[
          <Button key='close' onClick={() => setIsJsonPreviewVisible(false)}>
            {t('taskNotes.close')}
          </Button>,
        ]}
        width={700}
      >
        <pre
          style={{
            padding: '12px',
            borderRadius: '4px',
            maxHeight: '400px',
            overflow: 'auto',
          }}
        >
          {JSON.stringify(draftTaskNotes, null, 2)}
        </pre>
      </Modal>
    </Drawer>
  );
};

export default TaskNoteEditor;
