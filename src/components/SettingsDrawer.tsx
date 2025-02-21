import React from 'react';
import { Drawer, Form, Input, Button } from 'antd';

interface SettingsDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SettingsDrawer: React.FC<SettingsDrawerProps> = ({ open, onClose }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { apiUrl: string }) => {
    localStorage.setItem('agent-lab.apiUrl', values.apiUrl);
    // Reload to apply new API URL
    window.location.reload();
  };

  React.useEffect(() => {
    const savedApiUrl = localStorage.getItem('agent-lab.apiUrl');
    form.setFieldsValue({
      apiUrl: savedApiUrl || 'http://localhost:5000',
    });
  }, [form]);

  return (
    <Drawer
      title='Settings'
      placement='right'
      onClose={onClose}
      open={open}
      width={400}
    >
      <Form form={form} layout='vertical' onFinish={handleSubmit}>
        <Form.Item
          label='API URL (Connect to the backend)'
          name='apiUrl'
          rules={[{ required: true, message: 'Please input API URL!' }]}
        >
          <Input placeholder='http://localhost:5000' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            Save Settings
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default SettingsDrawer;
