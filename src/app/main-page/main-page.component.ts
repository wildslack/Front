import { Component, OnInit, Renderer2 } from '@angular/core';
import { ChannelService } from '../shared/channel.service';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Channel } from '../shared/channel.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent implements OnInit {
  channel = false;
  constructor(private renderer: Renderer2, private channelService: ChannelService, private userService: UserService) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'nooverflowy');
    this.userService.getCurrentUser().subscribe((user: User) => {
      this.channelService.findLast(user.idUser).subscribe((channel: Channel) => {
        this.channelService.updateCurrentChan(channel);
        this.channel = true;
      });

    });
  }

}
