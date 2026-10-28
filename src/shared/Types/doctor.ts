export type Doctor = {
  id: string;
  slug: string;
  lastName: string;
  firstName: string;
  middleName: string;
  specializationId: string | string[];

  education: string;
  accreditation?: string;
  initialAccreditation?: string;

  category?: string;
  academicDegrees?: string;

  photo: string;
  isAvailableForAppointment: boolean;
};