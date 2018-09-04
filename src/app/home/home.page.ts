import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items:string[] = ['dogs', 'cats', 'birds', 'fishes', 'emus'];

  public remove(item:string){
    console.log("reomove: ", item)
  }

  public reorder(ev){
    const {from, to} = ev.detail;
    const log = `${this.items[from]} moved to position ${to}: `;
    this.items.splice(to, 0, this.items.splice(from, 1)[0]);
    console.log(  log, this.items )

  }

  public delete(o, item) {
    this.close(o, item)
    this.items = this.items.filter( v=>v!=item)
    this.remove(item)
  }

  public close(o, item){
    const el = o.currentTarget.closest('ion-item-sliding');
    el.close()
    console.log("Close:", item)
  }
}
