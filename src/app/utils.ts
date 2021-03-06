import {
  CharacterProps,
  StatProps,
  StatType,
} from "../components/CharacterList/types";

export const costCalc = (stat: StatProps, alt: number) => {
  if (stat.type !== StatType.health) {
    const cost =
      alt > 0
        ? Math.ceil(stat.value / 5) * alt
        : Math.ceil((stat.value - 1) / 5) * alt;
    return cost !== 0 ? cost : alt;
  }

  return alt;
};

const randBetween = ({ min = 0, max }: { min?: number; max: number }) => {
  return Math.floor(Math.random() * max) + min;
};

export const rollADie = (nbFace: number) => {
  if (nbFace === 0) return 0;

  return randBetween({ min: 1, max: nbFace });
};

export const findOpponent = (
  attacker: CharacterProps,
  characters: CharacterProps[]
) => {
  const opponents = characters.filter(
    (character: CharacterProps) =>
      character.available && character.id !== attacker.id
  );
  const opponent =
    opponents.length > 0
      ? opponents[randBetween({ max: opponents.length })]
      : null;

  return opponent;
};

export const healing = (health: StatProps) => {
  return {
    ...health,
    value: health.max_value ? health.max_value : health.value,
  };
};

export const hurting = (health: StatProps, damage: number) => {
  return {
    ...health,
    value: Math.max(0, health.value - damage),
  };
};

export const expUpdate = (skill_pts: StatProps, alt: number) => {
  return {
    ...skill_pts,
    value: skill_pts.value + alt,
  };
};
