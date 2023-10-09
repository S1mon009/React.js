import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pslxgxudrcovdxgioxrg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbHhneHVkcmNvdmR4Z2lveHJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4ODc0MzAsImV4cCI6MjAxMjQ2MzQzMH0.eH47G_dQLPr_wPpfWiixXO9VOaVE9ovxEIVAKky5iCM";
export const supabase = createClient(supabaseUrl, supabaseKey);
