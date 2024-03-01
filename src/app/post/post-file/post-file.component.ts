import { Component } from '@angular/core';

@Component({
  selector: 'app-post-file',
  templateUrl: './post-file.component.html',
  styleUrl: './post-file.component.css'
})
export class PostFileComponent {
  textInputContents: string = "Type your post here"
  posts: Array<string> = []

  onSubmitPost() {
    this.posts.push(this.textInputContents)
  }
}
