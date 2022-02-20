export interface CvInfoLocalModel {
  header: HeaderInfoModel;
}

interface HeaderInfoModel {
  selfie: string;
  contactInfo: ContactInfoModel;
}

interface ContactInfoModel {
  name: string;
  github: string;
  linkedin: string;
  location: string;
  emails: string[];
  phones: string[];
}
