# Upgrading Node.js for Vite Project

## Current Issue
- Your Node.js version: 18.19.1
- Required Node.js version: 20.19+ or 22.12+
- Vite version: 7.2.4

## Solution: Upgrade Node.js using nvm

### Step 1: Install nvm (if not already installed)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Then reload your shell:
```bash
source ~/.bashrc
```

### Step 2: Install Node.js 22 (LTS)
```bash
nvm install 22
nvm use 22
nvm alias default 22
```

### Step 3: Verify installation
```bash
node --version
```
Should show: v22.x.x or higher

### Step 4: Navigate to project and run
```bash
cd /mnt/d/JavaScript/vite-project
npm run dev
```

## Alternative: Install Node.js directly (without nvm)

If you prefer not to use nvm, you can install Node.js 22 directly:

```bash
# Remove old Node.js
sudo apt remove nodejs npm

# Install Node.js 22.x
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify
node --version
npm --version
```

Then navigate to your project and run:
```bash
cd /mnt/d/JavaScript/vite-project
npm run dev
```

