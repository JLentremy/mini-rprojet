import { CharacterProps } from "../Character/types";

export type FightProps = {
  attacker: CharacterProps;
  opponent: CharacterProps;
};

export type DefendingProps = {
  opponent: FightProps["opponent"];
  atk: number;
};

export type TakeDamageProps = {
  attacker: FightProps["attacker"];
  opponent: FightProps["opponent"];
  damage: number;
};
