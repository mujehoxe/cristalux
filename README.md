# Cristalux E-commerce Platform

🚀 **Enhanced React E-commerce Platform with Modern UI, Animations, and Multi-language Support**

[![Deploy Status](https://github.com/mujehoxe/cristalux/workflows/Deploy%20Cristalux%20Frontend/badge.svg)](https://github.com/mujehoxe/cristalux/actions)
[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://ecom.oussamagaham.com)

## ✨ Recent Enhancements

### 🌍 Internationalization (i18n)
- **Multi-language Support**: English, French, and Arabic
- **RTL Support**: Full right-to-left layout for Arabic
- **Dynamic Language Switching**: Smooth animated language switcher
- **Persistent Language**: User preference saved in localStorage
- **Browser Detection**: Automatically detects user's preferred language

### 🎨 Enhanced Animations
- **Page Transitions**: Smooth route transitions with Framer Motion
- **Card Animations**: Hover effects and entrance animations
- **Stagger Animations**: Sequential animations for lists and grids
- **Loading States**: Animated buttons with loading indicators
- **Custom Tailwind Animations**: Extended animation library

### 🔧 Improved Development & Deployment
- **Enhanced GitHub Actions**: Automated deployment with backups
- **Production-Ready**: Optimized build process
- **Error Handling**: Better error boundaries and loading states
- **Performance**: Code splitting and lazy loading

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Internationalization**: react-i18next
- **Icons**: Font Awesome
- **Notifications**: React Toastify
- **Carousel**: Swiper.js

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mujehoxe/cristalux.git
cd cristalux

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Internationalization

### Supported Languages
- 🇺🇸 **English** (en) - Default
- 🇫🇷 **French** (fr) - Français
- 🇩🇿 **Arabic** (ar) - العربية with RTL support

### Usage in Components

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <h1>{t('hero.title')}</h1>
  );
}
```

## 🎨 Animation Components

### PageTransition
```jsx
import PageTransition from './components/framerMotion/PageTransition';

<PageTransition>
  <YourPageContent />
</PageTransition>
```

### AnimatedCard
```jsx
import AnimatedCard from './components/framerMotion/AnimatedCard';

<AnimatedCard delay={0.2} className="your-styles">
  <CardContent />
</AnimatedCard>
```

### AnimatedButton
```jsx
import AnimatedButton from './components/framerMotion/AnimatedButton';

<AnimatedButton 
  variant="primary" 
  loading={isLoading}
  icon={faShoppingCart}
>
  Add to Cart
</AnimatedButton>
```

## 📦 Deployment

### Automatic Deployment
The project uses GitHub Actions for automated deployment:

- **Triggers**: Push to `main` or `master` branch
- **Process**: Build → Test → Deploy to production server
- **Backup**: Automatic backup before deployment
- **Rollback**: Easy rollback capability

## 🎯 Features

- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Product Catalog**: Browse and filter products
- ✅ **Shopping Cart**: Add/remove items with animations
- ✅ **Checkout Process**: Multi-step checkout form
- ✅ **Multi-language**: Support for 3 languages
- ✅ **Smooth Animations**: Enhanced user experience
- ✅ **SEO Optimized**: Meta tags and structured data
- ✅ **Performance**: Optimized images and code splitting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Original design and concept by [akrambj](https://github.com/akrambj)
- Enhanced with modern web technologies and best practices
- Deployed on [ecom.oussamagaham.com](https://ecom.oussamagaham.com)

---

**Made with ❤️ and modern web technologies**
