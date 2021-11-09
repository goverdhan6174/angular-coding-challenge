/* THIS COMPONENT NEEDS SOME WORK */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-slider',
  templateUrl: './item-slider.component.html',
  styleUrls: ['./item-slider.component.scss']
})
export class ItemSliderComponent implements OnInit {

  currentSword: number = 10

  swords: Sword[]

  constructor(private router: Router) {
    this.swords = generateSwords()
  }

  ngOnInit() {
    //this.currentPage = this.router.url.split("/")[1];
  }

  handleIncrement() {
    this.currentSword = ++this.currentSword % this.swords.length
  }

  handleDecrement() {
    this.currentSword = --this.currentSword < 0 ? (this.swords.length - 1) : this.currentSword
  }

}

interface Sword {
  name: string,
  numbnail: string,
  rarity: string,
  type: string,
}

const SwordNames = [
  "Glittering Edge",
  "Reapers Toll",
  "Final Achievement",
  "Shadowsteel",
  "Bone Carver",
  "Blood-Forged",
  "Spectral Crusader",
  "The Unyielding",
  "Bloodquench",
  "Spineripper",
]

const SwordTypes = [
  "Short Sword",
  "Terror of Pride's Fall",
  "Soul of the Champion",
  "Might of Putrefaction",
  "Thunder Long",
]

const SwordNumbnails = [
  "wpn_sword_01_thumb-200x200",
  "wpn_sword_02_thumb-200x200",
  "wpn_sword_03_thumb-200x200"
]

const Rarities = [
  "rarity_00",
  "rarity_01",
  "rarity_02",
  "rarity_03",
  "rarity_04",
  "rarity_05",
]

function getRandomValue<Type>(_array: Array<Type>): Type {
  let index = Math.floor(Math.random() * _array.length)
  return _array[index];
}

function generateSwords(): Sword[] {
  let _swordsArray: Sword[] = []
  for (let i = 0; i < 10 + Math.floor(Math.random() * 20); i++) _swordsArray.push({
    name: getRandomValue(SwordNames),
    numbnail: getRandomValue(SwordNumbnails),
    rarity: getRandomValue(Rarities),
    type: getRandomValue(SwordTypes),
  })
  return _swordsArray
}

