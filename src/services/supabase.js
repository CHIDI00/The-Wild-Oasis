import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qlwqcsinytuzsvvicteg.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsd3Fjc2lueXR1enN2dmljdGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNjU1NzYsImV4cCI6MjAzODc0MTU3Nn0.ZLxfwwGjRYglzqrURNw3d84euyrtiwtrnbSRjnIEiRo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
