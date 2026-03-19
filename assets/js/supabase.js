const SUPABASE_URL = "https://vrmunobrlrmsucywsolq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZybXVub2JybHJtc3VjeXdzb2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3ODE2MzUsImV4cCI6MjA4OTM1NzYzNX0.ZljzOKl49ENCnmN_WT0eF9W6J_-AeA4FVcs_pTI04ms";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
