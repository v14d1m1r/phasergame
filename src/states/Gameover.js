import Phaser from 'phaser'
import { centerGameObjects } from '../utils'
import { clone } from 'lodash'
import globals from './globals/index'

export default class extends Phaser.State {
  init () {}

  preload () {
    
  }

  create () {
    let text = this.add.text(this.game.width / 2, this.game.height / 2, `Game over \n \n You reached level ${this.game.global.level} and scored ${this.game.global.score} points`, {
        font: '24px Arial',
        fill: '#000',
        align: 'center'
    })

    text.anchor.set(0.5)

    this.input.onDown.add(this.restartGame, this)
  }

  resetGlobalVariables () {
    this.game.global = clone(globals)
  }

  restartGame () {
      this.resetGlobalVariables()
      this.game.state.start('Game')
  }
}
