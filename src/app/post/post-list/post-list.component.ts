import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from './../../posts/post.model';
import { PostService } from './../../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostService){

  }

  ngOnInit() {
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    })
    this.postsService.getPosts();
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
