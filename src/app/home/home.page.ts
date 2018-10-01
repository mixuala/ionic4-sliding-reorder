import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  ngOnInit() {
    this.subject.next(this.animals);
    this.carSubject.next(this.cars);
    this.activate('1');
  }

  show:string;

  animals:string[] = ['dog', 'cat', 'fish', 'bird'];
  subject:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  animals$:Observable<string[]> = this.subject;

  cars:any[] = [{label:'audi'}, {label:'bmw'}, {label:'ford'}, {label:'tesla'}];
  carSubject:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cars$:Observable<string[]> = this.carSubject;

  animalsRemove(o:any){
    let found = this.animals.findIndex(item=>item==o);
    if (~found) this.animals.splice(found,1);
    this.subject.next(this.animals);
  }
  carsRemove(o:any) {
    o.hide=true;
    this.carSubject.next(this.cars.slice());
  }

  activate(v:string){
    Object.keys(this.toggle.disabled).forEach( (k:string)=>{this.toggle.disabled[k]=v!=k});
    this.show = v;
  }

  toggle:any = {
    disabled:{
      '1':false,
      '2':true,
      '3':true,
    },
  }



  public items:string[] = ['dogs', 'cats', 'birds', 'fishes', 'emus'];

  public remove(item:string){
    console.log("remove: ", item)
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
