import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  /* The line `public onNewCharacter: EventEmitter<Character> = new EventEmitter();` is creating a new
  instance of the `EventEmitter` class and assigning it to the `onNewCharacter` property. */
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  }

  emitCharacter() {
    console.log(this.character)

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 }
  }
}
