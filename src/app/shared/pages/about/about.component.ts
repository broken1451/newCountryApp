import { Component, EnvironmentInjector, Input, OnInit, booleanAttribute, inject, numberAttribute, runInInjectionContext } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit  {

  // private readonly injector = inject(EnvironmentInjector)
  // private readonly component = new Observable<string>()


  ngOnInit(): void {
    // controlar el error de injection context de dependencias
    // runInInjectionContext(this.injector, () => {
    //   const title = toSignal(this.component)
    // })
  }

  // @Input({transform}) title!: string;

}
