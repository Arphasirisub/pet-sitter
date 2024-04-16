import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wajvygdhtyqvxzpizdqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhanZ5Z2RodHlxdnh6cGl6ZHF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjUxNzkwOSwiZXhwIjoyMDIyMDkzOTA5fQ.XV94S010gdbAy2gB5L4ubxLoCy77Q8ziW0F4hNn7Dwc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
