# replit.md

## Overview

This is a full-stack web application for Virprit Print & Pack Solutions, a company specializing in industrial printing and packaging solutions. The application is built with a modern tech stack featuring React with TypeScript for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.
Accessibility requirements: Improved color contrast and font readability
Content requirements: Use actual company images, not competitor content
Design preferences: Professional appearance with comprehensive product gallery

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot module replacement with Vite integration

### Database Schema
The application uses a simple user authentication system with the following schema:
- **Users Table**: Contains user credentials with id, username, and password fields
- **Migrations**: Managed through Drizzle Kit with migrations stored in `/migrations`
- **Schema Definition**: Centralized in `/shared/schema.ts` with Zod validation

## Key Components

### Frontend Components
- **Layout System**: Header, Footer, and main content area with responsive navigation
- **UI Components**: Comprehensive set of reusable components from shadcn/ui
- **Page Components**: Home, About, Services, Contact, and 404 pages
- **Features**: Hero carousel, SEO optimization, responsive design, toast notifications

### Backend Components
- **Route System**: Modular route registration in `/server/routes.ts`
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Development Server**: Vite integration for hot reloading and asset serving
- **Error Handling**: Centralized error handling middleware

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod schemas
- **Type Safety**: End-to-end type safety between frontend and backend

## Data Flow

1. **Client Requests**: Browser sends requests to Express server
2. **Route Handling**: Express routes process requests and interact with storage layer
3. **Database Operations**: Storage layer performs CRUD operations using Drizzle ORM
4. **Response**: JSON responses sent back to client
5. **State Management**: React Query handles caching and synchronization on frontend
6. **UI Updates**: React components re-render based on state changes

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React icons and Font Awesome
- **Fonts**: Google Fonts (Inter family)

### Development Dependencies
- **Build Tools**: Vite, ESBuild, TypeScript compiler
- **Development**: TSX for TypeScript execution, Replit-specific plugins
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `/dist/public`
2. **Backend Build**: ESBuild bundles server code to `/dist/index.js`
3. **Static Assets**: Frontend assets served from `/dist/public`

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and backend proxy
- **Production**: Serves static files from Express with built assets
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Push database schema changes

### Hosting Considerations
- **Static Assets**: Frontend build output in `/dist/public`
- **Server**: Node.js server serving both API and static files
- **Database**: PostgreSQL database with connection pooling
- **Sessions**: PostgreSQL-based session storage for scalability

The application is designed for easy deployment on platforms like Replit, with built-in support for development features and production optimization.

## Recent Updates (July 2025)

