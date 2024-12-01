# Cloudinary SaaS Platform

A modern web application built with Next.js that provides powerful video and image management capabilities using Cloudinary's services.

## Features

### 1. Video Management
- Upload videos with titles and descriptions
- Automatic video compression and optimization
- Video format standardization to MP4
- Video duration tracking
- Download capabilities
- Size comparison between original and compressed versions

### 2. Social Media Image Creator
- Upload and transform images for various social media platforms
- Supported formats:
  - Instagram Square (1:1)
  - Instagram Portrait (4:5)
  - Twitter Post (16:9)
  - Twitter Header (3:1)
  - Facebook Cover (205:78)
- Real-time image preview
- One-click download of transformed images

### 3. Authentication & Security
- Secure user authentication powered by Clerk
- Protected API routes
- Secure file uploads

## Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling
- **DaisyUI**: Component library
- **next-cloudinary**: For Cloudinary image components

### Backend
- **Next.js API Routes**: Server-side functionality
- **Prisma**: Database ORM
- **Cloudinary SDK**: Media processing and storage
- **Clerk**: Authentication and user management

### Infrastructure
- **Database**: PostgreSQL (via Prisma)
- **Media Storage**: Cloudinary
- **Authentication**: Clerk

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Copy `.env.sample` to `.env` and fill in the required values:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── (app)/             # Protected application routes
│   ├── (auth)/            # Authentication routes
│   ├── api/               # API endpoints
├── components/            # Reusable React components
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── types/                # TypeScript type definitions
```

## API Endpoints

- `POST /api/video-upload`: Upload and process videos
- `GET /api/videos`: Retrieve uploaded videos
- `POST /api/image-upload`: Upload and process images

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
