import { Component } from '@angular/core';
import Post from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'a3';
  posts: Post[] = [];
  nextPostId: number = 0;

  createPost(postContents: string) {
    var post: Post = {id: this.nextPostId++, content: postContents};

    this.posts.push(post);
  }
}
