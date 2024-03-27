import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pxdcnchdatdtgnqjukqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4ZGNuY2hkYXRkdGducWp1a3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NzY3NjYsImV4cCI6MjAyNzE1Mjc2Nn0.wyidL9AysseaTNuqTLodwQVSoL8WhEgamOIxj78vB7s";

export const supabase = createClient(supabaseUrl, supabaseKey);
