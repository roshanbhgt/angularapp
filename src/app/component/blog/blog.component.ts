import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    posts: Posts[];

  constructor() {
      this.posts = [
            {id: 1, title: 'Newspoint', content: 'Newspoint is a website template for everything news related. Use it for online publications of any type, be it an online magazine or a compelling blog. Three home styles, three headers, eight color presets and many other inner pages all come with Newspoint. The package is rich with features, using the modern technologies to make your sites responsive and load at the speed of lightning. It is an HTML5 and Bootstrap 4 template after all. Meaning, using, editing and maintaining Newspoint will also be a piece of cake.'}, 
            {id: 2, title: 'Quadra', content: 'In the majority of cases, every website template has an option to expand it with a blog. Or even use the blog section individually. That especially applies to the multi-purpose website templates, like Quadra. Not only does it have numerous front pages for businesses of many niches, Quadra is also entirely blogging ready. By the way, Quadra has over seventy one- and multi-page demos available for you to take to your advantage.'}
        ];
  }

  ngOnInit() {
  }

}
interface Posts {
    id: number;
    title: string;
    content: string;
}
