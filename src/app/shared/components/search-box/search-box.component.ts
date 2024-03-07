import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  @Input({required: true}) placeholder!: string;
  @Output() onValue: EventEmitter<string> = new EventEmitter();

  private debouncer: Subject<string> = new Subject<string>();
  @Output() onDebouncer: EventEmitter<string> = new EventEmitter();
  private debouncerSubscription!: Subscription;
  @Input() initialValue: string = '';

  constructor() { }

  ngOnInit(): void {
   this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe( value => {
        // this.onValue.emit(value);
        // console.log('debouncer value', value)
        this.onDebouncer.emit(value);
      });
  }

  ngOnDestroy(): void {
    // this.debouncer.unsubscribe();
    this.debouncerSubscription.unsubscribe();
  }

  search( term: string) {
    if (term.length === 0) return;
    term = term.charAt(0).toUpperCase() + term.slice(1);
    this.onValue.emit(term);
  }

  onKeyPress(term: string){
    if (term.length === 0) return;
    this.debouncer.next(term);
  }

}
