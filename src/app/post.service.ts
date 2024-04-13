import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from './posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postUpDate = new Subject<Post[]>()

  constructor(private http: HttpClient){}

  getPosts(){
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts').
      subscribe((postData)=>{
        this.posts = postData.posts;
        this.postUpDate.next([...this.posts]);
      });
  }

  getPostUpdateListener(){
    return this.postUpDate.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = {id: null, title: title, content: content};
    this.posts.push(post);
    this.postUpDate.next([...this.posts])
  }

}
