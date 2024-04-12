import { Component } from '@angular/core';

import {Post} from './../../post.model';
import { PostService } from './../../../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  enteredContent = '';
  enteredTitle ='';

  constructor(public postsService: PostService){

  }

  onAddPost(){
    this.postsService.addPost(this.enteredTitle, this.enteredContent);
  }

}
