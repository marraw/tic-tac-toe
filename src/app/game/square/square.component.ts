import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  @Input() value?: string;
  @ViewChild('square') square!: ElementRef;

  @HostListener('window:keydown', ['$event'])
  handleTab(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      this.square.nativeElement.classList.add('square--tabfocus');
    }
  }
  @HostListener('document:click', ['$event'])
  hideOutline() {
    this.square.nativeElement.classList.remove('square--tabfocus');
  }

  constructor() {}

  ngOnInit(): void {}
}
