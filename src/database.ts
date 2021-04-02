/* eslint-disable max-len */
export const routines = [
  {
    category: 'MECHANICS',
    summary: `Deadlift is all about time under tension with the tempo, you get to work this for 4 weeks, so stick to the intention 8/10 effort.`,
    date: '20200329',
    coach: 'CHRIS',
    sections: [
      {
        name: 'Warm-up',
        timing: { duration: 15 },
        components: [
          {
            primary: { movement: 'Inch worm push up', reps: { min: 10 } },
          },
          {
            primary: {
              movement: 'Front support knee tuck',
              reps: { min: 20 },
              modifiers: {
                tempo: 'with 2 second pause',
              },
            }, 
          },
          {
            primary: {
              movement: 'Lunge',
              reps: { min: 20, method: 'METRE' },
              modifiers: {
                equipment: {
                  base: 'KETTLEBELL',
                  style: ['FRONT_RACK', 'SINGLE_ARM'],
                },
              },
            },
          },
          {
            primary: {
              movement: 'Swing',
              reps: { min: 10 },
              modifiers: {
                equipment: {
                  base: 'KETTLEBELL',
                  style: ['RUSSIAN'],
                },
              },
            },
          },
        ],
      },
      {
        name: 'Weightlifting',
        timing: {
          duration: 20,
          repeats: 5,
        },
        components: [
          {
            primary: {
              movement: 'Deadlift',
              reps: { min: 3 },
              effort: {
                method: '% 3RM',
                value: 0.8,
              },
              modifiers: {
                tempo: '30X1',
              },
            },
          },
          {
            primary: {
              movement: 'Swing',
              reps: { min: 12, max: 15 },
              effort: {
                method: 'AHAP',
              },
              modifiers: {
                equipment: {
                  base: 'KETTLEBELL',
                  style: ['RUSSIAN', 'DOUBLE'],
                },
              },
            },
          },
        ],
      },
      {
        name: 'Gymnastics',
        timing: { duration: 20, repeats: 3 },
        components: [
          {
            primary: {
              movement: 'Dip',
              reps: { min: 3, max: 5 },
              modifiers: {
                tempo: '22X2',
                place: {
                  base: 'RING',
                },
              },
            },
            alternatives: [
              {
                movement: 'Dip',
                reps: { min: 3, max: 5 },
                modifiers: {
                  tempo: '22X2',
                  place: {
                    base: 'PARALLEL_BARS',
                  },
                },
              },
              {
                movement: 'Dip',
                reps: { min: 30, method: 'SECOND' },
                modifiers: {
                  equipment: {
                    base: 'BODYWEIGHT',
                    style: ['HOLD'],
                  },
                  place: {
                    base: 'PARALLEL_BARS',
                  },
                },
              },
            ],
          },
          {
            primary: {
              movement: 'Press',
              reps: { min: 8, max: 10 },
              effort: {
                method: '% max effort',
                value: 0.8,
              },
              modifiers: {
                equipment: {
                  base: 'DUMBBELL',
                },
                place: {
                  base: 'FLOOR',
                },
              },
            },
            alternatives: [
              {
                movement: 'Press',
                reps: { min: 8, max: 10 },
                effort: {
                  method: '% max effort',
                  value: 0.8,
                },
                modifiers: {
                  equipment: {
                    base: 'BARBELL',
                  },
                  place: {
                    base: 'BENCH',
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: 'OLYMPIC_LIFTING',
    date: '20200331',
    coach: 'KIM',
    sections: [
      {
        name: 'Warm-up',
        timing: { duration: 15 },
        components: [
          {
            primary: {
              movement: 'Front support to downward dog',
              reps: { min: 10 },
            },
          },
          {
            primary: {
              movement: 'Squat',
              modifiers: {
                equipment: {
                  base: 'BODYWEIGHT',
                  style: ['COSSACKS'],
                },
              },
              reps: { min: 10 },
            },
            alternatives: [
              {
                movement: 'Hip Mobility',
                reps: { min: 5, method: 'MINUTE' },
              },
            ],
          },
          {
            primary: {
              movement: 'Snatch grip behind neck press',
              reps: { min: 10 },
            },
          },
        ],
      },
      {
        name: 'Weightlifting',
        timing: { duration: 45 },
        components: [
          {
            primary: {
              movement: 'Snatch',
              sets: { min: 4 },
              reps: { min: 1 },
              effort: {
                method: '% 1RM',
                value: 0.85,
              },
            },
          },
          {
            primary: {
              movement: 'Clean and Jerk',
              sets: { min: 3 },
              reps: { min: 2 },
              effort: {
                method: '% 1RM',
                value: 0.8,
              },
            },
          },
          {
            primary: {
              movement: 'Clean and Jerk',
              sets: { min: 2 },
              reps: { min: 1 },
              effort: {
                method: '% 1RM',
                value: 0.85,
              },
            },
          },
        ],
      },
    ],
  },
];
