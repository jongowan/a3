import { Component, EventEmitter, Output } from '@angular/core';

const DEFAULT_POST_CONTENTS: string = "Type your post here";

@Component({
  selector: 'app-post-file',
  templateUrl: './post-file.component.html',
  styleUrl: './post-file.component.css'
})
export class PostFileComponent {
  textInputContents: string = DEFAULT_POST_CONTENTS;
  @Output() postEmmitter = new EventEmitter<String>;

  onSubmitPost() {
    this.postEmmitter.emit(this.textInputContents);
    this.textInputContents = DEFAULT_POST_CONTENTS;
  }
}
