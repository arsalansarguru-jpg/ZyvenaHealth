export type ContactInquiry = {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  message: string;
};

export type Database = {
  public: {
    Tables: {
      contact_inquiries: {
        Row: ContactInquiry & { id: string; created_at: string };
        Insert: ContactInquiry;
        Update: Partial<ContactInquiry>;
      };
    };
  };
};
