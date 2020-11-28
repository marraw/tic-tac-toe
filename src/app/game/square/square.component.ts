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
  showOutline(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      this.square.nativeElement.classList.add('square--tabfocus');
    }
  }
  @HostListener('mousedown', ['$event'])
  hideOutline() {
    this.square.nativeElement.classList.remove('square--tabfocus');
    this.square.nativeElement.classList.remove('square--hover-button');
  }
  @HostListener('mouseover', ['$event'])
  growButton() {
    this.square.nativeElement.classList.add('square--hover-button');
  }
  @HostListener('mouseout', ['$event'])
  shrinkBurron() {
    this.square.nativeElement.classList.remove('square--hover-button');
  }

  constructor() {}

  ngOnInit(): void {}
}
