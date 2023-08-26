import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from '../store/store';
import { DecreamentAction, IncreamentAction } from '../store/actions/counter.action';
import { nSelector } from '../store/selectors/counter.selector';

@Component({
  selector: 'app-examble-calculate',
  templateUrl: './examble-calculate.component.html',
  styleUrls: ['./examble-calculate.component.scss']
})
export class ExambleCalculateComponent {
  count:number = 0;
  constructor(private store: Store<StoreInterface>) {
    this.store.select(nSelector).subscribe(data => this.count = data)
  }

  increase(){
    this.store.dispatch(new IncreamentAction(1));
  }
  decrease(){
    this.store.dispatch(new DecreamentAction(1));
  }

}
