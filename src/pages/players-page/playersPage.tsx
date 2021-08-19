import React from "react";
import PlayerPageCSS from "./playersPage.module.css";

export function PlayersPage(): JSX.Element {
  return (
    <div className={PlayerPageCSS.playersContainer}>
      <div className={PlayerPageCSS.playerCardContainer}>player1</div>
      <div className={PlayerPageCSS.playerCardContainer}>player2</div>
      <div className={PlayerPageCSS.playerCardContainer}>player3</div>
      <div className={PlayerPageCSS.playerCardContainer}>player4</div>
      <div className={PlayerPageCSS.playerCardContainer}>player5</div>
      <div className={PlayerPageCSS.playerCardContainer}>player1</div>
      <div className={PlayerPageCSS.playerCardContainer}>player2</div>
      <div className={PlayerPageCSS.playerCardContainer}>player3</div>
      <div className={PlayerPageCSS.playerCardContainer}>player4</div>
      <div className={PlayerPageCSS.playerCardContainer}>player5</div>
      <div className={PlayerPageCSS.playerCardContainer}>player1</div>
      <div className={PlayerPageCSS.playerCardContainer}>player2</div>
      <div className={PlayerPageCSS.playerCardContainer}>player3</div>
      <div className={PlayerPageCSS.playerCardContainer}>player4</div>
      <div className={PlayerPageCSS.playerCardContainer}>player5</div>
    </div>
  );
}
