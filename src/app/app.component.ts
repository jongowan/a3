import { Component } from '@angular/core';

import { Post} from './posts/post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PostService]
})
export class AppComponent {
  storedPost: Post[] = [];

  onPostAdded(post){
    this.storedPost.push(post)
  }
}
