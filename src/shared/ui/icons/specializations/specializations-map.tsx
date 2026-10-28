import type { ComponentType } from "react";

import type { IconProps } from "./types";

import {
  AllergistIcon,
  CardiologistIcon,
  DermatologistIcon,
  DermatovenerologistIcon,
  EndocrinologistIcon,
  GastroenterologistIcon,
  GynecologistIcon,
  HirudotherapistIcon,
  NeurologistIcon,
  OncologistIcon,
  OphthalmologistIcon,
  OtolaryngologistIcon,
  PediatricianIcon,
  PulmonologistIcon,
  RheumatologistIcon,
  SurgeonIcon,
  TherapistIcon,
  TraumatologistOrthopedistIcon,
  UrologistIcon,
} from "./specializations";

export const specializationIconMap = {
  gynecologist: GynecologistIcon,
  hirudotherapist: HirudotherapistIcon,
  pediatrician: PediatricianIcon,

  "allergist-immunologist": AllergistIcon,
  allergist: AllergistIcon,

  gastroenterologist: GastroenterologistIcon,
  therapist: TherapistIcon,

  dermatovenereologist: DermatovenerologistIcon,
  dermatologist: DermatologistIcon,

  cardiologist: CardiologistIcon,
  neurologist: NeurologistIcon,

  oncologist: OncologistIcon,
  breastOncologist: OncologistIcon,

  otolaryngologist: OtolaryngologistIcon,
  ophthalmologist: OphthalmologistIcon,
  pulmonologist: PulmonologistIcon,

  orthopedicTraumatologist: TraumatologistOrthopedistIcon,

  endocrinologist: EndocrinologistIcon,
  urologist: UrologistIcon,
  surgeon: SurgeonIcon,
  rheumatologist: RheumatologistIcon,
} satisfies Record<string, ComponentType<IconProps>>;

export type SpecializationIconId = keyof typeof specializationIconMap;
