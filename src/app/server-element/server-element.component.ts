import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Native, None
})
export class ServerElementComponent implements 
                                    OnInit,  
                                    OnChanges, 
                                    DoCheck, 
                                    AfterContentInit, 
                                    AfterContentChecked,
                                    AfterViewInit,
                                    AfterViewChecked,
                                    OnDestroy {

  // defining a type
  @Input('srvElement') element: { type: string, name: string, content: string, location: string};
  @Input() osName: string;
  
  // this will only be accessibel until ngAfterViewInit is called
  @ViewChild('headingLocalReference') headingLocalReference: ElementRef;
  
  // this will only be accessibel until ngAfterContentInit is called
  @ContentChild('additionalContentLocalReference') additionalContentLocalReference: ElementRef;

  constructor() { 
    console.log('====> constructor called!')
  }

  ngOnInit() {
    console.log('====> ngOnInit called!')
    console.log('====> headingLocalReference in ngOnInit: ' + this.headingLocalReference.nativeElement.textContent)
    console.log('====> additionalContentLocalReference in ngOnInit: ' + this.additionalContentLocalReference.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('====> ngOnChanges called!')
    console.log(changes)
  }

  ngDoCheck(){
    console.log('====> ngDoCheck called!')
  }

  ngAfterContentInit(){
    console.log('====> ngAfterContentInit called!')
    console.log('====> additionalContentLocalReference in ngAfterContentInit: ' + this.additionalContentLocalReference.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('====> ngAfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.log('====> ngAfterViewInit called!')
    console.log('====> headingLocalReference in ngAfterViewInit: ' + this.headingLocalReference.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('====> ngAfterViewChecked called!')
    console.log('====> headingLocalReference in ngAfterViewChecked: ' + this.headingLocalReference.nativeElement.textContent)
  }

  ngOnDestroy(){
    console.log('====> ngOnDestroy called!')
  }

}
