
CREATE TABLE public.cdcs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  pincode TEXT,
  address TEXT,
  phone TEXT,
  email TEXT,
  website TEXT,
  therapies TEXT[] NOT NULL DEFAULT '{}',
  contact_person TEXT,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.cdcs TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cdcs TO authenticated;
GRANT ALL ON public.cdcs TO service_role;

ALTER TABLE public.cdcs ENABLE ROW LEVEL SECURITY;

-- Anyone can view PUBLISHED listings only
CREATE POLICY "Public can view published CDCs"
  ON public.cdcs FOR SELECT
  USING (is_published = true);

-- Anyone can submit a new listing, but cannot self-publish or self-verify
CREATE POLICY "Anyone can submit a CDC listing"
  ON public.cdcs FOR INSERT
  WITH CHECK (is_published = false AND is_verified = false);

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$
LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_cdcs_updated_at
  BEFORE UPDATE ON public.cdcs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_cdcs_city ON public.cdcs(city);
CREATE INDEX idx_cdcs_state ON public.cdcs(state);
CREATE INDEX idx_cdcs_published ON public.cdcs(is_published) WHERE is_published = true;
