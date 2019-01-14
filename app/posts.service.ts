import { Post } from './model/post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private socket

  constructor() {
    this.socket = socketIo('http://localhost:4000')
  }

  public sendPost(post: Post): void {
    this.socket.emit('post', post);
  }

  public onPost(): Observable<Post> {
    return new Observable<Post>(observer => {
      this.socket.on('post', (data: Post) => observer.next(data));
    });
  }
}
