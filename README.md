# Smile 'n Win Website

A modern, responsive website for the Smile 'n Win charity organization, built with Next.js 15 and TypeScript. The website showcases the organization's mission to bring joy and support to children in need through various programs and initiatives.

## 🌟 Features

- **Modern Design**: Clean, accessible, and mobile-first responsive design
- **Performance Optimized**: Built with Next.js 15 App Router for optimal performance
- **Accessibility First**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and optimized content
- **Type Safe**: Full TypeScript implementation
- **Component Library**: Reusable UI components with shadcn/ui
- **Donation Integration**: Ready for payment gateway integration
- **Multi-page Structure**: Complete website with all essential pages

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📁 Project Structure

\`\`\`
smile-n-win-website/
├── app/                          # Next.js App Router directory
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── cookies/                  # Cookie policy page
│   ├── donate/                   # Donation page
│   ├── privacy/                  # Privacy policy page
│   ├── programs/                 # Programs page
│   ├── stories/                  # Success stories page
│   ├── terms/                    # Terms of service page
│   ├── transparency/             # Transparency page
│   ├── volunteer/                # Volunteer page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   ├── footer.tsx               # Site footer
│   ├── header.tsx               # Site header
│   └── theme-provider.tsx       # Theme context provider
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities
├── public/                      # Static assets
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
\`\`\`

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js**: Version 18.17 or later
- **npm**: Version 9 or later (or yarn/pnpm)
- **Git**: For version control

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd smile-n-win-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables** (if needed)
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🎨 Design System

The website uses a consistent design system with:

- **Colors**: Primary blue (#3B82F6), secondary colors for accents
- **Typography**: System fonts with proper hierarchy
- **Spacing**: Consistent spacing scale using Tailwind
- **Components**: Reusable UI components from shadcn/ui
- **Responsive**: Mobile-first responsive design

## 📄 Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Homepage | `/` | Main landing page with hero, mission, and key information |
| About | `/about` | Organization history, mission, and team information |
| Programs | `/programs` | Details about charity programs and initiatives |
| Stories | `/stories` | Success stories and impact testimonials |
| Donate | `/donate` | Donation page with multiple giving options |
| Volunteer | `/volunteer` | Volunteer opportunities and application |
| Transparency | `/transparency` | Financial transparency and annual reports |
| Contact | `/contact` | Contact information and inquiry form |
| Privacy Policy | `/privacy` | Privacy policy and data handling |
| Terms of Service | `/terms` | Terms and conditions |
| Cookie Policy | `/cookies` | Cookie usage and preferences |

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow ESLint and Prettier configurations
- Use functional components with hooks
- Implement proper error boundaries
- Write descriptive commit messages

### Component Guidelines

- Keep components small and focused
- Use proper TypeScript interfaces
- Implement accessibility features
- Add proper error handling
- Write reusable components in `/components`

### Styling Guidelines

- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use semantic HTML elements
- Ensure proper color contrast

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Import project from GitHub/GitLab
   - Vercel will auto-detect Next.js configuration

2. **Environment Variables**
   - Add any required environment variables in Vercel dashboard

3. **Deploy**
   - Push to main branch for automatic deployment

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔐 Environment Variables

Create a `.env.local` with SMTP credentials for email delivery:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_SECURE=false
MAIL_FROM="Smile n Win <no-reply@smilenwin.lk>"
MAIL_TO=contact@smilenwin.lk
```

On Vercel, add these in the project settings under Environment Variables.

## 🔮 Future Enhancements

### Planned Features

- **Payment Integration**: Stripe/PayPal for donations
- **Admin Dashboard**: Content management system
- **Email Automation**: Newsletter and donor communications
- **Multilingual Support**: Multiple language options
- **Blog System**: News and updates section
- **Event Management**: Event listings and registration
- **Volunteer Portal**: Volunteer management system

### Technical Improvements

- **Performance**: Image optimization and lazy loading
- **SEO**: Enhanced structured data and meta tags
- **Analytics**: Google Analytics and conversion tracking
- **Testing**: Unit and integration tests
- **CI/CD**: Automated testing and deployment pipeline

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with descriptive messages**
6. **Push to your fork**
7. **Create a Pull Request**

### Pull Request Guidelines

- Provide clear description of changes
- Include screenshots for UI changes
- Ensure all tests pass
- Follow code style guidelines
- Update documentation if needed

## 📞 Support

For questions or support:

- **Email**: [contact@smileandwin.org](mailto:contact@smileandwin.org)
- **Website**: [www.smileandwin.org](https://www.smileandwin.org)
- **Issues**: Create an issue in this repository

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Vercel** for hosting and deployment platform
- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **All contributors** who help make this project better

---

**Made with ❤️ for Smile 'n Win Charity Organization**
