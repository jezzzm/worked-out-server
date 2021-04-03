import { gql } from 'apollo-server';

const typeDefs = gql`
  # Equipment
  enum EquipmentBase {
    BODYWEIGHT
    BARBELL
    DUMBBELL
    KETTLEBELL
    MEDICINE_BALL
    DEAD_BALL
    SAND_BAG
    BIKE
    BIKE_ERG
    SKI_ERG
    ROWER
    STICK
  }

  enum EquipmentStyle {
    HANG
    POWER
    STRICT
    PUSH
    SPLIT
    INVERTED
    UPRIGHT
    BENT_OVER
    SINGLE
    DOUBLE
    SINGLE_ARM
    SINGLE_LEG
    COSSACKS
    RUSSIAN
    FRONT
    FRONT_RACK
    BACK
    LOW_BACK
    HOLD
  }

  type Equipment {
    base: EquipmentBase
    style: [EquipmentStyle]
  }

  # Places
  enum PlaceBase {
    BAR
    RING
    PARALLEL_BARS
    FLOOR
    BENCH
    BOX
    WALL
    AB_MAT
  }

  enum PlaceOrientation {
    CHEST_TO
    BACK_TO
    FREESTANDING
  }

  type Place {
    base: PlaceBase
    orientation: PlaceOrientation
  }

  # Reps
  enum RepsMethod {
    STANDARD
    CALORIE
    METRE
    MINUTE
    SECOND
  }

  type Reps {
    method: RepsMethod
    min: Int
    max: Int
    alternative: MinMax
  }

  # Effort
  type Effort {
    method: String # will need to be enum for any %rm calcs
    value: Float
  }

  # As Prescribed
  type Rx {
    male: Int
    female: Int
  }

  # Movements
  enum Movement {
    SNATCH
    CLEAN
    ROW
    PUSH_UP
    SQUAT
  }

  type MovementModifiers {
    tempo: String
    equipment: Equipment
    place: Place
  }

  # General
  type MinMax {
    min: Int
    max: Int
  }

  # Exercises
  type Exercise {
    movement: String
    sets: MinMax
    reps: Reps
    effort: Effort
    rx: Rx
    modifiers: MovementModifiers
  }

  # Components
  type Component {
    primary: Exercise
    isRx: Boolean
    alternatives: [Exercise]
  }

  # Timing
  enum RepeatMethod {
    EMOM
    AMRAP
  }

  type Timing {
    duration: Int
    repeats: Int
    method: RepeatMethod
  }

  # Sections
  type Section {
    name: String
    timing: Timing
    components: [Component]
  }

  # Routines
  enum RoutineCategory {
    OLYMPIC_LIFTING
    GYMNASTICS
    ACTIVE_RECOVERY
    HIBB
    FBB
    ENDURANCE
    STRONGMAN
    MECHANICS
    CONSISTENCY
    INTENSITY
    OPEN_GYM
  }

  enum RoutineCoach {
    MATT
    SHAUN
    CHRIS
    KIM
    JAY
  }

  type Routine {
    id: Int
    category: RoutineCategory
    date: String
    coach: RoutineCoach
    name: String
    summary: String
    sections: [Section]
  }

  type Query {
    routines: [Routine]
    routine(id: Int!): Routine
  }
`;

export default typeDefs;
