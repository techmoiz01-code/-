export type NavTab = 
  | 'home' 
  | 'opportunity' 
  | 'curriculum' 
  | 'investment' 
  | 'pilot' 
  | 'about';

export interface InvestorPackFormData {
  fullName: string;
  email: string;
  organization: string;
  investorType: 'Venture Capital' | 'Growth Equity' | 'Family Office' | 'Local Authority' | 'Angel Investor' | 'Academic / School Leader';
  intendedAllocation: string;
  acceptedNDA: boolean;
  notes?: string;
}

export interface TopicPackItem {
  id: string;
  title: string;
  stage: string;
  level: string;
  theme: string;
  modalities: string[];
  durationWeeks: number;
  pupilCapacity: number;
  materialsCount: number;
  videoCount: number;
  cfeCodes: string[];
  summary: string;
}
