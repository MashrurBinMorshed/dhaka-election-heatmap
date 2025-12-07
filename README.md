# Dhaka Election Heat Map 2026

A modern, interactive heatmap dashboard visualizing election data for Dhaka constituencies. Built with Next.js, React, Tailwind CSS, and Supabase.


## 🌟 Features

- **Interactive Hexagon Map**: A visually engaging SVG-based hexagon grid representing 20 Dhaka constituencies.
- **Dynamic Heat Levels**: Color-coded visualization indicating "heat" or intensity levels for each seat (Low to Very High).
- **Candidate Details Panel**: Click on any constituency to reveal detailed candidate information, party affiliations, and election stats.
- **Public Submission System**: 
  - Allows users to submit candidate information for specific seats.
  - **File Upload**: Securely upload candidate images/documents via Supabase Storage.
  - Real-time form validation and error handling.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices with touch-friendly interactions.

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Lucide Icons
- **Backend**: Next.js API Routes
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Storage**: Supabase Storage
- **UI Components**: Radix UI primitives, Sonner (Toasts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MashrurBinMorshed/dhaka-election-heatmap.git
   cd dhaka-election-heatmap
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Supabase Setup**
   
   - **Database**: Run the SQL migration to create the table:
     ```sql
     -- Create table for submissions
     create table public.candidate_submissions (
       id uuid not null default gen_random_uuid (),
       candidate_name text not null,
       party_name text not null,
       seat_number integer not null,
       file_url text null,
       created_at timestamp with time zone null default now(),
       constraint candidate_submissions_pkey primary key (id)
     ) TABLESPACE pg_default;
     ```

   - **Storage**: 
     1. Create a public bucket named `candidate-files`.
     2. Add an RLS policy to allow public INSERTs:
        ```sql
        CREATE POLICY "Allow public uploads" ON storage.objects
        FOR INSERT WITH CHECK (bucket_id = 'candidate-files');
        ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and API
│   ├── api/              # Backend API routes
│   └── page.tsx          # Main entry point
├── components/           # React components
│   ├── dhaka-election-map.tsx  # Main dashboard container
│   ├── hexagon-grid.tsx        # D3/SVG logic for grid layout
│   ├── hexagon.tsx             # Individual hex component
│   └── candidate-panel.tsx     # Slide-out details panel
├── lib/                  # Utilities and static data
│   └── election-data.ts  # Constituency data model
└── supabase/             # Migration files
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