### Accessibility Improvements
- **Enhanced Color Scheme**: Updated primary color from dark blue to a more accessible blue (#5FA3F7) with improved contrast ratios
- **Better Typography**: Improved font weights, line heights, and color contrast for better readability
- **Consistent Color Usage**: Replaced hardcoded gray colors with CSS custom properties (--foreground, --muted-foreground)
- **Accessible Navigation**: Enhanced header navigation with better hover states and focus indicators

### Image Integration
- **Hero Carousel**: Updated to use all 5 provided company images for better representation
- **Product Gallery**: Added comprehensive product showcase on homepage with 6 product images
- **Services Page**: Enhanced with product galleries showing multiple examples for each service category
- **Real Product Images**: Integrated all provided product images including:
  - Packaging boxes (pharmaceutical, consumer goods, food packaging)
  - Labels and stickers (circular, promotional, barcode)
  - Business stationery (cards, letterheads, envelopes)
  - Invitation cards and premium printing materials

### Content Organization
- **Improved Services Structure**: Reorganized services into 4 main categories with image galleries
- **Enhanced Product Presentation**: Each service now includes multiple product examples
- **Better Visual Hierarchy**: Improved spacing, typography, and color usage throughout
- **Mobile Responsive**: Ensured all new content works seamlessly on mobile devices

### Technical Enhancements
- **CSS Custom Properties**: Full implementation of design system using CSS variables
- **Improved Performance**: Optimized image loading and carousel transitions
- **Better SEO**: Enhanced meta descriptions and alt text for all images
- **Accessibility Standards**: Improved WCAG compliance with better contrast ratios and keyboard navigation

## Latest Updates (July 14, 2025)

### Brand Identity Enhancement
- **Color Scheme Update**: Changed from blue accent to Virprit Print & Pack brand colors (dark blue primary: hsl(220, 70%, 25%) and orange accent: hsl(15, 85%, 55%))
- **Logo Enhancement**: Added prominent VP logo with gradient text for "Virprit Print & Pack" name
- **Brand Emphasis**: Enhanced company name visibility with professional color combinations

### Product Classification Restructure
- **Eliminated Stationery**: Removed all business stationery, letterheads, and cards from services
- **New Service Categories**: Reorganized into 12 specialized categories following industry standards:
  1. Sweet Boxes
  2. Pharmaceutical Boxes
  3. Consumer Packaging Boxes
  4. Customized Packaging Boxes
  5. Perfume Boxes
  6. Food Boxes
  7. White Boxes
  8. Chocolate Boxes
  9. Masala Boxes
  10. Tags and Stickers
  11. Labels
  12. Toy and Game Boxes

### Content Updates
- **Removed ISO References**: Eliminated all mentions of ISO certified manufacturing processes
- **Updated Hero Message**: Changed from generic industrial to specific "Sweet Boxes • Pharmaceutical • Food Packaging • Labels • Tags"
- **Service Focus**: Shifted emphasis from stationery to packaging specialization
- **Layout Optimization**: Updated services page to 3-column grid for better category display

### Reference Implementation
- **Industry Standards**: Aligned categorization with Vihaa Print and Pack website structure
- **Professional Presentation**: Maintained high-quality visual presentation while focusing on core packaging services
- **Brand Consistency**: Ensured all content reflects Virprit Print & Pack's specialized expertise

## Latest Updates (July 18, 2025)

### UI/UX Improvements
- **Fixed Service Button Visibility**: Resolved button color contrast issues with proper accent color styling
- **Enhanced Card Layout**: Updated services page with flexible card layout ensuring "Get Quote" buttons are properly positioned at card bottom
- **Improved Image Categorization**: Reorganized product images to match appropriate service categories (Sweet Boxes, Pharmaceutical, etc.)
- **Responsive Design**: Optimized 3-column grid layout for better desktop presentation while maintaining mobile responsiveness

### Contact Form Integration
- **Google Forms Backend**: Replaced traditional contact form with Google Forms integration for reliable form handling
- **Simplified Contact Page**: Streamlined contact information and removed redundant content
- **Map Integration Ready**: Prepared section for Google Maps iframe implementation
- **Professional Presentation**: Enhanced contact page with better visual hierarchy and clear call-to-action

### Technical Enhancements
- **Button Styling**: Added comprehensive CSS for service buttons with proper hover states and visibility
- **Flexbox Layout**: Implemented flexible card layouts to ensure consistent button positioning across different screen sizes
- **Color Consistency**: Applied Virprit brand colors (dark blue primary, orange accent) throughout the application
- **Performance Optimization**: Improved loading and transition effects for better user experience

### Content Updates
- **Industry Focus**: Updated all content to reflect specialization in packaging (eliminating stationery references)
- **Service Categories**: Properly organized 12 packaging categories with appropriate images and descriptions
- **Brand Messaging**: Enhanced hero carousel and service descriptions to emphasize core competencies
- **Professional Tone**: Maintained consistent professional language throughout the website

## Latest Updates (July 20, 2025)

### Homepage Improvements
- **Removed Category Headings**: Eliminated specific category headings (Sweet Box, Pharmaceutical, Labels, Food Packaging, Tags) from homepage as requested
- **Streamlined Layout**: Simplified homepage structure focusing on product gallery and company overview
- **Updated Features Section**: Replaced "24/7 Support" with "Quality Assurance" for more accurate business representation

### Services Page Enhancement
- **Added Stationery Category**: New category including envelopes, letterheads, and corporate communication materials
- **White Box Category Update**: Improved White Box category with appropriate white packaging images
- **Complete Box Types List**: Added comprehensive list of 34+ box types including Sweet Boxes, Pharmaceutical, Consumer Packaging, Electronics, Gift Boxes, etc.
- **Removed 24x7 References**: Replaced "24/7 Support" with "Customer Support" with accurate business hours description

### Contact Information Updates
- **Business Hours**: Updated to 10:00 AM - 6:00 PM, Monday to Saturday as requested
- **Address Cleanup**: Simplified address format for better clarity
- **Professional Styling**: Consistent color scheme and typography throughout contact section
- **Removed Support Claims**: Eliminated "24×7 support" label from all information sections

### Product Organization
- **Better Categorization**: Aligned product images with their respective categories for improved organization
- **Enhanced Gallery**: Updated White Box category to show appropriate white packaging products
- **Service Integration**: Added comprehensive stationery services including business letterheads and corporate envelopes
- **Complete Product Listing**: Displayed full range of box types in dedicated section on services page

### Technical Enhancements
- **Responsive Design**: Maintained optimal display across all device sizes
- **SEO Optimization**: Updated meta descriptions and content for better search visibility
- **Performance**: Optimized image loading and content structure
- **Accessibility**: Consistent color contrast and readable typography throughout