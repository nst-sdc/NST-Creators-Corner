# NST Creators Corner

A modern web application for creators to showcase their work and connect with others in the creative community.

## Features

- Modern and responsive design
- User authentication and profiles
- Content creation and sharing
- Community engagement features
- Real-time updates

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Code Quality**: Prettier, ESLint
- **Version Control**: Git

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/NST-Creators-Corner.git
   cd NST-Creators-Corner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   # Example environment variables
   NEXT_PUBLIC_API_URL=your_api_url
   DATABASE_URL=your_database_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code using Prettier
- `npm run format:check` - Check if code is formatted correctly

## Code Formatting

This project uses Prettier for code formatting. To format your code:

```bash
npm run format
```

To check if your code is properly formatted:

```bash
npm run format:check
```

## Project Structure

```
NST-Creators-Corner/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # Reusable components
│   ├── lib/          # Utility functions and libraries
│   └── styles/       # Global styles
├── public/           # Static assets
├── .prettierrc      # Prettier configuration
├── .prettierignore  # Prettier ignore rules
└── package.json     # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc. 
