// Base movement
type Movement = 'snatch' | 'clean' | 'row' | 'push-up' | 'squat'; // etc

// Sets
type Sets = number;

// Reps
type RepsType = 'standard' | 'calories' | 'metres' | 'minutes' | 'seconds';
type RepsCount = number;
type RepsQualitative = 'AMRAP';
type Reps = RepsCount | RepsQualitative;

// Effort

type Effort = {
  method: string; // AHAP, % 1RM etc
  value?: number; // if required
};

// Modifiers

// Equipment
enum EquipmentBase {
  BW = 'bodyweight',
  BB = 'barbell',
  DB = 'dumbbell',
  KB = 'kettlebell',
  Ball = 'medicineball',
  DeadBall = 'deadball',
  SandBag = 'sandbag',
  Bike = 'bike',
  BikeErg = 'bikeerg',
  SkiErg = 'skierg',
  Rower = 'rower',
  Stick = 'broomstick',
}
type EquipmentStyle =
  | 'hang'
  | 'power'
  | 'strict'
  | 'push'
  | 'split'
  | 'strict'
  | 'inverted'
  | 'upright'
  | 'single'
  | 'double'
  | 'single-arm'
  | 'single-leg'
  | 'cossacks'
  | 'russian'
  | 'front-rack'
  | 'hold';

// Place
type PlaceBase =
  | 'bar'
  | 'ring'
  | 'parallel bars'
  | 'dip bars'
  | 'floor'
  | 'bench'
  | 'box'
  | 'wall'
  | 'ab mat';
type PlaceOrientation = 'chest-to' | 'back-to' | 'freestanding';

export type Exercise = {
  movement: Movement;
  sets: {
    min: Sets;
    max?: Sets; // e.g. 4-5 sets as you can manage. if empty, min = target
  };
  reps: {
    type?: RepsType;
    min: Reps;
    max?: Reps; // e.g. 8-10 reps per arm. if empty, min = target
    alternative?: {
      // e.g. when different targets for m/f
      min: Reps;
      max?: Reps;
    };
  };
  effort?: Effort;
  rx?: {
    male: number; // e.g. kg/lb
    female: number;
  };
  modifiers: {
    equipment: {
      base: EquipmentBase;
      style?: EquipmentStyle[];
    };
    place: {
      base: PlaceBase;
      orientation?: PlaceOrientation;
    };
    tempo?: string; // 20X2 or 'with 2 sec pause' etc
  };
};

type Component = {
  primary: Exercise;
  isRx?: boolean;
  alternatives?: Exercise[];
};

type RepeatsMethod = 'EMOM' | 'AMRAP';

type Section = {
  name: string;
  duration: number;
  timing: {
    duration: number;
    repeats?: number;
    method?: RepeatsMethod;
  };
  components: Component[];
};

enum RoutineCategory {
  OlyLifting = 'olympic lifting',
  Gym = 'gymnastics',
  Recovery = 'active recovery',
  HIBB = 'high intensity bodybuilding',
  FBB = 'functional bodybuilding',
  Endurance = 'endurance',
  Strongman = 'strongman',
  Mechanics = 'mechanics',
  Consistency = 'consistency',
  Intensity = 'intensity',
  OpenGym = 'open gym',
}

enum RoutineCoach {
  Matt = 'matt',
  Chris = 'chris',
  Kim = 'kim',
}

export type Routine = {
  category: RoutineCategory;
  summary: string;
  date: string;
  coach: RoutineCoach;
  name?: string;
  sections: Section[];
  // athletes: Athlete[] (later)
};
