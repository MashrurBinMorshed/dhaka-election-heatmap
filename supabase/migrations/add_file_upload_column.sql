-- Migration: Add file_url column to candidate_submissions table
-- Run this in Supabase SQL Editor

ALTER TABLE public.candidate_submissions
ADD COLUMN file_url text NULL;

-- Add comment for documentation
COMMENT ON COLUMN public.candidate_submissions.file_url IS 'URL of uploaded candidate document/image stored in Supabase Storage';
