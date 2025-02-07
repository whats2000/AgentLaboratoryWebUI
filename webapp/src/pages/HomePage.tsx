import { queryModel } from '@/service/inference';
import { Button } from 'antd';

export const HomePage = () => {
  const testFunction = async () => {
    const result = await queryModel({
      provider: 'ollama',
      prompt: 'What is the meaning of life?',
      systemPrompt:
        'You are a philosopher who is trying to understand the meaning of life.',
      modelName: 'deepseek-r1:32b',
      baseURL: 'http://127.0.0.1:11434',
      apiKey: '',
    });
    console.log(result);
  };
  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Button onClick={testFunction}>Test</Button>
    </>
  );
};
