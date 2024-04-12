import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './posts/post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postUpDate = new Subject<Post[]>()

  getPostUpdateListener(){
    return this.postUpDate.asObservable();
  }

  addPost(title: string, content: string){
    console.log("addPost is called with " + title + ", " + content)
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    console.log([...this.posts])
    this.postUpDate.next([...this.posts])
  }

}
