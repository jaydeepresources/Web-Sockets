import { Component, OnInit } from '@angular/core';
import { Post } from './model/post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  post: Post
  posts: Post[]

  ngOnInit() {
    this.postService.onPost()
      .subscribe(newPost => {
        this.posts.push(newPost)
      })
  }

  constructor(public postService: PostsService) {
    this.posts = []
    this.post = {
      title: "",
      body: ""
    }
  }

  sendPost() {
    this.postService.sendPost(this.post)
    this.post = {
      title: "",
      body: ""
    }
  }

}
