# Project Management Application

A modern project management application built with Angular and .NET, featuring a stunning glassmorphism design system.

## 🎨 Design Features

- **Glassmorphism UI**: Modern, translucent interface elements with frosted glass effects
- **Responsive Design**: Fully responsive grid layouts that adapt to all screen sizes
- **Dark Theme**: Elegant dark theme with gradient backgrounds
- **Modern Animations**: Smooth transitions and hover effects throughout the application
- **Technology Badges**: Visual indicators for project technologies

## 🚀 Tech Stack

- **Frontend**: Angular (Latest version)
- **Backend**: .NET 8.0
- **Database**: MongoDB
- **Styling**: SCSS with custom glassmorphism effects

## 📋 Prerequisites

- Node.js (Latest LTS version)
- .NET SDK 8.0
- MongoDB
- Angular CLI

## 🛠️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd projects
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   dotnet restore
   dotnet build
   dotnet run
   ```

3. **Frontend Setup**
   ```bash
   cd Frontend
   npm install
   ng serve
   ```

4. **MongoDB Setup**
   - Ensure MongoDB is running locally
   - Update connection string in appsettings.json if needed

## 🎯 Features

- **Project Management**
  - Create, read, update, and delete projects
  - Modern card-based project listing
  - Detailed project editing interface

- **UI Components**
  - Glass-effect cards with hover animations
  - Responsive grid system
  - Modern button designs
  - Interactive technology badges

## 💅 Styling System

The application uses a custom-built styling system featuring:

- **Glass Effects**: 
  ```scss
  backdrop-filter: blur()
  background: rgba() with gradient overlays
  ```
- **Color Scheme**: 
  - Dark theme with carefully selected opacity levels
  - Gradient backgrounds
  - High contrast text for accessibility

- **Responsive Grid**: 
  - Flexbox and CSS Grid combinations
  - Mobile-first approach
  - Adaptive layouts

## 🔧 Known Issues

- Component visibility issues being addressed
- Navigation system under refinement
- Project-edit component styling updates in progress

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
