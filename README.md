# AgentLaboratoryWebUI

The none official implementation webui for "Agent Laboratory: Using LLM Agents as Research Assistants" in TypeScript React.

## Prerequisites

### Windows

1. Install Node.js
   - Download the LTS version from [Node.js official website](https://nodejs.org/)
   - Or using winget: `winget install OpenJS.NodeJS.LTS`
   - Verify installation: `node --version` and `npm --version`

2. Install Yarn (optional but recommended)
   ```powershell
   npm install --global yarn
   yarn --version
   ```

### macOS

1. Install Node.js
   - Using Homebrew:
     ```bash
     brew install node
     node --version
     npm --version
     ```
   - Or download from [Node.js official website](https://nodejs.org/)

2. Install Yarn (optional but recommended)
   ```bash
   brew install yarn
   # or
   npm install --global yarn
   ```

### Linux (Ubuntu/Debian)

1. Install Node.js
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt-get install -y nodejs
   node --version
   npm --version
   ```

2. Install Yarn (optional but recommended)
   ```bash
   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   sudo apt update
   sudo apt install yarn
   ```

## Development Setup

1. Clone the repository
   ```bash
   git clonehttps://github.com/whats2000/AgentLaboratoryWebUI.git
   cd AgentLaboratoryWebUI
   ```

2. Install dependencies
   ```bash
   # Using npm
   npm install

   # Using yarn (recommended)
   yarn
   ```

3. Start development server
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev
   ```

   The development server will start at http://localhost:5173

## Building for Production

1. Build the project
   ```bash
   # Using npm
   npm run build

   # Using yarn
   yarn build
   ```

2. Preview production build (optional)
   ```bash
   # Using npm
   npm run preview

   # Using yarn
   yarn preview
   ```

3. The built files will be in the `dist` folder, ready to be deployed.

## License

We use the same MIT License as the [AgentLaboratory](https://github.com/SamuelSchmidgall/AgentLaboratory)

## Citation

The code is used for interaction for [AgentLaboratory](https://github.com/SamuelSchmidgall/AgentLaboratory) repository.
